<script setup lang="ts">
import Button from "primevue/button";
import Card from 'primevue/card';
</script>

<template>
    <h1 class="text-red-500 font-bold">PrimeVue Components</h1>

    <Button label="Primary" class="" />
    <Button label="Secondary" severity="secondary" />
    <Button label="Success" severity="success" />
    <Button label="Info" severity="info" />
    <Button label="Warning" severity="warning" />
    <Button label="Help" severity="help" />
    <Button label="Danger" severity="danger" />

    <Card>
      <template #title> Simple Card </template>
      <template #content>
          <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
              quas!
          </p>
      </template>
    </Card>
</template>

<style scoped>

</style>