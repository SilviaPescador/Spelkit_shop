<template>
  <div class="home">
    <img alt="spelkit e-commerce logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Spelkit Shop"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>

<style>
.img {
  
}

</style>