<script setup>
import Button from 'primevue/button';

let test = "Connexion"

const user = inject('user')
</script>

<template>
  <h1>Home</h1>
  <router-link to="/register"><p>Register</p></router-link>
  <router-link to="/login"><p>Login</p></router-link>
  <router-link v-if="user.isConnected" to="/logout"><p>Logout</p></router-link>
  <br>
  <Button :label="test" />
</template>

<style scoped>
</style>
