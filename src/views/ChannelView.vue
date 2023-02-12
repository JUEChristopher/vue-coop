<script setup>
import { useRoute } from 'vue-router';


const router = useRoute()
const session = inject('session')

const channel = reactive({})

api.get('channels/' + router.params.id + '?token=' + session.sessionData.token)
    .then(data => {
        if (data.message) {
            console.log(data.message)
        } else {
            console.log(data)
            channel.value = data
        }
    }).catch(e => {
        console.error(e)
    })

</script>


<template>
    <main>
        <p>{{ channel.value.id}}</p>
        <p>{{ channel.value.label}}</p>
        <p>{{ channel.value.topic }}</p>
    </main>
</template>