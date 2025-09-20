<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import * as XLSX from "xlsx";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Card from "primevue/card";
import Tag from "primevue/tag";
import FileUpload from "primevue/fileupload";
import ProgressBar from "primevue/progressbar";
import { useClipboard } from "@vueuse/core";
import { useToast, POSITION } from "vue-toastification";

// onMounted(() => {
//   window.location.href = "/saed-web-page/indextest.html";
// });

interface Empleado {
  id: string;
  nombre: string;
  minutos: number;
  horas: number;
  psicotecnicos: number;
  instrucciones: number;
  visitas: number;
  cirugias: number;
  inspecciones: number;
  interes: "Sí" | "No";
  salario: number;
  detalle: string;
  label: string;
}

const empleados = ref<Empleado[]>([]);
const { copy } = useClipboard();
const toast = useToast();
const isCalculating = ref(false);
const calculationProgress = ref(0);
const showProgress = ref(false);
const isUploading = ref(false);

const LS_KEY = "empleados_labels";

function cargarLabelsGuardados(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || "{}");
  } catch {
    return {};
  }
}

function guardarLabels(labels: Record<string, string>) {
  localStorage.setItem(LS_KEY, JSON.stringify(labels));
}

const totalNomina = computed(() => {
  return empleados.value.reduce((acc, e) => acc + (e.salario || 0), 0);
});

async function onFileUpload(event: any) {
  const file = event.files[0];
  if (!file) return;

  isUploading.value = true;

  try {
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data, { type: "array" });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const rawJson = XLSX.utils.sheet_to_json<any>(worksheet, { defval: "" });

    const labelsGuardados = cargarLabelsGuardados();

    empleados.value = rawJson.map((row) => {
      const nombre = row["Nombre"] || row["nombre"] || "Desconocido";
      const id = row["ID de Usuario"] || row["id"] || "";
      const rawTiempo = String(
        row["Tiempo Total (min)"] ?? row["minutos"] ?? "",
      ).trim();

      let minutos = 0;
      if (rawTiempo.endsWith("h")) {
        minutos = parseFloat(rawTiempo.replace("h", "").replace(",", ".")) * 60;
      } else {
        minutos = parseFloat(rawTiempo.replace(",", "."));
      }

      const horas = Math.round(minutos / 60);

      return {
        id: String(id),
        nombre: String(nombre),
        minutos: isNaN(minutos) ? 0 : minutos,
        horas: isNaN(horas) ? 0 : horas,
        psicotecnicos: 0,
        instrucciones: 0,
        visitas: 0,
        cirugias: 0,
        inspecciones: 0,
        interes: "No" as "Sí" | "No",
        salario: 0,
        detalle: "",
        label: labelsGuardados[id] || "",
      };
    });

    toast.success("Archivo cargado correctamente", {
      position: POSITION.BOTTOM_RIGHT,
    });
  } catch (error) {
    toast.error("Error al procesar el archivo", {
      position: POSITION.BOTTOM_RIGHT,
    });
  } finally {
    isUploading.value = false;
  }
}

