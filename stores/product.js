export const useProductStore = defineStore("products", () => {
  const products = ref([
    {
      id: 12345,
      title: "shoes",
      description: "lorem ipsm",
      color: "red",
      size: ["small", "medium", "large"],
      images: [""],
      brand: "Nike",
      actualPrice: 250.0,
      salesPrice: 125.0,
    },
  ]);

  return {
    products,
  };
});
