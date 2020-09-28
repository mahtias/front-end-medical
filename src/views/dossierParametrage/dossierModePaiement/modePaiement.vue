<template>
    
<div class="">
							<div class="card">
								
									<!-- <div class="d-flex align-items-center"> -->
										<h4 class="card-title" align="center">LISTE DE MODE DE PAIMENT</h4>
										<button class="btn btn-success btn-round ml-auto"  @click="value3=true">
										
											<i class="fa fa-plus"></i>
                                            Ajouter
										</button>
	
									<!-- </div> -->
								
								<Drawer
										title="Creation de mode du paiement"
										v-model="value3"
										height="800px"
										width="520"
										:mask-closable="false"
										:styles="styles"

								
									>
									<div class="form-group">
									<label for="largeInput">Code</label>
									<input type="text" v-model="formData.code" class="form-control form-control" id="defaultInput" placeholder="Entre le code">
									</div>
									<div class="form-group">
									<label for="largeInput">Libelle</label>
									<input type="text" v-model="formData.libelle" class="form-control form-control" id="defaultInput" placeholder="Entrer le libelle">
									</div>

									<div class="demo-drawer-footer">
										<Button type="primary" @click.prevent="ajouterModePaiementLocal">Enregistrer</Button>
										<Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
										
									</div>
									</Drawer>


									<Drawer
										title="Modification de la norme de mission"
										v-model="value4"
										height="800px"
										width="520"
										:mask-closable="false"
										:styles="styles"
									>
								
										<div class="form-group">
									<label for="largeInput">Code</label>
									<input type="text" v-model="editNormemission.code" class="form-control form-control" id="defaultInput" placeholder="Entre le code">
									</div>
									<div class="form-group">
									<label for="largeInput">Libelle</label>
									<input type="text" v-model="editNormemission.libelle" class="form-control form-control" id="defaultInput" placeholder="Entrer le libelle">
									</div>
								

									<div class="demo-drawer-footer">
										<Button type="primary" @click.prevent="modifierModePaiementLocal">Modifier</Button>
										<Button style="margin-right: 8px" @click="value4 = false">Fermer</Button>
										
									</div>
									</Drawer>
								<div class="card-body">
                                  

									
									

									<div class="table-responsive">
										<table id="add-row" class="table table-head-bg-primary mt-2"> 
											<thead>
												<tr>
													<th style="text-align:left">Code</th>
													<th style="text-align:left">Libelle</th>
													
												
													<th style="width: 10%;text-align:left">Action</th>
												</tr>
											</thead>
											
											<tbody>
                <tr class="odd gradeX" v-for="(item,index) in gettersModePaiement" :key="item.id">
                    <td
                    style="text-align:left"
                    >{{item.code || 'Non renseigne'}}</td>
                    <td
                    style="text-align:left"
                    >{{item.libelle || 'Non renseigne'}}</td>
					

                    <td>
														<div class="form-button-action">
															
                                                              
																<button @click.prevent="value4=true" type="button"   data-toggle="modal"  title="modifier" class="btn btn-link btn-primary btn-lg"  @click="afficherModalModifierModePaiement(index)">
																<i class=" btn btn-outline-info fa fa-edit"></i>
															</button>
															<button type="button" data-toggle="tooltip" title="supprimer" class="btn btn-link btn-danger" data-original-title="Remove" @click="supprimerModePaiement(item.id)">
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
name:'projet',
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
       code:"",
		libelle:""
        
    },
    editNormemission: {
      code:"",
      libelle:""
    },
    search: ""
    };
},

computed: {
    ...mapGetters("Utilisateurs", ["gettersModePaiement" ]),
    
},
methods: {
  ...mapActions("Utilisateurs", ["ajouteModePaiement" ,"modifierModePaiement","supprimerModePaiement"]),
    
     afficherModalModifierModePaiement(index) {
      this.editNormemission = this.gettersModePaiement[index];
    },

     ajouterModePaiementLocal() {
		
      this.ajouteModePaiement(this.formData);

      this.formData = {
         code:"",
         libelle:""
      };
    },
      modifierModePaiementLocal() {
      this.modifierModePaiement(this.editNormemission);
      //this.getNormeMission()
      this.value4=false;
      this.editNormemission = {
        code:"",
        libelle:""
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