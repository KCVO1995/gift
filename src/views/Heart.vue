<template>
  <div class="global">
    <div class="placeholder"></div>
    <myText class="text"/>
    <div class="placeholder"></div>
    <div class="heart">
      <router-link to="/time" class="a">
        <img src="../assets/heart.png" alt="heart">
      </router-link>
    </div>
    <div class="to">
      请点击可爱的小心心
    </div>
  </div>
</template>

<script lang='ts'>
  import myText from '@/components/myText.vue'

  export default {
    components: {myText},
    name: 'Heart'
  };
</script>

<style lang='scss'>
  .global {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    > .heart {
      width: 100%;
      height: 40vh;
      > .a > img {
        width: 218px;
        animation: 1s linear infinite movie;
      }
      @keyframes movie {
        0% {
          width: 218px;
        }
        50% {
          width: 150px;
        }
        100% {
          width: 218px;
        }
      }
    }
    > .placeholder {
      width: 100%;
      height: 5vh;
    }
    > .to {
      font-size: 18px;
      font-weight: bold;
      flex-grow: 1;
    }
  }

</style>