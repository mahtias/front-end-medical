import apiGuest from './urls/urlAdoni'
import router from '../../../routes/index'
import { asyncLoading } from 'vuejs-loading-plugin'
import {token} from "../../../repositories/Auth"
//import { Message } from 'iview'
//import { Notice,nodesc,Message } from 'view-design'

export function login({commit}, user){
    if(user.email && user.password){
       // this.loader = true;
      // commit('SET_LOADER_TRUE')
    //  this.error = false
        commit('SET_ERROR_FALSE')
            //   this.loginError = false;
               apiGuest.post('/login', {
                email: user.email,
                password: user.password
            }).then(response => {

                    commit('LOGIN_USER', response.data.user)

                    localStorage.setItem('token', response.data.access_token)
                    localStorage.setItem('Users',JSON.stringify(response.data.user))
                    this.$app.$notify({
                      title: 'success ',
                      text: 'connexion effectué avec success!',
                      type:"success"
                    })
                   // Message.succes('Felicitation vous etes connectés avec succès !')
                   router.push({ name: 'TableauBordGenerale' })

               }).catch((error) => {
                  // this.loginError = true

                   if (error.response.status === 401 || error.response.status === 403) {
                   commit('SET_ERROR_MESSAGE', error.response.data.message)
                     commit('SET_LOADER_FALSE')
                  //   //  this.error = false
                     commit('SET_ERROR_TRUE')
                    //this.$router.push({name: 'login'})
                }

               });
      }else if(!user.email){
        commit('SET_CHAMP_VIDE_TRUE')
      }else if(!user.password){
        commit('SET_CHAMP_VIDE_TRUE')
      }
}

    export function logoutUser({commit}){
      localStorage.removeItem('token')
      localStorage.removeItem('Users')
      commit('LOGOUT_USER')
      router.push({ name: 'Login' })                   

    }


    export function getUtilisateur({ commit }) {
  
      console.log(token())
      apiGuest.get('/user',token()).then((response) => {
        commit('GET_ALL_UTILISATEUR', response.data)
        
      }).catch(error => console.log(error))
    
    }
    export function ajouterUtilisateur({ commit,dispatch }, formData) {
     asyncLoading (apiGuest.post('/register', formData,token())).then(response => {
        if (response.status == 201) {
          console.log(response.data)
          commit('AJOUTER_UTILISATEUR', response.data)
          dispatch('getUtilisateur')
       
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
        }
    
      }).catch(error => console.log(error))
    }
    
    // action pour modifier bailleur
    
    
    export function modifierUtilisateur({ commit }, element_modifie) {
     asyncLoading (apiGuest.put('/user/' + element_modifie.id, element_modifie,token())).then(response => {
        commit('MODIFIER_UTILISATEUR', response.data)
      //   Notice.success({
      //     title: 'Modification effectué ',
      //     desc: nodesc ? '' : 'avec success. '
      // });
        this.$app.$notify({
          title: 'success ',
          text: 'Modification effectué avec success!',
          type:"success"
        })
    
      }).catch(error => console.log(error))
    }

    export function supprimerUtilisateur({ commit }, id) {
      this.$app.$dialog
      .confirm("Voulez vouz vraiment supprimer ?.")
      .then(dialog => {
        commit('SUPPRIMER_UTILISATEUR', id)
      //   Notice.success({
      //     title: 'Suppression effectué ',
      //     desc: nodesc ? '' : 'avec success. '
      // });
        this.$app.$notify({
          title: 'success ',
          text: 'Suppression effectué avec success!',
          type:"success"
        })
      // // dialog.loading(false) // stops the proceed button's loader
      apiGuest.delete('/user/' + id,token()).then(() => dialog.close())
      }) 
    
    
    }





    export function getCategorie({ commit }) {
  
     // console.log(token())
      apiGuest.get('/categorie').then((response) => {
        commit('GET_ALL_CATEGORIE_MISSION', response.data)
        
      }).catch(error => console.log(error))
    
    }
    export function ajouterCategorieMission({ commit}, formData) {
     asyncLoading (apiGuest.post('/categorie', formData)).then(response => {
        if (response.status == 201) {
         // console.log(response.data)
          commit('AJOUTER_CATEGORIE_MISSION', response.data)
        
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
        }
    
      }).catch(error => console.log(error))
    }
    
    // action pour modifier bailleur
    
    
    export function modifierCategorieMission({ commit ,dispatch}, element_modifie) {
     asyncLoading (apiGuest.put('/categorie/' + element_modifie.id, element_modifie)).then(response => {
        commit('MODIFIER_CATEGORIE_MISSION', response.data)
        dispatch('getCategorie')
      //   Notice.success({
      //     title: 'Modification effectué ',
      //     desc: nodesc ? '' : 'avec success. '
      // });
        this.$app.$notify({
          title: 'success ',
          text: 'Modification effectué avec success!',
          type:"success"
        })
    
      }).catch(error => console.log(error))
    }

    export function supprimerCategorieMission({ commit }, id) {
      this.$app.$dialog
      .confirm("Voulez vouz vraiment supprimer ?.")
      .then(dialog => {
        commit('SUPPRIMER_CATEGORIE_MISSION', id)
      //   Notice.success({
      //     title: 'Suppression effectué ',
      //     desc: nodesc ? '' : 'avec success. '
      // });
        this.$app.$notify({
          title: 'success ',
          text: 'Suppression effectué avec success!',
          type:"success"
        })
      // // dialog.loading(false) // stops the proceed button's loader
      apiGuest.delete('/categorie/' + id).then(() => dialog.close())
      }) 
    
    
    }
    

    // action pour la fonction

    
    export function getFonction({ commit }) {
  
      // console.log(token())
       apiGuest.get('/fonction').then((response) => {
         commit('GET_ALL_FONCTION', response.data)
         
       }).catch(error => console.log(error))
     
     }
     export function ajouterFonction({ commit,dispatch}, formData) {
      asyncLoading (apiGuest.post('/fonction', formData)).then(response => {
         if (response.status == 201) {
          // console.log(response.data)
           commit('AJOUTER_FONCTION', response.data)
           dispatch('getFonction')
           this.$app.$notify({
             title: 'success ',
             text: 'Enregistrement effectué !',
             type:"success"
           })
         }
     
       }).catch(error => console.log(error))
     }
     
     // action pour modifier bailleur
     
     
     export function modifierFonction({ commit, dispatch }, element_modifie) {
      asyncLoading (apiGuest.put('/fonction/' + element_modifie.id, element_modifie)).then(response => {
         commit('MODIFIER_FONCTION', response.data)
         dispatch('getFonction')
       //   Notice.success({
       //     title: 'Modification effectué ',
       //     desc: nodesc ? '' : 'avec success. '
       // });
         this.$app.$notify({
           title: 'success ',
           text: 'Modification effectué avec success!',
           type:"success"
         })
     
       }).catch(error => console.log(error))
     }
 
     export function supprimerFonction({ commit }, id) {
       this.$app.$dialog
       .confirm("Voulez vouz vraiment supprimer ?.")
       .then(dialog => {
         commit('SUPPRIMER_FONCTION', id)
         this.$app.$notify({
           title: 'success ',
           text: 'Suppression effectué avec success!',
           type:"success"
         })
       // // dialog.loading(false) // stops the proceed button's loader
       apiGuest.delete('/fonction/' + id).then(() => dialog.close())
       }) 
     
     
     }



       // action pour le moyen transport 

    
    export function getmoyenTransport({ commit }) {
  
      // console.log(token())
       apiGuest.get('/transport').then((response) => {
         commit('GET_MOYEN_TRANSPORT', response.data)
         
       }).catch(error => console.log(error))
     
     }
     export function ajouterMoyenTransport({ commit,dispatch}, formData) {
      asyncLoading (apiGuest.post('/transport', formData)).then(response => {
         if (response.status == 201) {
          // console.log(response.data)
           commit('AJOUTER_MOYEN_TRANSPORT', response.data)
           dispatch('getmoyenTransport')
           this.$app.$notify({
             title: 'success ',
             text: 'Enregistrement effectué !',
             type:"success"
           })
         }
     
       }).catch(error => console.log(error))
     }
     
     // action pour modifier bailleur
     
     
     export function modifierMoyenTranspor({ commit, dispatch }, element_modifie) {
      asyncLoading (apiGuest.put('/transport/' + element_modifie.id, element_modifie)).then(response => {
         commit('MODIFIER_MOYEN_TRANSPORT', response.data)
         dispatch('getmoyenTransport')
       //   Notice.success({
       //     title: 'Modification effectué ',
       //     desc: nodesc ? '' : 'avec success. '
       // });
         this.$app.$notify({
           title: 'success ',
           text: 'Modification effectué avec success!',
           type:"success"
         })
     
       }).catch(error => console.log(error))
     }
 
     export function supprimerMoyenTransport({ commit }, id) {
       this.$app.$dialog
       .confirm("Voulez vouz vraiment supprimer ?.")
       .then(dialog => {
         commit('SUPPRIMER_MOYEN_TRANSPORT', id)
         this.$app.$notify({
           title: 'success ',
           text: 'Suppression effectué avec success!',
           type:"success"
         })
       // // dialog.loading(false) // stops the proceed button's loader
       apiGuest.delete('/transport/' + id).then(() => dialog.close())
       }) 
     
     
     }


     
       // action pour le type de mission

    
    export function getTypeMission({ commit }) {
  
      // console.log(token())
       apiGuest.get('/typeMission').then((response) => {
         commit('GET_ALL_TYPE_MISSION', response.data)
         
       }).catch(error => console.log(error))
     
     }
     export function ajouterTypeMission({ commit,dispatch}, formData) {
      asyncLoading (apiGuest.post('/typeMission', formData)).then(response => {
         if (response.status == 201) {
           console.log("ok ok ok ok ok c'est la vie")
           commit('AJOUTER_TYPE_MISSION', response.data)
           dispatch('getTypeMission')
           this.$app.$notify({
             title: 'success ',
             text: 'Enregistrement effectué !',
             type:"success"
           })
         }
     
       }).catch(error => console.log(error))
     }
     
     // action pour modifier 
     
     
     export function modifierTypeMission({ commit, dispatch }, element_modifie) {
      asyncLoading (apiGuest.put('/typeMission/' + element_modifie.id, element_modifie)).then(response => {
         commit('MODIFIER_TYPE_MISSION', response.data)
         dispatch('getTypeMission')
       //   Notice.success({
       //     title: 'Modification effectué ',
       //     desc: nodesc ? '' : 'avec success. '
       // });
         this.$app.$notify({
           title: 'success ',
           text: 'Modification effectué avec success!',
           type:"success"
         })
     
       }).catch(error => console.log(error))
     }
 
     export function supprimerTypeMission({ commit }, id) {
       this.$app.$dialog
       .confirm("Voulez vouz vraiment supprimer ?.")
       .then(dialog => {
         commit('SUPPRIMER_TYPE_MISSION', id)
         this.$app.$notify({
           title: 'success ',
           text: 'Suppression effectué avec success!',
           type:"success"
         })
       // // dialog.loading(false) // stops the proceed button's loader
       apiGuest.delete('/typeMission/' + id).then(() => dialog.close())
       }) 
     
     
     }


