<template>
  <div class="info-container" :class="[isSub ? 'is-sub' : '']">
    <h4 class="title">{{userInfo.nickname}}（{{userInfo.position}}）</h4>
    <div class="desc-list-wrapper">
      <div class="desc-item">来自哪里：{{userInfo.address}}</div>
      <div class="desc-item">一句话评价自己的性格：{{userInfo.desc}}</div>
      <div class="desc-item">星座：{{userInfo.constellation}}</div>
      <div class="desc-item">爱好：{{userInfo.like}}</div>
      <div class="desc-item">最喜欢的美食：{{userInfo.food}}</div>
      <div class="desc-item">喜欢的电影类型：{{userInfo.movie}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "info-list",
    props: {
      userInfo: {
        type: Object,
        default() {
          return {}
        }
      },
      isSub: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .info-container
    padding 0 20px 35px
    .title
      margin 20px 0 15px
    .desc-list-wrapper
      .desc-item
        margin 5px 0
        font-size 12px
    &.is-sub
      padding 0 18px 0
      .title
        margin-top 0
        font-size 14px
      .desc-list-wrapper
        .desc-item
          font-size 9px
</style>