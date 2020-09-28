<template>
    

							<div class="card">
								
									<!-- <div class="d-flex align-items-center"> -->
										<h4 class="card-title" align="center">LISTE DES PLANS PAYS</h4>
										<button class="btn btn-success btn-round ml-auto"  @click="value3=true">
										
											<i class="fa fa-plus"></i>
                                            Ajouter
										</button>
										
												
										
									<!-- </div> -->
								<!-- <debut d'ajout du plan pays /> -->
								<Drawer
										title="Ajouter plan pays"
										v-model="value3"
										height="800px"
										width="520"
										:mask-closable="false"
										:styles="styles"
									>
									
										<div class="form-group">
										<label>Structure Pays</label>
										<select  v-model="formData.pays_id" class="form-control form-control-sm" >
										<option v-for="item in gettersPays" :value="item.id" :key="item.id">{{ item.libelle }}</option>			
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
										<Button  type="primary" @click.prevent="ajouterPlanPaysLocal">Enregistrer</Button>
										<Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
										
									</div>
									</Drawer>
                                 <!-- <Fin du debut d'ajout du plan pays/> -->


                                    <!-- < Debut Ajouter element enfant/> -->
									<Drawer
										title="Ajouter plan pays"
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
										<label>Structure Pays</label>
										<select  v-model="nouvelElementEnfant.pays_id" class="form-control form-control-sm" >
										<option v-for="item in gettersPays" :value="item.id" :key="item.id">{{ item.libelle }}</option>			
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
									nouvelElementEnfant.pays_id" type="primary" @click.prevent="ajouterPlanPaysEnfantLocal()">Valider</Button>
									<Button style="margin-right: 8px" @click="value5 = false">Fermer</Button>
										
									</div>
									</Drawer>
									<!-- <Fin d'ajout enfant de plan pays /> -->

                                   <!-- <Debut de modification du plan pays /> -->
									<Drawer
										title="Modification de plan pays"
										v-model="value4"
										height="800px"
										width="520"
										:mask-closable="false"
										:styles="styles"
									>
									<div class="form-group">
										<label>Structure Pays</label>
										<select  v-model="editPlanPays.pays_id" class="form-control form-control-sm" >
										<option v-for="item in gettersPays" :value="item.id" :key="item.id">{{ item.libelle }}</option>			
										</select>
										</div>
                                
									<div class="form-group">
									<label for="largeInput">Code</label>
									<input type="text" v-model="editPlanPays.code" class="form-control form-control" id="defaultInput" placeholder="Entre le code">
									</div>
									<div class="form-group">
									<label for="largeInput">Libelle</label>
									<input type="text" v-model="editPlanPays.libelle" class="form-control form-control" id="defaultInput" placeholder="Entrer le libelle">
									</div>
								

									<div class="demo-drawer-footer">
										<Button type="primary" @click.prevent="modifierPlanPaysLocal">Modifier</Button>
										<Button style="margin-right: 8px" @click="value4 = false">Fermer</Button>
										
									</div>
									</Drawer>

                                  <!-- <Fin d'ajoute de modification de plan pays /> -->
								<div class="widget-content"> 
								<ul id="demo" style="margin:50px;">
												<Tree class="item" v-for="plan in lesPlansParents"
												:key="plan.id" :item="plan"   
												@ajouterElementEnfant="ajouterElementEnfant" 
												@supprimer="supprimerPlanPaysLocal"
												@modifier="afficherModificationPlanPays"></Tree>
												</ul>
									<div v-if="lesPlansParents.length">
										</div>
										<div v-else>
										<div align="center">
										<h4 style="color:red;">Aucun plan pays trouvé</h4>
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
        pays_id:""
	},
	parentDossier:{},
    formData: {
        code: "",
        libelle: "",
        pays_id:""
        
    },
    editPlanPays: {
    code: "",
    libelle: "",
    pays_id:""
    },
    search: ""
    };
},

computed: {
    ...mapGetters("Utilisateurs", ["gettersPays","gettersPlanPays" ]),

    //afficherLibellePays
    afficherLibellePays(){
        return id =>{
            if(id!=null && id!=""){
            let objet = this.gettersPays.find(item => item.id==id)
            if(objet) return objet.libelle
            }
            return null
        }
    },
	lesPlansParents(){
    return this.gettersPlanPays.filter(plan => plan.parent == null)
   }
    
},
methods: {
  ...mapActions("Utilisateurs", ["ajouterPlan_pays" ,"modifierPlan_pays",
  "supprimerPlan_pays","getPlan_pays"]),
    
    afficherModificationPlanPays(item) {
	this.editPlanPays = this.gettersPlanPays.find(plan => plan.id == item.id);
	this.value4=true;
    },

     ajouterPlanPaysLocal() {
      this.ajouterPlan_pays(this.formData);
       this.getPlan_pays();
      this.formData = {
        code: "",
        libelle: "",
        pays_id:""
      };
    },
      modifierPlanPaysLocal() {
      this.modifierPlan_pays(this.editPlanPays);
      this.getPlan_pays()
      this.value4=false;
      this.editPlanPays = {
        code: "",
        libelle: "",
        pays_id:""
      };
	},
	
	// ajouter enfant plan pays
	ajouterPlanPaysEnfantLocal () {
      // console.log(this.nouvelElementEnfant)
      this.ajouterPlan_pays(this.nouvelElementEnfant)
     // this.getPlan_pays()
       this.value5=false;
        this.nouvelElementEnfant = {
                code: "",
             libelle: "",
          pays_id:""
        }
	},
	supprimerPlanPaysLocal(item){
      this.supprimerPlan_pays(item.id)
      this.getPlan_pays()
	},
	ajouterElementEnfant(item) {
	this.getPlan_pays();	
    this.parentDossier = this.gettersPlanPays.find(plan => plan.id == item.id)
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