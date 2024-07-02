import Vue from "vue";
import VueRouter from "vue-router";
import store from "../stores/index"


// authentitification 
import AuthRoutes from './auth/AuthRoutes'
import AppRoutes from "./app/AppRoutes";


Vue.use(VueRouter);

const regroupementDesRoutes = [
  AuthRoutes,
    AppRoutes

];
const routes = [].concat(...regroupementDesRoutes);


const router = new VueRouter({
  routes,
    mode: "history"
});

router.beforeEach((to, from, next) => {

  if (to.path === '/' && !store.state.Utilisateurs.isLoggedIn) {
      // redirect to login page
    //console.log("Connection en cours")
      next({ name: 'TableauBordGenerale' })
      return
  }


  if(to.path === '/') {
    next({ name: 'Login' })
     return
 }

 next()
})

export default router;
