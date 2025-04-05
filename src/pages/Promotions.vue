<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue';

interface Ascenso {
  id: number;
  nombre: string;
  rango: string;
  foto: string;
  categoria: string;
  favorite: boolean;
  fecha: string;
}

const leftDrawerOpen = ref(false);
const language = ref('es');
const searchQuery = ref('');
const showFavorites = ref(false);

const allCategorias = ref<string[]>([
  '23/03/2025 - 05/04/2025', '08/03/2025 - 23/03/2025', '22/02/2025 - 08/03/2025', '09/02/2025 - 22/02/2025',
  '25/01/2025 - 09/02/2025', '11/01/2025 - 25/01/2025', '28/12/24 - 11/01/25',
  'Ascensos Extraordinarios', '14/12/2024 - 28/12/2024'
]);
const categorias = ref<string[]>([...allCategorias.value]);
const categoriaSeleccionada = ref<string>('');

const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '{}');
const ascensos = ref<Ascenso[]>([
  { id: 25, nombre: 'Ethan Castillo', rango: 'Paramédico', foto: 'images/NotAvailable.webp', categoria: '23/03/2025 - 05/04/2025', fecha: '05/04/2025', favorite: false },
  { id: 26, nombre: 'Aless Vannicelli', rango: 'Médico Experimentado', foto: 'images/NotAvailable.webp', categoria: '23/03/2025 - 05/04/2025', fecha: '05/04/2025', favorite: false },
  { id: 23, nombre: 'Ethan Castillo', rango: 'Enfermero Licenciado', foto: 'images/NotAvailable.webp', categoria: '08/03/2025 - 23/03/2025', fecha: '23/03/2025', favorite: false },
  { id: 24, nombre: 'Aless Vannicelli', rango: 'Médico', foto: 'images/NotAvailable.webp', categoria: '08/03/2025 - 23/03/2025', fecha: '23/03/2025', favorite: false },
  { id: 16, nombre: 'Nicole Blackwood', rango: 'Médica Experimentada', foto: 'images/employees/Nicole.png', categoria: '22/02/2025 - 08/03/2025', fecha: '08/03/2025', favorite: false },
  { id: 17, nombre: 'Alice Diangelis', rango: 'Supervisora General', foto: 'images/NotAvailable.webp', categoria: '22/02/2025 - 08/03/2025', fecha: '08/03/2025', favorite: false },
  { id: 18, nombre: 'Aless Vannicelli', rango: 'Paramédico', foto: 'images/NotAvailable.webp', categoria: '22/02/2025 - 08/03/2025', fecha: '08/03/2025', favorite: false },
  { id: 19, nombre: 'Manolo Trabuko', rango: 'Cirujano General', foto: 'images/NotAvailable.webp', categoria: '22/02/2025 - 08/03/2025', fecha: '08/03/2025', favorite: false },
  { id: 20, nombre: 'Ethan Castillo', rango: 'Enfermero', foto: 'images/NotAvailable.webp', categoria: '22/02/2025 - 08/03/2025', fecha: '08/03/2025', favorite: false },
  { id: 21, nombre: 'Finnegan Jefferson', rango: 'Enfermero', foto: 'images/NotAvailable.webp', categoria: '22/02/2025 - 08/03/2025', fecha: '08/03/2025', favorite: false },
  { id: 22, nombre: 'Pol Balaguer', rango: 'Enfermero Licenciado', foto: 'images/NotAvailable.webp', categoria: '22/02/2025 - 08/03/2025', fecha: '08/03/2025', favorite: false },
  { id: 14, nombre: 'Nicole Blackwood', rango: 'Médica', foto: 'images/employees/Nicole.png', categoria: '09/02/2025 - 22/02/2025', fecha: '22/02/2025', favorite: false },
  { id: 15, nombre: 'Enzo Fontana', rango: 'Enfermero Licencaido', foto: 'images/NotAvailable.webp', categoria: '09/02/2025 - 22/02/2025', fecha: '22/02/2025', favorite: false },
  { id: 12, nombre: 'Nicole Blackwood', rango: 'Paramédica', foto: 'images/employees/Nicole.png', categoria: '25/01/2025 - 09/02/2025', fecha: '09/02/2025', favorite: false },
  { id: 13, nombre: 'Manolo Trabuko', rango: 'Doctor experimentado', foto: 'images/NotAvailable.webp', categoria: '25/01/2025 - 09/02/2025', fecha: '09/02/2025', favorite: false },
  { id: 7, nombre: 'Nicole Blackwood', rango: 'Enfermera Licenciada', foto: 'images/employees/Nicole.png', categoria: '11/01/2025 - 25/01/2025', fecha: '25/01/2025', favorite: false },
  { id: 8, nombre: 'Mike Foden', rango: 'Enfermero Licenciado', foto: 'images/employees/Mike.png', categoria: '11/01/2025 - 25/01/2025', fecha: '25/01/2025', favorite: false },
  { id: 9, nombre: 'Antonio Sun', rango: 'Enfermero Licenciado', foto: 'images/NotAvailable.webp', categoria: '11/01/2025 - 25/01/2025', fecha: '25/01/2025', favorite: false },
  { id: 10, nombre: 'Manolo Trabuko', rango: 'Doctor', foto: 'images/NotAvailable.webp', categoria: '11/01/2025 - 25/01/2025', fecha: '25/01/2025', favorite: false },
  { id: 11, nombre: 'Noelia Rivas', rango: 'Enfermera', foto: 'images/NotAvailable.webp', categoria: '11/01/2025 - 25/01/2025', fecha: '25/01/2025', favorite: false },
  { id: 1, nombre: 'Shila Sanchéz', rango: 'Directora Adjunto / Recursos Humanos', foto: 'images/employees/Shila.png', categoria: 'Ascensos Extraordinarios', fecha: '04/01/2025', favorite: false },
  { id: 2, nombre: 'Mike Foden', rango: 'Enfermero', foto: 'images/employees/Mike.png', categoria: '14/12/24 - 28/12/2024', fecha: '28/12/2024', favorite: false },
  { id: 3, nombre: 'Lyra DiRosa', rango: 'Médico Experimentado', foto: 'images/employees/Lyra.png', categoria: '14/12/24 - 28/12/2024', fecha: '28/12/2024', favorite: false },
  { id: 4, nombre: 'Axel Martínez', rango: 'Médico', foto: 'images/employees/Axel.png', categoria: '14/12/24 - 28/12/2024', fecha: '28/12/2024', favorite: false },
  { id: 5, nombre: 'Manolo Trabuko', rango: 'Médico Experimentado', foto: 'images/NotAvailable.webp', categoria: '28/12/24 - 11/01/25', fecha: '28/12/2024', favorite: false },
  { id: 6, nombre: 'Nicole Blackwood', rango: 'Enfermera', foto: 'images/employees/Nicole.png', categoria: '28/12/24 - 11/01/25', fecha: '28/12/2024', favorite: false },
]);

