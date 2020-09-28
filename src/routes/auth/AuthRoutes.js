
import Login from '../../views/auth/Login.vue'
import Logout from '../../views/auth/Logout.vue'
import users from "../../views/dossierUsers/users.vue"

const AuthRoutes = [
    {
        path: '/connexion',
       name:"Login",
       meta: {layout: "no-sidebar"},
       component: Login
     },
     {
      path: '/logout',
     name:"Logout",
     component: Logout,
     meta: { requiresAuth: true }  

   },
   {
     path:"/creation-user",
     name:"uesr",
     component:users
   }
   
]

export default AuthRoutes;
