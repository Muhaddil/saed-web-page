<script setup lang="ts">
import { ref, computed, watch } from "vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";

interface Trabajador {
  id: number;
  nombre: string;
  posicion: string;
  foto: string;
  department: "sams" | "safd";
  favorite: boolean;
  placa: string;
  antiguedad?: string;
  grade?: number;
}

const leftDrawerOpen = ref(false);
const language = ref("es");
const searchQuery = ref("");
const showFavorites = ref(false);
const selectedDepartment = ref<"sams" | "safd">("sams");

const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "{}");
const trabajadores = ref<Trabajador[]>([
  // SAMS
  {
    id: 1,
    nombre: "Shila Sánchez",
    posicion: "Directora Adjunta",
    foto: "images/employees/Shila.png",
    department: "sams",
    placa: "MED-2937",
    favorite: false,
    grade: 18,
  },
  {
    id: 2,
    nombre: "Andres Fernandez",
    posicion: "Auxiliar",
    foto: "images/NotAvailable.webp",
    department: "sams",
    placa: "MED-4220",
    favorite: false,
    grade: 2,
  },
  {
    id: 3,
    nombre: "Ethan Castillo",
    posicion: "Doctor",
    foto: "images/NotAvailable.webp",
    department: "sams",
    placa: "MED-XXXX",
    favorite: false,
    grade: 5,
  },
  {
    id: 5,
    nombre: "Rodrigo Quintata",
    posicion: "Enfermero",
    foto: "images/employees/Rodrigo.png",
    department: "sams",
    placa: "MED-2764",
    favorite: false,
    grade: 3,
  },
  {
    id: 6,
    nombre: "Manolo Trabuko",
    posicion: "Especialista",
    foto: "images/NotAvailable.webp",
    department: "sams",
    placa: "MED-2406",
    favorite: false,
    grade: 14,
  },
  {
    id: 8,
    nombre: "Sergio Martínez",
    posicion: "Director",
    foto: "images/employees/Sergio.png",
    department: "sams",
    placa: "MED-4581",
    favorite: false,
    grade: 19,
  },
  {
    id: 9,
    nombre: "Levi Whitlock",
    posicion: "Supervisor General",
    foto: "images/NotAvailable.webp",
    department: "sams",
    placa: "MED-6255",
    favorite: false,
    grade: 16,
  },
  {
    id: 10,
    nombre: "Antonio Morales",
    posicion: "Auxiliar",
    foto: "images/NotAvailable.webp",
    department: "sams",
    placa: "MED-6255",
    favorite: false,
    grade: 2,
  },
  {
    id: 11,
    nombre: "Alvaro Martin",
    posicion: "Enfermero",
    foto: "images/employees/Alvaro.png",
    department: "sams",
    placa: "MED-6255",
    favorite: false,
    grade: 3,
  },
  {
    id: 12,
    nombre: "Atenea Tylor",
    posicion: "Auxiliar",
    foto: "images/NotAvailable.webp",
    department: "sams",
    placa: "MED-6255",
    favorite: false,
    grade: 2,
  },
  {
    id: 13,
    nombre: "Manolo Gimenez",
    posicion: "Auxiliar",
    foto: "images/NotAvailable.webp",
    department: "sams",
    placa: "MED-6255",
    favorite: false,
    grade: 2,
  },
  {
    id: 14,
    nombre: "Carlos Darling",
    posicion: "Auxiliar",
    foto: "images/NotAvailable.webp",
    department: "sams",
    placa: "MED-6255",
    favorite: false,
    grade: 2,
  },
  {
    id: 15,
    nombre: "Richi Oveja",
    posicion: "Auxiliar",
    foto: "images/NotAvailable.webp",
    department: "sams",
    placa: "MED-6255",
    favorite: false,
    grade: 2,
  },

  // SAFD
  {
    id: 101,
    nombre: "Sergio Martínez",
    posicion: "Director",
    foto: "images/employees/Sergio2.png",
    department: "safd",
    placa: "FIRE-4581",
    favorite: false,
  },
  {
    id: 103,
    nombre: "Johnn Nolan",
    posicion: "Jefe Adjunto",
    foto: "images/fotosemana/fotosemana10.png",
    department: "safd",
    placa: "FIRE-8998",
    favorite: false,
  },
]);