function switchLanguage() {
  language.value = language.value === 'es' ? 'en' : 'es';
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const orderedAscensos = computed(() => {
  return ascensos.value.slice().sort((a, b) => {
    return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
  });
});

const filteredAscensos = computed(() => {
  let filtered = orderedAscensos.value;

  if (categoriaSeleccionada.value && categoriaSeleccionada.value !== 'Todos') {
    filtered = filtered.filter(
      (ascenso) => ascenso.categoria === categoriaSeleccionada.value
    );
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (ascenso) =>
        ascenso.nombre.toLowerCase().includes(query) ||
        ascenso.rango.toLowerCase().includes(query) ||
        ascenso.categoria.toLowerCase().includes(query)
    );
  }

  if (showFavorites.value) {
    filtered = filtered.filter((ascenso) => ascenso.favorite);
  }

  return filtered;
});

function restoreCategorias() {
  categorias.value = [...allCategorias.value];
}

const toggleFavoriteFilter = () => {
  showFavorites.value = !showFavorites.value;
};

ascensos.value.forEach((ascenso) => {
  if (savedFavorites[ascenso.id] !== undefined) {
    ascenso.favorite = savedFavorites[ascenso.id];
  }
});

const saveFavorites = () => {
  const favorites = ascensos.value.reduce((acc, ascenso) => {
    acc[ascenso.id] = ascenso.favorite;
    return acc;
  }, {} as Record<number, boolean>);

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

watch(
  ascensos,
  () => saveFavorites(),
  { deep: true }
);

const toggleFavorite = (ascenso: Ascenso) => {
  ascenso.favorite = !ascenso.favorite;
};

function filterFn(val: string, update: (callback: () => void) => void) {
  const query = val.toLowerCase();
  update(() => {
    if (!val) {
      categorias.value = [...allCategorias.value];
    } else {
      categorias.value = allCategorias.value.filter((categoria) =>
        categoria.toLowerCase().includes(query)
      );
    }
  });
}

const modalVisible = ref(false);
const modalImage = ref('');

function openModal(imageSrc: string) {
  modalImage.value = imageSrc;
  modalVisible.value = true;
}

function closeModal() {
  modalVisible.value = false;
  modalImage.value = '';
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="/images/SAMSlogo.png" alt="SAMS Logo">
          </q-avatar>
          San Andreas Medical Services (SAMS)
        </q-toolbar-title>

        <a href="/saed-web-page/">
          <q-btn flat icon="fas fa-home" aria-label="Ir a inicio" />
        </a>

        <a href="https://muhaddil.github.io/404.html">
          <q-btn flat icon="fas fa-info-circle" aria-label="Información sobre SAED" />
        </a>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
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

        <q-item clickable disable>
          <q-item-section class="item-row">
            <span>
              <q-icon name="fa-solid fa-file-contract" class="icon" />
              Ascensos
            </span>
          </q-item-section>
        </q-item>

        <a href="workers.html">
          <q-item clickable>
            <q-item-section class="item-row">
              <span>
                <q-icon name="fa-solid fa-user" class="icon" />
                Personal
              </span>
            </q-item-section>
          </q-item>
        </a>

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
    </q-drawer>

    <q-page-container>
      <q-page class="q-pa-md">
        <div class="q-mb-md flex justify-between">
          <ThemeSwitch />
          <q-btn @click="switchLanguage" icon="fas fa-language" label="Cambiar idioma" color="secondary" size="sm"
            aria-label="Cambiar idioma" />
        </div>

        <section id="ascensos">
          <h1>{{ language === 'es' ? '¡Ascensos del SAMS!' : 'SAMS Promotions' }}</h1>

          <q-select v-model="categoriaSeleccionada" :options="categorias" @filter="filterFn"
            @update:model-value="restoreCategorias" transition-show="jump-up" transition-hide="jump-up"
            :label="language === 'es' ? 'Filtrar por categoría' : 'Filter by category'" emit-value map-options
            class="q-mb-md" use-input />

          <div class="botonera">
            <q-btn :label="language === 'es' ? 'Quitar filtro' : 'Remove filters'" color="primary"
              @click="categoriaSeleccionada = ''" style="margin-right: 8px;" />
            <q-btn @click="toggleFavoriteFilter"
              :label="showFavorites ? (language === 'es' ? 'Mostrar Todos' : 'Show All') : (language === 'es' ? 'Mostrar Favoritos' : 'Show Favorites')"
              color="primary" />
          </div>

          <div class="care-cards" style="margin-top: 10px;">
            <div v-for="(ascenso) in filteredAscensos" :key="ascenso.id" class="ascenso-item">
              <q-card flat bordered>
                <q-card-section @click="openModal(ascenso.foto)">
                  <q-img :src="ascenso.foto" class="ascenso-img" />
                  <div class="text-center">
                    <p class="nombre">{{ ascenso.nombre }}</p>
                    <p>{{ language === 'es' ? 'Ascendido a:' : 'Promoted to:' }} {{ ascenso.rango }}</p>
                    <p>{{ language === 'es' ? 'Fecha:' : 'Date:' }} {{ ascenso.fecha }}</p>
                  </div>
                </q-card-section>
                <br />
                <q-btn flat :icon="ascenso.favorite ? 'favorite' : 'favorite_border'" @click="toggleFavorite(ascenso)"
                  :class="{ 'favorite': ascenso.favorite }" class="favorite-button" />
              </q-card>
            </div>
          </div>
        </section>

        <section id="form-image-container-full" class="form-image-container-full">
          <q-dialog v-model="modalVisible" backdrop-filter="blur(6px)">
            <div class="form-image-container-full">
              <img :src="modalImage" class="full-image" />
              <q-btn icon="close" flat round class="close-btn" @click="closeModal" />
            </div>
          </q-dialog>
        </section>

      </q-page>
    </q-page-container>

    <q-footer elevated class="bg-dark text-white">
      <div class="q-pa-md footer-content text-center">
        <img src="/images/SAEDLogo.png" alt="SAED Logo" class="logofooter" />
        <p>&copy; 2025 San Andreas Emergency Department. Todos los derechos reservados.</p>
      </div>
    </q-footer>
  </q-layout>
</template>

<style scoped lang="scss">
.drawer {
  margin-top: 5px;
  font-size: 1.1rem;
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

.logo {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.q-select {
  width: 50%;
  margin: 0 auto 10px auto;
  align-items: center;
  display: block;
}

.q-card {
  cursor: pointer;
  border-radius: 15px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  max-width: 300px;
  margin: 0 auto;
  display: grid;
}

.q-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.info-section {
  margin-bottom: 40px;
  text-align: center;
}

.q-footer {
  background-color: #343a40;
  color: #fff;
  font-size: 14px;
}

.q-btn {
  font-size: 0.8rem;
  margin-top: 10px;
}

.q-btn .q-icon {
  margin-right: 6px;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
}

.logofooter {
  width: 4%;
  height: auto;
}

.item-row {
  display: flex;
  margin-top: 10px;
}

.icon {
  margin-right: 8px;
  font-size: 1.3rem;
}

q-item-section span {
  line-height: 1.5;
}

.care-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.ascenso-item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
}

.q-card {
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  width: 100%;
  height: 100%;
  max-width: 280px;
  margin: 0 auto;
}

.q-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.ascenso-img {
  width: 35%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 10px auto;
  align-items: center;
  display: block;
  border-color: yellowgreen;
  border-width: 2px;
  transition: transform 0.5s ease-in-out, box-shadow 0.3s ease;
}

// .ascenso-img :hover {
//   transform: scale(1.1);
// }

.nombre {
  font-size: 1.2rem;
  font-weight: bold;
}

.favorite-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  margin-top: 2px;
  color: gold;
}

.favorite .favorite-button {
  color: red;
}

.q-btn {
  font-size: 0.8rem;
  margin-top: 10px;
}

.q-btn .q-icon {
  margin-right: 6px;
}
</style>
