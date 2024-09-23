<template>
  <div>
    <p>{{ product?.title }}</p>
    <p>{{ product?.price }}</p>
    <p>{{ product?.id }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types";

const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch<Product>(uri);

definePageMeta({
  layout: "products",
});
</script>
