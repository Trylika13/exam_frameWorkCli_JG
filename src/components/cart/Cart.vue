<script setup>
import CartItem from "./CartItem.vue";
import CartPrice from "./CartPrice.vue";
</script>
<template>
  <aside class="w-full md:w-1/3 px-4">
    <h2 class="text-xl font-bold mb-4">Votre Panier</h2>
    <div class="cart bg-white rounded-lg shadow animate__animated">
      <ul class="divide-y divide-gray-200 space-y-4 p-6">
        <!-- Repeat for other cart items -->
        <CartItem />
      </ul>
      <CartPrice />
    </div>
  </aside>
</template>
<style scoped></style>
