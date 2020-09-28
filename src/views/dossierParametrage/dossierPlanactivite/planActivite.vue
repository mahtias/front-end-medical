<template>
    

							<div class="card">
								
									<!-- <div class="d-flex align-items-center"> -->
										<h4 class="card-title" align="center">LISTE DES PLANS ACTIVITES</h4>
										<button class="btn btn-success btn-round ml-auto"  @click="value3=true">
										
											<i class="fa fa-plus"></i>
                                            Ajouter
										</button>
										
												
										
									<!-- </div> -->
								<!-- <debut d'ajout du plan pays /> -->
								<Drawer
										title="Ajouter plans d'activité"
										v-model="value3"
										height="800px"
										width="520"
										:mask-closable="false"
										:styles="styles"
									>
									
										<div class="form-group">
										<label>Structure activité</label>
										<select  v-model="formData.activite_id" class="form-control form-control-sm" >
										<option v-for="item in gettersActivite" :value="item.id" :key="item.id">{{ item.libelle }}</option>			
										</select>
										</div>
                                
									<div class="form-group">
									<label for="largeInput">Code</label>
									<input type="text" v-model="formData.code" class="form-control form-control" id="defaultInput" placeholder="Entre le code">
									</div>
									<div class="form-group">
									<label for="largeInput">Libelle</label>
									<input type="text" v-model="formData.libelle" class="form-control form-control" id="defaultInput" placeholder="Entrer le libelle">
									</div>
								

									<div class="demo-drawer-footer">
										<Button  type="primary" @click.prevent="ajouterPlanActiviteLocal">Enregistrer</Button>
										<Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
										
									</div>
									</Drawer>
                                 <!-- <Fin du debut d'ajout du plan pays/> -->


                                    <!-- < Debut Ajouter element enfant/> -->
									<Drawer
										title="Ajouter plan d'activité"
										v-model="value5"
										height="800px"
										width="520"
										:mask-closable="false"
										:styles="styles"
									>
									
									<div class="form-group">
									<label for="largeInput">Code Parent</label>
									<input type="text" readonly :value="parentDossier.code" class="form-control form-control" id="defaultInput" placeholder="Entre le code">
									</div>
										<div class="form-group">
									<label for="largeInput">Libelle Parent</label>
									<input type="text" readonly :value="parentDossier.libelle" class="form-control form-control" id="defaultInput" placeholder="Entre le code">
									</div>
									<div class="form-group">
										<label>Structure activité</label>
										<select  v-model="nouvelElementEnfant.activite_id" class="form-control form-control-sm" >
										<option v-for="item in gettersActivite" :value="item.id" :key="item.id">{{ item.libelle }}</option>			
										</select>
										</div>
								
									<div class="form-group">
									<label for="largeInput">Code </label>
									<input type="text" v-model="nouvelElementEnfant.code" class="form-control form-control" id="defaultInput" placeholder="Entre le code">
									</div>
									<div class="form-group">
									<label for="largeInput">Libelle</label>
									<input type="text" v-model="nouvelElementEnfant.libelle" class="form-control form-control" id="defaultInput" placeholder="Entre le code">
									</div>
									
								

									<div class="demo-drawer-footer">
									<Button v-show="nouvelElementEnfant.code.length && nouvelElementEnfant.libelle.length &&
									nouvelElementEnfant.activite_id" type="primary" @click.prevent="ajouterPlanActiviteEnfantLocal()">Valider</Button>
									<Button style="margin-right: 8px" @click="value5 = false">Fermer</Button>
										
									</div>
									</Drawer>
									<!-- <Fin d'ajout enfant de plan pays /> -->

                                   <!-- <Debut de modification du plan pays /> -->
									<Drawer
										title="Modification plan activité"
										v-model="value4"
										height="800px"
										width="520"
										:mask-closable="false"
										:styles="styles"
									>
									<div class="form-group">
										<label>Structure d'activité</label>
										<select  v-model="editPlanActivite.activite_id" class="form-control form-control-sm" >
										<option v-for="item in gettersActivite" :value="item.id" :key="item.id">{{ item.libelle }}</option>			
										</select>
										</div>
                                
									<div class="form-group">
									<label for="largeInput">Code</label>
									<input type="text" v-model="editPlanActivite.code" class="form-control form-control" id="defaultInput" placeholder="Entre le code">
									</div>
									<div class="form-group">
									<label for="largeInput">Libelle</label>
									<input type="text" v-model="editPlanActivite.libelle" class="form-control form-control" id="defaultInput" placeholder="Entrer le libelle">
									</div>
								

									<div class="demo-drawer-footer">
										<Button type="primary" @click.prevent="modifierPlanActiviteLocal">Modifier</Button>
										<Button style="margin-right: 8px" @click="value4 = false">Fermer</Button>
										
									</div>
									</Drawer>

                                  <!-- <Fin d'ajoute de modification de plan pays /> -->
								<div class="widget-content"> 
								<ul id="demo" style="margin:50px;">
												<Tree class="item" v-for="plan in lesPlansParents"
												:key="plan.id" :item="plan"   
												@ajouterElementEnfant="ajouterElementEnfant" 
												@supprimer="supprimerPlanActiviteLocal"
												@modifier="afficherModalModifierPlanActivite"></Tree>
												</ul>
									<div v-if="lesPlansParents.length">
										</div>
										<div v-else>
										<div align="center">
										<h4 style="color:red;">Aucun plan d'activité trouvé</h4>
										</div>
									</div>
								</div>
								
							</div>
							
				
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Tree from "../Tree"




