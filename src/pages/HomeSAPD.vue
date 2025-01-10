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
            <img src="/images/SAPDLogo.png" alt="SAPD Logo">
          </q-avatar>
          San Andreas Police Department (SAPD)
        </q-toolbar-title>

        <a href="sapdhome.html">
          <q-btn flat icon="fas fa-home" aria-label="Ir a inicio" />
        </a>

        <a href="https://muhaddil.github.io/404.html">
          <q-btn flat icon="fas fa-info-circle" aria-label="Información sobre SAPD" />
        </a>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <a href="sapdhome.html">
          <q-item clickable>
            <q-item-section class="item-row">
              <span>
                <q-icon name="local_police" class="icon" />
                Información General
              </span>
            </q-item-section>
          </q-item>
        </a>

        <a href="https://muhaddil.github.io/404.html">
          <q-item clickable>
            <q-item-section class="item-row">
              <span>
                <q-icon name="policy" class="icon" />
                Divisiones
              </span>
            </q-item-section>
          </q-item>
        </a>

        <a href="https://muhaddil.github.io/404.html">
          <q-item clickable>
            <q-item-section class="item-row">
              <span>
                <q-icon name="eva-archive-outline" class="icon" />
                Reclutamiento
              </span>
            </q-item-section>
          </q-item>
        </a>

        <a href="https://muhaddil.github.io/404.html">
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
          <h2>{{ language === 'es' ? 'San Andreas Police Department' : 'San Andreas Police Department' }}</h2>
          <p v-if="language === 'es'">
            El San Andreas Police Department (SAPD) es la principal agencia encargada de mantener la ley y el orden en
            el
            estado de San Andreas. Nuestro compromiso es proteger y servir a la comunidad, garantizando la seguridad y
            el
            bienestar de todos los ciudadanos. Contamos con oficiales altamente capacitados y dedicados a mantener la
            paz y
            la justicia en nuestra jurisdicción.
          </p>
          <p v-else>
            The San Andreas Police Department (SAPD) is the leading agency responsible for maintaining law and order in
            the
            state of San Andreas. Our commitment is to protect and serve the community, ensuring the safety and
            well-being
            of all citizens. We have highly trained officers dedicated to maintaining peace and justice in our
            jurisdiction.
          </p>
        </section>

        <section class="carousel-section">
          <div class="q-pa-md">
            <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows
              transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false"
              @mouseleave="autoplay = true">
              <q-carousel-slide :name="1" img-src="./images/NotAvailable.webp" />
              <!-- <q-carousel-slide :name="2" img-src="./images/image2.png" />
              <q-carousel-slide :name="3" img-src="./images/image3.png" />
              <q-carousel-slide :name="4" img-src="./images/image4.png" />
              <q-carousel-slide :name="5" img-src="./images/image5.png" />
              <q-carousel-slide :name="6" img-src="./images/image6.png" />
              <q-carousel-slide :name="7" img-src="./images/image7.png" /> -->
            </q-carousel>
          </div>
        </section>

        <section class="care-section">
          <h2 class="text-center">{{ language === 'es' ? 'NUESTRAS ÁREAS DE SERVICIO' : 'OUR SERVICE AREAS' }}</h2>

          <div class="care-cards row q-col-gutter-md">
            <q-card class="care-card col-12 col-md-6">
              <q-icon name="fas fa-shield-alt" size="60px" color="primary" />
              <q-card-section class="card-content">
                <h3>{{ language === 'es' ? 'PATRULLAJE' : 'PATROL' }}</h3>
                <p>{{ language === 'es' ? 'Nuestros oficiales están disponibles 24/7 para responder a emergencias y mantener la seguridad.' : 'Our officers are available 24 / 7 to respond to emergencies and ensure safety.' }}</p>
              </q-card-section>
            </q-card>

            <q-card class="care-card col-12 col-md-6">
              <q-icon name="fas fa-search" size="60px" color="secondary" />
              <q-card-section class="card-content">
                <h3>{{ language === 'es' ? 'INVESTIGACIONES' : 'INVESTIGATIONS' }}</h3>
                <p>{{ language === 'es' ? 'Detectives especializados resuelven delitos y llevan a los responsables ante la justicia.' : 'Specialized detectives solve crimes and bring offenders to justice.' }}</p>
              </q-card-section>
            </q-card>
          </div>
        </section>

      </q-page>
    </q-page-container>

    <q-footer elevated class="bg-dark text-white">
      <div class="q-pa-md footer-content text-center">
        <img src="/images/SAPDLogo.png" alt="SAED Logo" class="logofooter" />
        <p>&copy; 2025 San Andreas Police Department. Todos los derechos reservados.</p>
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
  width: 5%;
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
  font-size: 1.5rem;
  line-height: 1;
}

q-item-section span {
  line-height: 1.5;
}
</style>
