<script setup>
const router = inject('router')

const member = reactive({
  fullname: '',
  email: '',
  password: '',
})

const error = ref('');
let register = () => {
  api.post('members', { body: member }).then(data => {
    if (data.message) {
      console.log(data.message)
    } else {
      router.push('/login')
    }
  }).catch(e => {
    console.error(e)
  })
}
</script>


<template>
  <main>
    <div id="register-card">
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
        <div id="submission">
          <button>S'inscrire</button>
          <small>
            Déjà un compte ?
            <router-link to="/login">
              Se connecter
            </router-link>
          </small>
        </div>
      </form>
    </div>
  </main>
</template>


<style lang="scss" scoped>
main {
  color: var(--text-color);
  margin-top: 115px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #register-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
    padding: 45px 60px;
    background-color: var(--primary-color);
    border: 1px solid var(--accentuation-color);
    border-radius: 4px;

    h1 {
      font-size: 24px;
      font-weight: 500;
    }

    form {
      width: 280px;
      display: flex;
      flex-direction: column;
      gap: 25px;

      .form-input {
        display: flex;
        flex-direction: column;
        gap: 12px 0px;

        input {
          background-color: var(--secondary-color);
          color: var(--text-color);
          font-size: 16px;
          padding: 10px 18px;
          border: 0;
          border-radius: 4px;
          // box-shadow: 0px 0px 5px 2px var(--accentuation-color);
          outline: 1px solid var(--accentuation-color);

          &:focus {
            box-shadow: 0px 0px 5px 2px var(--accentuation-color);
            transition: 0.1s ease-in-out;

          }
        }
      }

      #submission {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        button {
          width: 100%;
          border-radius: 4px;
          background-color: #531EFF;
          color: #EBF4FF;
          font-size: 16px;
          border: 0;
          padding: 10px 20px;
        }

        small {
          font-size: 14px;
        }
      }
    }
  }
}
</style>