export default {
name:'planPays',
	components: {
	Tree
	},
data() {
    return {
		handleCreate1:"",
		value3: false,
		value4: false,
		value5: false,
        styles: {
            height: '',
            overflow: 'auto',
            paddingBottom: '20px',
            position: 'static'
            },
	nouvelElementEnfant:{
		code: "",
        libelle: "",
        activite_id:""
	},
	parentDossier:{},
    formData: {
        code: "",
        libelle: "",
        activite_id:""
        
    },
    editPlanActivite: {
    code: "",
    libelle: "",
    activite_id:""
    },
    search: ""
    };
},

computed: {
    ...mapGetters("Utilisateurs", ["gettersActivite","gettersPlanActivite" ]),

    //afficherLibellePays
    afficherLibellePays(){
        return id =>{
            if(id!=null && id!=""){
            let objet = this.gettersActivite.find(item => item.id==id)
            if(objet) return objet.libelle
            }
            return null
        }
    },
	lesPlansParents(){
    return this.gettersPlanActivite.filter(plan => plan.parent == null)
   }
    
},
methods: {
  ...mapActions("Utilisateurs", ["ajouterPlanActivite" ,"modifierPlanActivite",
  "supprimerPlanActivite","getPlanActivite"]),
    
    afficherModalModifierPlanActivite(item) {
	this.editPlanActivite = this.gettersPlanActivite.find(plan => plan.id == item.id);
	this.value4=true;
    },

     ajouterPlanActiviteLocal() {
      this.ajouterPlanActivite(this.formData);
       this.getPlanActivite();
      this.formData = {
        code: "",
        libelle: "",
        activite_id:""
      };
    },
      modifierPlanActiviteLocal() {
      this.modifierPlanActivite(this.editPlanActivite);
      this.getPlanActivite()
      this.value4=false;
      this.editPlanActivite = {
        code: "",
        libelle: "",
        activite_id:""
      };
	},
	
	// ajouter enfant plan pays
	ajouterPlanActiviteEnfantLocal () {
      // console.log(this.nouvelElementEnfant)
      this.ajouterPlanActivite(this.nouvelElementEnfant)
      this.getPlanActivite()
       this.value5=false;
        this.nouvelElementEnfant = {
                code: "",
             libelle: "",
          activite_id:""
        }
	},
	supprimerPlanActiviteLocal(item){
      this.supprimerPlanActivite(item.id)
      //this.getPlanActivite()
	},
	ajouterElementEnfant(item) {
	this.getPlanActivite();	
    this.parentDossier = this.gettersPlanActivite.find(plan => plan.id == item.id)
    this.nouvelElementEnfant.code = this.parentDossier.code
     this.nouvelElementEnfant.parent = this.parentDossier.id
     this.value5=true;
    //   this.$('#modalAjouterElementEnfant').modal({
    //           backdrop: 'static',
    //           keyboard: false
    //          });

    },
}
};
</script>


<style  scoped>

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

  /* #demo{
	margin: 50px;
  } */
	.form-button-action{
		text-align: right;
		width: -500px;
	}



	

	

</style>