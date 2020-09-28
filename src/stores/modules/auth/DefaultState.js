const defaultstate = {
    isLoggedIn: !!localStorage.getItem('token'),
     user: localStorage.getItem('user'),

    champVide: false,
    loader: false,
    error: false,
    errorMessage: undefined,
    utilisateurs:[],
    categories:[],
    fonctions:[],
    moyenTranspors:[],
    typeMissions:[],
    anneeMissions:[],
    normemissions:[],
    personnels:[],
    situationMatrimoniale:[],
    roles:[],
    userRole:[],
    users:[],
    activites:[],
    pays:[],
    plan_pays:[],
    plan_activites:[],
    budgets:[],
    modePaiements:[],
    missions:[],
    hotels:[],
    carburants:[]



};

 export default defaultstate