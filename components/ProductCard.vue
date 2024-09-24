<template>
  <div class="card text-center">
    <img :src="product.image" alt="product thumb" class="mx-auto h-32" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn m-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "~/types";

const { product } = defineProps<{ product: Product }>();
</script>
