<template>
  <div class="container" ref="scrollHook">
    <div class="wrapper">
      <div class="main-img-wrapper">
        <div class="main-img"></div>
        <info-list></info-list>
      </div>
      <van-tabs>
        <van-tab
          v-for="tab in tabList"
          :title="tab.name"
          :key="tab.name"
        >
          <van-list
            v-if="tab.list.length"
          >
            <van-row
              type="flex"
              align="middle"
              class="user-list-wrapper"
            >
              <van-col class="avatar-wrapper">
                <img
                  class="avatar"
                  src="https://www.baidu.com/link?url=PFqM58283Ee6DqRrpJ5BYTG74amQV4BXRfZN3nHqrwCIAd1YYA6Y3edceZZG5VVJHIt_z2-koxA3CHlWgF-m7TIpeM8eeBgxpF3yIVX4SQ5wgimL3sA_UQ47j5sP7dHyQnG-bwpbURqzX0FucWxjq4fTHR8Sayj8YSvP4C0Z0nRa5SU-d5ItKqwWzWguezNALcJdYzFLs2_u8-F-ENBaWvdjbwDuEEwa6lmuzxFszcHpAEijT8qkX3Y0sRfOy-lG4LkUXLTUVTq-CQlfDHF1ehjFKCk5nMx072cFge6qoglPjurWBPWcLEpTzOYRfuz8jk4PP0viOn56zdVjxq0pOn6PkDoU-r8bSgflFEmc76yYfDLDRGpmw-5aExeswX-0PmszkpS2K6QJC0zSDhH9hLfw-YFjiKhU4akBgq67jl4TBxla17pliJr65qsMF862DMbfjhQO1WqJ8TyXfZevy2YAVO2DgwJ5aYXxLAaQxmcbum-usj7km7pgWT3-56U07gpKr9B_obX2gPnogXNzEPj196nEZlWmJu5uZnJpncrLbS_y7hbCcit2EoOD51rZimv-TD0HDg72ehzs5Zk1vA39vTkUGSwxigOP8c9u-BBGpi3L5lMUCxkZnT0_ueobYEi3ZCryVPoivJ9L4yb834UHrY6RDEtEMkbyogX-eTviYHWf7XcujJ1a1Nek40985a5fAc5mFW2PEiwg_qSFcJ2YUGDIPhtOjB_2x1mTQ5i&timg=https%3A%2F%2Fss0.bdstatic.com%2F94oJfD_bAAcT8t7mm9GUKT-xh_%2Ftimg%3Fimage%26quality%3D100%26size%3Db4000_4000%26sec%3D1542724344%26di%3D9a5001b9c66974177b1f8d5cb6c99224%26src%3Dhttp%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3Dc14266c667d0f703e6b295d438fb5148%2Fdfcc5343ad4bd11338a187e35fafa40f4afb054f.jpg&click_t=1542724349445&s_info=1903_947&wd=&eqid=88781d6a00016617000000035bf41af7"
                >
              </van-col>
              <van-col span="24" class="desc-wrapper">
                <info-list
                  :is-sub="true"
                ></info-list>
              </van-col>
            </van-row>
            <van-row
              type="flex"
              align="middle"
              class="user-list-wrapper"
            >
              <van-col class="avatar-wrapper">
                <img
                  class="avatar"
                  src="https://www.baidu.com/link?url=PFqM58283Ee6DqRrpJ5BYTG74amQV4BXRfZN3nHqrwCIAd1YYA6Y3edceZZG5VVJHIt_z2-koxA3CHlWgF-m7TIpeM8eeBgxpF3yIVX4SQ5wgimL3sA_UQ47j5sP7dHyQnG-bwpbURqzX0FucWxjq4fTHR8Sayj8YSvP4C0Z0nRa5SU-d5ItKqwWzWguezNALcJdYzFLs2_u8-F-ENBaWvdjbwDuEEwa6lmuzxFszcHpAEijT8qkX3Y0sRfOy-lG4LkUXLTUVTq-CQlfDHF1ehjFKCk5nMx072cFge6qoglPjurWBPWcLEpTzOYRfuz8jk4PP0viOn56zdVjxq0pOn6PkDoU-r8bSgflFEmc76yYfDLDRGpmw-5aExeswX-0PmszkpS2K6QJC0zSDhH9hLfw-YFjiKhU4akBgq67jl4TBxla17pliJr65qsMF862DMbfjhQO1WqJ8TyXfZevy2YAVO2DgwJ5aYXxLAaQxmcbum-usj7km7pgWT3-56U07gpKr9B_obX2gPnogXNzEPj196nEZlWmJu5uZnJpncrLbS_y7hbCcit2EoOD51rZimv-TD0HDg72ehzs5Zk1vA39vTkUGSwxigOP8c9u-BBGpi3L5lMUCxkZnT0_ueobYEi3ZCryVPoivJ9L4yb834UHrY6RDEtEMkbyogX-eTviYHWf7XcujJ1a1Nek40985a5fAc5mFW2PEiwg_qSFcJ2YUGDIPhtOjB_2x1mTQ5i&timg=https%3A%2F%2Fss0.bdstatic.com%2F94oJfD_bAAcT8t7mm9GUKT-xh_%2Ftimg%3Fimage%26quality%3D100%26size%3Db4000_4000%26sec%3D1542724344%26di%3D9a5001b9c66974177b1f8d5cb6c99224%26src%3Dhttp%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3Dc14266c667d0f703e6b295d438fb5148%2Fdfcc5343ad4bd11338a187e35fafa40f4afb054f.jpg&click_t=1542724349445&s_info=1903_947&wd=&eqid=88781d6a00016617000000035bf41af7"
                >
              </van-col>
              <van-col span="24" class="desc-wrapper">
                <info-list
                  :is-sub="true"
                ></info-list>
              </van-col>
            </van-row>
          </van-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import infoList from './info-list';

  export default {
    name: 'home',
    components: {
      infoList,
    },
    props: {
      tabList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    mounted() {
      this.$nextTick(_ => {
        this.initBScroll();
      })
    },
    methods: {
      initBScroll() {
        let wrapper = this.$refs.scrollHook;
        let scroll = new BScroll(wrapper, {
          click: true
        });
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    height 100%
    overflow hidden

  .wrapper
    .main-img-wrapper
      .main-img
        height 417px
        background #1989fa

  .user-list-wrapper
    padding 18px 0

  .avatar-wrapper
    display flex
    align-items center
    padding-left 20px
    .avatar
      display inline-block
      width 110px
      height 110px
      border 2px solid #1989fa
      box-shadow 0 2px 2px 1px rgba(0, 0, 0, .2)
</style>