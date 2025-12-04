// 📂 stores/cart.js
import { reactive, watch } from "vue";

// 1. On déclare la variable "cart" (et pas products !)
const cart = reactive(JSON.parse(localStorage.getItem("cart") || "[]"));

// 2. Les fonctions
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

const deleteOneById = (id) => {
  // CORRECTION ICI : On utilise "cart", pas "products"
  const index = cart.findIndex((item) => item.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
  }
};

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
};
