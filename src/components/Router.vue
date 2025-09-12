<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRouteDataStore } from "@/stores/routeDataStore";
import { defineAsyncComponent } from "vue";

const routeData = useRouteDataStore();
const { route } = storeToRefs(routeData);

interface RouterObj {
  component: string;
  requiresData: boolean;
}

const router: Record<string, RouterObj> = {
  faq: { component: "FAQPage", requiresData: false },
  index: { component: "Home", requiresData: false },
  sams: { component: "SAMS", requiresData: false },
  sapdhome: { component: "HomeSAPD", requiresData: false },
  promotions: { component: "Promotions", requiresData: false },
  contact: { component: "Contact", requiresData: false },
  safd: { component: "SAFD", requiresData: false },
  divisionssapd: { component: "DivisionsSAPD", requiresData: false },
  photoweek: { component: "PhotoWeek", requiresData: false },
  workers: { component: "Workers", requiresData: false },
  salaries: { component: "Salaries", requiresData: false },
};

const routeComponentObj = getRouteComponent();

const RouteComponent = defineAsyncComponent({
  loader: () => import(`@/pages/${routeComponentObj.component}.vue`),
});

function getRouteComponent() {
  const currentRoute = route.value?.toLowerCase();
  if (!currentRoute || !router[currentRoute]) return router.index;
  return router[currentRoute];
}
</script>

<template>
  <RouteComponent />
</template>
