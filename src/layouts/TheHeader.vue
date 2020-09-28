<template>
    <div>
        <!-- Logo Header -->
        <div class="logo-header" data-background-color="blue">

            <a href="index.html" class="logo">
                <!-- <img src="as/assets/img/logo.svg" alt="navbar brand" class="navbar-brand"> -->
                <p style="color:white;" class="navbar-brand">MISSIONS</p>
            </a>
            <button class="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon">
						<i class="icon-menu"></i>
					</span>
            </button>
            <button class="topbar-toggler more"><i class="icon-options-vertical"></i></button>
            <div class="nav-toggle">
                <button class="btn btn-toggle toggle-sidebar">
                    <i class="icon-menu"></i>
                </button>
            </div>
        </div>
        <!-- End Logo Header -->
        <!-- Navbar Header -->
        <nav class="navbar navbar-header navbar-expand-lg" data-background-color="blue2">
            <div>
         <sousMenuMissions v-if="active_el == 10"></sousMenuMissions>
         <TableauBordGenerale v-if="active_el == 12"></TableauBordGenerale>
         <sousMenuPersonnel v-if="active_el == 9"></sousMenuPersonnel>
         <sousMenuBudget v-if="active_el == 13"></sousMenuBudget>
         
        <!-- <sousMenuGestionPerimetre v-if="active_el == 13"></sousMenuGestionPerimetre>
        <sousMenuGestionRessource v-if="active_el == 14"></sousMenuGestionRessource>
        <sousMenuGestionApprovisionnement v-if="active_el == 15"></sousMenuGestionApprovisionnement>
        <videNarbarCliquantDemarrer v-if="active_el == 16"></videNarbarCliquantDemarrer>
        <videNarbarCliquantPanification v-if="active_el == 18"></videNarbarCliquantPanification>
        <videNarbarCliquantExecution v-if="active_el == 19"></videNarbarCliquantExecution>
        <videNarbarCliquantMaitrisse v-if="active_el == 20"></videNarbarCliquantMaitrisse> -->
    </div>

            <div class="container-fluid">
               
                <ul class="navbar-nav topbar-nav ml-md-auto align-items-center">
                    <li class="nav-item toggle-nav-search hidden-caret">
                        <a class="nav-link" data-toggle="collapse" href="#search-nav" role="button" aria-expanded="false" aria-controls="search-nav">
                            <i class="fa fa-search"></i>
                        </a>
                    </li>
                  
                    <!-- <li class="nav-item dropdown hidden-caret">
                        <a class="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-bell"></i>
                            <span class="notification">4</span>
                        </a>
                        <ul class="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
                            <li>
                                <div class="dropdown-title">You have 4 new notification</div>
                            </li>
                            <li>
                                <div class="notif-scroll scrollbar-outer">
                                    <div class="notif-center">
                                        <a href="#">
                                            <div class="notif-icon notif-primary"> <i class="fa fa-user-plus"></i> </div>
                                            <div class="notif-content">
													<span class="block">
														New user registered
													</span>
                                                <span class="time">5 minutes ago</span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div class="notif-icon notif-success"> <i class="fa fa-comment"></i> </div>
                                            <div class="notif-content">
													<span class="block">
														Rahmad commented on Admin
													</span>
                                                <span class="time">12 minutes ago</span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div class="notif-img">
                                                <img src="as/assets/img/profile2.jpg" alt="Img Profile">
                                            </div>
                                            <div class="notif-content">
													<span class="block">
														Reza send messages to you
													</span>
                                                <span class="time">12 minutes ago</span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div class="notif-icon notif-danger"> <i class="fa fa-heart"></i> </div>
                                            <div class="notif-content">
													<span class="block">
														Farrah liked Admin
													</span>
                                                <span class="time">17 minutes ago</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="see-all" href="javascript:void(0);">See all notifications<i class="fa fa-angle-right"></i> </a>
                            </li>
                        </ul>
                    </li> -->
                    <li class="nav-item dropdown hidden-caret">
                        <a class="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">
                            <i class="fas fa-layer-group" title="parametrage"></i>
                        </a>
                        <div class="dropdown-menu quick-actions quick-actions-info animated fadeIn">

                             
                            <div class="quick-actions-scroll scrollbar-outer">
                                <div class="quick-actions-items">
                                    <div class="row m-0">
                                        <router-link :to="{name:'uesr'}" class="col-6 col-md-4 p-0" href="#">
                                            <div class="quick-actions-item">
                                                <i class="flaticon-user"></i>
                                                <span class="text">USERS</span>
                                            </div>
                                        </router-link>
                                        <!-- <a class="col-6 col-md-4 p-0" href="#">
                                            <div class="quick-actions-item">
                                                <i class="flaticon-alarm"></i>
                                                <span class="text">AFFECTATIONS</span>
                                            </div>
                                        </a> -->
                                         <router-link :to="{name:'parametre'}" tag="a" class="col-6 col-md-4 p-0" href="#">
                                            <div class="quick-actions-item">
                                                <i class="flaticon-settings"></i>
                                                <span class="text">PARAMETRE</span>
                                            </div>
                                         </router-link>
                                        <!-- <a class="col-6 col-md-4 p-0" href="#">
                                            <div class="quick-actions-item">
                                                <i class="flaticon-interface-1"></i>
                                                <span class="text">Create New Task</span>
                                            </div>
                                        </a>
                                        <a class="col-6 col-md-4 p-0" href="#">
                                            <div class="quick-actions-item">
                                                <i class="flaticon-list"></i>
                                                <span class="text">Completed Tasks</span>
                                            </div>
                                        </a>
                                        <a class="col-6 col-md-4 p-0" href="#">
                                            <div class="quick-actions-item">
                                                <i class="flaticon-file"></i>
                                                <span class="text">Create New Invoice</span>
                                            </div>
                                        </a> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                  
                </ul>
            </div>
        </nav>
        <!-- End Navbar -->
    </div>
</template>

<script>
   import { mapState, mapActions} from "vuex";
   import sousMenuMissions from "../components/navs/sousMenuMissions"
   import TableauBordGenerale from "../views/dashbord/TableauBordGenerale"
   import sousMenuPersonnel from "../components/navs/sousMenuPersonnel"
   import sousMenuBudget from "../components/navs/sousMenuBudget"
    export default {
        components:{
            sousMenuMissions,
            TableauBordGenerale,
            sousMenuPersonnel,
            sousMenuBudget
        },
        name: "TheSideBar",
        computed:{
               ...mapState('MenuPara', {
     active_el: state => state.active_el
  }),
        },

        created(){
        this.getUser()
       this.getCategorie()
       this.getFonction()
       this.getHotel()
       this.getCarburant()
       this.getModePaiement()
       this.getmoyenTransport()
       this.getTypeMission()
       this.getAnneeMission()
       this.getNormeMission()
       this.getPersonnel()
       this.getSituationMatrimoniale()
       this.getRole()
       this.getUserRole()
       this.getActivite()
       this.getPays()
       this.getPlan_pays()
       this.getPlanActivite()
       this.getBudget()
       this.getMission()
       

        },

        methods: {

            ...mapActions('Utilisateurs', ['logoutUser','getUser','getCategorie','getFonction','getHotel','getCarburant',
            'getmoyenTransport', 'getTypeMission','getAnneeMission','getNormeMission','getModePaiement',
            'getPersonnel','getSituationMatrimoniale', 'getRole'
            ,'getUserRole','getActivite','getPays','getPlan_pays','getPlanActivite', 'getBudget','getMission']),
        }
    }
</script>

<style scoped>

</style>