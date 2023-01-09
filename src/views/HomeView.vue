<script setup>

const user = inject('user')
</script>

<template>
  <Navbar/>
  <div id="home">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </div>
</template>

<style scoped lang="scss">
  #home{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin: 25px 50px;

    .card{
      min-width: 325px;
      height: 175px;
      background-color: #20086E;
      border-radius: 4px;
    }
  }
</style>
