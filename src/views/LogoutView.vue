<script setup>
const router = inject('router')
const session = inject('session')
const user = inject('user')

if(session.sessionData.token){
    api.delete('members/signout',{body: { token: session.sessionData.token}}).then( data => {
        session.killSession()
        user.disconnect()
        router.push('/login')
    })
}

</script>


<template>
</template>