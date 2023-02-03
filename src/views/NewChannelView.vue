<script setup>
const router = inject('router')
const session = inject('session')

const channel = reactive({
    label: '',
    topic: '',
    token: session.sessionData.token,
})

let newChannel = () => {
    api.post('channels', { body: channel }).then(data => {
        if (data.message) {
            console.log(data.message)
        } else {
            router.push('/')
        }
    }).catch(e => {
        console.error(e)
    })
}

</script>


<template>
    <main>
        <div id="new-channel-card">
            <h1>Nouvelle conversation</h1>

            <form @submit.prevent="newChannel">
                <div class="form-input">
                    <label for="title">Etiquette</label>
                    <input type="text" name="title" v-model="channel.label">
                </div>
                <div class="form-input">
                    <label for="topic">Sujet</label>
                    <input type="text" name="topic" v-model="channel.topic">
                </div>
                <button>Créer</button>
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

    #new-channel-card {
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

            button {
                width: 100%;
                border-radius: 4px;
                background-color: #531EFF;
                color: #EBF4FF;
                font-size: 16px;
                border: 0;
                padding: 10px 20px;
        }
        }
    }
}
</style>