<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
      voluptatum in. Quaerat corporis deserunt adipisci doloribus esse ducimus
      debitis praesentium?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus
      totam sit nulla ex asperiores nesciunt, ipsam accusantium perspiciatis
      quasi?
    </p>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36;
}
p {
  margin: 20px 0;
}
</style>
