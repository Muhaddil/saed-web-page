<script setup lang="ts">
// import { componentName } from './variables/route';
// import { defineAsyncComponent, type Component } from 'vue';
import Router from './components/Router.vue';

</script>

<template>
  <main class="container main-page-content pt-4 my-5">
    <Router />
  </main>
</template>

<style scoped lang="scss">
.header {
  border-block-end: 1px solid var(--p-toolbar-border-color);
}

footer {
  position: fixed;
  bottom: 0;
  border-block-start: 1px solid var(--p-toolbar-border-color);
}

.main-page-content {
  padding-block-end: 5rem;
}
</style>
