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
import VuejsDialog from 'vuejs-dialog';
// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import VueLoading from 'vuejs-loading-plugin'
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)
Vue.use(Iview)
import router from './routes'
import store from './stores/index'

import Notifications from 'vue-notification'
Vue.use(Notifications)

Vue.use(VueLoading, {
  dark: true, // default false
  text: 'Patientez ...', // default 'Loading'
  //loading: true, // default false
 // background: 'rgb(255,255,255)', // set custom background
})
// Tell Vue to install the plugin.
// Vue.use(VuejsDialog);
Vue.use(VuejsDialog, {
  html: true,
  loader: true,
  okText: 'Continuer',
  cancelText: 'Annuler',
  animation: 'bounce'
});

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
store.$app = app ;
