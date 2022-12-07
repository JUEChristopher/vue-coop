import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const isConnected = ref(false);

  function connect() {
    isConnected.value = true;
  }  
  function disconnect() {
    isConnected.value = false;
  }
  return { isConnected, connect, disconnect }
}, {
  persist: true,
})