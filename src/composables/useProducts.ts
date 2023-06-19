import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

const useProducts = () => {
	const store = useStore();

	return {
		// GETTERS
		products: computed(() => store.getters["products/getProducts"]),
		isLoading: computed(() => store.getters["products/getIsLoading"]),
		product: computed(() => store.getters["products/getProduct"]),

		// ACTIONS
		fetchProducts: async () => await store.dispatch("products/fetchProducts"),
		fetchProductById: async (productId: number) =>
			await store.dispatch("products/fetchProductById", productId),
	};
};

export default useProducts;
