<template>
    
<div class="">
							<div class="card">
								
									<!-- <div class="d-flex align-items-center"> -->
										<h4 class="card-title" align="center">LISTE ANNEE DE MISSIONS</h4>
										<button class="btn btn-success btn-round ml-auto"  @click="value3=true">
										
										<i class="fa fa-plus"></i>
                                            Ajouter
										</button>
	
									<!-- </div> -->
								
								<Drawer
										title="Creation  l'année de mission"
										v-model="value3"
										height="800px"
										width="520"
										:mask-closable="false"
										:styles="styles"

								
									>
									<div class="form-group">
									<label for="largeInput">Année</label>
									<input type="text" v-model="formData.annee" class="form-control form-control" id="defaultInput" placeholder="Entre l'année">
									</div>
									<div class="form-group">
									<label for="largeInput">Date debut</label>
									<input type="date" v-model="formData.date_debut" class="form-control form-control" id="defaultInput" placeholder="Entrer le libelle">
									</div>
                                    <div class="form-group">
									<label for="largeInput">Date fin</label>
									<input type="date" v-model="formData.date_fin" class="form-control form-control" id="defaultInput" placeholder="Entrer le libelle">
									</div>

									<div class="demo-drawer-footer">
										<Button type="primary" @click.prevent="ajouterAnneMissionLocal">Enregistrer</Button>
										<Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
										
									</div>
									</Drawer>


									<Drawer
										title="Modification l'année de mission"
										v-model="value4"
										height="800px"
										width="520"
										:mask-closable="false"
										:styles="styles"
									>
								
										<div class="form-group">
									<label for="largeInput">Année</label>
									<input type="text" v-model="editAnneMission.annee" class="form-control form-control" id="defaultInput" placeholder="Entre le code">
									</div>
									<div class="form-group">
									<label for="largeInput">Date debut</label>
									<input type="date" v-model="editAnneMission.date_debut" class="form-control form-control" id="defaultInput" >
									</div>
                                    <div class="form-group">
									<label for="largeInput">Date fin</label>
									<input type="date" v-model="editAnneMission.date_fin" class="form-control form-control" >
									</div>
								

									<div class="demo-drawer-footer">
										<Button type="primary" @click.prevent="modifierAnneMissionLocal">Modifier</Button>
										<Button style="margin-right: 8px" @click="value4 = false">Fermer</Button>
										
									</div>
									</Drawer>
								<div class="card-body">
                                  

									
									

									<div class="table-responsive">
										<table id="add-row" class="table table-head-bg-primary mt-2"> 
											<thead>
													<tr>
													<th style="text-align:center">Année</th>
													<th style="text-align:center">Date debut</th>
													<th style="text-align:center">Date fin</th>
													<th style="text-align:center">En cours</th>				
													<th style="width: 10%;text-align:center">Action</th>
													</tr>
											</thead>
											
											<tbody>
				<tr class="odd gradeX" v-for="(item,index) in gettersAnneeMissions" :key="item.id">
                <template v-if="!item.encours">
                         <td style="text-align:center" >{{item.annee || 'Non renseigne'}}</td>
                    <td style="text-align:center">{{item.date_debut || 'Non renseigne'}}</td>
                     <td style="text-align:center" >{{item.date_fin || 'Non renseigne'}}</td>

                  </template>



                    <template v-else>
                       <td style="text-align:center" >{{item.annee || 'Non renseigne'}}</td>
                    <td style="text-align:center">{{item.date_debut || 'Non renseigne'}}</td>
                     <td style="text-align:center" >{{item.date_fin || 'Non renseigne'}}</td>
                  
                  </template>
                   <td style="text-align:center">
                     <button  @click.prevent="activationLocal(item.id)"
                      v-if="item.encours == 1"  class="btn  btn-success"  >
                <span >Oui</span>
       
                </button>
                   <button v-else @click.prevent="activationLocal(item.id)" class="btn  btn-danger" >
              
                <span  >Non</span>
                </button>
                   </td>
                 
                   
                                       <td>
														<div class="form-button-action">
															
                                                              
																<button @click.prevent="value4=true" type="button"   data-toggle="modal"  title="modifier" class="btn btn-link btn-primary btn-lg"  @click="affichierModalModifierAnnemission(index)">
																<i class=" btn btn-outline-info fa fa-edit"></i>
															</button>
															<button  v-if="!item.encours" type="button" data-toggle="tooltip" title="supprimer" class="btn btn-link btn-danger" data-original-title="Remove" @click="supprimerAnneeMission(item.id)">
																<i class="btn btn-outline-danger fas fa-trash-alt"></i>
															</button>
														</div>
													</td>
                    
              
             

                  
                </tr>
               
                                            </tbody>
										</table>
									</div>
								</div>
							</div>
							<notifications/>
						</div>
    
     

</template>
<script>
import { mapGetters, mapActions } from "vuex";





export default {
name:'AnneeMission',
     components: {
  
    
    
  },
data() {
    return {
		
		value3: false,
		value4: false,
        styles: {
            height: '',
            overflow: 'auto',
            paddingBottom: '20px',
            position: 'static'
			},
			

    formData: {
       annee:"",
        date_debut:"",
        date_fin:""
        
    },
    editAnneMission: {
      annee:"",
      date_debut:"",
      date_fin:""
    },
    search: ""
    };
},

computed: {
    ...mapGetters("Utilisateurs", ["gettersAnneeMissions" ]),
    
},
methods: {
  ...mapActions("Utilisateurs", ["activeAnneemission","ajouterAnneMission" ,
  "modifierAnneMission","supprimerAnneeMission"]),
    
	
	activationLocal(id){this.activeAnneemission(id)},
	
	
	affichierModalModifierAnnemission(index) {
      this.editAnneMission = this.gettersAnneeMissions[index];
    },
     ajouterAnneMissionLocal() {
		
      this.ajouterAnneMission(this.formData);

      this.formData = {
         annee:"",
         date_debut:"",
         date_fin:""
      };
    },
      modifierAnneMissionLocal() {
      this.modifierAnneMission(this.editAnneMission);
      this.value4=false;
      this.editAnneMission = {
        annee:"",
        date_debut:"",
        date_fin:""
      };
    },
}
};
</script>

<style  scoped>

    #loginbox {    width: 65%;
        margin-left: auto;
        margin-right: auto;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -70%);}

		.demo-drawer-footer{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        background: #fff;
	}
	.form-button-action{
		text-align: right;
		width: -500px;
	}

</style>