async function calcularSalarios() {
  if (empleados.value.length === 0) {
    toast.warning("No hay empleados cargados", {
      position: POSITION.BOTTOM_RIGHT,
    });
    return;
  }

  isCalculating.value = true;
  showProgress.value = true;
  calculationProgress.value = 0;

  const tarifaInteres = 1300;
  const tarifaNoInteres = 900;
  const tarifaDepto = 2500;

  const totalEmpleados = empleados.value.length;

  for (let i = 0; i < totalEmpleados; i++) {
    await new Promise((resolve) => setTimeout(resolve, 50));

    const emp = empleados.value[i];
    const precioHora = emp.interes === "Sí" ? tarifaInteres : tarifaNoInteres;
    const horasTotal = emp.horas * precioHora;

    const deptoCount =
      emp.psicotecnicos +
      emp.instrucciones +
      emp.visitas +
      emp.cirugias +
      emp.inspecciones;

    const deptoTotal = deptoCount * tarifaDepto;
    const salario = horasTotal + deptoTotal;

    const displayName =
      emp.label && emp.label.trim() !== "" ? emp.label : emp.nombre;

    const detalle = `💸${displayName} (${emp.horas}h): ${emp.horas} * ${precioHora} + ${tarifaDepto} * ${deptoCount} = $${salario}`;
    empleados.value[i] = { ...emp, salario, detalle };

    calculationProgress.value = Math.round(((i + 1) / totalEmpleados) * 100);
  }

  guardarLabels(
    Object.fromEntries(empleados.value.map((e) => [e.id, e.label])),
  );

  calculationProgress.value = 100;
  isCalculating.value = false;

  setTimeout(() => {
    showProgress.value = false;
  }, 800);

  toast.success(`Salarios calculados para ${totalEmpleados} empleados`, {
    position: POSITION.BOTTOM_RIGHT,
  });
}

async function copiarResultados() {
  if (empleados.value.length === 0) {
    toast.warning("No hay nada para copiar", {
      position: POSITION.BOTTOM_RIGHT,
    });
    return;
  }

  const tarifaInteres = 1300;
  const tarifaNoInteres = 900;
  const tarifaDepto = 2500;

  const fmt = (n: number) => Math.round(n).toString();

  function detectarEstado(e: Empleado) {
    const totalDeptos =
      e.psicotecnicos +
      e.instrucciones +
      e.visitas +
      e.cirugias +
      e.inspecciones;

    if (e.horas > 0) return `${e.horas}h`;
    if (totalDeptos > 0) return `${e.horas}h`;
    return "Ausencia";
  }

  const bloqueHoras = empleados.value
    .map((e) => {
      const nombre = e.label && e.label.trim() !== "" ? e.label : e.nombre;
      const estado = detectarEstado(e);
      return `🕐 ${nombre} - ${estado}`;
    })
    .join("\n");

  function secciónDepto(titulo: string, prop: keyof Empleado) {
    const lines = empleados.value
      .filter((e) => (e as any)[prop] > 0)
      .map((e) => {
        const nombre = e.label && e.label.trim() !== "" ? e.label : e.nombre;
        return `${nombre} - ${(e as any)[prop]}`;
      })
      .join("\n");
    return lines ? `\n**${titulo}:**\n${lines}` : "";
  }

  const bloquePsicotecnicos = secciónDepto("Psicotécnicos", "psicotecnicos");
  const bloqueInstrucciones = secciónDepto("Instrucciones", "instrucciones");
  const bloqueVisitas = secciónDepto("Visitas Psicológicas", "visitas");
  const bloqueCirugias = secciónDepto("Cirugías Estéticas", "cirugias");
  const bloqueInspecciones = secciónDepto("Inspecciones", "inspecciones");

  const bloqueDeptosArr = [
    bloquePsicotecnicos,
    bloqueInstrucciones,
    bloqueVisitas,
    bloqueCirugias,
    bloqueInspecciones,
  ].filter(Boolean);

  const bloqueDeptos =
    bloqueDeptosArr.length > 0 ? bloqueDeptosArr.join("\n") : "";

  const bloqueSalarios = empleados.value
    .map((e) => {
      const nombre = e.label && e.label.trim() !== "" ? e.label : e.nombre;

      const precioHora = e.interes === "Sí" ? tarifaInteres : tarifaNoInteres;
      const horasTotal = e.horas * precioHora;
      const deptoCount =
        e.psicotecnicos +
        e.instrucciones +
        e.visitas +
        e.cirugias +
        e.inspecciones;
      const deptoTotal = deptoCount * tarifaDepto;
      const salario = horasTotal + deptoTotal;

      if (deptoCount > 0) {
        return `💸  ${nombre} - ${e.horas}h x ${fmt(precioHora)}$ = ${fmt(
          horasTotal,
        )}$ + (${deptoCount}x ${fmt(tarifaDepto)}$) = **${fmt(salario)}$**`;
      } else {
        return `💸  ${nombre} - ${e.horas}h x ${fmt(precioHora)}$ = **${fmt(
          salario,
        )}$**`;
      }
    })
    .join("\n");

  const totalFormatted = `${fmt(totalNomina.value)}$`;

  const resultado =
    bloqueHoras +
    (bloqueDeptos ? `\n${bloqueDeptos}` : "") +
    `\n\n${bloqueSalarios}\n\nTOTAL: ${totalFormatted}`;

  await copy(resultado);
  toast.info("Resultados copiados al portapapeles", {
    position: POSITION.BOTTOM_RIGHT,
  });
}

