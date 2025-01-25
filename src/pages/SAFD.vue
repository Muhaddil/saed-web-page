<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue';

const leftDrawerOpen = ref(false);
const language = ref('es');
// const slide = ref(1);
// const autoplay = ref(true);

function switchLanguage() {
  language.value = language.value === 'es' ? 'en' : 'es';
}
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const forms = ref([
  { id: 1, title: 'Formulario 1', description: 'Formulario de postulación.', link: 'https://muhaddil.github.io/simple-form-sender/SAFDForm1.html' },
  { id: 2, title: 'Formulario 2', description: 'Formulario de postulación.', link: 'https://muhaddil.github.io/simple-form-sender/SAFDForm2.html' },
  { id: 3, title: 'Formulario 3', description: 'Formulario de postulación.', link: 'https://muhaddil.github.io/simple-form-sender/SAFDForm3.html' },
]);

const selectedForm = ref();

function randomizeForm() {
  selectedForm.value = forms.value[Math.floor(Math.random() * forms.value.length)];
}

onMounted(() => {
  const storedForm = localStorage.getItem('selectedForm');
  if (storedForm) {
    selectedForm.value = JSON.parse(storedForm);
  } else {
    randomizeForm();
  }
});

watch(selectedForm, (newForm) => {
  if (newForm) {
    localStorage.setItem('selectedForm', JSON.stringify(newForm));
  }
});

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
            <img src="/images/SAFD.png" alt="SAMS Logo">
          </q-avatar>
          San Andreas Fire Department (SAFD)
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

        <q-item clickable disable>
          <q-item-section class="item-row">
            <span>
              <q-icon name="fas fa-fire" class="icon" />
              SAFD
            </span>
          </q-item-section>
        </q-item>

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

        <section id="info-section" class="info-section">
          <h2>{{ language === 'es' ? 'San Andreas Fire Department' : 'San Andreas Fire Department' }}</h2>
          <p v-if="language === 'es'">
            El San Andreas Fire Department, también conocido como SAFD, es una institución pública que forma parte del
            Gobierno de San Andreas, prestando servicio al Condado de Los Santos, el Condado de Blaine y todo el Estado
            de San Andreas. Nuestro equipo está compuesto por bomberos, rescatistas y personal especializado en la
            atención de emergencias, quienes se destacan por su profesionalismo, compromiso y dedicación a la protección
            de la vida y la seguridad de los ciudadanos.
            Contamos con infraestructura avanzada y equipamiento de última generación, lo que nos permite responder de
            manera eficiente a incendios, desastres naturales y emergencias de diversa índole. Nos comprometemos al
            entrenamiento constante y al desarrollo de nuevas estrategias de intervención para estar siempre preparados
            ante cualquier situación.
            El SAFD está dedicado a la mejora continua de sus operaciones, fomentando la colaboración con otras
            instituciones y promoviendo la conciencia sobre la prevención de incendios y la seguridad comunitaria.
            Nuestro compromiso es salvaguardar a la comunidad de San Andreas, trabajando con pasión y responsabilidad
            por el bienestar de todos.
          </p>
          <p v-else>
            The San Andreas Fire Department, also known as SAFD, is a public institution that is part of the
            Government of San Andreas, serving Los Santos County, Blaine County, and the entire State
            of San Andreas. Our team is made up of firefighters, rescuers, and emergency response personnel, who stand
            out for their professionalism, commitment, and dedication to protecting the lives and safety of citizens.
            We have advanced infrastructure and state-of-the-art equipment, which allows us to respond efficiently to
            fires, natural disasters, and emergencies of various kinds. We are committed to
            constant training and the development of new intervention strategies to always be prepared
            for any situation.
            The SAFD is dedicated to the continuous improvement of its operations, fostering collaboration with other
            institutions, and promoting awareness about fire prevention and community safety.
            Our commitment is to safeguard the community of San Andreas, working with passion and responsibility
            for the well-being of all. </p>
        </section>

        <!-- <section class="carousel-section">
          <div class="q-pa-md">
            <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows
              transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false"
              @mouseleave="autoplay = true">
              <q-carousel-slide :name="1" img-src="./images/image1.png" />
              <q-carousel-slide :name="2" img-src="./images/image2.png" />
              <q-carousel-slide :name="3" img-src="./images/image3.png" />
              <q-carousel-slide :name="4" img-src="./images/image4.png" />
              <q-carousel-slide :name="5" img-src="./images/image5.png" />
              <q-carousel-slide :name="6" img-src="./images/image6.png" />
              <q-carousel-slide :name="7" img-src="./images/image7.png" />
            </q-carousel>
          </div>
        </section> -->

        <section id="random-form-section" class="care-section q-pa-md">
          <h2 class="text-center text-primary q-mb-lg">
            {{ language === 'es' ? 'Postula Aquí' : 'Apply Here' }}
          </h2>
          <div class="q-pa-md flex flex-wrap justify-center q-gutter-md items-center">
            <div class="form-image-container">
              <q-card flat bordered class="image-card"
                @click="openModal('./images/safd/safd.png')">
                <img src="/images/safd/safd.png"
                  alt="Form Side Image" class="form-side-image" />
              </q-card>

            </div>

            <q-card class="q-pa-md animated-card form-main-card" bordered flat>
              <q-card-section class="text-center">
                <div class="text-h5 text-bold">{{ selectedForm?.title }}</div>
                <div class="text-subtitle2 text-grey-7 q-mt-sm">{{ selectedForm?.description }}</div>
              </q-card-section>
              <q-card-actions align="center" class="q-mt-md">
                <a :href="selectedForm?.link">
                  <q-btn :to="selectedForm?.link" color="primary" label="Abrir" icon="open_in_new" />
                </a>
              </q-card-actions>
            </q-card>

            <div class="form-image-container">
              <q-card flat bordered class="image-card" @click="openModal('./images/safd/safd.png')">
                <img src="/images/safd/safd.png" alt="Form Side Image" class="form-side-image" /> </q-card>
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

.form-main-card {
  max-width: 400px;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.form-main-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.form-image-container {
  max-width: 20%;
  margin-right: 10%;
  margin-left: 10%;
}

.form-image-container-full {
  max-width: 80% !important;
  height: auto;
  width: auto;
}

.image-card {
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.form-side-image {
  object-fit: cover;
  border-radius: 50%;
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
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
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

.q-card {
  cursor: pointer;
  border-radius: 15px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  max-width: 300px;
  margin: 0 auto;
}

.q-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.block-icon {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
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

.form-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

@media (max-width: 768px) {
  .form-section {
    grid-template-columns: 1fr;
  }

  .block-icon {
    width: 50px;
    height: 50px;
  }
}

.q-btn {
  font-size: 0.8rem;
}

.q-btn .q-icon {
  margin-right: 6px;
}

.care-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
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

.care-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 16px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: auto;
  width: auto;
  max-width: fit-content;
  box-sizing: border-box;
}

.care-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  flex-grow: 1;
  overflow: hidden;
}

.card-content h3 {
  margin-bottom: 8px;
  text-align: center;
}

.card-content p {
  text-align: center;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.care-card q-icon {
  margin-bottom: 16px;
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
</style>
