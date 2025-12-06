import { reactive, watch, computed, ref } from "vue";

// On déclare la variable "cart"
const cart = reactive(JSON.parse(localStorage.getItem("cart") || "[]"));

// LES FONCTIONS

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
      image: `https://picsum.photos/300/200/?random=${product.id}`,
      quantity: 1,
    });
  }
};
// Supprimer un article
const deleteOneById = (id) => {
  cart.splice(
    cart.findIndex((item) => item.id === id),
    1
  );
};

//Total HTVA
const subTotal = computed(() => {
  return cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
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

//Le Watcher
watch(
  cart,
  (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
  },
  { deep: true }
);

//Export
export const cartStore = {
  cart,
  addItem,
  deleteOneById,
  subTotal,
  taxRate,
  totalPrice,
  deliveryCost,
};
