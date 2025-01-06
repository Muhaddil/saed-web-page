<script setup lang="ts">
import { computed } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const themeLabel = computed(() =>
  $q.dark.isActive ? "Modo claro" : "Modo oscuro"
);

function toggleTheme() {
  const isDark = $q.dark.isActive;
  $q.dark.set(!isDark);
  localStorage.setItem("theme", isDark ? "light" : "dark");
}

const initialTheme = localStorage.getItem("theme");
if (initialTheme === "dark") {
  $q.dark.set(true);
} else if (initialTheme === "light") {
  $q.dark.set(false);
}

const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') $q.dark.set(true);
</script>

<template>
  <q-btn
    @click="toggleTheme"
    icon="fas fa-moon"
    :label="themeLabel"
    color="primary"
    size="sm"
    aria-label="Cambiar tema"
  />
</template>
