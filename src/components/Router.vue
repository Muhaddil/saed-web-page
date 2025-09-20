<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRouteDataStore } from "@/stores/routeDataStore";
import { defineAsyncComponent, h, computed } from "vue";

const routeData = useRouteDataStore();
const { route } = storeToRefs(routeData);

const router: Record<string, string> = {
  faq: "FAQPage",
  index: "Home",
  sams: "SAMS",
  sapdhome: "HomeSAPD",
  promotions: "Promotions",
  contact: "Contact",
  safd: "SAFD",
  divisionssapd: "DivisionsSAPD",
  photoweek: "PhotoWeek",
  workers: "Workers",
  salaries: "Salaries",
};

function getRouteComponent() {
  const currentRoute = route.value?.toLowerCase();
  return currentRoute && router[currentRoute] ? router[currentRoute] : router.index;
}

const LoadingComponent = {
  render() {
    return h(
      "div",
      { style: { padding: "2rem", textAlign: "center", color: "#555" } },
      "Cargando..."
    );
  },
};

const ErrorComponent = {
  render() {
    return h(
      "div",
      { style: { padding: "2rem", textAlign: "center", color: "red" } },
      "Error al cargar la página"
    );
  },
};

const RouteComponent = computed(() =>
  defineAsyncComponent({
    loader: () => {
      const routeComponentName = getRouteComponent();
      return import(`@/pages/${routeComponentName}.vue`).catch(() => ({
        render() {
          return h(
            "div",
            { style: { padding: "2rem", textAlign: "center", color: "red" } },
            "Página no encontrada"
          );
        },
      }));
    },
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    delay: 200,
    timeout: 10000,
  })
);
</script>

<template>
  <component :is="RouteComponent" />
</template>
