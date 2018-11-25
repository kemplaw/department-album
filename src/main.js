import Vue from 'vue'
import App from './App'

import 'vant/lib/index.css'
import './stylus/index.styl'

import {
  Row,
  Col,
  Tab,
  Tabs,
  List,
  Button
} from 'vant';

Vue.use(Row)
  .use(Col)
  .use(Tab)
  .use(Tabs)
  .use(List)
  .use(Button)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