watch(
  empleados,
  (val) => {
    const labels = Object.fromEntries(val.map((e) => [e.id, e.label]));
    guardarLabels(labels);
  },
  { deep: true },
);

onMounted(() => {
  document.body.classList.add("dark-theme");
});
</script>

<template>
  <div class="salary-calculator">
    <Toast />

    <div class="header">
      <div class="header-content">
        <h1 class="title">
          <span class="icon">💰</span>
          Gestión de Salarios
        </h1>
        <p class="subtitle">Sistema de cálculo de nómina avanzado</p>
      </div>
    </div>

    <div class="main-content">
      <Card class="control-panel">
        <template #content>
          <div class="upload-section">
            <div class="upload-area" :class="{ uploading: isUploading }">
              <FileUpload
                mode="basic"
                accept=".xlsx,.xls"
                customUpload
                :auto="true"
                chooseLabel="📊 Subir Excel"
                class="custom-upload"
                @uploader="onFileUpload"
                :disabled="isUploading"
              />
              <div v-if="isUploading" class="upload-overlay">
                <i class="pi pi-spin pi-spinner"></i>
                <span>Procesando archivo...</span>
              </div>
            </div>
          </div>

          <div class="actions">
            <Button
              :label="isCalculating ? 'Calculando...' : 'Calcular Salarios'"
              icon="pi pi-calculator"
              class="calculate-btn"
              :loading="isCalculating"
              :disabled="empleados.length === 0 || isCalculating"
              @click="calcularSalarios"
            />
            <Button
              label="Copiar Resultados"
              icon="pi pi-copy"
              severity="secondary"
              class="copy-btn"
              :disabled="totalNomina === 0"
              @click="copiarResultados"
            />
          </div>

          <ProgressBar
            v-if="showProgress"
            :value="calculationProgress"
            class="progress-bar smooth-progress"
          />

          <div v-if="totalNomina > 0" class="total-display">
            <span class="total-label">Total nómina</span>
            <span class="total-value"
              >$ {{ totalNomina.toLocaleString() }}</span
            >
          </div>
        </template>
      </Card>

      <Card v-if="empleados.length > 0" class="employees-table">
        <template #title>
          <div class="table-header">
            <span>Empleados</span>
            <Tag
              :value="`${empleados.length} empleados`"
              class="employee-count"
            />
          </div>
        </template>
        <template #content>
          <DataTable
            :value="empleados"
            dataKey="id"
            responsiveLayout="scroll"
            stripedRows
            class="custom-table"
            :paginator="empleados.length > 8"
            :rows="8"
            scrollable
            scrollHeight="600px"
          >
            <Column
              field="id"
              header="ID"
              class="id-column"
              :style="{ minWidth: '80px' }"
            />
            <Column
              field="nombre"
              header="Nombre"
              class="name-column"
              :style="{ minWidth: '150px' }"
            />
            <Column header="Label" class="label-column">
              <template #body="{ data }">
                <InputText
                  v-model="data.label"
                  placeholder="Etiqueta personalizada"
                  class="custom-input"
                  :style="{ minWidth: '120px' }"
                />
              </template>
            </Column>
            <Column
              field="horas"
              header="Horas"
              sortable
              class="hours-column"
              :style="{ minWidth: '80px' }"
            />
            <Column header="Psicotécnicos" class="dept-column">
              <template #body="{ data }">
                <InputNumber
                  v-model="data.psicotecnicos"
                  :min="0"
                  class="custom-number"
                  :style="{ width: '70px' }"
                />
              </template>
            </Column>
            <Column header="Instrucciones" class="dept-column">
              <template #body="{ data }">
                <InputNumber
                  v-model="data.instrucciones"
                  :min="0"
                  class="custom-number"
                  :style="{ width: '70px' }"
                />
              </template>
            </Column>
            <Column header="Visitas Psicológicas" class="dept-column">
              <template #body="{ data }">
                <InputNumber
                  v-model="data.visitas"
                  :min="0"
                  class="custom-number"
                  :style="{ width: '70px' }"
                />
              </template>
            </Column>
            <Column header="Cirugías Estéticas" class="dept-column">
              <template #body="{ data }">
                <InputNumber
                  v-model="data.cirugias"
                  :min="0"
                  class="custom-number"
                  :style="{ width: '70px' }"
                />
              </template>
            </Column>
            <Column header="Inspecciones" class="dept-column">
              <template #body="{ data }">
                <InputNumber
                  v-model="data.inspecciones"
                  :min="0"
                  class="custom-number"
                  :style="{ width: '70px' }"
                />
              </template>
            </Column>
            <Column header="Interés" class="interest-column">
              <template #body="{ data }">
                <Dropdown
                  v-model="data.interes"
                  :options="['Sí', 'No']"
                  placeholder="Seleccionar"
                  class="custom-dropdown"
                />
              </template>
            </Column>
            <Column
              header="Detalle"
              class="detail-column"
              :style="{ minWidth: '200px' }"
            >
              <template #body="{ data }">
                <span class="detail-text">{{ data.detalle }}</span>
              </template>
            </Column>
            <Column
              header="Salario"
              class="salary-column"
              :style="{ minWidth: '120px' }"
            >
              <template #body="{ data }">
                <Tag
                  :value="`$ ${data.salario.toLocaleString()}`"
                  :severity="
                    data.salario > 50000
                      ? 'success'
                      : data.salario > 20000
                        ? 'info'
                        : 'warning'
                  "
                  class="salary-tag"
                />
              </template>
            </Column>
          </DataTable>
        </template>
      </Card>

      <div v-else class="empty-state">
        <div class="empty-content">
          <i class="pi pi-file-excel empty-icon"></i>
          <h3>No hay datos cargados</h3>
          <p>Sube un archivo Excel para comenzar a gestionar los salarios</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
