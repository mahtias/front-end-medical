<template>
    
<div class="">
							<div class="card">
								
									<!-- <div class="d-flex align-items-center"> -->
										<h4 class="card-title" align="center">LISTE DE BUDGET</h4>
										<button class="btn btn-success btn-round ml-auto"  @click="value3=true">
											<i class="fa fa-plus"></i>
                                            Ajouter
										</button>
	
									<!-- </div> -->
								
								<Drawer
										title="Creation de budegt"
										v-model="value3"
										height="800px"
										width="520"
										:mask-closable="false"
										:styles="styles"

			
									>
									<div class="form-group">
										<label>Plan d'activité</label>
										<select  v-model="formData.activite_id" class="form-control form-control-sm" >
										<option v-for="item in AffichierElementParent(affichierIdActeFinancierDansActePlan)"  :key="item.id"
										:value="item.id">{{ item.libelle }}</option>			
										</select>
										</div>
									<div class="form-group">
									<label for="largeInput">Code</label>
									<input type="text" v-model="formData.code" class="form-control form-control" id="defaultInput" placeholder="">
									</div>
									<div class="form-group">
									<label for="largeInput">Quantité</label>
									<input type="number" v-model="formData.quantite" class="form-control form-control" id="defaultInput" placeholder="">
									</div>
                                    <div class="form-group">
									<label for="largeInput">Prix unitatire</label>
									<input type="number" v-model="formData.prixU" class="form-control form-control" id="defaultInput" placeholder="">
									</div>
                                     <div class="form-group">
									<label for="largeInput">Montant</label>
									<input type="text" :value="calculMontant"  readonly class="form-control form-control" id="defaultInput" placeholder="">
									</div>

									<div class="demo-drawer-footer">
										<Button type="primary" @click.prevent="ajouterBudgeLocal">Enregistrer</Button>
										<Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
										
									</div>
									</Drawer>


									<Drawer
										title="Modification du budget"
										v-model="value4"
										height="800px"
										width="520"
										:mask-closable="false"
										:styles="styles"
									>
								
										<div class="form-group">
										<label>Plan d'activité</label>
										<select  v-model="editBudget.activite_id" class="form-control form-control-sm" >
										<option v-for="item in AffichierElementParent(affichierIdActeFinancierDansActePlan)"  :key="item.id"
										:value="item.id">{{ item.libelle }}</option>			
										</select>
										</div>
									<div class="form-group">
									<label for="largeInput">Code</label>
									<input type="text" v-model="editBudget.code" class="form-control form-control" id="defaultInput" placeholder="">
									</div>
									<div class="form-group">
									<label for="largeInput">Quantité</label>
									<input type="number" v-model="editBudget.quantite" class="form-control form-control" id="defaultInput" placeholder="">
									</div>
                                    <div class="form-group">
									<label for="largeInput">Prix unitatire</label>
									<input type="number" v-model="editBudget.prixU" class="form-control form-control" id="defaultInput" placeholder="">
									</div>
                                     <div class="form-group">
									<label for="largeInput">Montant</label>
									<input type="text" v-model="editBudget.montant" class="form-control form-control" id="defaultInput" placeholder="">
									</div>
								

									<div class="demo-drawer-footer">
										<Button type="primary" @click.prevent="modifierBudgetLocal">Modifier</Button>
										<Button style="margin-right: 8px" @click="value4 = false">Fermer</Button>
										
									</div>
									</Drawer>
								<div class="card-body">
                                  

									
									

									<div class="table-responsive">
										<table id="add-row" class="table table-head-bg-primary mt-2"> 
											<thead>
												<tr>
													<th style="text-align:center">Activité</th>
													<th style="text-align:center">Code</th>
													<th style="text-align:center">Qantité</th>
                                                    <th style="text-align:center">Prix unitaire</th>
                                                    <th style="text-align:center">Montant</th>
													
												
													<th style="width: 10%;text-align:center">Action</th>
												</tr>
											</thead>
											
											<tbody>
                <tr class="odd gradeX" v-for="(item,index) in gettersBudget" :key="item.id">
                    <td
						style="text-align:center"
						>{{afficherLibelleActivite(item.activite_id) || 'Non renseigne'}}</td>
						<td
						style="text-align:center"
						>{{item.code || 'Non renseigne'}}</td>
						<td
						style="text-align:center"
						>{{item.quantite || 'Non renseigne'}}</td>
						<td
						style="text-align:center"
						>{{formatageSomme(parseFloat(item.prixU)) || 'Non renseigne'}}</td>
						<td
						style="text-align:center"
						>{{formatageSomme(parseFloat(item.montant)) || 'Non renseigne'}}</td>
						
					

                    <td>
														<div class="form-button-action">
															
                                                              
																<button @click.prevent="value4=true" type="button"   data-toggle="modal"  title="modifier" class="btn btn-link btn-primary btn-lg"  @click="afficherModalModifierBudget(index)">
																<i class=" btn btn-outline-info fa fa-edit"></i>
															</button>
															<button type="button" data-toggle="tooltip" title="supprimer" class="btn btn-link btn-danger" data-original-title="Remove" @click="supprimerBudget(item.id)">
																<i class="btn btn-outline-danger fas fa-trash-alt"></i>
															</button>
														</div>
													</td>
                </tr>
													<tr>

													<td></td>
													<td></td>
													<td></td>
													<td style=""> 
                      </td>
                                                <td  style="text-align: center;color:red;">
                                                   {{formatageSomme(parseFloat(afficherMontantBudget))}}
                           
                                                </td>
													<td></td>
													
													
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
import {formatageSomme} from "../../repositories/repository"
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
     quantite:"",
	prixU:"",
	activite_id:"",
	montant:""
        
    },
    editBudget: {
    code:"",
    quantite:"",
	prixU:"",
	activite_id:"",
	montant:""
    },
    search: ""
    };
},

computed: {
    ...mapGetters("Utilisateurs", ["gettersBudget","gettersPlanActivite" ]),

    calculMontant(){
     const montantBudget = parseFloat(this.formData.quantite) * parseFloat(this.formData.prixU)

     if(isNaN(montantBudget)) return null
  return parseFloat(montantBudget).toFixed(2)
	},

	afficherLibelleActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersPlanActivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
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

	// calucl du budget total de toute les activites

	afficherMontantBudget(){
		
			return this.gettersBudget.reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant), 0)	
		
	}
    
},
methods: {
  ...mapActions("Utilisateurs", ["ajouterBudget" ,"modifierBudget","supprimerBudget"]),
    
     afficherModalModifierBudget(index) {
      this.editBudget = this.gettersBudget[index];
    },

     ajouterBudgeLocal() {
	var nouvelObjet ={
	...this.formData,
	montant:this.calculMontant
	}
    this.ajouterBudget(nouvelObjet);
    this.formData = {
    code:"",
    quantite:"",
	prixU:"",
	activite_id:"",
	montant:""
    };
    },
      modifierBudgetLocal() {
      this.modifierBudget(this.editBudget);
      this.value4=false;
      this.editBudget = {
    code:"",
    quantite:"",
	prixU:"",
	activite_id:"",
	montant:""
    };
	},
	formatageSomme:formatageSomme
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