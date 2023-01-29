<template>
<nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/shop">Shop</router-link> |
  <router-link to="/login">Login</router-link> |
  <router-link to="/user">Your account</router-link> 
</nav>
<footer>
  <NavBar/>
</footer>
 
<router-view/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: "AppComponent",
  components: {
    NavBar
  }
})

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #474647;
;
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
  /* display: flex; */
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
 
}

img {
  max-width: 15rem;
}

</style>
