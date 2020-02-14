<template>
  <div id="app">
    <router-view/>
    <audio src="assets/song.mp3" autoplay loop />
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";

  body {
    font-family: $Font-hei;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    text-align: center;
    color: #333;
  }


</style>