html,
body,
#q-app {
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%) !important;
}

.salary-calculator {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  color: #e5e5e5;
}

.header {
  background: linear-gradient(135deg, #1a1a1a 0%, #262626 100%);
  border-bottom: 1px solid #404040;
  padding: 2rem 0;
}

.header-content {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.icon {
  font-size: 2.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #a3a3a3;
  margin: 0.5rem 0 0 0;
  font-weight: 300;
}

.smooth-progress .p-progressbar-value {
  transition: width 0.3s ease-in-out;
}

.main-content {
  max-width: 95%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.control-panel {
  background: #1a1a1a !important;
  border: 1px solid #404040 !important;
  border-radius: 1rem !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
}

.upload-section {
  margin-bottom: 1.5rem;
}

.upload-area {
  position: relative;
  padding: 1rem;
  border: 2px dashed #404040;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  text-align: center;
  background: #0f0f0f;
}

.upload-area:hover {
  border-color: #3b82f6;
  background: #1a1a1a;
}

.upload-area.uploading {
  border-color: #3b82f6;
  background: #1a1a2a;
}

.upload-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: rgba(26, 26, 26, 0.9);
  border-radius: 0.75rem;
  color: #3b82f6;
  font-weight: 500;
}

.actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.calculate-btn {
  flex: 1;
  min-width: 200px;
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%) !important;
  border: none !important;
  padding: 0.75rem 1.5rem !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3) !important;
}

