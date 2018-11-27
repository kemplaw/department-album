<template>
  <div class="container" ref="scrollHook">
    <div class="wrapper">
      <div class="main-img-wrapper">
        <div 
          class="main-img"
          :style="fmtMainAvatar"
        ></div>
        <info-list
          :user-info="main_user"
        ></info-list>
      </div>
      <van-tabs
        sticky
        swipeable
        @change="handleTagChange"
      >
        <van-tab
          v-for="tab in tabList"
          :title="tab.name"
          :key="tab.name"
        >
          <van-list>
            <van-row
              type="flex"
              align="middle"
              class="user-list-wrapper"
              :key="member.name"
              v-for="(member) in tab.list"
            >
              <van-col class="avatar-wrapper">
                <img
                  class="avatar"
                  :src="avatar(tab.id, member.id)"
                >
              </van-col>
              <van-col span="24" class="desc-wrapper">
                <info-list
                  :user-info="member"
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
import BScroll from "better-scroll";
import infoList from "./info-list";

export default {
  name: "home",
  components: {
    infoList
  },
  props: {
    tabList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    fmtMainAvatar() {
      let {did, id} = this.main_user;
      return {
        backgroundImage: `url(/static/avatar/${did}_${id}_b.png)`,
      }
    }
  },
  data() {
    return {
      main_user: {}
    };
  },
  mounted() {
    this.$nextTick(_ => {
      // this.initBScroll();
      this.main_user = this.tabList[1].up_data || {};
    });
  },
  methods: {
    initBScroll() {
      let wrapper = this.$refs.scrollHook;
      let scroll = new BScroll(wrapper, {
        click: true
      });
    },
    avatar(did, mid) {
      return `/static/avatar/${did}_${mid}.png`;
    },
    handleTagChange(index, title) {
      this.main_user = this.tabList[index].up_data || {};
    }
  }
};
</script>

<style lang="stylus" scoped>
/* .container
  width 100%
  height 100%
  overflow hidden */

.wrapper
  .main-img-wrapper
    .main-img
      height 417px
      background-color #1989fa
      background-repeat no-repeat
      background-position center center
      background-size cover

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
    box-shadow 0 2px 2px 1px rgba(0, 0, 0, 0.2)
</style>