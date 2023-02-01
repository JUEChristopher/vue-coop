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
                    <button>Se connecter</button>
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
            padding: 45px 60px;
            background-color: var(--primary-color);
            border: 1px solid var(--accentuation-color);
            border-radius: 4px;

            h1{
                font-size: 24px;
                font-weight: 500;
            }

            form{
                width: 280px;
                display: flex;
                flex-direction: column;
                gap: 25px;

                .form-input{
                    display: flex;
                    flex-direction: column;
                    gap: 12px 0px;

                    input{
                        background-color: var(--secondary-color);
                        color: var(--text-color);
                        font-size: 16px;
                        padding: 10px 18px;
                        border: 0;
                        border-radius: 4px;
                        // box-shadow: 0px 0px 5px 2px var(--accentuation-color);
                        outline: 1px solid var(--accentuation-color);

                        &:focus{
                            box-shadow: 0px 0px 5px 2px var(--accentuation-color);
                            transition: 0.1s ease-in-out;

                        }
                    }
                }

                #submission{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;

                    button{
                        width: 100%;
                        border-radius: 4px;
                        background-color: #531EFF;
                        color: #EBF4FF;
                        font-size: 16px;
                        border: 0;
                        padding: 10px 20px;
                    }

                    small{
                        font-size: 14px;
                    }
                }
            }
        }
    }

</style>