.calculate-btn:hover:not(:disabled) {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4) !important;
}

.calculate-btn:disabled {
  opacity: 0.6 !important;
  transform: none !important;
}

.copy-btn {
  flex: 1;
  min-width: 180px;
  background: #262626 !important;
  border: 1px solid #404040 !important;
  color: #e5e5e5 !important;
  transition: all 0.3s ease !important;
}

.copy-btn:hover:not(:disabled) {
  background: #404040 !important;
  border-color: #525252 !important;
  transform: translateY(-1px);
}

.progress-bar {
  margin: 1rem 0;
  height: 6px;
  background: #262626 !important;
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar :deep(.p-progressbar-value) {
  background: linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%) !important;
}

.total-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #1a1a2a 0%, #262640 100%);
  border-radius: 0.75rem;
  border: 1px solid #404060;
  margin-top: 1rem;
}

.total-label {
  font-size: 1.2rem;
  color: #a3a3a3;
  font-weight: 500;
}

.total-value {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.employees-table {
  background: #1a1a1a !important;
  border: 1px solid #404040 !important;
  border-radius: 1rem !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
}

.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.employee-count {
  background: #262626 !important;
  color: #3b82f6 !important;
  border: 1px solid #404040 !important;
}

.custom-table {
  background: transparent !important;
  overflow-x: auto;
}

.custom-table :deep(.p-datatable-header) {
  background: #262626 !important;
  border: 1px solid #404040 !important;
  color: #e5e5e5 !important;
}

.custom-table :deep(.p-datatable-thead > tr > th) {
  background: #262626 !important;
  border: 1px solid #404040 !important;
  color: #e5e5e5 !important;
  font-weight: 600;
  padding: 0.75rem 0.5rem;
  white-space: nowrap;
  font-size: 0.875rem;
}

.custom-table :deep(.p-datatable-tbody > tr) {
  background: #1a1a1a !important;
  border: 1px solid #404040 !important;
  transition: all 0.2s ease;
}

.custom-table :deep(.p-datatable-tbody > tr:hover) {
  background: #262626 !important;
}

.custom-table :deep(.p-datatable-tbody > tr > td) {
  border: 1px solid #404040 !important;
  color: #e5e5e5 !important;
  padding: 0.75rem 0.5rem;
  vertical-align: middle;
}

.custom-table :deep(.p-datatable-scrollable-wrapper) {
  border-radius: 0.75rem;
  overflow: hidden;
}

.custom-table :deep(.p-datatable-scrollable-body) {
  border-radius: 0 0 0.75rem 0.75rem;
}

.custom-input {
  background: #262626 !important;
  border: 1px solid #404040 !important;
  color: #e5e5e5 !important;
  border-radius: 0.5rem !important;
  padding: 0.5rem !important;
  width: 90% !important;
  font-size: 0.875rem !important;
}

.custom-input:focus {
  border-color: #3b82f6 !important;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2) !important;
}

.custom-number {
  width: 50% !important;
}

.custom-number :deep(input) {
  background: #262626 !important;
  border: 1px solid #404040 !important;
  color: #e5e5e5 !important;
  border-radius: 0.5rem !important;
  text-align: center;
  font-size: 0.875rem !important;
  padding: 0.4rem !important;
}

.custom-dropdown {
  min-width: 100px;
}

.detail-text {
  font-family: "Monaco", "Menlo", monospace;
  font-size: 0.8rem;
  color: #a3a3a3;
  line-height: 1.4;
  word-break: break-word;
  max-width: 200px;
  display: block;
}

.salary-tag {
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  white-space: nowrap;
}

.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background: #1a1a1a;
  border-radius: 1rem;
  border: 1px solid #404040;
}

.empty-content {
  text-align: center;
  color: #737373;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #404040;
}

.empty-content h3 {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  color: #a3a3a3;
}

