<template>
  <div id="app">
    <Home
      :tab-list="tabList"
    ></Home>
    <!--<Forms></Forms>-->
  </div>
</template>

<script>
import Home from '@componnets/home';
import Forms from '@componnets/forms';
import {tabList} from '@utils';

export default {
  name: 'App',
  components: {
    Home,
    Forms
  },
  data() {
    return {
      tabList,
    }
  }
}
</script>
