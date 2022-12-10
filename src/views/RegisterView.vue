<script setup>

const router = inject('router')

const member = reactive({
  fullname: '',
  email: '',
  password: '',
})

const error = ref('');
let register = () => {
  api.post('members',{body: member}).then(data => {
    if (data.message){
      console.log(data.message)
    } else {
      router.push('/login')
    }
  }).catch( e => {
    console.error(e)
  })
}
</script>


<template>
    <div id="register">
        <h1>Inscription</h1>

        <form @submit.prevent="register">
            <div class="form-input">
                <label for="fullname">Nom complet</label>
                <input type="text" name="fullname" v-model="member.fullname">
            </div>
            <div class="form-input">
                <label for="email">Email</label>
                <input type="email" name="email" v-model="member.email">
            </div>
            <div class="form-input">
                <label for="password">Mot de passe</label>
                <input type="password" name="password" v-model="member.password">
            </div>
            <div class="form-btn">
                <button>S'inscrire</button>
                <router-link to="/login">Se connecter</router-link>
            </div>
        </form>
    </div>
</template>


<style lang="scss" scoped>

</style>