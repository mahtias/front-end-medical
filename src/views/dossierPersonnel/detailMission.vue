<template>
       <div class="col-md-12" v-if="detail">
        
            <div class="card">
                    
                        <!-- <div class="card-header">
                            <div class="span6">
                                <span  class="card-title"> <i class="fas fa-align-justify"></i> {{detail.name}}</span>
                              
                            </div>
                        </div> -->
                        <div class="widget-content nopadding" ref="content">
                            <table id="add-row" class="table table-head-bg mt-2"> 
                                <thead>
                                <tr>

                                    <th>Date de mission</th>
                                    <th>Numero aut</th>
                                    <th>Destination</th>
                                    <th> Itineraire</th>
                                    <th>Classe voyage</th>
                                     <th>Frais de rest</th>
                                    <th>Frais hebergement</th>
                                    <th>Autres frais</th>
                                    <th> Coût total</th>
                                    <th>Coût de billet avion</th>
                                    <th>Date depart</th>
                                    <th> Date retour</th>
                                    <th>Durée</th>
                            
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX">
                                    <td>{{formaterDate(detail.date_mission) || 'Non renseigné'}}</td>
                                    <td  >{{detail.numero_autorisation || 'Non renseigné'}}</td>
                                    <td  > {{detail.destination || 'Non reseigné'}}</td>
                                    <td>{{detail.iteneraire_retnu || 'Non renseigné'}}</td>
                                    <td  >{{detail.classe_voyage || 'Non renseigné'}}</td>
                                    <td>{{formatageSomme(parseFloat(detail.fraire_restauration)) || 'Non renseigné'}}</td>
                                    <td  >{{formatageSomme(parseFloat(detail.fraire_herbegement)) || 'Non renseigné'}}</td>
                                    <td  > {{formatageSomme(parseFloat(detail.autre_fraire)) || 'Non reseigné'}}</td>
                                    <td>{{formatageSomme(parseFloat(detail.cout_total)) || 'Non renseigné'}}</td>
                                    <td  >{{formatageSomme(parseFloat(detail.cout_billet_avion)) || 'Non renseigné'}}</td>
                                     <td  > {{formaterDate(detail.date_depart) || 'Non reseigné'}}</td>
                                    <td>{{ formaterDate(detail.date_retour) || 'Non renseigné'}}</td>
                                    <td  >{{detail.duree || 'Non renseigné'}}</td>
                                    
                                  
                                </tr>
                                </tbody>
                            </table>
                        </div>

                     


            
        </div>
			<div class="modal-footer">
			<a data-dismiss="modal" class="btn btn-danger" @click.prevent="afficherDetailPersonnel" href="#">Retour sur la liste mission</a>
			</div>
    </div>
</template>


<script>
    import { mapGetters, mapActions } from "vuex";
    import { formatageSomme } from "../../repositories/repository";
    import moment from "moment";
   // import {  ModelListSelect } from 'vue-search-select'
   // import 'vue-search-select/dist/VueSearchSelect.css'
    
  
   

    //import ProgressBar from "../component/ProgressBar"
    export default {
       
        components:{
            //ProgressBar
          
        },
        data() {
            return {
                
             detail:"", 
               
            
            };
        },
        created() {
            this.detail=this.gettersMissions.find(item=>item.id==this.$route.params.id)
           // this.detailAffectation=this.getterAffectation.filter(item=>item.user_id==this.$route.params.id)

          //  console.log(this.detail)
        },
        computed: {
             
           ...mapGetters("Utilisateurs", ["gettersMissions"]),
         
        },
        methods: {
  
          
            ...mapActions("Utilisateurs", [
    

    ]),
    
		afficherDetailPersonnel(){
		this.$router.push({name:'url_mission'})	  
        } ,
        
        formatageSomme:formatageSomme,

        // formaterDate

        formaterDate(date){
          return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
        }
           
         
        }
    };
</script>
<style scoped>
   
</style>