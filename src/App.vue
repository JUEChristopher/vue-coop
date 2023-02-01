<script setup>
import { provide} from 'vue'
import { useRouter } from 'vue-router'
import { useSessionStore } from '@/stores/session'
import { useUserStore } from '@/stores/user'

provide('router', useRouter())
provide('session', useSessionStore())
provide('user', useUserStore())
</script>

<template>
  <Navbar/>
  <RouterView />
</template>
