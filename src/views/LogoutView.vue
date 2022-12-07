<script setup>
import { inject } from "@vue/runtime-core"

const router = inject('router')
const session = inject('session')
const user = inject('user')

if(session.sessionData.token){
    api.delete('members/signout',{body: { token: session.sessionData.token}}).then( data => {
        session.killSession()
        user.disconnect()
        router.push('/')
    })
}
</script>


<template>
</template>