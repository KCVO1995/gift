<template>
  <div class="global">
    <div class="title">
      亲爱的，我喜欢你已经
    </div>
    <div class="time">
      {{myDay}}天{{myHour}}时{{myMin}}分{{mySecond}}秒
    </div>
    <div class="tree">
      <img src="../assets/tree.png" alt="tree">
    </div>
    <div class="options">
      <span>
        <router-link to="/heart">上一页</router-link>
       </span>
      <span>
        <router-link to="/home">回到首页</router-link>
      </span>
    </div>
  </div>
</template>

<script lang='ts'>

  export default {
    name: 'Time',
    data() {
      return {
        myDay: 0,
        myHour: 0,
        myMin: 0,
        mySecond: 0
      };
    },
    mounted() {
      setInterval(() => {
        const newDate = new Date();
        const ourDate = new Date('2018-6-3');
        this.myDay = parseInt(Math.abs(newDate - ourDate) / 1000 / 60 / 60 / 24);
        this.myHour = newDate.getHours();
        this.myMin = newDate.getMinutes();
        this.mySecond = newDate.getSeconds();
      }, 100);
    }
  };
</script>

<style lang='scss' scoped>
  .global {
    display: flex;
    flex-direction: column;

    > .title, > .time {
      height: 20vh;
      line-height: 20vh;
      font-size: 26px;
      font-weight: bold;
    }

    > .time {
      font-size: 22px;
    }

    > .tree {
      height: 50vh;

      > img {
        width: 280px;
      }
    }
    .options {
      width: 80%;
      display: flex;
      justify-content: space-between;
      > span {
        display: block;
        line-height: 10vh;
        font-weight: bold;
      }
    }


  }

</style>