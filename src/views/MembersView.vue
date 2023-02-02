<script setup>

api.get('members')
.then(data => {
    if(data.message){
        console.log(data.message)
    } else{
        console.log(data)
    }
}).catch(e => {
    console.error(e)
})
</script>


<template>
    <main>
        <h1>Membres</h1>
        <section id="members-list">
            <div>Div 1</div>
            <div>Div 2</div>
            <div>Div 3</div>
        </section>
    </main>
</template>


<style lang="scss" scoped>
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        color: var(--text-color);

        h1{
            font-size: 24px;
            align-self: flex-start;
        }

        #members-list{
            display: flex;
            flex-direction: column;
            gap: 25px 0px;
            background-color: rgb(184, 139, 139);
            width: 300px;

            div{
                background-color: var(--primary-color);
                border: 1px solid var(--accentuation-color);
                border-radius: 4px;
            }
        }

    }
</style>