.empty-content p {
  font-size: 1rem;
  margin: 0;
  color: #737373;
}

/* Responsive design */
@media (max-width: 768px) {
  .title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  .actions {
    flex-direction: column;
  }

  .calculate-btn,
  .copy-btn {
    min-width: 100%;
  }

  .total-display {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .table-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .main-content {
    padding: 1rem;
  }

  .custom-table :deep(.p-datatable-thead > tr > th) {
    padding: 0.5rem 0.25rem;
    font-size: 0.8rem;
  }

  .custom-table :deep(.p-datatable-tbody > tr > td) {
    padding: 0.5rem 0.25rem;
  }

  .custom-input {
    font-size: 0.8rem !important;
    padding: 0.4rem !important;
  }

  .custom-number {
    width: 60px;
  }

  .custom-number :deep(input) {
    font-size: 0.8rem !important;
    padding: 0.3rem !important;
  }

  .custom-dropdown :deep(.p-dropdown) {
    min-width: 80px;
    background: #262626 !important;
  }

  .custom-dropdown :deep(.p-dropdown) {
    font-size: 0.8rem !important;
  }

  .custom-dropdown :deep(.p-dropdown-label) {
    padding: 0.3rem 0.5rem !important;
  }

  .detail-text {
    font-size: 0.75rem;
    max-width: 150px;
  }

  .salary-tag {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .custom-table :deep(.p-datatable-thead > tr > th) {
    padding: 0.4rem 0.2rem;
    font-size: 0.75rem;
  }

  .custom-table :deep(.p-datatable-tbody > tr > td) {
    padding: 0.4rem 0.2rem;
  }

  .custom-number {
    width: 50px;
  }

  .detail-text {
    font-size: 0.7rem;
    max-width: 120px;
  }
}

/* Animaciones */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.control-panel,
.employees-table {
  animation: fadeIn 0.6s ease-out;
}

.employees-table {
  animation-delay: 0.2s;
}

.custom-table :deep(.p-paginator) {
  background: #262626 !important;
  border: 1px solid #404040 !important;
  border-radius: 0.75rem !important;
  padding: 0.25rem 0.5rem !important;
  color: #e5e5e5 !important;
  font-size: 0.875rem;
}

.custom-table :deep(.p-paginator .p-paginator-prev),
.custom-table :deep(.p-paginator .p-paginator-next),
.custom-table :deep(.p-paginator .p-paginator-page) {
  background: #1a1a1a !important;
  border: 1px solid #404040 !important;
  color: #e5e5e5 !important;
  border-radius: 0.5rem !important;
  margin: 0 2px;
  width: 2rem;
  height: 2rem;
}

.custom-table :deep(.p-paginator .p-paginator-prev:hover),
.custom-table :deep(.p-paginator .p-paginator-next:hover),
.custom-table :deep(.p-paginator .p-paginator-page:hover) {
  background: #3b82f6 !important;
  color: #fff !important;
  border-color: #3b82f6 !important;
}

.custom-table :deep(.p-tag) {
  background: #262626 !important;
  border: 1px solid #404040 !important;
  color: #3b82f6 !important;
  border-radius: 0.5rem !important;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  font-size: 0.875rem;
}

.custom-dropdown :deep(.p-dropdown) {
  background: #262626 !important;
  border: 1px solid #404040 !important;
  color: #e5e5e5 !important;
  border-radius: 0.5rem !important;
}

.custom-dropdown :deep(.p-dropdown-label) {
  padding: 0.4rem 0.75rem !important;
  color: #e5e5e5 !important;
}

.p-dropdown-items {
  background: #1a1a1a !important;
  border: 1px solid #404040 !important;
  border-radius: 0.5rem !important;
  color: #e5e5e5 !important;
}

.p-dropdown-item {
  color: #e5e5e5 !important;
}

.p-dropdown-item.p-highlight {
  background: #3b82f6 !important;
  color: #fff !important;
}
</style>
