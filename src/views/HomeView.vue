<script setup>
const user = inject('user')

</script>

<template>
  <main>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </main>
</template>

<style lang="scss" scoped>
  main{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    
    .card{
      min-width: 325px;
      height: 175px;
      background-color: var(--primary-color);
      border-radius: 4px;
    }
  }
</style>
