<template>
	<div class="login">
		<h2 class="title">Join us</h2>
		<form class="form" @submit.prevent="login">
			<label class="form-label" for="#email">Email:</label>
			<input
				v-model="email"
				class="form-input"
				type="email"
				id="email"
				required
				placeholder="eve.holt@reqres.in"
			/>
			<label class="form-label" for="#password">Password:</label>
			<input
				v-model="password"
				class="form-input"
				type="password"
				id="password"
				placeholder="pistol"
			/>
			<p v-if="error" class="error">Ooops, something went wrong.</p>
			<input class="form-submit" type="submit" value="Login" />
		</form>

		<p class="mt-0">
			Don't have an account? <router-link to="/register">Register</router-link>
		</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthenticationService from "@/services/AuthenticationService";
import Swal from "sweetalert2";

export default defineComponent({
	data: () => ({
		email: "",
		password: "",
		error: false,
	}),
	methods: {
		async login() {
			try {
				const authService = new AuthenticationService();
				const response = await authService.login(this.email, this.password);
				if (response.data.token) {
					await Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Welcome!",
						showConfirmButton: false,
						timer: 1500,
					});
					localStorage.setItem("token", response.data.token);
					this.$router.push("/");
				} else {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Ooops, there was an error in authentication process.",
					});

					this.error = true;
				}
			} catch (error) {
				console.error(error);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!" + error,
				});
				this.error = true;
			}
		},
	},
});
</script>

<style scoped>
.login {
	padding: 2rem;
}
.title {
	text-align: center;
}
.form {
	margin: 3rem auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 20%;
	min-width: 350px;
	max-width: 100%;
	background: rgba(19, 35, 47, 0.9);
	border-radius: 5px;
	padding: 40px;
	box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
	margin-top: 2rem;
	color: white;
	margin-bottom: 0.5rem;
}
.form-label:first-of-type {
	margin-top: 0rem;
}
.form-input {
	padding: 10px 15px;
	background: none;
	background-image: none;
	border: 1px solid white;
	color: white;
}
.form-input:focus {
	outline: 0;
	border-color: #1ab188;
}
.form-submit {
	background: #1ab188;
	border: none;
	color: white;
	margin-top: 3rem;
	padding: 1rem 0;
	cursor: pointer;
	transition: background 0.2s;
}
.form-submit:hover {
	background: #0b9185;
}
</style>
