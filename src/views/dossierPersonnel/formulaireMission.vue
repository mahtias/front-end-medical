<template>
    
<div class="">
							<div class="card">
								
									<!-- <div class="d-flex align-items-center"> -->
										<h4 class="card-title" align="center">LISTE DES MISSIONS</h4>
										<button class="btn btn-success btn-round ml-auto"  @click="value3=true">
										
											<i class="fa fa-plus"></i>
                                            Ajouter
										</button>
	
									<!-- </div> -->
                                    
								
								<Drawer
										title="Creation de mission"
										v-model="value3"
										height="800px"
										width="1300"
										:mask-closable="false"
										:styles="styles"

								
									>
                                    <div class="card-body">
                                    <ul class="nav nav-pills nav-secondary nav-pills-no-bd" id="pills-tab-without-border" role="tablist">
														<li class="nav-item" >
														<a class="nav-link active" id="pills-home-tab-nobd" data-toggle="pill" href="#pills-home-nobd" role="tab" aria-controls="pills-home-nobd" aria-selected="true">Identification</a>
														</li>
														<li class="nav-item" >
													<a class="nav-link" id="pills-profile-tab-nobd" data-toggle="pill" href="#pills-profile-nobd" role="tab" aria-controls="pills-profile-nobd" aria-selected="false">Autres informations</a>
														</li>
                                    </ul>
                                    <div class="tab-content mt-2 mb-3" id="pills-without-border-tabContent">
										
									<div class="tab-pane fade  show active " id="pills-home-nobd" role="tabpanel" aria-labelledby="pills-home-tab-nobd">
                                        <div class="row">
                                    <div class="col-md-4">  
									<div class="form-group">
									<label for="largeInput">Année</label>
									<input type="text" :value="afficherAnnee" class="form-control form-control" id="" readonly>
									</div>
                                    </div>
                                  
                                    <div class="col-md-4">  
									<div class="form-group">
									<label for="largeInput">Plan activité</label>
									<select v-model="formData.activite_id" class="form-control form-control" id="">
									<option v-for="item in AffichierElementParent(affichierIdActeFinancierDansActePlan)" :key="item.id"
                                     :value="item.id">{{item.libelle}}</option>
									
									</select>
									</div>
                                    </div>
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Montant activité  </label>
									<input type="text" :value="afficherMontantActivite(afficherIdActivite(formData.activite_id))" readonly class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>

                                    </div>
                                     <div class="row">
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Type de  mission</label>
									<select v-model="formData.type_mission_id" class="form-control form-control" id="">
									<option v-for="pers in gettersTypeMission" :key="pers.id"
                                     :value="pers.id">{{pers.libelle}}</option>
									
									</select>
									</div>
                                    </div>
                                    <div class="col-md-8">  
									<div class="form-group">
									<label for="comment">Objet mission</label>
									<textarea v-model="formData.objet_mission" class="form-control" id="comment" rows="2">
									</textarea>
									</div>
                                    </div>
                                     </div>

                                     <div class="row">
                                     <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Categorie de mission</label>
									<select v-model="formData.categorie_mission_id" class="form-control form-control" id="">
									<option v-for="pers in gettersCategorie" :key="pers.id"
                                     :value="pers.id">{{pers.libelle}}</option>
									
									</select>
									</div>
                                    </div>
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Date de mission</label>
									<input type="date" v-model="formData.date_mission" class="form-control form-control" id="defaultInput" placeholder="">
									</div>
                                    </div>
                                     <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Numéro d'autorisation</label>
									<input type="text" v-model="formData.numero_autorisation" class="form-control form-control" id="defaultInput" placeholder="">
									</div>
                                    </div>
                                    </div>

                                    <div class="row">
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Matricule du personnel</label>
									<select v-model="formData.personnel_id" class="form-control form-control" id="">
									<option v-for="pers in gettersPersonnels" :key="pers.id"
                                     :value="pers.id">{{pers.matricule}}</option>
									
									</select>
									</div>
                                    </div>
                                    <div class="col-md-4">
                                    <div class="form-group">
								<label for="defaultSelect">Nom & Prenom</label>
								<input type="text" :value="afficherNomDuPersonnel(formData.personnel_id)"  class="form-control form-control" id="" readonly>
									</div>
                                    </div>

                                    <div class="col-md-4">
                                    <div class="form-group">
								<label for="defaultSelect">Fonction  </label>
								<input type="text" :value="afficherLibelleFonction(afficherFonctionDuPersonnel(formData.personnel_id))" readonly class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    </div>

                                     <div class="row">
                                    <div class="col-md-4">  
									<div class="form-group">
									<label for="largeInput">Moyen de transport</label>
									<select v-model="formData.moyen_transport_id" class="form-control form-control" id="">
									<option v-for="item in gettersMoyenTransport" :key="item.id"
                                     :value="item.id">{{item.libelle}}</option>
									
									</select>
									</div>
                                    </div>
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Destination</label>
									<input type="text" v-model="formData.destination" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                     <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Itinéraire retenu</label>
									<input type="text" v-model="formData.iteneraire_retnu" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    </div>

                                    
                                     <div class="row">
                                    <div class="col-md-4">  
									<div class="form-group">
									<label for="largeInput">Classe voyage</label>
									<input type="text" v-model="formData.classe_voyage" :readonly="activationDeLaClasse" class="form-control form-control" id="" >
									</div>
                                    </div>
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Frais de perdium</label>
									<input type="text" v-model="formData.frais_perdium" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Frais d'hebergement</label>
									<input type="text" v-model="formData.fraire_herbegement" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    </div>

                                      
									</div>

                                    <div class="tab-pane fade   " id="pills-profile-nobd" role="tabpanel" aria-labelledby="pills-profile-tab-nobd">
                                        <div class="row">
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Frais de restauration</label>
									<input type="text" v-model="formData.fraire_restauration" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                     <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Autres frais</label>
									<input type="text" v-model="formData.autre_fraire" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Coût de total</label>
									<input type="text" :value="calculDuCoutTotal" class="form-control form-control" id="" readonly>
									</div>
                                    </div>
                                     </div>

                                    <div class="row">
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Coût de billet avions</label>
									<input type="text" v-model="formData.cout_billet_avion" :readonly="activationDeLaClasse" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                     <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Mode de paiement</label>
									<select v-model="formData.mode_paiement_id" class="form-control form-control" id="">
									<option v-for="item in gettersModePaiement" :key="item.id"
                                     :value="item.id">{{item.libelle}}</option>
									</select>
									</div>
                                    </div>
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Date depart</label>
									<input type="date" v-model="formData.date_depart" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                     </div>

                                     
                                    <div class="row">
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Date de retour</label>
									<input type="date" :min="formData.date_depart" :readonly="getDateRetourValue" class="form-control form-control" v-model="formData.date_retour">
									</div>
                                    </div>
                                     <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Durée(jrs)</label>
									<input type="text" :value="nombreJourCalucle" class="form-control form-control" id="" readonly>
									</div>
                                    </div>
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="">Fichier joint</label>
									<input type="file" class="form-control-file" id="">
									</div>
                                    </div>
                                     </div>
									</div>
                                      
                                      <div class="demo-drawer-footer">
										<Button type="primary" @click.prevent="ajouterMissionLocal">Enregistrer</Button>
										<Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
										
									</div>
                                    
                                    </div>    
                                    </div>


                                  

                                   
									</Drawer>
                                    

