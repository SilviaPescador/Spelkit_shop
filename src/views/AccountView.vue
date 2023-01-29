<template>
  <div>
    <h2>User Account</h2>
    <p>Name: {{ name }}</p>
    <p>Email: {{ email }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const name = ref('User name');
    const email = ref('username@example.com');

    const logout = () => {
      // Logout logic
    };

    onMounted(() => {
      // Fetch user data
    });

    onUnmounted(() => {
      // Cleanup logic
    });

    return {
      name,
      email,
      logout,
    };
  },
};
</script>