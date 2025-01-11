<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue';

const leftDrawerOpen = ref(false);
const language = ref('es');
const slide = ref(1);
const autoplay = ref(true);

function switchLanguage() {
  language.value = language.value === 'es' ? 'en' : 'es';
}
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const forms = ref([
  { id: 1, title: 'Formulario 1', description: 'Formulario de postulación.', link: 'https://muhaddil.github.io/simple-form-sender/form1.html' },
  { id: 2, title: 'Formulario 2', description: 'Formulario de postulación.', link: 'https://muhaddil.github.io/simple-form-sender/form2.html' },
  { id: 3, title: 'Formulario 3', description: 'Formulario de postulación.', link: 'https://muhaddil.github.io/simple-form-sender/form3.html' },
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

          <q-item disable clickable>
            <q-item-section class="item-row">
              <span>
              <q-icon name="fas fa-hospital" class="icon" />
              SAMS
              </span>
            </q-item-section>
          </q-item>

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

        <a href="https://muhaddil.github.io/404.html">
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

        <a href="https://muhaddil.github.io/404.html">
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
          <h2>{{ language === 'es' ? 'San Andreas Emergency Department' : 'San Andreas Emergency Department' }}</h2>
          <p v-if="language === 'es'">
            El San Andreas Medical Services, tambien conocido como SAMS, es una institución de carácter público,
            perteneciente al Gobierno de San Andreas, colaborando con el Condado de Los Santos, el Condado de Blaine y
            el Estado de San Andreas en su totalidad. Contamos con profesionales médicos, rescatistas y especialistas,
            de primera calidad, al igual que con instalaciones con tecnología moderna, elevando los estándares de la
            Salud Pública.
            Nuestro Servicio se encuentra comprometido en el avance de la tecnología médica, el mejoramiento continuo de
            la labor institucional y la ampliación de atención en la red de mediana-alta complejidad. Invertimos en el
            futuro para mejorar la calidad del presente, colaborando con otras instituciones y motivando a la autonomía
            financiera para lograr un sustento eficaz e independiente.
            Estamos comprometidos con nuestra vocación por el servicio público, y la atención a los ciudadanos del
            Estado de San Andreas.
          </p>
          <p v-else>
            San Andreas Medical Services, also known as SAMS, is a public institution, belonging to the Government of
            San Andreas, collaborating with Los Santos County, Blaine County and the State of San Andreas as a whole. We
            have top-quality medical professionals, rescuers and specialists, as well as facilities with modern
            technology, raising the standards of Public Health.
            Our Service is committed to the advancement of medical technology, the continuous improvement of
            institutional work and the expansion of care in the medium-high complexity network. We invest in the future
            to improve the quality of the present, collaborating with other institutions and encouraging financial
            autonomy to achieve an effective and independent livelihood.
            We are committed to our vocation for public service, and care for the citizens of the State of San Andreas.
          </p>
        </section>

        <section class="carousel-section">
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
        </section>

        <section id="random-form-section" class="care-section q-pa-md">
          <h2 class="text-center text-primary q-mb-lg">
            {{ language === 'es' ? 'Postula Aquí' : 'Apply Here' }}
          </h2>
          <div class="q-pa-md flex flex-wrap justify-center q-gutter-md items-center">
            <div class="form-image-container">
              <q-card flat bordered class="image-card"
                @click="openModal('./images/apply/Dark_Blue_and_White_Professional_Medical_Clinic_Document_1.png')">
                <img
                  src="/images/apply/Dark_Blue_and_White_Professional_Medical_Clinic_Document_1.png"
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
              <q-card flat bordered class="image-card"
                @click="openModal('./images/apply/SAMS1.png')">
                <img
                  src="/images/apply/SAMS1.png"
                  alt="Form Side Image" class="form-side-image" /> </q-card>
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

.drawer {
  margin-top: 5px;
  font-size: 1.1rem;
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
