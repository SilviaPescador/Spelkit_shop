<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="#">Find us...</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
			aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item" v-for="item in navLinks" :key="item.id">
					<a class="nav-link" :href="item.href">
						<i class="bi bi-{{ item.icon }}"></i> {{ item.text }}
					</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script lang="ts">
import { ref } from "vue";

interface NavLink {
	id: number;
	text: string;
	href: string;
	icon: string;
}

export default {
	setup() {
		const navLinks = ref<NavLink[]>([
			{
				id: 1,
				text: "Instagram",
				href: "https://www.instagram.com/memes.programacion/",
				icon: "instagram",
			},
			{
				id: 2,
				text: "Facebook",
				href: "https://www.facebook.com/MemesdeProgramacionhmo/",
				icon: "facebook",
			},
			{ id: 3, text: "Twitter", href: "#", icon: "twitter" },
		]);

		return {
			navLinks,
		};
	},
};
</script>

<style>
.navbar-nav .nav-link {
	color: #fff;
}

.navbar-nav .nav-link:hover {
	color: #ccc;
}
</style>
