<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    |
    <RouterLink to="/sign-in">Sign In</RouterLink>
    |
    <RouterLink to="/sign-up">Sign Up</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>