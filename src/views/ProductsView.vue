<template>
	<div class="home">
		<div v-if="isLoading">Cargando...</div>
		<div class="product-list d-flex flex-wrap justify-content-center" v-else>
			<ProductItem
				v-for="product in fetchedProducts"
				:key="product.id"
				:product="product"
				@goDetail="goDetail"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import useProducts from "@/composables/useProducts";
import { defineComponent, onMounted, computed } from "vue";
import { Product } from "@/models/product";
import { useRouter } from "vue-router";
import ProductItem from "@/components/ProductItem.vue";

export default defineComponent({
	name: "ProductsView",
	components: {
		ProductItem,
	},
	setup() {
		const { products, isLoading, fetchProducts } = useProducts();
		const router = useRouter();

		onMounted(() => {
			fetchProducts();
		})

		const fetchedProducts = computed(() => products.value.products);

		return {
			fetchedProducts,
			isLoading,
			goDetail: (product: Product) =>
				router.push({ name: "detail", params: { id: product.id } }),
		};
	},
});
</script>

<style scoped>
.product-list {
	gap: 1rem 1rem;
}
</style>
