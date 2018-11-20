import Vue from 'vue'
import App from './App'

import 'vant/lib/index.css'
import {
  Row,
  Col,
  Tab,
  Tabs,
  List,
} from 'vant';

Vue.use(Row)
  .use(Col)
  .use(Tab)
  .use(Tabs)
  .use(List)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
