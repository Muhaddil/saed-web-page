<script setup lang="ts">
import { ref } from 'vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue';

const leftDrawerOpen = ref(false);
const language = ref('es');
const slide = ref(1);
const autoplay = ref(true);


function switchLanguage() {
  language.value = language.value === 'es' ? 'en' : 'es';
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
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

interface Slide {
  id: number;
  src: string;
  caption: string;
  subtitle: string;
}

const slides = ref<Slide[]>([
  { src: './images/fotosemana/fotosemana9.png', caption: 'Aguantando calor', subtitle: '🔥🚒' },
  { src: './images/fotosemana/fotosemana8.png', caption: 'Los recuerdos', subtitle: '' },
  { src: './images/fotosemana/fotosemana7.png', caption: 'El Intruso', subtitle: '' },
  { src: './images/fotosemana/fotosemana6.png', caption: 'Largas Noches', subtitle: '' },
  { src: './images/fotosemana/fotosemana5.png', caption: 'Que calidad', subtitle: '' },
  { src: './images/fotosemana/fotosemana4.png', caption: 'El Resurgimiento', subtitle: '' },
  { src: './images/fotosemana/fotosemana3.png', caption: 'Una rosa para una rosa', subtitle: '' },
  { src: './images/FotoSemana2.png', caption: 'Un Descanso', subtitle: '' },
  { src: './images/FotoSemana1.jpeg', caption: 'Un día más', subtitle: '' },
  { src: './images/SAMSHeader.png', caption: 'SAMS Header', subtitle: '' },
].map((slide, index) => ({ ...slide, id: index + 1 }))); 
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
              <q-icon name="fa-solid fa-camera" class="icon" />
              Foto de la Semana
            </span>
          </q-item-section>
        </q-item>

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
          <h1>{{ language === 'es' ? '¡Foto de la Semana!' : 'Photo of the Week!' }}</h1>

          <div class="q-pa-md">
            <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows
              transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false"
              @mouseleave="autoplay = true" style="height: 60rem;">
              <q-carousel-slide v-for="slideItem in slides" :key="slideItem.id" :name="slideItem.id"
                :img-src="slideItem.src" @click="openModal(slideItem.src)">
                <div v-if="slideItem.caption || slideItem.subtitle" class="absolute-bottom custom-caption">
                  <div class="text-h2">{{ slideItem.caption }}</div>
                  <div class="text-subtitle1">{{ slideItem.subtitle }}</div>
                </div>
              </q-carousel-slide>
            </q-carousel>
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
  // border-radius: 35%;
}

.form-image-container {
  max-width: 100%;
  margin-right: 10%;
  margin-left: 10%;
}

.form-image-container-full {
  max-width: 80% !important;
  height: auto;
  width: auto;
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

.custom-caption {
  text-align: left;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
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
