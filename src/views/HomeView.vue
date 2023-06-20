<template>
	<div class="home">
		<Welcome msg="Welcome to Spelkit Shop" />
		<img alt="spelkit e-commerce logo" src="../assets/logo.png" />
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Welcome from "@/components/Welcome.vue"; // @ is an alias to /src

@Options({
	components: {
		Welcome,
	},
})
export default class HomeView extends Vue {}
</script>

<style scoped></style>
