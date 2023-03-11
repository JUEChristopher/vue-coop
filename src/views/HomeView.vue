<script setup>
const session = inject('session')

const channels = ref([])

api.get('channels?token=' + session.sessionData.token)
.then(data => {
    if(data.message){
        console.log(data.message)
    } else{
        console.log(data)
        channels.value = data
    }
}).catch(e => {
    console.error(e)
})

</script>


<template>
  <main>
    <router-link id="new-channel-btn" to="/new_channel">
      <Button label="Nouvelle conversation" />
    </router-link>
    <div id="channels-list">
      <router-link :to="{name: 'channel', params: { id: channel.id}}" v-for="channel in channels">
        <div class="channel-card">
          <h2>{{ channel.label }}</h2>
          <p>{{ channel.topic }}</p>
        </div>
      </router-link>
    </div>

  </main>
</template>


<style lang="scss" scoped>
  main{
    display: flex;
    flex-direction: column;
    gap: 28px 0px;
    color: var(--text-color);

    #new-channel-btn{
      width: fit-content;
    }

    #channels-list{
      display: flex;
      flex-wrap: wrap;
      gap: 24px;

      .channel-card{
        display: flex;
        flex-direction: column;
        gap: 12px 0px;
        justify-content: center;
        align-items: center;
        min-width: 325px;
        height: 175px;
        background-color: var(--primary-color);
        border: 1px solid var(--accentuation-color);
        border-radius: 4px;

        h2{
          font-size: 20px;
          font-weight: 600;
        }

        h3{
          font-size: 16px;
        }
      }
    }
    
  }
</style>