<Drawer
										title="Modification de mission"
										v-model="value4"
										height="800px"
										width="1300"
										:mask-closable="false"
										:styles="styles"

								
									>
                                    <div class="card-body">
                                    <ul class="nav nav-pills nav-secondary nav-pills-no-bd" id="pills-tab-without-border" role="tablist">
														<li class="nav-item" >
														<a class="nav-link active" id="pills-add-tab-nobd" data-toggle="pill" href="#pills-add-nobd" role="tab" aria-controls="pills-add-nobd" aria-selected="true">Identification</a>
														</li>
														<li class="nav-item" >
													<a class="nav-link" id="pills-contact-tab-nobd" data-toggle="pill" href="#pills-contact-nobd" role="tab" aria-controls="pills-profile-nobd" aria-selected="false">Autres informations</a>
														</li>
                                    </ul>
                                    <div class="tab-content mt-2 mb-3" id="pills-without-border-tabContent">
										
									<div class="tab-pane fade  show active " id="pills-add-nobd" role="tabpanel" aria-labelledby="pills-add-tab-nobd">
                                     <div class="row">
                                    <div class="col-md-4">  
									<div class="form-group">
									<label for="largeInput">Année</label>
									<input type="text" :value="afficherAnnee" class="form-control form-control" id="" readonly>
									</div>
                                    </div>
                                    
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Type de  mission</label>
									<select v-model="editMission.type_mission_id" class="form-control form-control" id="">
									<option v-for="pers in gettersTypeMission" :key="pers.id"
                                     :value="pers.id">{{pers.libelle}}</option>
									
									</select>
									</div>
                                    </div>

                                    <div class="col-md-4">  
									<div class="form-group">
									<label for="comment">Objet mission</label>
									<textarea v-model="editMission.objet_mission" class="form-control" id="comment" rows="2">
									</textarea>
									</div>
                                    </div>
                                    </div>

                                    
                                     <div class="row">
                                     <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Categorie de mission</label>
									<select v-model="editMission.categorie_mission_id" class="form-control form-control" id="">
									<option v-for="pers in gettersCategorie" :key="pers.id"
                                     :value="pers.id">{{pers.libelle}}</option>
									
									</select>
									</div>
                                    </div>

                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Date de mission</label>
									<input type="date" v-model="editMission.date_mission" class="form-control form-control" id="defaultInput" placeholder="">
									</div>
                                    </div>
                                    
                                     <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Numéro d'autorisation</label>
									<input type="text" v-model="editMission.numero_autorisation" class="form-control form-control" id="defaultInput" placeholder="">
									</div>
                                    </div>
                                    </div>

                                      <div class="row">
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Matricule du personnel</label>
									<select v-model="editMission.personnel_id" class="form-control form-control" id="">
									<option v-for="pers in gettersPersonnels" :key="pers.id"
                                     :value="pers.id">{{pers.matricule}}</option>
									
									</select>
									</div>
                                    </div>
                                    
                                    <div class="col-md-4">
                                <div class="form-group">
								<label for="defaultSelect">Nom & Prenom</label>
								<input type="text" :value="afficherNomDuPersonnel(editMission.personnel_id)"  class="form-control form-control" id="" readonly>
								</div>
                                </div>

                                <div class="col-md-4">
                                <div class="form-group">
								<label for="defaultSelect">Fonction</label>
								<input type="text" :value="afficherLibelleFonction(afficherFonctionDuPersonnel(editMission.personnel_id))" readonly class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    </div>

                                        <div class="row">
                                    <div class="col-md-4">  
									<div class="form-group">
									<label for="largeInput">Moyen de transport</label>
									<select v-model="editMission.moyen_transport_id" class="form-control form-control" id="">
									<option v-for="item in gettersMoyenTransport" :key="item.id"
                                     :value="item.id">{{item.libelle}}</option>
									
									</select>
									</div>
                                    </div>
                                    
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Destination</label>
									<input type="text" v-model="editMission.destination" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                     <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Itinéraire retenu</label>
									<input type="text" v-model="editMission.iteneraire_retnu" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    </div>

                                    <div class="row">
                                    <div class="col-md-4">  
									<div class="form-group">
									<label for="largeInput">Classe voyage</label>
									<input type="text" v-model="editMission.classe_voyage" :readonly="activationDeLaClasse" class="form-control form-control" id="" >
									</div>
                                    </div>

                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Frais de perdium</label>
									<input type="text" v-model="editMission.frais_perdium" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>

                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Frais d'hebergement</label>
									<input type="text" v-model="editMission.fraire_herbegement" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    </div>

									</div>

                                    <div class="tab-pane fade   " id="pills-contact-nobd" role="tabpanel" aria-labelledby="pills-contact-tab-nobd">
                                     
                                    <div class="row">
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Frais de restauration</label>
									<input type="text" v-model="editMission.fraire_restauration" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                     <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Autres frais</label>
									<input type="text" v-model="editMission.autre_fraire" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Coût de total</label>
									<input type="text" :value="calculDuCoutTotal" class="form-control form-control" id="" readonly>
									</div>
                                    </div>
                                     </div>

                                     
                                    <div class="row">
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Coût de billet avions</label>
									<input type="text" v-model="editMission.cout_billet_avion" :readonly="activationDeLaClasse" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                     <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Mode de paiement</label>
									<select v-model="editMission.mode_paiement_id" class="form-control form-control" id="">
									<option v-for="item in gettersModePaiement" :key="item.id"
                                     :value="item.id">{{item.libelle}}</option>
									</select>
									</div>
                                    </div>
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Date depart</label>
									<input type="date" v-model="editMission.date_depart" class="form-control form-control" id="" placeholder="">
									</div>
                                    </div>
                                     </div>

                                    <div class="row">
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Date de retour</label>
									<input type="date" :min="editMission.date_depart" :readonly="getDateRetourValue" class="form-control form-control" v-model="formData.date_retour">
									</div>
                                    </div>

                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="largeInput">Durée(jrs)</label>
									<input type="text" :value="nombreJourCalucle" class="form-control form-control" id="" readonly>
									</div>
                                    </div>
                                    
                                    <div class="col-md-4"> 
									<div class="form-group">
									<label for="">Fichier joint</label>
									<input type="file" class="form-control-file" id="">
									</div>
                                    </div>
                                     </div>
                                      
                                     
                                    
                                    </div>    
                                    
                                    </div>
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
                                                    <th style="text-align:left">Année de missions</th>
													<th style="text-align:left">Type de missions</th>
													<th style="text-align:left">Catégorie de mission</th>
                                                    <th style="text-align:left">Moyen de transport</th>
													<th style="text-align:left">Mode de paiement</th>
                                                    <th style="text-align:left">Pesonnel</th>
													<th style="text-align:left">Obje de missiont</th>
													<th style="width: 10%;text-align:left">Action</th>
												</tr>
											</thead>
											
											<tbody>
                <tr class="odd gradeX" v-for="(item,index) in gettersMissions" :key="item.id">
                    <td
                    style="text-align:left"
                    >{{item.annee || 'Non renseigne'}}</td>
                    <td
                    style="text-align:left"
                    >{{afficherLibelleTypeDeMission(item.type_mission_id) || 'Non renseigne'}}</td>
                     <td
                    style="text-align:left"
                    >{{afficherLibelleCategorieMission(item.categorie_mission_id) || 'Non renseigne'}}</td>
                    <td
                    style="text-align:left"
                    >{{afficherLibelleMoyenTransport(item.moyen_transport_id) || 'Non renseigne'}}</td>

                      <td
                    style="text-align:left"
                    >{{afficherLibelleModePaiement(item.mode_paiement_id) || 'Non renseigne'}}</td>
                   <td
                    style="text-align:left"
                    >{{afficherMtriculePersonnel(item.personnel_id) || 'Non renseigne'}}</td>
                    <td
                    style="text-align:left"
                    >{{item.objet_mission || 'Non renseigne'}}</td>
                    
                    
                   
					

                    <td>
														<div class="form-button-action">
															<router-link :to="{name:'detail_mission', params:{id:item.id}}"  title="detail mission" class="btn btn-link btn-success btn-lg" data-original-title="Edit Task">
																<i class=" btn btn-outline-success fas fa-share"></i>  

                                                            </router-link> 
                                                              
																<button @click.prevent="value4=true" type="button"   data-toggle="modal"  title="modifier" class="btn btn-link btn-primary btn-lg"  @click="afficherModalModifierPersonnel(index)">
																<i class=" btn btn-outline-info fa fa-edit"></i>
															</button>
															<button type="button" data-toggle="tooltip" title="supprimer" class="btn btn-link btn-danger" data-original-title="Remove" @click="supprimerMission(item.id)">
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
        type_mission_id:"",
        activite_id:"",
        montant_activite:"",
        categorie_mission_id:"",
        moyen_transport_id:"",
        mode_paiement_id:"",
        annee:"",
       personnel_id:"",
        objet_mission:"",
        date_mission:"",
        numero_autorisation:"",
        destination:"",
        frais_perdium:"",
        iteneraire_retnu:"",
        classe_voyage:"",
        fraire_restauration:"",
        fraire_herbegement:"",
        autre_fraire:"",
        cout_total:"",
        cout_billet_avion:"",
        date_depart:"",
        date_retour:"",
        duree:""

        
    },
    editMission: {
      type_mission_id:"",
      activite_id:"",
        categorie_mission_id:"",
        moyen_transport_id:"",
        mode_paiement_id:"",
        annee:"",
       personnel_id:"",
        objet_mission:"",
        date_mission:"",
        destination:"",
        iteneraire_retnu:"",
        classe_voyage:"",
        fraire_restauration:"",
        fraire_herbegement:"",
        autre_fraire:"",
        cout_total:"",
        cout_billet_avion:"",
        date_depart:"",
        date_retour:"",
        duree:""
    },
    search: ""
    };
},
created(){
    
},

