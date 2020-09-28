<template>
    
<div class="">
							<div class="card">
								
									<!-- <div class="d-flex align-items-center"> -->
										<h4 class="card-title" align="center">LISTE DES PERSONNELS</h4>
										<button class="btn btn-success btn-round ml-auto"  @click="value3=true">
										
											<i class="fa fa-plus"></i>
                                            Ajouter
										</button>
	
									<!-- </div> -->
								
								<Drawer
										title="Creation du personnel"
										v-model="value3"
										height="800px"
										width="720"
										:mask-closable="false"
										:styles="styles"

								
									>
                                    <div class="row">
                                    <div class="col-md-6">  
									<div class="form-group">
									<label for="largeInput">Nom</label>
									<input type="text" v-model="formData.nom" class="form-control form-control" id="defaultInput" placeholder="Entre le code">
									</div>
                                    </div>
                                    <div class="col-md-6"> 
									<div class="form-group">
									<label for="largeInput">Prenom</label>
									<input type="text" v-model="formData.prenom" class="form-control form-control" id="defaultInput" placeholder="Entrer le libelle">
									</div>
                                    </div>
                                    </div>

                                     <div class="row">
                                    <div class="col-md-6">  
									<div class="form-group">
									<label for="largeInput">Date de naissance</label>
									<input type="date" v-model="formData.date_naissance" class="form-control form-control" id="defaultInput" placeholder="Entre le code">
									</div>
                                    </div>
                                    <div class="col-md-6"> 
									<div class="form-group">
									<label for="largeInput">Lieu de naissance</label>
									<input type="text" v-model="formData.lieu_naissance" class="form-control form-control" id="defaultInput" placeholder="Entrer le lieu de naissance">
									</div>
                                    </div>
                                    </div>

                                    <div class="row">
                                    <div class="col-md-6">  
									<div class="form-group">
								<label for="defaultSelect">Sexe</label>
									<select v-model="formData.sexe" class="form-control form-control" id="smallSelect">
									<option value="1">Homme</option>
									<option value="2">Femme</option>
									
									</select>
									</div>
                                    </div>
                                    <div class="col-md-6">
                                    <div class="form-group">
								<label for="defaultSelect">Fonction</label>
									<select v-model="formData.fonction_id" class="form-control form-control" id="">
									<option v-for="pers in gettersFonctions" :key="pers.id"
                                     :value="pers.id">{{pers.libelle}}</option>
									
									</select>
									</div>
                                    </div>
                                    </div>

                                     <div class="row">
                                    <div class="col-md-6">  
									<div class="form-group">
									<label for="largeInput">Numéro du passeport</label>
									<input type="text" v-model="formData.numero_passeport" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    <div class="col-md-6"> 
									<div class="form-group">
									<label for="largeInput">Numéro de cni</label>
									<input type="text" v-model="formData.numero_cni" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    </div>

                                    
                                     <div class="row">
                                    <div class="col-md-6">  
									<div class="form-group">
									<label for="largeInput">Nom du père</label>
									<input type="text" v-model="formData.nom_pere" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    <div class="col-md-6"> 
									<div class="form-group">
									<label for="largeInput">Nom de la mère</label>
									<input type="text" v-model="formData.nom_mere" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    </div>

                                  <div class="form-group">
								<label for="defaultSelect">Situation matrimoniale</label>
									<select v-model="formData.situation_matrimoniale_id" class="form-control form-control" id="smallSelect">
									<option v-for="situation in gettersSituationMatrimoniale" :key="situation.id"
                                     :value="situation.id">{{situation.libelle}}</option>
									</select>
									</div>

									<div class="demo-drawer-footer">
										<Button type="primary" @click.prevent="ajouterPersonnelLocal">Enregistrer</Button>
										<Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
										
									</div>
									</Drawer>


									<Drawer
										title="Modification du personnel"
										v-model="value4"
										height="800px"
										width="720"
										:mask-closable="false"
										:styles="styles"
									>
								
									<div class="row">
                                    <div class="col-md-6">  
									<div class="form-group">
									<label for="largeInput">Nom</label>
									<input type="text" v-model="editPersonnel.nom" class="form-control form-control" id="defaultInput" placeholder="Entre le code">
									</div>
                                    </div>
                                    <div class="col-md-6"> 
									<div class="form-group">
									<label for="largeInput">Prenom</label>
									<input type="text" v-model="editPersonnel.prenom" class="form-control form-control" id="defaultInput" placeholder="Entrer le libelle">
									</div>
                                    </div>
                                    </div>

                                     <div class="row">
                                    <div class="col-md-6">  
									<div class="form-group">
									<label for="largeInput">Date de naissance</label>
									<input type="date" v-model="editPersonnel.date_naissance" class="form-control form-control" id="defaultInput" placeholder="Entre le code">
									</div>
                                    </div>
                                    <div class="col-md-6"> 
									<div class="form-group">
									<label for="largeInput">Lieu de naissance</label>
									<input type="text" v-model="editPersonnel.lieu_naissance" class="form-control form-control" id="defaultInput" placeholder="Entrer le lieu de naissance">
									</div>
                                    </div>
                                    </div>

                                    <div class="row">
                                    <div class="col-md-6">  
									<div class="form-group">
									<label for="largeInput">Sexe</label>
									<input type="text" v-model="editPersonnel.sexe" class="form-control form-control" id="defaultInput" placeholder="">
									</div>
                                    </div>
                                    <div class="col-md-6"> 
									<div class="form-group">
									<label for="largeInput">Fonction</label>
									<input type="text" v-model="editPersonnel.fonction" class="form-control form-control" id="defaultInput" placeholder="">
									</div>
                                    </div>
                                    </div>

                                     <div class="row">
                                    <div class="col-md-6">  
									<div class="form-group">
									<label for="largeInput">Numéro du passeport</label>
									<input type="text" v-model="editPersonnel.numero_passeport" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    <div class="col-md-6"> 
									<div class="form-group">
									<label for="largeInput">Numéro de cni</label>
									<input type="text" v-model="editPersonnel.numero_cni" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    </div>

                                    
                                     <div class="row">
                                    <div class="col-md-6">  
									<div class="form-group">
									<label for="largeInput">Nom du père</label>
									<input type="text" v-model="editPersonnel.nom_pere" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    <div class="col-md-6"> 
									<div class="form-group">
									<label for="largeInput">Nom de la mère</label>
									<input type="text" v-model="editPersonnel.nom_mere" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    </div>
                              <div class="form-group">
								<label for="defaultSelect">Situation matrimoniale</label>
									<select v-model="editPersonnel.situation_matrimoniale_id" class="form-control form-control" id="smallSelect">
									<option v-for="situation in gettersSituationMatrimoniale" :key="situation.id"
                                     :value="situation.id">{{situation.libelle}}</option>
									</select>
									</div>
								

									<div class="demo-drawer-footer">
										<Button type="primary" @click.prevent="modifierPersonnelLocal">Modifier</Button>
										<Button style="margin-right: 8px" @click="value4 = false">Fermer</Button>
										
									</div>
									</Drawer>
								<div class="card-body">
                                  

									
									

									<div class="table-responsive">
										<table id="add-row" class="table table-head-bg-primary mt-2"> 
											<thead>
												<tr>
													<th style="text-align:center">Nom</th>
													<th style="text-align:center">Prenom</th>
                                                    <th style="text-align:center">Date de naissance</th>
													<th style="text-align:center">Lieu de naissance</th>
                                                    <th style="text-align:center">Sexe</th>
													<th style="text-align:center">Fonction</th>
                                                    <!-- <th style="text-align:center">Numéro passeport</th>
													<th style="text-align:center">Numéro de cni</th>
                                                    <th style="text-align:center">Nom du père</th>
													<th style="text-align:center">Nom du mère</th>
                                                    <th style="text-align:center">Situation matrimoniale</th> -->
													
												
													<th style="width: 10%;text-align:center">Action</th>
												</tr>
											</thead>
											
											<tbody>
                <tr class="odd gradeX" v-for="(item,index) in gettersPersonnels" :key="item.id">
                    <td
                    style="text-align:center"
                    >{{item.nom || 'Non renseigne'}}</td>
                    <td
                    style="text-align:center"
                    >{{item.prenom || 'Non renseigne'}}</td>
                     <td
                    style="text-align:center"
                    >{{formaterDate(item.date_naissance) || 'Non renseigne'}}</td>
                    <td
                    style="text-align:center"
                    >{{item.lieu_naissance || 'Non renseigne'}}</td>

                     <td style="text-align:center" >
                        <span v-if="item.sexe==1">Homme</span>
                        <span v-else>Femme</span>
                        </td>
                   <td
                    style="text-align:center"
                    >{{item.fonction.libelle || 'Non renseigne'}}</td>
                     <!-- <td
                    style="text-align:center"
                    >{{item.numero_passeport || 'Non renseigne'}}</td>
                    <td
                    style="text-align:center"
                    >{{item.numero_cni || 'Non renseigne'}}</td>
                     <td
                    style="text-align:center"
                    >{{item.nom_pere || 'Non renseigne'}}</td>
                    <td
                    style="text-align:center"
                    >{{item.nom_mere || 'Non renseigne'}}</td>
                     <td
                    style="text-align:center"
                    >{{item.situation_matrimoniale || 'Non renseigne'}}</td> -->
                   
					

                    <td>
														<div class="form-button-action">
															<router-link :to="{name:'detailPersonnel', params:{id:item.id}}"  title="detail personnel" class="btn btn-link btn-success btn-lg" data-original-title="Edit Task">
																<i class=" btn btn-outline-success fas fa-address-card"></i>  

                                                            </router-link> 
                                                              
																<button @click.prevent="value4=true" type="button"   data-toggle="modal"  title="modifier" class="btn btn-link btn-primary btn-lg"  @click="afficherModalModifierPersonnel(index)">
																<i class=" btn btn-outline-info fa fa-edit"></i>
															</button>
															<button type="button" data-toggle="tooltip" title="supprimer" class="btn btn-link btn-danger" data-original-title="Remove" @click="supprimerPersonnel(item.id)">
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
import moment from "moment";




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
       nom:"",
        prenom:"",
        date_naissance:"",
        lieu_naissance:"",
        sexe:"",
        fonction_id:"",
        numero_passeport:"",
        numero_cni:"",
        nom_pere:"",
        nom_mere:"",
        situation_matrimoniale_id:""

        
    },
    editPersonnel: {
       nom:"",
        prenom:"",
        date_naissance:"",
        lieu_naissance:"",
        sexe:"",
        fonction_id:"",
        numero_passeport:"",
        numero_cni:"",
        nom_pere:"",
        nom_mere:"",
        situation_matrimoniale_id:""
    },
    search: ""
    };
},
created(){
    
},

