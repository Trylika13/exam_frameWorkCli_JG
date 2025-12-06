<script setup>
import { cartStore } from "@/stores/cart";
import MyButton from "../ui/MyButton.vue";
</script>
<template>
  <div class="bg-gray-50">
    <div class="p-6">
      <div class="flex justify-between mb-1">
        <span><strong>Total HTVA:</strong></span>
        <span>€{{ cartStore.subTotal }}</span>
      </div>
      <div class="flex justify-between mb-1">
        <span><strong>Taxe (20%):</strong></span>
        <span>€{{ cartStore.taxRate }}</span>
      </div>
      <div class="flex justify-between items-center my-8">
        <span><strong>Livraison:</strong></span>
        <select
          class="form-select py-1 px-2 block w-full rounded border border-gray-300 ml-2"
          v-model.number="cartStore.deliveryCost.value"
        >
          <option value="5">Standard - €5</option>
          <option value="15">Express - €15</option>
        </select>
      </div>
      <div class="flex justify-between font-bold mb-1 text-xl">
        <span><strong>Total Général:</strong></span>
        <span>€{{ cartStore.totalPrice }}</span>
      </div>
      <MyButton> Procéder au paiement </MyButton>
    </div>
  </div>
</template>
<style scoped></style>
