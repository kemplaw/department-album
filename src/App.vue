<template>
  <div id="app">
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
