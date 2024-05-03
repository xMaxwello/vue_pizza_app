<script setup lang="ts">
import navbarComponent from './components/navbarComponent.vue'
</script>

<template>
  <navbarComponent/>
  <main class="max-w-md mx-auto pt-36">
    <router-view/>
  </main>

</template>
