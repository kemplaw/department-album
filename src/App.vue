<template>
  <div id="app">
    <!-- <van-button @click="isView = true">查看效果</van-button>
    <van-button @click="isView = false">添加数据</van-button>

    <div v-show="isView">
      <Home :tabList="tabList"></Home>
    </div>

    <div v-show="!isView">
      <Forms></Forms>
    </div> -->
      <Home :tabList="tabList"></Home>

  </div>
</template>

<script>
import { departments } from "@utils";
import Home from "@componnets/home";
import Forms from "@componnets/forms";

export default {
  name: "App",
  components: {
    Home,
    Forms
  },
  computed: {
    dyComponent() {
      return this.isView ? Home : Forms;
    }
  },
  data() {
    return {
      isView: false,
      tabList: departments
    };
  }
};
</script>
