<template>
  <div>
    <div class="global">
      <div>
        <router-link to="/home">
          小姐姐，再考虑一下吧<br/>
          爱你么么哒
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  export default {
    name: 'Reject'
  };
</script>

<style lang='scss' scoped>

  .global {
    height: 100vh;
    display: flex;
    font-size: 20px;
    font-weight: bold;
    flex-direction: column;
    justify-content: center;
  }
</style>