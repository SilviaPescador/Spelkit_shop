<template>
      <div v-if="!isLoading">
        <h1>Product: {{ product.title }}</h1>
        <h2>Descripction: {{ product.description }}</h2>
        <img :src="product.images" alt="" />
        <h2>Role: {{ productRole }}</h2>
    
      </div>
      <div v-else>Cargando...</div>
</template>
    
<script lang="ts">
import useProducts from "@/composables/useProducts"
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
                  isLoading
            };
      },
});
</script>
    
    