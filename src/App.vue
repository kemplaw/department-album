<template>
  <div id="app">
    <Home
      :tab-list="tabList"
    ></Home>
    <!-- <Forms></Forms> -->
  </div>
</template>

<script>
import {departments} from '@utils';
import Home from '@componnets/home';
import Forms from '@componnets/forms';

export default {
  name: 'App',
  components: {
    Home,
    Forms
  },
  data() {
    return {
      tabList: departments
    }
  }
}
</script>
