<script setup>
import Product from "./Product.vue";
import { productsStore } from "@/stores/products";
import { onMounted } from "vue";
import DB from "@/services/DB";

const props = defineProps({
  apiURL: { String, required: true },
});
onMounted(async () => {
  productsStore.init(props.apiURL);
});
</script>
<template>
  <section class="w-full md:w-2/3 px-4 mb-8">
    <!-- Products Section -->
    <h1 class="text-3xl font-bold mb-4">Nouveaux produits</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <product
        v-for="product in productsStore.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>
<style scoped></style>
