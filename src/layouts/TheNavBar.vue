<template>
    <div>
        <!-- Sidebar -->
        <div class="sidebar sidebar-style-2">
            <div class="sidebar-wrapper scrollbar scrollbar-inner">
                <div class="sidebar-content">
                    <div class="user">
                        <div class="avatar-sm float-left mr-2">
                            <img src="as/assets/img/profile.jpg" alt="..." class="avatar-img rounded-circle">
                        </div>
                        <div class="info">
                            <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
								<span>
								<span style="text-align:center;color:orange;"></span>
										<span class="user-level" style="text-align:center;font-size:14px"></span>
									<span class="caret"></span>
								</span>
                            </a>
                            <div class="clearfix"></div>

                            <div class="collapse in" id="collapseExample">
                                <ul class="nav">
                                    <li>
                                        <a href="#profile">
                                            <span class="link-collapse">My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#edit">
                                            <span class="link-collapse">Edit Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#settings">
                                            <span class="link-collapse">Settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul class="nav nav-primary">
                        
                        <li class="nav-item active" :class="{active: active_el == 11 }" @click.prevent="TableauBordGenerale">
         <router-link :to="{name:''}">
          <i class="fas fa-tachometer-alt"></i>
            <p>DASHBORD</p>
         </router-link>

       </li>
       <li class="nav-item" :class="{active: active_el == 13 }" @click.prevent="sousMenuBudget">
         <router-link :to="{name:''}">
          <i class="fas fa-home"></i>
            <p> DOCTOR</p>
         </router-link>

       </li>             
            <li class="nav-item" :class="{active: active_el == 10 }" @click.prevent="sousMenuMissions">
         <router-link :to="{name:''}">
          <i class="fas fa-user-tie"></i>
            <p>PATIENT</p>
         </router-link>

       </li>
                       <li class="nav-item" :class="{active: active_el == 9 }" @click.prevent="sousMenuPersonnel">
         <router-link :to="{name:''}">
          <i class="fas fa-home"></i>
            <p> Setting</p>
         </router-link>

       </li>
              
         
                      <li  class="nav-item">
                     <a href="#edit" @click.prevent="logoutUser()">
                       <i class="flaticon-power" style=""></i>
                      <span>Se deconnecter</span>
                         </a>
                          </li>
                       
                       
                        
                        
                      
                    </ul>
                </div>
            </div>
        </div>
        <!-- End Sidebar -->
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex"
import {admin, user} from "../repositories/Auth"
    export default {
        name: "TheNavBar",

        created(){},
        computed:{
            
             ...mapState('MenuPara', {
    active_el: state => state.active_el
}), 
// afficherNameuser(){
//   let objetName = localStorage.getItem('Users');
//   let objetJson = JSON.parse(objetName);
//   return objetJson.name
// },
// afficherRoleUser(){
//   let objet = localStorage.getItem('Users');
//   let objetJson = JSON.parse(objet);
//   return objetJson.user_role.role.libelle
// }, 
        },
        methods:{
            ...mapMutations('MenuPara', ['activate']),
            ...mapActions('Utilisateurs', ['logoutUser']),
            admin:admin,
            user:user,

            TableauBordGenerale(){
        this.activate(11)
        this.$router.push({
        name: 'autorisationTableau'
        })
    },
    
sousMenuMissions(){
        this.activate(10)
        this.$router.push({
        name: 'gestion'
        })
    },
    sousMenuPersonnel(){
        this.activate(9)
        this.$router.push({
        name: 'mission'
        })
    },
     sousMenuBudget(){
        this.activate(13)
        this.$router.push({
        name: 'budget'
        })
    },
        }
    }
</script>

<style scoped>

</style>