computed: {
    ...mapGetters("Utilisateurs", ["gettersPersonnels","gettersFonctions","gettersSituationMatrimoniale" ]),
    
},
methods: {
  ...mapActions("Utilisateurs", ["ajouterPersonnel" ,"modifierPersonnel","supprimerPersonnel","getPersonnel"]),
    
     afficherModalModifierPersonnel(index) {
      this.editPersonnel = this.gettersPersonnels[index];
    },

     ajouterPersonnelLocal() {
      this.ajouterPersonnel(this.formData);
       this.getPersonnel()
      this.formData = {
         nom:"",
        prenom:"",
        date_naissance:"",
        lieu_naissance:"",
        sexe:"",
        fonction_id:"",
        numero_passeport:"",
        numero_cni:"",
        nom_pere:"",
        nom_mere:"",
        situation_matrimoniale_id:""
      };
    },
      modifierPersonnelLocal() {
      this.modifierPersonnel(this.editPersonnel);
      this.getPersonnel()
      this.value4=false;
      this.editPersonnel = {
        nom:"",
        prenom:"",
        date_naissance:"",
        lieu_naissance:"",
        sexe:"",
        fonction_id:"",
        numero_passeport:"",
        numero_cni:"",
        nom_pere:"",
        nom_mere:"",
        situation_matrimoniale_id:""
      };
    },

    // formatage de la date
    formaterDate(date){
  return moment(date, 'YYYY-MM-DD').format("DD/MM/YYYY");
    }
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