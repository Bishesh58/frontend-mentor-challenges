import { defineStore } from "pinia";

export const useSearchListStore = defineStore("searchList", () => {
  const list = ref([]);

  const addToList = (lang) => {
    const itemToFind = list.value.find((language) => language === lang);

    if (!itemToFind) {
      list.value.push(lang);
    }
  };

  const removeFromList = (lang) => {
    const indexToFind = list.value.findIndex((language) => language === lang);

    // If lang exists, remove it
    if (indexToFind !== -1) {
      list.value.splice(indexToFind, 1);
    }
  };

  const emptyList = () => {
    list.value = [];
  };

  return {
    list,
    addToList,
    removeFromList,
    emptyList,
  };
});
