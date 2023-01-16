<script setup>
const router = inject('router')
const session = inject('session')
const user = inject('user')

const memberInfos = reactive({
    email: 'christopher.jue@outlook.com',
    password: 'Fovuko)5'
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
    <Navbar/>
    <main>
        <div id="login-card">
            <h1>Connexion</h1>
    
            <form @submit.prevent="login">
                <div class="form-input">
                    <label for="email">Email</label>
                    <input type="email" name="email" v-model="memberInfos.email">
                </div>
                <div class="form-input">
                    <label for="password">Mot de passe</label>
                    <input type="password" name="password" v-model="memberInfos.password">
                </div>
                <div id="submission">
                    <Button label="Se connecter" />
                    <small>
                        Pas encore inscrit ?
                        <router-link to="/register">
                            S'inscrire
                        </router-link>
                    </small>
                </div>
            </form>
        </div>
    </main>
</template>


<style lang="scss" scoped>
    main{
        color: var(--text-color);
        margin-top: 115px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        #login-card{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 45px;
            padding: 45px 50px;
            background-color: var(--primary-color);
            border: 1px solid var(--accentuation-color);
            border-radius: 4px;

            h1{
                font-size: 24px;
                font-weight: 500;
            }

            form{
                display: flex;
                flex-direction: column;
                gap: 25px;

                .form-input{
                    display: flex;
                    flex-direction: column;
                }

                #submission{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;

                    small{
                        font-size: 14px;
                    }
                }
            }
        }
    }

</style>
