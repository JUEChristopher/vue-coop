<script setup>
import Password from 'primevue/password'

const router = inject('router')
const session = inject('session')
const user = inject('user')

const memberInfos = reactive({
    email: '',
    password: ''
})

let login = () => {
    if(memberInfos.email && memberInfos.password){
        api.post('members/signin',{body: memberInfos}).then(data => {
        if (data.message){
            console.log(data.message)
        } else {
            session.setSession(data.member, data.token)
            user.connect()
            router.push('/')
        }
      }).catch( e => {
            console.error(e)
      })
    } else {
        console.log("Veuillez remplir les champs")
    }
}
</script>


<template>
    <div id="login">
        <h1>Connexion</h1>

        <form @submit.prevent="login">
            <div class="form-input">
                <label for="email">Email</label>
                <input type="email" name="email" v-model="memberInfos.email">
            </div>
            <div class="form-input">
                <label for="password">Mot de passe</label>
                <!-- <input type="password" name="password" v-model="memberInfos.password"> -->
                <Password v-model="memberInfos.password" toggleMask></Password>
            </div>
            <div class="form-btn">
                <button>Se connecter</button>
                <router-link to="/register">S'inscrire</router-link>
            </div>
        </form>
    </div>
</template>


<style lang="scss">
</style>
