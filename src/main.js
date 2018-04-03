// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import axios from 'axios'
import {Ax} from '../static/util/ajax'
import ElementUI from 'element-ui';
import 'lib-flexible/flexible'
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$ajax = axios
Vue.prototype.$Ax = new Ax('get');

Vue.use(ElementUI);
// Vue.use(axios)

console.log('$ax',this.$Ax)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#ppp',
  router,
  // template: '<App/>',
  store,
  components: { App },
  render:h=>h(App)
})
