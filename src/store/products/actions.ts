import spelkitShopApi from "@/api/spelkitShop";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";

const actions: ActionTree<IProductsState, IState> = {
	async fetchProducts({ commit }) {
		// usamos la mutación para poner isLoading = true
		commit("setIsLoading", true);
		try {
			const { data } = await spelkitShopApi.get<
				unknown,
				AxiosResponse<Product[]>
			>("/products");
			console.log(data);
			// usamos la mutación para volcar los datos obtenidos en la variable del state users
			commit("setProducts", data);
		} catch (error) {
			console.log(error);
		} finally {
			// usamos la mutación para poner isLoading = false
			commit("setIsLoading", false);
		}
	},
	async fetchProductById({ commit }, productId: number) {
		// usamos la mutación para poner isLoading = true
		commit("setIsLoading", true);

		// obtenemos los datos de manera asíncrona
		const { data } = await spelkitShopApi.get<unknown, AxiosResponse<Product>>(
			`/products/${productId}`
		);

		// usamos la mutación para poner isLoading = false
		commit("setIsLoading", false);

		// usamos la mutación para volcar los datos obtenidos en la variable del state users
		commit("setSelectedProduct", data);
	},
};

export default actions;
