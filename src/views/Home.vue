<template>
  <div>
    <img src="../assets/birthday.png" alt="birthday"/>
    <div class="options">
      <span>小霞，请收下今年特殊的礼物吧</span>
      <span>
        <router-link to="/heart">嗯嗯，好的</router-link>
      </span>
      <span>
        <router-link to="/reject">不要了</router-link>
      </span>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Home",
  }
</script>

<style lang="scss" scoped>
  img {
    width: 290px;
    margin: 36px auto 0;
  }
  .options {
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 200px;
    font-size: 18px;
    font-weight: bold;
    > span {
      display: block;
    }
  }
</style>
