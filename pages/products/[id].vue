<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product?.title }}</Title>
      <Meta name="description" :content="product?.description" />
    </Head>

    <ProductDetails :product="product as Product"></ProductDetails>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "~/types";

const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch<Product>(uri);

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found" });
}

definePageMeta({
  layout: "products",
});
</script>