/// action pour annee de mission
       
    export function getAnneeMission({ commit }) {
      // console.log(token())
       apiGuest.get('/annee_mission').then((response) => {
         commit('GET_ALL_ANNEE_MISSION', response.data)
         
       }).catch(error => console.log(error))
     
     }


     export function activeAnneemission({ commit, dispatch }, objetAjout) {

      this.$app.$dialog
          .confirm("Voulez vous changer année en cours ?.")
          .then(dialog => {
      
              asyncLoading(apiGuest.post('/activedAnne', {
  
                  id: objetAjout,
  
              })).then(varActivation => {
                  // if (varActivation.status == 201) {
                  commit('ACTIVED_ANNE_MISSION', varActivation.data)
                  dispatch('getAnneeMission')
                  this.$app.$notify({
                      title: 'success ',
                      text: 'Option Effectué avec success !',
                      type: "success"
                  })
                  // }
              }).catch(error => console.log(error))
              dialog.close()
          });
     
     
  }
    

     export function ajouterAnneMission({ commit}, formData) {
      asyncLoading (apiGuest.post('/annee_mission', formData)).then(response => {
         if (response.status == 201) {
           console.log("ok ok ok ok ok c'est la vie")
           commit('AJOUTER_ANNE_MISSION', response.data)
           //dispatch('getAnneeMission')
           this.$app.$notify({
             title: 'success ',
             text: 'Enregistrement effectué !',
             type:"success"
           })
         }
     
       }).catch(error => console.log(error))
     }
    
     // action pour modifier 
     
     
     export function modifierAnneMission({ commit}, element_modifie) {
      asyncLoading (apiGuest.put('/annee_mission/' + element_modifie.id, element_modifie)).then(response => {
         commit('MODIFIER_ANNEE_MISSION', response.data)
        
       //   Notice.success({
       //     title: 'Modification effectué ',
       //     desc: nodesc ? '' : 'avec success. '
       // });
         this.$app.$notify({
           title: 'success ',
           text: 'Modification effectué avec success!',
           type:"success"
         })
     
       }).catch(error => console.log(error))
     }
 
     export function supprimerAnneeMission({ commit }, id) {
       this.$app.$dialog
       .confirm("Voulez vouz vraiment supprimer ?.")
       .then(dialog => {
         commit('SUPPRIMER_ANNEE_MISSION', id)
         this.$app.$notify({
           title: 'success ',
           text: 'Suppression effectué avec success!',
           type:"success"
         })
       // // dialog.loading(false) // stops the proceed button's loader
       apiGuest.delete('/annee_mission/' + id).then(() => dialog.close())
       }) 
     
     
     }


     // action  la norme de mission//

     export function getNormeMission({ commit }) {
      // console.log(token())
       apiGuest.get('/norme').then((response) => {
         commit('GET_ALL_NORME_MISSION', response.data)
         
       }).catch(error => console.log(error))
     
     }

     
     export function ajouterNormeMission({ commit}, formData) {
      asyncLoading (apiGuest.post('/norme', formData)).then(response => {
         if (response.status == 201) {
          // console.log("ok ok ok ok ok c'est la vie")
           commit('AJOUTER_NORME_MISSION', response.data)
           //dispatch('getAnneeMission')
           this.$app.$notify({
             title: 'success ',
             text: 'Enregistrement effectué !',
             type:"success"
           })
         }
     
       }).catch(error => console.log(error))
     }
    
     // action pour modifier 
     
     
     export function modifierNormeMission({ commit}, element_modifie) {
      asyncLoading (apiGuest.put('/norme/' + element_modifie.id, element_modifie)).then(response => {
         commit('MODIFIER_NORME_MISSION', response.data)
         //dispatch('getNormeMission')
       //   Notice.success({
       //     title: 'Modification effectué ',
       //     desc: nodesc ? '' : 'avec success. '
       // });
         this.$app.$notify({
           title: 'success ',
           text: 'Modification effectué avec success!',
           type:"success"
         })
     
       }).catch(error => console.log(error))
     }
 
     export function supprimerNormeMission({ commit }, id) {
       this.$app.$dialog
       .confirm("Voulez vouz vraiment supprimer ?.")
       .then(dialog => {
         commit('SUPPRIMER_NORME_MISSION', id)
         this.$app.$notify({
           title: 'success ',
           text: 'Suppression effectué avec success!',
           type:"success"
         })
       // // dialog.loading(false) // stops the proceed button's loader
       apiGuest.delete('/norme/' + id).then(() => dialog.close())
       }) 
     
     
     }


     // action pour le personnel//

      export function getPersonnel({ commit }) {
        // console.log(token())
         apiGuest.get('/personnel').then((response) => {
           commit('GET_ALL_PERSONNEL', response.data)
           
         }).catch(error => console.log(error))
       
       }
  
       
       export function ajouterPersonnel({ commit,dispatch}, formData) {
        asyncLoading (apiGuest.post('/personnel', formData)).then(response => {
           if (response.status == 201) {
            // console.log("ok ok ok ok ok c'est la vie")
             commit('AJOUTER_PERSONNEL', response.data)
             dispatch('getPersonnel')
             this.$app.$notify({
               title: 'success ',
               text: 'Enregistrement effectué !',
               type:"success"
             })
           }
       
         }).catch(error => console.log(error))
       }
      
       // action pour modifier 
       
       
       export function modifierPersonnel({ commit}, element_modifie) {
        asyncLoading (apiGuest.put('/personnel/' + element_modifie.id, element_modifie)).then(response => {
           commit('MODIFIER_PERSONNEL', response.data)
         
           this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec success!',
             type:"success"
           })
       
         }).catch(error => console.log(error))
       }
   
       export function supprimerPersonnel({ commit }, id) {
         this.$app.$dialog
         .confirm("Voulez vouz vraiment supprimer ?.")
         .then(dialog => {
           commit('SUPPRIMER_PERSONNEL', id)
           this.$app.$notify({
             title: 'success ',
             text: 'Suppression effectué avec success!',
             type:"success"
           })
         // // dialog.loading(false) // stops the proceed button's loader
         apiGuest.delete('/personnel/' + id).then(() => dialog.close())
         }) 
       
       
       }


       // action pour la situation matrimoniale

       export function getSituationMatrimoniale({ commit }) {
        // console.log(token())
         apiGuest.get('/situation').then((response) => {
           commit('GET_ALL_SITUATION_MATRIMONIALE', response.data)
           
         }).catch(error => console.log(error))
       
       }
  
       
       export function ajouterSituationMatrimoniale({ commit}, formData) {
        asyncLoading (apiGuest.post('/situation', formData)).then(response => {
           if (response.status == 201) {
            // console.log("ok ok ok ok ok c'est la vie")
             commit('AJOUTER_SITUATION_MATRIMONIAL', response.data)
            // dispatch('getPersonnel')
             this.$app.$notify({
               title: 'success ',
               text: 'Enregistrement effectué !',
               type:"success"
             })
           }
       
         }).catch(error => console.log(error))
       }
      
       // action pour modifier 
       
       
       export function modifierSituationMatrimoniale({ commit}, element_modifie) {
        asyncLoading (apiGuest.put('/situation/' + element_modifie.id, element_modifie)).then(response => {
           commit('MODIFIER_SITUATION_MATRIMONIALE', response.data)
         
           this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec success!',
             type:"success"
           })
       
         }).catch(error => console.log(error))
       }
   
       export function supprimerSituationMatrimoniale({ commit }, id) {
         this.$app.$dialog
         .confirm("Voulez vouz vraiment supprimer ?.")
         .then(dialog => {
           commit('SUPPRIMER_SITUATION_MATRIMONIALE', id)
           this.$app.$notify({
             title: 'success ',
             text: 'Suppression effectué avec success!',
             type:"success"
           })
         // // dialog.loading(false) // stops the proceed button's loader
         apiGuest.delete('/situation/' + id).then(() => dialog.close())
         }) 
       
       
       }

       

       /// action pour l'action le role

       export function getRole({ commit }) {
        // console.log(token())
         apiGuest.get('/role').then((response) => {
           commit('GET_ALL_ROLE', response.data)
           
         }).catch(error => console.log(error))
       
       }
  
       
       export function ajouterRole({ commit}, formData) {
        asyncLoading (apiGuest.post('/role', formData)).then(response => {
           if (response.status == 201) {
            // console.log("ok ok ok ok ok c'est la vie")
             commit('AJOUTER_ROLE', response.data)
            // dispatch('getPersonnel')
             this.$app.$notify({
               title: 'success ',
               text: 'Enregistrement effectué !',
               type:"success"
             })
           }
       
         }).catch(error => console.log(error))
       }
      
       // action pour modifier 
       
       
       export function modifierRole({ commit}, element_modifie) {
        asyncLoading (apiGuest.put('/role/' + element_modifie.id, element_modifie)).then(response => {
           commit('MODIFIER_ROLE', response.data)
         
           this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec success!',
             type:"success"
           })
       
         }).catch(error => console.log(error))
       }
   
       export function supprimerRole({ commit }, id) {
         this.$app.$dialog
         .confirm("Voulez vouz vraiment supprimer ?.")
         .then(dialog => {
           commit('SUPPRIMER_ROLE', id)
           this.$app.$notify({
             title: 'success ',
             text: 'Suppression effectué avec success!',
             type:"success"
           })
         // // dialog.loading(false) // stops the proceed button's loader
         apiGuest.delete('/role/' + id).then(() => dialog.close())
         }) 
       
       
       }


       // action pour user_role

       
       export function getUserRole({ commit }) {
        // console.log(token())
         apiGuest.get('/userRole').then((response) => {
           commit('GET_ALL_USER_ROLE', response.data)
           
         }).catch(error => console.log(error))
       
       }

       // action pour l'user

       export function getUser({ commit }) {
        // console.log(token())
         apiGuest.get('/user').then((response) => {
           commit('GET_ALL_USER', response.data)
           
         }).catch(error => console.log(error))
       
       }
  
       
       export function ajouterUser({ commit}, formData) {
        asyncLoading (apiGuest.post('/user', formData)).then(response => {
           if (response.status == 201) {
            // console.log("ok ok ok ok ok c'est la vie")
             commit('AJOUTER_USER', response.data)
            // dispatch('getPersonnel')
             this.$app.$notify({
               title: 'success ',
               text: 'Enregistrement effectué !',
               type:"success"
             })
           }
       
         }).catch(error => console.log(error))
       }
      
       // action pour modifier 
       
       
       export function modifierUser({ commit}, element_modifie) {
        asyncLoading (apiGuest.put('/user/' + element_modifie.id, element_modifie)).then(response => {
           commit('MODIFIER_USER', response.data)
         
           this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec success!',
             type:"success"
           })
       
         }).catch(error => console.log(error))
       }
   
       export function supprimerUser({ commit }, id) {
         this.$app.$dialog
         .confirm("Voulez vouz vraiment supprimer ?.")
         .then(dialog => {
           commit('SUPPRIMER_USER', id)
           this.$app.$notify({
             title: 'success ',
             text: 'Suppression effectué avec success!',
             type:"success"
           })
         // // dialog.loading(false) // stops the proceed button's loader
         apiGuest.delete('/user/' + id).then(() => dialog.close())
         }) 
       
       
       }



       /// action activite


       export function getActivite({ commit }) {
        // console.log(token())
         apiGuest.get('/activite').then((response) => {
           commit('GET_ALL_ACTIVITE', response.data)
           
         }).catch(error => console.log(error))
       
       }
  
       
       export function ajouterActivite({ commit}, formData) {
        asyncLoading (apiGuest.post('/activite', formData)).then(response => {
           if (response.status == 201) {
            // console.log("ok ok ok ok ok c'est la vie")
             commit('AJOUTER_ACTIVITE', response.data)
            // dispatch('getPersonnel')
             this.$app.$notify({
               title: 'success ',
               text: 'Enregistrement effectué !',
               type:"success"
             })
           }
       
         }).catch(error => console.log(error))
       }
      
       // action pour modifier 
       
       
       export function modifierActivite({ commit}, element_modifie) {
        asyncLoading (apiGuest.put('/activite/' + element_modifie.id, element_modifie)).then(response => {
           commit('MODIFIER_ACTIVITE', response.data)
         
           this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec success!',
             type:"success"
           })
       
         }).catch(error => console.log(error))
       }
   
       export function supprimerActivite({ commit }, id) {
         this.$app.$dialog
         .confirm("Voulez vouz vraiment supprimer ?.")
         .then(dialog => {
           commit('SUPPRIMER_ACTIVITE', id)
           this.$app.$notify({
             title: 'success ',
             text: 'Suppression effectué avec success!',
             type:"success"
           })
         // // dialog.loading(false) // stops the proceed button's loader
         apiGuest.delete('/activite/' + id).then(() => dialog.close())
         }) 
       
       
       }


       // action pour le pays

       export function getPays({ commit }) {
        // console.log(token())
         apiGuest.get('/pays').then((response) => {
           commit('GET_ALL_PAYS', response.data)
           
         }).catch(error => console.log(error))
       
       }
  
       
       export function ajouterPays({ commit}, formData) {
        asyncLoading (apiGuest.post('/pays', formData)).then(response => {
           if (response.status == 201) {
            // console.log("ok ok ok ok ok c'est la vie")
             commit('AJOUTER_PAYS', response.data)
            // dispatch('getPersonnel')
             this.$app.$notify({
               title: 'success ',
               text: 'Enregistrement effectué !',
               type:"success"
             })
           }
       
         }).catch(error => console.log(error))
       }
      
       // action pour modifier 
       
       
       export function modifierPays({ commit}, element_modifie) {
        asyncLoading (apiGuest.put('/pays/' + element_modifie.id, element_modifie)).then(response => {
           commit('MODIFIER_PAYS', response.data)
         
           this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec success!',
             type:"success"
           })
       
         }).catch(error => console.log(error))
       }
   
       export function supprimerPays({ commit }, id) {
         this.$app.$dialog
         .confirm("Voulez vouz vraiment supprimer ?.")
         .then(dialog => {
           commit('SUPPRIMER_PAYS', id)
           this.$app.$notify({
             title: 'success ',
             text: 'Suppression effectué avec success!',
             type:"success"
           })
         // // dialog.loading(false) // stops the proceed button's loader
         apiGuest.delete('/pays/' + id).then(() => dialog.close())
         }) 
       
       
       }

       // action pour le plan_pays

       export function getPlan_pays({ commit }) {
        // console.log(token())
         apiGuest.get('/plan').then((response) => {
           commit('GET_ALL_PLAN_PAYS', response.data)
           
         }).catch(error => console.log(error))
       
       }
  
       
       export function ajouterPlan_pays({ commit, dispatch}, formData) {
        asyncLoading (apiGuest.post('/plan', formData)).then(response => {
           if (response.status == 201) {
            // console.log("ok ok ok ok ok c'est la vie")
             commit('AJOUTER_PLAN_PAYS', response.data)
             dispatch('getPlan_pays')
             this.$app.$notify({
               title: 'success ',
               text: 'Enregistrement effectué !',
               type:"success"
             })
           }
       
         }).catch(error => console.log(error))
       }
      
       // action pour modifier 
       
       
       export function modifierPlan_pays({ commit}, element_modifie) {
        asyncLoading (apiGuest.put('/plan/' + element_modifie.id,{
          code:element_modifie.code,
          libelle:element_modifie.libelle,
          pays_id:element_modifie.pays_id
        } )).then(response => {


           commit('MODIFIER_PLAN_PAYS', response.data)
         
           this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec success!',
             type:"success"
           })
       
         }).catch(error => console.log(error))
       }
   
       export function supprimerPlan_pays({ commit }, id) {
         this.$app.$dialog
         .confirm("Voulez vouz vraiment supprimer ?.")
         .then(dialog => {
           commit('SUPPRIMER_PLAN_PAYS', id)
           this.$app.$notify({
             title: 'success ',
             text: 'Suppression effectué avec success!',
             type:"success"
           })
         // // dialog.loading(false) // stops the proceed button's loader
         apiGuest.delete('/plan/' + id).then(() => dialog.close())
         }) 
       
       
       }


       /// action plan ativite

        export function getPlanActivite({ commit }) {
          // console.log(token())
           apiGuest.get('/plan_activite').then((response) => {
             commit('GET_ALL_PLAN_ACTIVITE', response.data)
             
           }).catch(error => console.log(error))
         
         }
    
         
         export function ajouterPlanActivite({ commit, dispatch}, formData) {
          asyncLoading (apiGuest.post('/plan_activite', formData)).then(response => {
             if (response.status == 201) {
              // console.log("ok ok ok ok ok c'est la vie")
               commit('AJOUTER_PLAN_ACTIVITE', response.data)
               dispatch('getPlanActivite')
               this.$app.$notify({
                 title: 'success ',
                 text: 'Enregistrement effectué !',
                 type:"success"
               })
             }
         
           }).catch(error => console.log(error))
         }
        
         // action pour modifier 
         
         
         export function modifierPlanActivite({ commit}, element_modifie) {
          asyncLoading (apiGuest.put('/plan_activite/' + element_modifie.id,{
           code:element_modifie.code,
           libelle:element_modifie.libelle,
           activite_id:element_modifie.activite_id 
          } )).then(response => {
             commit('MODIFIER_PLAN_ACTIVITE', response.data)
           
             this.$app.$notify({
               title: 'success ',
               text: 'Modification effectué avec success!',
               type:"success"
             })
         
           }).catch(error => console.log(error))
         }
     
         export function supprimerPlanActivite({ commit }, id) {
           this.$app.$dialog
           .confirm("Voulez vouz vraiment supprimer ?.")
           .then(dialog => {
             commit('SUPPRIMER_PLAN_ACTIVITE', id)
             this.$app.$notify({
               title: 'success ',
               text: 'Suppression effectué avec success!',
               type:"success"
             })
           // // dialog.loading(false) // stops the proceed button's loader
           apiGuest.delete('/plan_activite/' + id).then(() => dialog.close())
           }) 
         
         
         }

         // action pour budget

         export function getBudget({ commit }) {
          // console.log(token())
           apiGuest.get('/budget').then((response) => {
             commit('GET_ALL_BUDGET', response.data)
             
           }).catch(error => console.log(error))
         
         }
    
         export function ajouterBudget({ commit}, formData) {
          asyncLoading (apiGuest.post('/budget', formData)).then(response => {
             if (response.status == 201) {
              // console.log("ok ok ok ok ok c'est la vie")
               commit('AJOUTER_BUDGET', response.data)
              // dispatch('getPlanActivite')
               this.$app.$notify({
                 title: 'success ',
                 text: 'Enregistrement effectué !',
                 type:"success"
               })
             }
         
           }).catch(error => console.log(error))
         }
      
         
         export function modifierBudget({ commit}, element_modifie) {
          asyncLoading (apiGuest.put('/budget/' + element_modifie.id, element_modifie )).then(response => {
             commit('MODIFIER_BUDGET', response.data)
             this.$app.$notify({
               title: 'success ',
               text: 'Modification effectué avec success!',
               type:"success"
             })
         
           }).catch(error => console.log(error))
         }
     
         export function supprimerBudget({ commit }, id) {
           this.$app.$dialog
           .confirm("Voulez vouz vraiment supprimer ?.")
           .then(dialog => {
             commit('SUPPRIMER_BUDGET', id)
             this.$app.$notify({
               title: 'success ',
               text: 'Suppression effectué avec success!',
               type:"success"
             })
           // // dialog.loading(false) // stops the proceed button's loader
           apiGuest.delete('/budget/' + id).then(() => dialog.close())
           }) 
         }

         // action pour mission


         export function getMission({ commit }) {
          // console.log(token())
           apiGuest.get('/missions').then((response) => {
             commit('GET_ALL_MISSION', response.data)
             
           }).catch(error => console.log(error))
         
         }
    
         export function ajouterMission({ commit}, formData) {
          asyncLoading (apiGuest.post('/missions', formData)).then(response => {
             if (response.status == 201) {
              // console.log("ok ok ok ok ok c'est la vie")
               commit('AJOUTER_MISSION', response.data)
              // dispatch('getPlanActivite')
               this.$app.$notify({
                 title: 'success ',
                 text: 'Enregistrement effectué !',
                 type:"success"
               })
             }
         
           }).catch(error => console.log(error))
         }
      
         
         export function modifierMission({ commit}, element_modifie) {
          asyncLoading (apiGuest.put('/missions/' + element_modifie.id, element_modifie )).then(response => {
             commit('MODIFIER_MISSION', response.data)
             this.$app.$notify({
               title: 'success ',
               text: 'Modification effectué avec success!',
               type:"success"
             })
         
           }).catch(error => console.log(error))
         }
     
         export function supprimerMission({ commit }, id) {
           this.$app.$dialog
           .confirm("Voulez vouz vraiment supprimer ?.")
           .then(dialog => {
             commit('SUPPRIMER_MISSION', id)
             this.$app.$notify({
               title: 'success ',
               text: 'Suppression effectué avec success!',
               type:"success"
             })
           // // dialog.loading(false) // stops the proceed button's loader
           apiGuest.delete('/missions/' + id).then(() => dialog.close())
           }) 
         
         
         }


         // action pour mode de paiement

         
         export function getModePaiement({ commit }) {
          // console.log(token())
           apiGuest.get('/modePaiemt').then((response) => {
             commit('GET_ALL_MODE_PAIEMENT', response.data)
             
           }).catch(error => console.log(error))
         
         }
    
         export function ajouteModePaiement({ commit}, formData) {
          asyncLoading (apiGuest.post('/modePaiemt', formData)).then(response => {
             if (response.status == 201) {
              // console.log("ok ok ok ok ok c'est la vie")
               commit('AJOUTER_MODE_PAIEMENT', response.data)
              // dispatch('getPlanActivite')
               this.$app.$notify({
                 title: 'success ',
                 text: 'Enregistrement effectué !',
                 type:"success"
               })
             }
         
           }).catch(error => console.log(error))
         }
      
         
         export function modifierModePaiement({ commit}, element_modifie) {
          asyncLoading (apiGuest.put('/modePaiemt/' + element_modifie.id, element_modifie )).then(response => {
             commit('MODIFIER_MODE_PAIEMENT', response.data)
             this.$app.$notify({
               title: 'success ',
               text: 'Modification effectué avec success!',
               type:"success"
             })
         
           }).catch(error => console.log(error))
         }
     
         export function supprimerModePaiement({ commit }, id) {
           this.$app.$dialog
           .confirm("Voulez vouz vraiment supprimer ?.")
           .then(dialog => {
             commit('SUPPRIMER_MODE_PAIEMENT', id)
             this.$app.$notify({
               title: 'success ',
               text: 'Suppression effectué avec success!',
               type:"success"
             })
           // // dialog.loading(false) // stops the proceed button's loader
           apiGuest.delete('/modePaiemt/' + id).then(() => dialog.close())
           }) 
         
         
         }


         // action pour l'hotel

             
         export function getHotel({ commit }) {
          // console.log(token())
           apiGuest.get('/hotel').then((response) => {
             commit('GET_ALL_HOTEL', response.data)
             
           }).catch(error => console.log(error))
         
         }
    
         export function ajouterHotel({ commit}, formData) {
          asyncLoading (apiGuest.post('/hotel', formData)).then(response => {
             if (response.status == 201) {
              // console.log("ok ok ok ok ok c'est la vie")
               commit('AJOUTER_HOTEL', response.data)
              // dispatch('getPlanActivite')
               this.$app.$notify({
                 title: 'success ',
                 text: 'Enregistrement effectué !',
                 type:"success"
               })
             }
         
           }).catch(error => console.log(error))
         }
      
         
         export function modifierHotel({ commit}, element_modifie) {
          asyncLoading (apiGuest.put('/hotel/' + element_modifie.id, element_modifie )).then(response => {
             commit('MODIFIER_HOTEL', response.data)
             this.$app.$notify({
               title: 'success ',
               text: 'Modification effectué avec success!',
               type:"success"
             })
         
           }).catch(error => console.log(error))
         }
     
         export function supprimerHotel({ commit }, id) {
           this.$app.$dialog
           .confirm("Voulez vouz vraiment supprimer ?.")
           .then(dialog => {
             commit('SUPPRIMER_HOTEL', id)
             this.$app.$notify({
               title: 'success ',
               text: 'Suppression effectué avec success!',
               type:"success"
             })
           // // dialog.loading(false) // stops the proceed button's loader
           apiGuest.delete('/hotel/' + id).then(() => dialog.close())
           }) 
         
         
         }


         // action pour le carburant

         export function getCarburant({ commit }) {
           apiGuest.get('/carburant').then((response) => {
             commit('GET_ALL_CARBURANT', response.data)   
           }).catch(error => console.log(error))
         
         }
         
         export function ajouterCarburant({ commit}, formData) {
          asyncLoading (apiGuest.post('/carburant', formData)).then(response => {
             if (response.status == 201) {
               commit('AJOUTER_CARBURANT', response.data)
               this.$app.$notify({
                 title: 'success ',
                 text: 'Enregistrement effectué !',
                 type:"success"
               })
             }
         
           }).catch(error => console.log(error))
         }
      
         
         export function modifierCarburant({ commit}, element_modifie) {
          asyncLoading (apiGuest.put('/carburant/' + element_modifie.id, element_modifie )).then(response => {
             commit('MODIFIER_CARBURANT', response.data)
             this.$app.$notify({
               title: 'success ',
               text: 'Modification effectué avec success!',
               type:"success"
             })
         
           }).catch(error => console.log(error))
         }
     
         export function supprimerCarburant({ commit }, id) {
           this.$app.$dialog
           .confirm("Voulez vouz vraiment supprimer ?.")
           .then(dialog => {
             commit('SUPPRIMER_CARBURANT', id)
             this.$app.$notify({
               title: 'success ',
               text: 'Suppression effectué avec success!',
               type:"success"
             })
           // // dialog.loading(false) // stops the proceed button's loader
           apiGuest.delete('/carburant/' + id).then(() => dialog.close())
           }) 
         
         
         }