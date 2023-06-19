<template>
	<div class="product-item w-25 card shadow d-flex flex-wrap p-3 flex-column">
		<div class="product-avatar">
			<img :src="product.images[0]" :alt="product.title" />
		</div>
		<div class="product-info card-body">
			<div class="product-title">{{ product.title }}</div>
			<div class="product-description">{{ product.description }}</div>
		</div>
		<div
			class="buttons card-footer  mt-auto d-flex align-items-center justify-content-center"
		>
			<button
				class="btn btn-sm btn-success"
				@click="$emit('goDetail', product)"
			>
				Detalle
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { Product } from "@/models/product";
import { defineComponent, PropType } from "vue";

export default defineComponent({
	props: {
		product: {
			type: Object as PropType<Product>,
			required: true,
		},
	},
	emits: ["goDetail"],
	setup(props) {
		console.log("ProductItem props", props);
	},
});
</script>

<style scoped>
/* .product-item {
	width: 300px;
	display: flex;
	border: 1px solid black;
	padding: 1rem;
	gap: 1rem;
} */

.product-avatar {
	width: 100%;
}
.product-avatar > img {
	width: 100%;
	height: auto;
}
</style>
