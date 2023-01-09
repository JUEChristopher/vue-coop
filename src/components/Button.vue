<script setup>
defineProps(['label'])

</script>

<template>
    <p>{{ label }}</p>
</template>

<style scoped lang="scss">
    p{
        width: fit-content;
        border-radius: 4px;
        background-color: #531EFF;
        color: #EBF4FF;
        padding: 10px 20px;
    }
</style>