import spelkitShopApi from "@/api/spelkitShop";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";
import Swal from "sweetalert2";

const actions: ActionTree<IProductsState, IState> = {
	async fetchProducts({ commit }) {
		// usamos la mutación para poner isLoading = true
		commit("setIsLoading", true);
		try {
			const { data } = await spelkitShopApi.get<
				unknown,
				AxiosResponse<Product[]>
			>("/products");
			// usamos la mutación para volcar los datos obtenidos en la variable del state users
			commit("setProducts", data);
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!: " + error,
			});
		} finally {
			// usamos la mutación para poner isLoading = false
			commit("setIsLoading", false);
		}
	},
	async fetchProductById({ commit }, productId: number) {
		// usamos la mutación para poner isLoading = true
		commit("setIsLoading", true);
		try {
			const { data } = await spelkitShopApi.get<
				unknown,
				AxiosResponse<Product>
			>(`/products/${productId}`);
			// usamos la mutación para volcar los datos obtenidos en la variable del state users
			commit("setSelectedProduct", data);
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!: " + error,
			});
		} finally {
			// usamos la mutación para poner isLoading = false
			commit("setIsLoading", false);
		}
	},
};

export default actions;
