<template>
  <div id="app">
    <Home
      :tab-list="tabList"
    ></Home>
  </div>
</template>

<script>
import Home from '@componnets/home';
import {tabList} from '@utils';

export default {
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      tabList,
    }
  }
}
</script>
