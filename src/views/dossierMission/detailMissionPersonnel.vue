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

                                    

                                    <th>Numéro passeport</th>
                                    <th>Numéro de cni</th>
                                    <th>Nom du père</th>
                                    <th> Nom du mère</th>
                                    <th>Situation matrimoniale</th>
                                   
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX">
                                    <td>{{detail.numero_passeport || 'Non renseigné'}}</td>
                                    <td  >{{detail.numero_cni || 'Non renseigné'}}</td>
                                    <td  > {{detail.nom_pere || 'Non reseigné'}}</td>
                                    <td>{{detail.nom_mere || 'Non renseigné'}}</td>
                                    <td  >{{detail.situation_matrimoniale || 'Non renseigné'}}</td>
                                    
                                  
                                </tr>
                                </tbody>
                            </table>
                        </div>

                     


            
        </div>
			<div class="modal-footer">
			<a data-dismiss="modal" class="btn btn-danger" @click.prevent="afficherDetailPersonnel" href="#">Retour sur la liste personnel</a>
			</div>
    </div>
</template>


<script>
    import { mapGetters, mapActions } from "vuex";
  /*  import { formatageSomme } from "../../Repositories/Repository";
    import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
    ";*/
  
   

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
            this.detail=this.gettersPersonnels.find(item=>item.id==this.$route.params.id)
           // this.detailAffectation=this.getterAffectation.filter(item=>item.user_id==this.$route.params.id)

          //  console.log(this.detail)
        },
        computed: {
             
           ...mapGetters("Utilisateurs", ["gettersPersonnels"]),
         
        },
        methods: {
  
          
            ...mapActions("Utilisateurs", [
    

    ]),
    
		afficherDetailPersonnel(){
		this.$router.push({name:'mission_personnel'})	  
		}   
           
         
        }
    };
</script>
<style scoped>
   
</style>