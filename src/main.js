import Vue from 'vue'
import App from './App.vue'
import TheNoSidebar from "./layouts/TheNoSidebar";
import TheDefault from "./layouts/TheDefault";
import axios from 'axios'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Vue.config.productionTip = false
Vue.component('default-layout', TheDefault)
Vue.component('no-sidebar-layout', TheNoSidebar)
import 'iview/dist/styles/iview.css';
import Iview from "iview"
Vue.use(Iview)
import router from './routes'
import store from './stores/index'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
