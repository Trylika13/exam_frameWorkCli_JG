<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import ProductList from "./components/products/ProductList.vue";
import Cart from "./components/cart/Cart.vue";
</script>

<template>
  <AppHeader />
  <main class="container mx-auto py-8 px-4 flex flex-wrap">
    <ProductList apiURL="https://69305335778bbf9e0070e673.mockapi.io/" />
    <Cart />
  </main>
  <AppFooter />
</template>

<style scoped></style>
