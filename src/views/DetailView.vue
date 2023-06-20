<template>
	<div v-if="!isLoading" class="container mb-">
		<div class="d-flex align-items-center flex-column">
			<img
				:src="product.thumbnail"
				class="w-25 img-thumbnail rounded rounded-5 shadow m-2"
			/>
			<h1>Detalles de {{ product.title }}</h1>
		</div>
		<article class="card shadow p-3 text-start mt-3">
			<h2>{{ product.description }}</h2>
			<h5>Category: {{ product.category }}</h5>
			<h5>Brand: {{ product.brand }}</h5>
			<h5>Price: {{ product.price }} €</h5>
			<h5>Stock: {{ product.stock }}</h5>
			<h5>Rating: {{ product.rating }}</h5>
			<h5>Actual discount: {{ product.discountPercentage }} %</h5>
			<!-- <h2>Role: {{ productRole }}</h2> -->
			<div class="product-images card shadow p-3 mt-3">
				<div
					v-for="(image, index) in product.images"
					:key="index"
					class="d-flex justify-content-center align-items-center"
				>
					<img :src="image" alt="" class="rounded" />
				</div>
			</div>
		</article>
	</div>
	<div v-else>Cargando...</div>
</template>

<script lang="ts">
import useProducts from "@/composables/useProducts";
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		id: {
			type: Number,
			required: true,
		},
		productRole: String,
	},

	setup(props) {
		const { product, fetchProductById, isLoading } = useProducts();

		fetchProductById(props.id);
		return {
			product,
			isLoading,
		};
	},
});
</script>
<style>
.product-images {
	display: flex;
	flex-flow: row wrap;
	gap: 1rem;
}
</style>
