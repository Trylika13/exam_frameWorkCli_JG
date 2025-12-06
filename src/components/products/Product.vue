<script setup>
import { cartStore } from "@/stores/cart";
import MyButton from "../ui/MyButton.vue";
const props = defineProps({
  product: { type: Object, required: true },
});
</script>
<template>
  <!-- Product card example -->
  <article class="bg-white rounded-lg overflow-hidden shadow-md">
    <!-- Stocker l'url dans une const + product.id -->
    <img
      :src="`https://picsum.photos/300/200/?random=${product.id}`"
      alt="Product image"
      class="w-full"
    />
    <div class="p-4">
      <h2 class="font-bold text-lg mb-2">{{ product.name }}</h2>
      <p class="text-gray-700">€{{ product.price }}</p>
      <MyButton @click="cartStore.addItem(product)"> Ajouter </MyButton>
    </div>
  </article>
</template>
<style scoped></style>
