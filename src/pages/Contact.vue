<script setup lang="ts">
import { ref } from "vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";

const leftDrawerOpen = ref(false);
const language = ref("es");
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

function switchLanguage() {
  language.value = language.value === "es" ? "en" : "es";
}
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
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
          San Andreas Emergency Department (SAED)
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

          <q-item clickable disable>
            <q-item-section class="item-row">
              <span>
                <q-icon name="fas fa-phone" class="icon" />
                Contacto
              </span>
            </q-item-section>
          </q-item>
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
            icon="fas fa-language"
            label="Cambiar idioma"
            color="secondary"
            size="sm"
            aria-label="Cambiar idioma"
          />
        </div>

        <section class="contact-section">
          <h2 class="text-center">
            {{ language === "es" ? "Contáctanos" : "Contact Us" }}
          </h2>
          <div class="q-gutter-md row justify-center">
            <q-card class="contact-card col-12 col-md-5 q-pa-md">
              <q-card-section @click="openModal('./images/3.png')">
                <q-icon name="place" size="40px" color="red" class="q-mb-sm" />
                <h3>
                  {{
                    language === "es"
                      ? "¿Dónde encontrarnos?"
                      : "Where to Find Us?"
                  }}
                </h3>
                <p>Hospital Ocean Medical Center</p>
                <p>Los Santos</p>
              </q-card-section>
              <img
                src="/images/3.png"
                alt="Ubicación"
                ratio="16/9"
                class="rounded-borders"
                @click="openModal('./images/3.png')"
              />
            </q-card>
          </div>
        </section>

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
      </q-page>
    </q-page-container>

    <q-footer elevated class="bg-dark text-white">
      <div class="q-pa-md footer-content text-center">
        <img src="/images/SAEDLogo.png" alt="SAED Logo" class="logofooter" />
        <p>
          &copy; 2025 San Andreas Emergency Department. Todos los derechos
          reservados.
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

.modal-card {
  max-width: 90%;
  max-height: 90%;
  position: relative;
  animation: fadeIn 0.5s ease;
}

.form-image-container-full {
  max-width: 80% !important;
  height: auto;
  width: auto;
}

.full-image {
  object-fit: contain;
  width: 100%;
  height: 100%;
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

.q-card {
  cursor: pointer;
  border-radius: 15px;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
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

.q-footer {
  background-color: #343a40;
  color: #fff;
  font-size: 14px;
}

.q-btn {
  font-size: 0.8rem;
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

.contact-section {
  margin: 40px auto;
  text-align: center;
}

.contact-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.q-img {
  object-fit: cover;
}

.q-icon {
  margin-bottom: 10px;
}

.rounded-borders {
  border-radius: 12px;
}
</style>