const filteredTrabajadores = computed(() => {
  let filtered = trabajadores.value.filter(
    (t) =>
      t.department === selectedDepartment.value &&
      (showFavorites.value ? t.favorite : true),
  );

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (t) =>
        t.nombre.toLowerCase().includes(query) ||
        t.posicion.toLowerCase().includes(query) ||
        t.placa.toLowerCase().includes(query),
    );
  }

  filtered = filtered.sort((a, b) => (b.grade || 0) - (a.grade || 0));

  return filtered;
});

function switchLanguage() {
  language.value = language.value === "es" ? "en" : "es";
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const toggleFavorite = (trabajador: Trabajador) => {
  trabajador.favorite = !trabajador.favorite;
};

watch(
  trabajadores,
  () => {
    const favorites = trabajadores.value.reduce(
      (acc, t) => {
        acc[t.id] = t.favorite;
        return acc;
      },
      {} as Record<number, boolean>,
    );
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },
  { deep: true },
);

trabajadores.value.forEach((t) => {
  if (savedFavorites[t.id] !== undefined) {
    t.favorite = savedFavorites[t.id];
  }
});

const modalVisible = ref(false);
const modalImage = ref("");

function openModal(imageSrc: string) {
  modalImage.value = imageSrc;
  modalVisible.value = true;
}

function closeModal() {
  modalVisible.value = false;
  modalImage.value = "";
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="/images/SAEDLogo.png" alt="SAED Logo" />
          </q-avatar>
          SAED - Personal Activo
        </q-toolbar-title>

        <a href="/saed-web-page/">
          <q-btn flat icon="fas fa-home" aria-label="Ir a inicio" />
        </a>

        <a href="https://muhaddil.github.io/404.html">
          <q-btn
            flat
            icon="fas fa-info-circle"
            aria-label="Información sobre SAED"
          />
        </a>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list>
          <a href="/saed-web-page/">
            <q-item clickable>
              <q-item-section class="item-row">
                <span>
                  <q-icon name="fas fa-info-circle" class="icon" />
                  Información General
                </span>
              </q-item-section>
            </q-item>
          </a>

          <a href="sams.html">
            <q-item clickable>
              <q-item-section class="item-row">
                <span>
                  <q-icon name="fas fa-hospital" class="icon" />
                  SAMS
                </span>
              </q-item-section>
            </q-item>
          </a>

          <a href="promotions.html">
            <q-item clickable>
              <q-item-section class="item-row">
                <span>
                  <q-icon name="fa-solid fa-file-contract" class="icon" />
                  Ascensos
                </span>
              </q-item-section>
            </q-item>
          </a>

          <q-item clickable disable>
            <q-item-section class="item-row">
              <span>
                <q-icon name="fa-solid fa-user" class="icon" />
                Personal
              </span>
            </q-item-section>
          </q-item>

          <a href="photoweek.html">
            <q-item clickable>
              <q-item-section class="item-row">
                <span>
                  <q-icon name="fa-solid fa-camera" class="icon" />
                  Foto de la Semana
                </span>
              </q-item-section>
            </q-item>
          </a>

          <a href="safd.html">
            <q-item clickable>
              <q-item-section class="item-row">
                <span>
                  <q-icon name="fas fa-fire" class="icon" />
                  SAFD
                </span>
              </q-item-section>
            </q-item>
          </a>

          <a href="faq.html">
            <q-item clickable>
              <q-item-section class="item-row">
                <span>
                  <q-icon name="fas fa-question-circle" class="icon" />
                  FAQ
                </span>
              </q-item-section>
            </q-item>
          </a>

          <a href="contact.html">
            <q-item clickable>
              <q-item-section class="item-row">
                <span>
                  <q-icon name="fas fa-phone" class="icon" />
                  Contacto
                </span>
              </q-item-section>
            </q-item>
          </a>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="76px" class="q-mb-sm">
            <img src="https://avatars.githubusercontent.com/u/151466679?v=4" />
          </q-avatar>
          <div class="text-weight-bold">San Andreas Emergency Department</div>
          <div>@muhaddil</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <q-page class="q-pa-md">
        <div class="q-mb-md flex justify-between">
          <ThemeSwitch />
          <q-btn
            @click="switchLanguage"
            :label="language === 'es' ? 'English' : 'Español'"
            color="secondary"
            icon="fas fa-language"
          />
        </div>

        <section id="personal">
          <h1>
            {{ language === "es" ? "Personal Activo" : "Active Personnel" }}
          </h1>

          <q-tabs
            v-model="selectedDepartment"
            inline-label
            class="text-primary q-mb-lg"
          >
            <q-tab
              name="sams"
              :label="language === 'es' ? 'Personal Médico' : 'Medical Staff'"
            />
            <q-tab
              name="safd"
              :label="
                language === 'es' ? 'Cuerpo de Bomberos' : 'Fire Department'
              "
            />
          </q-tabs>

          <q-input
            v-model="searchQuery"
            :placeholder="
              language === 'es' ? 'Buscar personal...' : 'Search staff...'
            "
            outlined
            class="q-mb-md"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>

          <div class="q-mb-md">
            <q-toggle
              v-model="showFavorites"
              :label="
                language === 'es'
                  ? 'Mostrar solo favoritos'
                  : 'Show favorites only'
              "
              color="primary"
            />
          </div>

          <div class="row q-col-gutter-md">
            <div
              v-for="trabajador in filteredTrabajadores"
              :key="trabajador.id"
              class="col-12 col-sm-6 col-md-4"
            >
              <q-card class="department-card" :class="trabajador.department">
                <q-card-section class="text-center">
                  <q-avatar size="120px" class="q-mb-sm">
                    <img
                      :src="trabajador.foto"
                      @click="openModal(trabajador.foto)"
                    />
                    <q-badge
                      v-if="trabajador.favorite"
                      floating
                      color="red"
                      icon="favorite"
                    />
                  </q-avatar>

                  <div class="text-h6">{{ trabajador.nombre }}</div>
                  <div class="text-subtitle1">{{ trabajador.posicion }}</div>
                  <div class="text-caption q-mt-xs">
                    {{ language === "es" ? "Placa:" : "Badge:" }}
                    {{ trabajador.placa }}
                  </div>
                  <div class="text-caption" v-if="trabajador.antiguedad">
                    {{ language === "es" ? "Antigüedad:" : "Seniority:" }}
                    {{ trabajador.antiguedad }}
                  </div>
                </q-card-section>

                <q-card-actions class="justify-center">
                  <q-btn
                    round
                    icon="favorite"
                    :color="trabajador.favorite ? 'red' : 'grey-5'"
                    @click="toggleFavorite(trabajador)"
                  />
                </q-card-actions>
              </q-card>
            </div>
          </div>

          <section
            id="form-image-container-full"
            class="form-image-container-full"
          >
            <q-dialog v-model="modalVisible" backdrop-filter="blur(6px)">
              <div class="form-image-container-full">
                <img :src="modalImage" class="full-image" />
                <q-btn
                  icon="close"
                  flat
                  round
                  class="close-btn"
                  @click="closeModal"
                />
              </div>
            </q-dialog>
          </section>
        </section>
      </q-page>
    </q-page-container>

    <q-footer elevated class="bg-dark text-white">
      <div class="q-pa-md text-center">
        <img src="/images/SAEDLogo.png" alt="SAED Logo" style="height: 40px" />
        <p class="q-mt-sm">
          {{
            language === "es"
              ? "Sistema de Administración de Emergencias del Estado de San Andreas"
              : "San Andreas Emergency Management System"
          }}
        </p>
      </div>
    </q-footer>
  </q-layout>
</template>

<style scoped lang="scss">
.drawer {
  margin-top: 5px;
  font-size: 1.1rem;
}

.icon {
  margin-right: 8px;
  font-size: 1.3rem;
}

.department-card {
  transition: transform 0.3s ease;
  border-left: 4px solid;

  &:hover {
    transform: translateY(-5px);
  }

  &.sams {
    border-color: #2196f3;
    .text-subtitle1 {
      color: #2196f3;
    }
  }

  &.safd {
    border-color: #f44336;
    .text-subtitle1 {
      color: #f44336;
    }
  }
}

.q-avatar img {
  border: 2px solid currentColor;
  padding: 2px;
}

.modal-card {
  max-width: 90%;
  max-height: 90%;
  position: relative;
  animation: fadeIn 0.5s ease;
}

.full-image {
  object-fit: contain;
  width: 100%;
  height: auto;
  transition: none;
  margin-top: 10px;
  display: block;
  border-radius: 35%;
}

.botonera {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.close-btn {
  position: absolute;
  top: 5%;
  right: 10%;
  background-color: rgba(255, 0, 0, 0.763);
  color: white;
  padding: 5px;
  border-radius: 50%;
}

.close-btn:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
