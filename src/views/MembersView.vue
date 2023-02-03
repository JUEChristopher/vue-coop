<script setup>

const members = ref([])

api.get('members')
.then(data => {
    if(data.message){
        console.log(data.message)
    } else{
        console.log(data)
        members.value = data
    }
}).catch(e => {
    console.error(e)
})
</script>


<template>
    <main>
        <h1>Membres</h1>
        <section id="members-list">

            <div v-for="member in members" class="member-card">
                <p>{{ member.fullname }}</p>
                <small>{{ member.email }}</small>
            </div>
        </section>
    </main>
</template>


<style lang="scss" scoped>
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px 0px;
        color: var(--text-color);

        h1{
            font-size: 24px;
            align-self: flex-start;
        }

        #members-list{
            width: clamp(300px, 100%, 800px);
            display: flex;
            flex-direction: column;
            gap: 25px 0px;

            .member-card{
                display: flex;
                flex-direction: column;
                gap: 12px 0px;
                width: 100%;
                height: auto;
                padding: 32px 25px;
                background-color: var(--primary-color);
                border: 1px solid var(--accentuation-color);
                border-radius: 4px;

                p{
                    font-size: 16px;
                    font-weight: 600;
                }

                small{
                    font-size: 14px;
                }
            }
        }

    }
</style>