<template>
	<div class="col-lg-2 col-md-3 col-sm-6">
		<div class="product-item card shadow  p-3 flex-column">
			<div class="product-avatar container-fluid">
				<img :src="product.images[0]" :alt="product.title"  class="rounded img-fluid"/>
			</div>
			<div class="product-info card-body d-flex flex-column mt-auto justify-content-end">
				<div class="product-title h4">{{ product.title }}</div>
				<div class="product-description h6 ">{{ product.description }}</div>
			</div>
			<div
				class="buttons card-footer  mt-auto d-flex align-items-center justify-content-center"
			>
				<button
					class="btn btn-sm btn-success shadow"
					@click="$emit('goDetail', product)"
				>
					Detail
				</button>
			</div>
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
});
</script>


