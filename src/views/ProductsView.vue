<template>
	<div class="home container-fluid mb-3">
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

<script setup lang="ts">
import { Product } from "@/models/product";
import useProducts from "@/composables/useProducts";
import { computed } from "vue";
import { useRouter } from "vue-router";
import ProductItem from "@/components/ProductItem.vue";

const { products, isLoading, fetchProducts } = useProducts();
const router = useRouter();

fetchProducts();

const fetchedProducts = computed(() => products.value.products);

const goDetail = (product: Product) => {
	router.push({ name: "detail", params: { id: product.id } });
};
</script>

<style scoped>
.product-list {
	gap: 1rem 1rem;
}
</style>
