<template>
	<div id="app-container">
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/shop">Shop</router-link> |
			<router-link to="/login">Login</router-link> |
			<router-link to="/user">Your account</router-link>
		</nav>

		<router-view />

		<footer>
			<NavBar />
		</footer>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
	name: "AppComponent",
	components: {
		NavBar,
	},
});
</script>

<style>
#app {
	font-family: "monospace", monospace;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #474647;
	background-color: rgb(235, 230, 230);
}

#app-container {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #474647;
}

nav a.router-link-exact-active {
	color: #42b983;
}

footer {
	margin-top: auto;
	justify-content: space-between;
}

img {
	max-width: 15rem;
}
</style>
