<template>
  <div>
    <pre id="x">{{content}}</pre>
  </div>
</template>
<script lang='javascript'>
  export default {
    name: "myText",
    data() {
      return {
        content: "",
        poetry:
          `所爱隔山海，山海皆可平

入目无别人，四下皆是你

你是年少的欢喜。这句话，反过来，也是你

我想，把自己涂黑

这样，我就可以，暗中保护你了

跟你说了多少遍了，抱怨没用，抱我

你是我这一生，等了半世，未拆的礼物`
      }
    },
    mounted() {
      let n = 0
      const id = setInterval(() => {
        n += 1
        this.content = this.poetry.substr(0, n)
        if (n >= this.poetry.length) {
          clearInterval(id)
        }
      }, 150)
    },
    updated() {
      this.$nextTick(() => {
        const pre = document.getElementById("x")
        pre.scrollTop = pre.scrollHeight
      })
    }
  }
</script>

<style lang='scss' scoped>
  @import "~@/assets/style/helper.scss";

  .text {
    > pre {
      width: 100vh;
      height: 40vh;
      overflow: auto;
      font-size: 16px;
      font-family: $Font-hei;
      font-weight: bold;

    }
  }
</style>