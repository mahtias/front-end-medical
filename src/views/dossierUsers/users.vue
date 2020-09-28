<template>
    
<div class="">
							<div class="card">
								
									<!-- <div class="d-flex align-items-center"> -->
										<h4 class="card-title" align="center">LISTE DES  UTILISATEURS</h4>
										<button class="btn btn-success btn-round ml-auto"  @click="value3=true">
										
											<i class="fa fa-plus"></i>
                                            Ajouter
										</button>
										
									<!-- </div> -->
								
								<Drawer
										title="Creation d'utilisateur"
										v-model="value3"
										height="800px"
										width="720"
										:mask-closable="false"
										:styles="styles"

									
									>
											<div class="modal-body">
												
													<table id="add-row" class="display table table-striped table-hover" >
														<tr>
                               
                                       <td>
                                         
                                      
                                    <div class="col-md-6 col-lg-12">                       
                                  <div class="form-group form-floating-label">
                                  
												<input  type="text" class="form-control input-border-bottom" required v-model="formData.name">
												<label  class="placeholder">UserName</label>
											</div>
                      </div>
                                                          </td>

                                                            <td>
                                      
                                    <div class="col-md-6 col-lg-12">                       
                                  <div class="form-group form-floating-label">
                                  
												<input  type="text" class="form-control input-border-bottom" required v-model="formData.email">
												<label  class="placeholder">Email</label>
											</div>
                      </div>
                                                            </td>
                                                            
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                 <div class="col-md-6 col-lg-12">              
                                            <div class="form-group form-floating-label">
												<input  type="text" class="form-control input-border-bottom" required v-model="formData.nom_user">
												<label  class="placeholder">Nom</label>
											</div>
                      </div>
                                                            </td>

                                                                   <td>
                                          <div class="col-md-6 col-lg-12">
                                            <div class="form-group form-floating-label">
												<input  type="text" class="form-control input-border-bottom" required v-model="formData.prenom_user">
												<label  class="placeholder">Prenom</label>
											</div>
                      </div>
                                                            </td>
 
                                                        </tr>

                                                        
                                                         <tr>
                                                       <td> 
                                                     <div class="form-group form-floating-label">
												
                                                <select v-model="formData.role_id" class="form-control input-border-bottom" id="selectFloatingLabel" required>
                                                            <option value="">&nbsp;</option>
                                                            <option v-for="item in gettersRoles" :key="item.id"
                                                             :value="item.id">{{item.libelle}}</option>

                                                        </select>
												<label for="selectFloatingLabel" class="placeholder">Role Utilisateur</label>
											</div>
                      </td> 
                                               <!-- <td>
                                          <div class="col-md-6 col-lg-12">
                                            <div class="form-group form-floating-label">
												<input  type="password" class="form-control input-border-bottom" required v-model="formData.password">
												<label  class="placeholder">Password</label>
											</div>
                      </div>
                                                            </td>      -->
                     
                       </tr>
          
                          
                                          <!-- <div class="col-md-12 col-lg-12">
                                            <div class="form-group form-floating-label">
												<input  type="password" class="form-control input-border-bottom" required v-model="formData.password_confirme">
												<label  class="placeholder">Confirmation de mot de password</label>
											</div>
                      </div> -->
                                                            
                     
                       <!-- <tr>
                         <div class="form-check">
												<label>Gender</label><br>
												<label class="form-radio-label">
													<input class="form-radio-input" type="radio" name="optionsRadios" value="" checked="">
													<span class="form-radio-sign">Male</span>
												</label>
												<label class="form-radio-label ml-3">
													<input class="form-radio-input" type="radio" name="optionsRadios" value="">
													<span class="form-radio-sign">Female</span>
												</label>
											</div>
                       </tr> -->
                                                          
													</table>
												</div>

									<div class="demo-drawer-footer">
										<Button type="primary" @click.prevent="ajouterUserLocal">Enregistrer</Button>
										<Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
										
									</div>
									</Drawer>


									<Drawer
										title="Modification d'utilisateur"
										v-model="value4"
										height="800px"
										width="720"
										:mask-closable="false"
										:styles="styles"
									>
									<div class="modal-body">
												
													<table id="add-row" class="display table table-striped table-hover" >
														<tr>
                                <td>
                                         
                                      
                                    <div class="col-md-6 col-lg-12">                       
                                  <div class="form-group form-floating-label">
                                  
												<input  type="text" class="form-control input-border-bottom" required v-model="editUtilisateur.name">
												<label  class="placeholder">UserName</label>
											</div>
                      </div>
                                                          </td>
                                                                <td>
                                      
                                    <div class="col-md-6 col-lg-12">                       
                                  <div class="form-group form-floating-label">
                                  
												<input  type="text" class="form-control input-border-bottom" required v-model="editUtilisateur.email">
												<label  class="placeholder">Email</label>
											</div>
                      </div>
                                                            </td>
                                 
                                                        </tr>
                                                         <tr>
                                                            <td>
                                                 <div class="col-md-6 col-lg-12">              
                                            <div class="form-group form-floating-label">
												<input  type="text" class="form-control input-border-bottom" required v-model="editUtilisateur.nom_user">
												<label  class="placeholder">Nom</label>
											</div>
                      </div>
                                                            </td>

                                                                   <td>
                                          <div class="col-md-6 col-lg-12">
                                            <div class="form-group form-floating-label">
												<input  type="text" class="form-control input-border-bottom" required v-model="editUtilisateur.prenom_user">
												<label  class="placeholder">Prenom</label>
											</div>
                      </div>
                                                            </td>
 
                                                        </tr>
                                                        
                                                        <tr>
                                                            <td>
                                                                <div class="form-group form-floating-label">
												
                                                <select v-model="editUtilisateur.role_id" class="form-control input-border-bottom" id="selectFloatingLabel" required>
                                                            
                                                            <option v-for="item in gettersRoles" :key="item.id"
                                                             :value="item.id">{{item.libelle}}</option>

                                                        </select>
												<label for="selectFloatingLabel" class="placeholder">Role Utilisateur</label>
											</div>
                                                            </td>
                                                               <!-- <td>
                                          <div class="col-md-6 col-lg-12">
                                            <div class="form-group form-floating-label">
												<input  type="password" class="form-control input-border-bottom" required v-model="editUtilisateur.password">
												<label  class="placeholder">Password</label>
											</div>
                      </div>
                                                            </td> -->
                                    
                                                        </tr>
                                                          <tr>
                          <!-- <td>
                                          <div class="col-md-6 col-lg-12">
                                            <div class="form-group form-floating-label">
												<input  type="password" class="form-control input-border-bottom" required v-model="editUtilisateur.password_confirme">
												<label  class="placeholder">Confirmation de mot de password</label>
											</div>
                      </div>
                                                            </td>  -->
                       </tr>
													</table>
												</div>

									<div class="demo-drawer-footer">
										<Button type="primary" @click.prevent="modifierUserLocal">Modifier</Button>
										<Button style="margin-right: 8px" @click="value4 = false">Fermer</Button>
										
									</div>
									</Drawer>
								<div class="card-body">
                                  

									
									

									<div class="table-responsive">
										<table id="add-row" class="table table-head-bg-primary mt-2"> 
										<thead>
												<tr>
													<th style="text-align:center">UserName</th>
													<th style="text-align:center">Email</th>
                          <th style="text-align:center">Nom</th>
                          <th style="text-align:center">Prenom</th>
													<th style="text-align:center">Role</th>
													<th style="width: 10%;text-align:center">Action</th>
												</tr>
											</thead>
											
											<tbody>
                <tr class="odd gradeX" v-for="(item,index) in gettersUsers" :key="item.id">
                     <td
                    style="text-align:center"
                    >{{item.name || 'Non renseigne'}}</td>
                    <td
                    style="text-align:center"
                    >{{item.email || 'Non renseigne'}}</td>

                     <td
                    style="text-align:center"
                    >{{item.nom_user || 'Non renseigne'}}</td>
                     <td
                    style="text-align:center"
                    >{{item.prenom_user || 'Non renseigne'}}</td>
                    <td      
                    style="text-align:center"             
                    >{{item.user_role.role.libelle|| 'Non renseigne'}}</td>
                    
                  
					

                    <td>
														<div class="form-button-action">
															
                                <!-- <router-link :to="{name:'detailUser', params:{id:item.id}}"  title="detail user" class="btn btn-link btn-success btn-lg" data-original-title="Edit Task">
																<i class=" btn btn-outline-success fas fa-address-card"></i>  

                                  </router-link>                                 -->
																<button @click.prevent="value4=true" type="button"   data-toggle="modal"  title="modifier" class="btn btn-link btn-primary btn-lg"  @click="afficherModalModifierUser(index)">
																<i class=" btn btn-outline-info fa fa-edit"></i>
															</button>
															<button type="button" data-toggle="tooltip" title="supprimer" class="btn btn-link btn-danger" data-original-title="Remove" @click="supprimerUser(item.id)">
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
     name: "",
        email: "",
        role_id: "",
        nom_user:"",
        prenom_user:"",
       // password:"",
       // password_confirme:""
        
    },
    editUtilisateur: {
        name: "",
        email: "",
        role_id: "",
        nom_user:"",
        prenom_user:"",
        // password:"",
        //password_confirme:""
    },
    search: ""
    };
},

computed: {
	...mapGetters("Utilisateurs", ["gettersUsers","gettersRoles"]),
  AfficheLibelleRole() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersRoles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },


  
    
},
methods: {
	
    ...mapActions("Utilisateurs", [
    "ajouterUser","modifierUser","supprimerUser","getUser"

    ]),
    
      afficherModalModifierUser(index) {
      this.editUtilisateur = this.gettersUsers[index];
    },

     ajouterUserLocal() {
      this.ajouterUser(this.formData);
      this.getUser();
      this.formData = {
        name: "",
        email: "",
        role_id: "",
        nom_user:"",
        prenom_user:"",
        //  password:"",
        // password_confirme:""
      };
    },
      modifierUserLocal() {
      this.modifierUser(this.editUtilisateur);
      this.value4=false;
      this.editUtilisateur = {
        name: "",
        email: "",
        role_id: "",
        nom_user:"",
        prenom_user:"",
        //  password:"",
        // password_confirme:""
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