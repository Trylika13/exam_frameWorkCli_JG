<script setup>
import { cartStore } from "@/stores/cart";
</script>
<template>
  <div class="bg-gray-50">
    <div class="p-6">
      <div class="flex justify-between mb-1">
        <span><strong>Total HTVA:</strong></span>
        <span>{{ cartStore.subTotal }} €</span>
      </div>
      <div class="flex justify-between mb-1">
        <span><strong>Taxe (20%):</strong></span>
        <span>€10.00</span>
      </div>
      <div class="flex justify-between items-center my-8">
        <span><strong>Livraison:</strong></span>
        <select
          class="form-select py-1 px-2 block w-full rounded border border-gray-300 ml-2"
        >
          <option value="5">Standard - €5</option>
          <option value="15">Express - €15</option>
        </select>
      </div>
      <div class="flex justify-between font-bold mb-1 text-xl">
        <span><strong>Total Général:</strong></span>
        <span>€65.00</span>
      </div>
      <button
        class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cart-btn"
      >
        Procéder au paiement
      </button>
    </div>
  </div>
</template>
<style scoped></style>
