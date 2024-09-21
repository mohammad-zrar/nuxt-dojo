<template>
  <div>
    <h2>Product ID: {{ id }}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quisquam
      saepe dolores sunt labore.
    </p>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;
</script>

<style scoped></style>
