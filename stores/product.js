export const useProductStore = defineStore("products", () => {
  const products = ref([
    {
      id: 12345,
      title: "Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      color: "red",
      size: ["small", "medium", "large"],
      images: [
        "/ecommerce/image-product-1.jpg",
        "/ecommerce/image-product-2.jpg",
        "/ecommerce/image-product-3.jpg",
        "/ecommerce/image-product-4.jpg",
      ],
      brand: "sneaker company",
      price: 125.0,
      discount: 50,
    },
  ]);

  const cart = ref([]);

  const addToCart = (id, quantity) => {
    //find the id
    const productToAdd = products.value.find((p) => p.id === id);

    if (productToAdd) {
      if (cart.value.length > 0) {
        cart.value = [];
      }
      cart.value.push({
        id: productToAdd.id,
        title: productToAdd.title,
        img: productToAdd.images[0],
        price: productToAdd.price * quantity,
        quantity,
      });
    }
  };
  const removeFromCart = (id) => {
    // Find the index of the product in the cart
    const index = cart.value.findIndex((item) => item.id === id);

    // Check if the product is in the cart
    if (index !== -1) {
      // Remove the product from the cart
      cart.value.splice(index, 1);
    }
  };

  const emptyCart = () => {
    cart.value = [];
  };

  return {
    products,
    cart,
    addToCart,
    removeFromCart,
    emptyCart,
  };
});
