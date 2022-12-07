import { defineStore } from 'pinia'
import { reactive } from "vue";

export const useSessionStore = defineStore('session', () => {
  let sessionData = reactive({
    member: {},
    token: ''
  })

  function setSession(m, t) {
    sessionData.member = m;
    sessionData.token = t;
  }

  function killSession() {
    sessionData.member = {};
    sessionData.token = '';
  }

  return { sessionData, setSession, killSession }
}, {
  persist: true,
})