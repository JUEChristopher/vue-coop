<script setup>

const user = inject('user')

</script>

<template>
    <div class="navbar">
        <div class="nav-left">
            <router-link to="/">Accueil</router-link>
            <router-link to="/members">Membres</router-link>
        </div>
        <div class="nav-right">
            <router-link v-if="!user.isConnected" to="/login">
                <Button label="Connexion" />
            </router-link>
            <router-link v-if="user.isConnected" to="/logout">
                <Button label="Déconnexion" />
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #531EFF;
    background-color: #20086E;
    padding: 12px 25px;

    a{
        color: #EBF4FF;
    }

    .nav-left{
        display: flex;
        gap: 28px;
    }
}
</style>

