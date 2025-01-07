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
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="/images/SAEDLogo.png"  alt="SAED Logo">
          </q-avatar>
          San Andreas Emergency Department (SAED)
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
        <q-item-section>
          <q-icon name="fas fa-info-circle" />
          Información General
        </q-item-section>
      </q-item>
    </a>

    <a href="sams.html">
      <q-item clickable>
        <q-item-section>
          <q-icon name="fas fa-hospital" />
          SAMS
        </q-item-section>
      </q-item>
    </a>

    <a href="https://muhaddil.github.io/404.html">
      <q-item clickable>
        <q-item-section>
          <q-icon name="fas fa-fire" />
          SAFD
        </q-item-section>
      </q-item>
    </a>

    <a href="faq.html">
      <q-item clickable>
        <q-item-section>
          <q-icon name="fas fa-question-circle" />
          FAQ
        </q-item-section>
      </q-item>
    </a>

    <a href="https://muhaddil.github.io/404.html">
      <q-item clickable>
        <q-item-section>
          <q-icon name="fas fa-phone" />
          Contacto
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
            El San Andreas Emergency Department (SAED) es una institución privada que supervisa dos divisiones
            principales: SAMS y SAFD. Brindamos atención médica avanzada y servicios de emergencia en todo el Estado.
            Nuestro equipo está compuesto por profesionales altamente capacitados que garantizan una atención rápida y
            eficiente
            en situaciones críticas.
          </p>
          <p v-else>
            The San Andreas Emergency Department (SAED) is a private institution overseeing two main divisions: SAMS and
            SAFD. We provide advanced medical care and emergency response services across the State. Our team consists
            of
            highly trained professionals ensuring quick and effective care in critical situations.
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

        <section class="care-section">
          <h2 class="text-center">{{ language === 'es' ? 'COMO TE CUIDAMOS' : 'HOW WE CARE FOR YOU' }}</h2>

          <div class="care-cards row q-col-gutter-md">
            <q-card class="care-card col-12 col-md-6">
              <q-icon name="fas fa-hospital-alt" size="60px" color="primary" />
              <q-card-section class="card-content">
                <h3>{{ language === 'es' ? 'HOSPITAL Nº1 EN EL ESTADO' : "STATE'S #1 HOSPITAL" }}</h3>
                <p>{{ language === 'es' ? 'Haz tu seguro médico y despreocupate de las facturas médicas.' : 'Get your health insurance and forget about medical bills.' }}</p>
              </q-card-section>
            </q-card>

            <q-card class="care-card col-12 col-md-6">
              <q-icon name="fas fa-stethoscope" size="60px" color="secondary" />
              <q-card-section class="card-content">
                <h3>{{ language === 'es' ? 'MÉDICOS ESPECIALIZADOS' : 'SPECIALIZED DOCTORS' }}</h3>
                <p>{{ language === 'es' ? 'Contamos con numerosos médicos especialistas, desde ginecología hasta cirugía plástica.Pide tu cita ya.' : 'We have many specialized doctors, from gynecology to plastic surgery. Book your appointment now.' }}</p>
              </q-card-section>
            </q-card>
          </div>
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
</style>
