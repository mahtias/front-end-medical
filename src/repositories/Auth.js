
export const admin=()=>{
    // recuperation de la  valeur de web storage
    let objet=localStorage.getItem('Users');
    let user=JSON.parse (objet)
   // console.log("GUEIR")
     if(user.user_role.role.code=="ADM"){
         return true
     }else{
         return false
     }
 }

export const user=()=>{
    // recuperation de la  valeur de web storage
    let objet=localStorage.getItem('Users');
    let user=JSON.parse (objet)
   // console.log("GUEIR")
     if(user.user_role.role.code=="USER"){
         return true
     }else{
         return false
     }
 }

//  export const utilisateur=()=>{
//      // recuperation de la valeur de web storage
//     let objet=localStorage.getItem('Users');
//     let user=JSON.parse (objet)
//     // console.log("GUEIR")
//     if(user.user_role.role.code=="UTILISATEUR"){
//         return true
//     }else{
//         return false
//     }
// }

export const noAdminChef=()=>{
    if(!admin()){
        if(!user()){
            return true
        }
    }
    return false
}

export const token=()=>{
    let objet=localStorage.getItem('token');

    if(!objet){
        return null
    }
   // let token=JSON.parse (objet)
   let objetToken={
       headers: { Authorization: `Bearer ${objet}` }
   }
   return objetToken
}