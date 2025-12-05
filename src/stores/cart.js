import { reactive, watch, computed, ref } from "vue";

// 1. On déclare la variable "cart"
const cart = reactive(JSON.parse(localStorage.getItem("cart") || "[]"));

// 2. Les fonctions

// Ajouter un article
const addItem = (product) => {
  const item = cart.find((p) => p.id === product.id);
  if (item) {
    item.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image:
        product.image || `https://picsum.photos/300/200/?random=${product.id}`,
      quantity: 1,
    });
  }
};
// Supprimer un article
const deleteOneById = (id) => {
  const index = cart.findIndex((item) => item.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
  }
};

//Total HTVA
const subTotal = computed(() => {
  const calcul = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return calcul.toFixed(2);
});

// TVA
const taxRate = computed(() => {
  return (Number(subTotal.value) * 0.2).toFixed(2);
});

//Delivery

const deliveryCost = ref(5);
// Total du panier
const totalPrice = computed(() => {
  return (
    Number(subTotal.value) +
    Number(taxRate.value) +
    Number(deliveryCost.value)
  ).toFixed(2);
});

// 3. Le Watcher
watch(
  cart,
  (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
  },
  { deep: true }
);

// 4. L'export
export const cartStore = {
  cart,
  addItem,
  deleteOneById,
  subTotal,
  taxRate,
  totalPrice,
  deliveryCost,
};
