
export const LOGIN_USER = (state, user) => {
    state.isLoggedIn = true
    state.user = user;
};

export const LOGOUT_USER = (state) => {
    state.isLoggedIn = false
   // state.user = user;
};

export const SET_ERROR_MESSAGE = (state, message) => {
    state.errorMessage = message
}


export const SET_CHAMP_VIDE_TRUE = state => state.champVide = true

export const SET_CHAMP_VIDE_FALSE = state => state.champVide = false

export const SET_LOADER_FALSE = state => state.loader = false

export const SET_LOADER_TRUE = state => state.loader = true

export const SET_ERROR_FALSE = state => state.error = false

export const SET_ERROR_TRUE = state => state.error = true







export const GET_ALL_UTILISATEUR = (state, tableau_utilisateur) => {
    state.utilisateurs = tableau_utilisateur
}

export const AJOUTER_UTILISATEUR = (state, elementAjouter) => {
    state.utilisateurs.unshift(elementAjouter)
}

// update all document
export const MODIFIER_UTILISATEUR = (state, elementModif) => {
    state.utilisateurs = state.utilisateurs.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_UTILISATEUR = (state, id) => {
    state.utilisateurs = state.utilisateurs.filter(prest => prest.id != id)
}




export const GET_ALL_CATEGORIE_MISSION = (state, tableau_categorie_mission) => {
    state.categories = tableau_categorie_mission
}

export const AJOUTER_CATEGORIE_MISSION = (state, elementAjouter) => {
    state.categories.unshift(elementAjouter)
}

// update all document
export const MODIFIER_CATEGORIE_MISSION = (state, elementModif) => {
    state.categories = state.categories.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_CATEGORIE_MISSION = (state, id) => {
    state.categories = state.categories.filter(prest => prest.id != id)
}


export const GET_ALL_FONCTION = (state, tableau_fonction) => {
    state.fonctions = tableau_fonction
}

export const AJOUTER_FONCTION = (state, elementAjouter) => {
    state.fonctions.unshift(elementAjouter)
}

// update all document
export const MODIFIER_FONCTION = (state, elementModif) => {
    state.fonctions = state.fonctions.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_FONCTION = (state, id) => {
    state.fonctions = state.fonctions.filter(prest => prest.id != id)
}



export const GET_MOYEN_TRANSPORT = (state, tableau_moyen_transport) => {
    state.moyenTranspors = tableau_moyen_transport
}

export const AJOUTER_MOYEN_TRANSPORT = (state, elementAjouter) => {
    state.moyenTranspors.unshift(elementAjouter)
}

// update all document
export const MODIFIER_MOYEN_TRANSPORT = (state, elementModif) => {
    state.moyenTranspors = state.moyenTranspors.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_MOYEN_TRANSPORT = (state, id) => {
    state.moyenTranspors = state.moyenTranspors.filter(prest => prest.id != id)
}

// mutation  pour mode de paiement

export const GET_ALL_MODE_PAIEMENT = (state, tableau_mode_paiement) => {
    state.modePaiements = tableau_mode_paiement
}

export const AJOUTER_MODE_PAIEMENT = (state, elementAjouter) => {
    state.modePaiements.unshift(elementAjouter)
}

// update all document
export const MODIFIER_MODE_PAIEMENT = (state, elementModif) => {
    state.modePaiements = state.modePaiements.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_MODE_PAIEMENT = (state, id) => {
    state.modePaiements = state.modePaiements.filter(prest => prest.id != id)
}

///   mutation de type de mission   ///



export const GET_ALL_TYPE_MISSION = (state, tableau_moyen_transport) => {
    state.typeMissions = tableau_moyen_transport
}

export const AJOUTER_TYPE_MISSION = (state, elementAjouter) => {
    state.typeMissions.unshift(elementAjouter)
}

// update all document
export const MODIFIER_TYPE_MISSION = (state, elementModif) => {
    state.typeMissions = state.typeMissions.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_TYPE_MISSION = (state, id) => {
    state.typeMissions = state.typeMissions.filter(prest => prest.id != id)
}

/////// mutation pour l'annee mission /////


export const GET_ALL_ANNEE_MISSION = (state, tableau_anne_mission) => {
    state.anneeMissions = tableau_anne_mission
}

export const AJOUTER_ANNE_MISSION = (state, elementAjouter) => {
    state.anneeMissions.unshift(elementAjouter)
}

// update all document
export const MODIFIER_ANNEE_MISSION = (state, elementModif) => {
    state.anneeMissions = state.anneeMissions.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_ANNEE_MISSION = (state, id) => {
    state.anneeMissions = state.anneeMissions.filter(prest => prest.id != id)
}


export const ACTIVED_ANNE_MISSION = (state, elementModif) => {
    state.anneeMissions = state.anneeMissions.map(active => {
        if (active.id == elementModif.id) {
            active = { ...elementModif }
        }
        return active
    })
}



/// mutation pour la norme de mission //// 

export const GET_ALL_NORME_MISSION = (state, tableau_norme_mission) =>{
 state.normemissions = tableau_norme_mission
}


export const AJOUTER_NORME_MISSION = (state, elementAjout) => {
    state.normemissions.unshift(elementAjout)
}

export const MODIFIER_NORME_MISSION = (state, elementModif) =>{
    state.normemissions = state.normemissions.map(res =>{
        if(res.id == elementModif.id){
            res = {...elementModif}
        }
        return res
    })
}

export const SUPPRIMER_NORME_MISSION = (state, id) =>{
    state.normemissions = state.normemissions.filter(res => res.id!=id)
}


//  mutation pour le personnel///

export const GET_ALL_PERSONNEL = (state, tableau_personnel) =>{
    state.personnels = tableau_personnel
   }
   
   
   export const AJOUTER_PERSONNEL = (state, elementAjout) => {
       state.personnels.unshift(elementAjout)
   }
   
   export const MODIFIER_PERSONNEL = (state, elementModif) =>{
       state.personnels = state.personnels.map(res =>{
           if(res.id == elementModif.id){
               res = {...elementModif}
           }
           return res
       })
   }
   
   export const SUPPRIMER_PERSONNEL = (state, id) =>{
       state.personnels = state.personnels.filter(res => res.id!=id)
   }



   //  mutation pour la situation matrimoniale //

   export const GET_ALL_SITUATION_MATRIMONIALE = (state, tableau_situation_matrimoniale) =>{
       state.situationMatrimoniale = tableau_situation_matrimoniale
   }

   export const AJOUTER_SITUATION_MATRIMONIAL = (state, elementAjout) =>{
       state.situationMatrimoniale.unshift(elementAjout)
   }

   export const MODIFIER_SITUATION_MATRIMONIALE = (state, elementModifier) =>{
       state.situationMatrimoniale = state.situationMatrimoniale.map(response =>{
           if(response.id == elementModifier.id){
               response = {...elementModifier}
           }
           return response
       })
   }

   export const SUPPRIMER_SITUATION_MATRIMONIALE = (state, id) =>{
       state.situationMatrimoniale = state.situationMatrimoniale.filter(tony => tony.id !=id)
   }


//  mutation pour le role //

export const GET_ALL_ROLE = (state, tableau_role) =>{
   state.roles = tableau_role 
}

export const AJOUTER_ROLE = (state, elementAjouter) =>{
    state.roles.unshift(elementAjouter)
}

export const MODIFIER_ROLE = (state, elementModif) =>{
    state.roles = state.roles.map(response =>{
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}
   

export const SUPPRIMER_ROLE = (state,id) =>{
  state.roles = state.roles.filter(res => res.id!=id)
}

// mutation pour user_role

export const GET_ALL_USER_ROLE = (state, tableau_user_role) =>{
    state.userRole = tableau_user_role
}

// mutation pour user //

export const GET_ALL_USER = (state, tableau_user) =>{
    state.users = tableau_user 
 }
 
 export const AJOUTER_USER = (state, elementAjouter) =>{
     state.users.unshift(elementAjouter)
 }
 
 export const MODIFIER_USER = (state, elementModif) =>{
     state.users = state.users.map(response =>{
         if(response.id == elementModif.id){
             response = {...elementModif}
         }
         return response
     })
 }
    
 
 export const SUPPRIMER_USER = (state,id) =>{
   state.users = state.users.filter(res => res.id!=id)
 }


 // mutation activite


 export const GET_ALL_ACTIVITE = (state, tableau_activite) =>{
    state.activites = tableau_activite 
 }
 
 export const AJOUTER_ACTIVITE = (state, elementAjouter) =>{
     state.activites.unshift(elementAjouter)
 }
 
 export const MODIFIER_ACTIVITE = (state, elementModif) =>{
     state.activites = state.activites.map(response =>{
         if(response.id == elementModif.id){
             response = {...elementModif}
         }
         return response
     })
 }
    
 
 export const SUPPRIMER_ACTIVITE = (state,id) =>{
   state.activites = state.activites.filter(res => res.id!=id)
 }
 

 // mutation pour pays

 export const GET_ALL_PAYS = (state, tableau_pays) =>{
    state.pays = tableau_pays 
 }
 
 export const AJOUTER_PAYS = (state, elementAjouter) =>{
     state.pays.unshift(elementAjouter)
 }
 
 export const MODIFIER_PAYS = (state, elementModif) =>{
     state.pays = state.pays.map(response =>{
         if(response.id == elementModif.id){
             response = {...elementModif}
         }
         return response
     })
 }
    
 
 export const SUPPRIMER_PAYS = (state,id) =>{
   state.pays = state.pays.filter(res => res.id!=id)
 }

 // mutation plan_pays

 
 export const GET_ALL_PLAN_PAYS = (state, tableau_plan_pays) =>{
    state.plan_pays = tableau_plan_pays 
 }
 
 export const AJOUTER_PLAN_PAYS = (state, elementAjouter) =>{
     state.plan_pays.unshift(elementAjouter)
 }
 
 export const MODIFIER_PLAN_PAYS = (state, elementModif) =>{
     state.plan_pays = state.plan_pays.map(response =>{
         if(response.id == elementModif.id){
             response = {...elementModif}
         }
         return response
     })
 }
    
 
 export const SUPPRIMER_PLAN_PAYS = (state,id) =>{
   state.plan_pays = state.plan_pays.filter(res => res.id!=id)
 }

// mutation de plan activité

export const GET_ALL_PLAN_ACTIVITE = (state, tableau_plan_activite) =>{
    state.plan_activites = tableau_plan_activite 
 }
 
 export const AJOUTER_PLAN_ACTIVITE = (state, elementAjouter) =>{
     state.plan_activites.unshift(elementAjouter)
 }
 
 export const MODIFIER_PLAN_ACTIVITE = (state, elementModif) =>{
     state.plan_activites = state.plan_activites.map(response =>{
         if(response.id == elementModif.id){
             response = {...elementModif}
         }
         return response
     })
 }
    
 
 export const SUPPRIMER_PLAN_ACTIVITE = (state,id) =>{
   state.plan_activites = state.plan_activites.filter(res => res.id!=id)
 }

 // mutations de budget

 export const GET_ALL_BUDGET = (state, tableau_plan_activite) =>{
    state.budgets = tableau_plan_activite 
 }
 
 export const AJOUTER_BUDGET = (state, elementAjouter) =>{
     state.budgets.unshift(elementAjouter)
 }
 
 export const MODIFIER_BUDGET = (state, elementModif) =>{
     state.budgets = state.budgets.map(response =>{
         if(response.id == elementModif.id){
             response = {...elementModif}
         }
         return response
     })
 }
    
 
 export const SUPPRIMER_BUDGET = (state,id) =>{
   state.budgets = state.budgets.filter(res => res.id!=id)
 }

 // mutation mission

 
 export const GET_ALL_MISSION = (state, tableau_mission) =>{
    state.missions = tableau_mission 
 }
 
 export const AJOUTER_MISSION = (state, elementAjouter) =>{
     state.missions.unshift(elementAjouter)
 }
 
 export const MODIFIER_MISSION = (state, elementModif) =>{
     state.missions = state.missions.map(response =>{
         if(response.id == elementModif.id){
             response = {...elementModif}
         }
         return response
     })
 }
    
 
 export const SUPPRIMER_MISSION = (state,id) =>{
   state.missions = state.missions.filter(res => res.id!=id)
 }

 // mutation pour hotel

 export const GET_ALL_HOTEL = (state, tableau_hotel) =>{
    state.hotels = tableau_hotel 
 }
 
 export const AJOUTER_HOTEL = (state, elementAjouter) =>{
     state.hotels.unshift(elementAjouter)
 }
 
 export const MODIFIER_HOTEL = (state, elementModif) =>{
     state.hotels = state.hotels.map(response =>{
         if(response.id == elementModif.id){
             response = {...elementModif}
         }
         return response
     })
 }
    
 
 export const SUPPRIMER_HOTEL = (state,id) =>{
   state.hotels = state.hotels.filter(res => res.id!=id)
 }
 
 /// mutation de carburant

 export const GET_ALL_CARBURANT = (state, tableau_carburant) =>{
    state.carburants = tableau_carburant 
 }
 
 export const AJOUTER_CARBURANT = (state, elementAjouter) =>{
     state.carburants.unshift(elementAjouter)
 }
 
 export const MODIFIER_CARBURANT = (state, elementModif) =>{
     state.carburants = state.carburants.map(response =>{
         if(response.id == elementModif.id){
             response = {...elementModif}
         }
         return response
     })
 }

 export const SUPPRIMER_CARBURANT = (state,id) =>{
   state.carburants = state.carburants.filter(res => res.id!=id)
 }