computed: {
    ...mapGetters("Utilisateurs", ["gettersMissions","gettersPersonnels",
    "gettersTypeMission","gettersCategorie","gettersFonctions","gettersMoyenTransport",
    "gettersModePaiement",'gettersAnneeMissions','gettersPlanActivite','gettersBudget' ]),

    // afficherLibelleCategorie

    afficherLibelleCategorieMission(){
        return id =>{
            if(id !=null && id !=""){
                let objet = this.gettersCategorie.find(item => item.id==id)
                if(objet) return objet.libelle
            }
        }
    },

    // afficherLibelleTransport

    afficherLibelleMoyenTransport(){
        return id =>{
            if(id !=null && id !=""){
                let objet = this.gettersMoyenTransport.find(item => item.id==id)
                if(objet) return objet.libelle
            }
        }
    },

    // afficherMtriculePersonnel

    afficherMtriculePersonnel(){
        return id =>{
            if(id !=null && id !=""){
                let objet = this.gettersPersonnels.find(item => item.id==id)
                if(objet) return objet.matricule
            }
        }
    },

    // afficherLibelleModePaiement

    afficherLibelleModePaiement(){
        return id =>{
            if(id !=null && id !=""){
                let objet = this.gettersModePaiement.find(item => item.id==id)
                if(objet) return objet.libelle
            }
        }
    },

      // afficherLibelleTypeDeMission

    afficherLibelleTypeDeMission(){
        return id =>{
            if(id !=null && id !=""){
                let objet = this.gettersTypeMission.find(item => item.id==id)
                if(objet) return objet.libelle
            }
        }
    },

    

     nombreJourCalucle(){
     const form = this.formData
     if(form.date_depart == form.date_retour && form.date_retour !== "" && form.date_depart !== "") return 1 
        if( form.date_retour == "" && form.date_depart == "") return null 
   var dateR = new Date(form.date_retour).getTime()
    var dateD = new Date(form.date_depart).getTime()
    var diffTime = dateR - dateD

    var diffJours = diffTime / (1000 * 3600 * 24)
          if(isNaN(diffJours)) return null

    if(parseFloat(diffJours) < 0 ) return "durée invalide"

      return diffJours;
   },

    getDateRetourValue(){
     return !this.formData.date_depart != ""
   },


     afficherNomDuPersonnel(){
     return id => {
       if( id !== undefined) {
    var acteur = this.gettersPersonnels.find(item => item.id === id)
     return  (acteur) ? acteur.nom .concat('  ', acteur.prenom ):null
       }
    return null
     }
  
   },

   afficherFonctionDuPersonnel(){
     return id => {
       if( id != undefined) {
    var acteur = this.gettersPersonnels.find(acteur => acteur.id == id  )
     return (acteur) ? acteur.fonction_id :null
       }
    return null
     }
  
   },

    afficherLibelleFonction(){
     return id => {
       if( id !=null && id!="") {
    var acteur = this.gettersFonctions.find(acteur => acteur.id == id  )
    
     if(acteur){
       return acteur.libelle
     }
       }
    return null
     }
  
   },



    afficherIdActivite(){
     return id => {
       if( id != undefined) {
    var acteur = this.gettersMissions.find(acteur => acteur.id == id  )
     return (acteur) ? acteur.activite_id :null
       }
    return null
     }
  
   },

    afficherMontantActivite(){
     return id => {
       if( id !=null && id!="") {
    var acteur = this.gettersBudget.find(acteur => acteur.id == id  )
    
     if(acteur){
       return acteur.montant
     }
       }
    return null
     }
  
   },
 


    // afficher moyen de transport

   activationDeLaClasse(){
   return this.formData.moyen_transport_id !=4
   },

   //afficherAnnee
   afficherAnnee(){
             let Objet = this.gettersAnneeMissions.find(item =>item.encours==1)
            return (Objet) ? Objet.annee:null
            
   },

   // calcul du cout total

    calculDuCoutTotal(){

  const coutTotal = parseFloat(this.formData.frais_perdium) + parseFloat(this.formData.fraire_herbegement)
  + parseFloat(this.formData.fraire_restauration) + parseFloat(this.formData.autre_fraire) 

  if(isNaN(coutTotal)) return null
  return parseFloat(coutTotal).toFixed(2)
     
  //console.log(coutTotal)
},
affichierIdActeFinancierDansActePlan() {
      const qtereel = this.gettersPlanActivite.find(
        qtreel => qtreel.code == "1",
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },

AffichierElementParent() {
      
      return id => {
        if (id != null && id != "") {
          return this.gettersPlanActivite.filter(element => element.parent == id);
        }
      };
    },
    
},
methods: {
  ...mapActions("Utilisateurs", ["ajouterMission" ,"modifierMission","supprimerMission","getMission"]),
    
     afficherModalModifierPersonnel(index) {
      this.editMission = this.gettersMissions[index];
    },

     ajouterMissionLocal() {
         var nouvelObjet ={
            ...this.formData,
            annee:this.afficherAnnee ,
          //  personnel_id:this.afficherNomDuPersonnel,
            fonction_id:this.afficherLibelleFonction,
            duree:this.nombreJourCalucle,
            cout_total:this.calculDuCoutTotal,
            montant_activite:this.afficherMontantActivite(this.afficherIdActivite(this.formData.activite_id))
         }
      this.ajouterMission(nouvelObjet);
       this.getMission()
      this.formData = {
           type_mission_id:"",
        categorie_mission_id:"",
        moyen_transport_id:"",
        mode_paiement_id:"",
        annee:"",
       personnel_id:"",
        objet_mission:"",
        date_mission:"",
        destination:"",
        iteneraire_retnu:"",
        classe_voyage:"",
        fraire_restauration:"",
        fraire_herbegement:"",
        autre_fraire:"",
        cout_total:"",
        cout_billet_avion:"",
        date_depart:"",
        date_retour:"",
        duree:""
      };
    },
      modifierPersonnelLocal() {
      this.modifierMission(this.editMission);
      this.getMission()
      this.value4=false;
      this.editMission = {
          type_mission_id:"",
        categorie_mission_id:"",
        moyen_transport_id:"",
        mode_paiement_id:"",
        annee:"",
       personnel_id:"",
        objet_mission:"",
        date_mission:"",
        destination:"",
        iteneraire_retnu:"",
        classe_voyage:"",
        fraire_restauration:"",
        fraire_herbegement:"",
        autre_fraire:"",
        cout_total:"",
        cout_billet_avion:"",
        date_depart:"",
        date_retour:"",
        duree:""
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