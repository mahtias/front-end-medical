import TableauBordGenerale from "../../views/dashbord/TableauBordGenerale.vue";
import mission from "../../views/dossierMission/mission.vue";
import detailMission from "../../views/dossierPersonnel/detailMission.vue";
import parametre from "../../views/dossierParametrage/parametre.vue";
import personnel from "../../views/dossierPersonnel/personnel.vue";
import categorieMissions from "../../views/dossierParametrage/dossierCategorieMission/categorieMissions.vue";
import fonction from "../../views/dossierParametrage/dossierFonction/fonction.vue";
import moyenTransport from "../../views/dossierParametrage/dossierTransport/moyenTransport.vue";
import typeMission from "../../views/dossierParametrage/dossierTypeMission/typeMission.vue";
import AnneeMission from "../../views/dossierParametrage/dossierAnnee/AnneeMission.vue";
import normeMission from "../../views/dossierParametrage/dossierNorme/normeMission.vue";
import missionPersonnel from "../../views/dossierMission/missionPersonnel.vue";
import situationMatrimoniale from "../../views/dossierParametrage/dossierSituationMatrimoniale/situationMatrimoniale.vue";
import detailMissionPersonnel from "../../views/dossierMission/detailMissionPersonnel.vue";
import activite from "../../views/dossierParametrage/dossierActivite/activite.vue";
import budget from "../../views/dossierBudget/budget.vue";
import pays from "../../views/dossierParametrage/dossierPays/pays.vue";
import planPays from "../../views/dossierParametrage/dossierPlanpays/planPays.vue";
import budgetFormulaire from "../../views/dossierBudget/budgetFormulaire.vue";
import planActivite from "../../views/dossierParametrage/dossierPlanactivite/planActivite.vue"
import formulaireMission from "../../views/dossierPersonnel/formulaireMission.vue"
import modePaiement from "../../views/dossierParametrage/dossierModePaiement/modePaiement.vue"
import hotel from "../../views/dossierParametrage/dossierHotel/hotel.vue";
import carburant from "../../views/dossierParametrage/dossierCarburant/carburant.vue";


const AppRoutes = [
    {
        path: "/table-de-bord",
        name: "TableauBordGenerale",
        component: TableauBordGenerale
    },
    {
        path:"/creation-mode-paiement",
        name:"mode_paiement",
        component:modePaiement
    },
    {
        path:"/creation-carburant",
        name:"carburant",
        component:carburant
    },
    {
        path:"/creation-hotel",
        name:"hotel",
        component:hotel
    },
    {
        path:"/creation-formulaire-mission",
        name:"url_mission",
        component:formulaireMission
    },
    {
        path:"/detail-mission/:id",
        name:"detail_mission",
        component:detailMission
    },
    {
        path:"/creation-formulaire-budget",
        name:"url_budget",
        component:budgetFormulaire
    },
    {
        path:"/creation-plan-activite",
        name:"plan_activite",
        component:planActivite
    },
    {
        path:"/creation-pays",
        name:"url_pays",
        component:pays
    },
    {
        path:"/cretaion-plan-pays",
        name:"plan_pyas",
        component:planPays
    },
    {
        path:"/creation-budget",
        name:"budget",
        component:budget
    },
    {
        path:"/creation-activite",
        name:"activite",
        component:activite
    },
    {
        path: "/menu-personnel",
        name: "gestion",
        component: mission
    },
    {
        path:"/menu-parametre",
        name:"parametre",
        component:parametre
    },
    {
        path:"/menu-mission",
        name:"mission",
        component:personnel
    },
    {
        path:"/creation-categorie-mission",
        name:"categorie",
        component:categorieMissions
    },
    {
        path:"/creation-fonction",
        name:"fonction",
        component:fonction
    },
    {
        path:"/creation-moyen-transport",
        name:"transport",
        component:moyenTransport
    },
    {
        path:"/creation-type-mission",
        name:"type_mission",
        component:typeMission
    },
    {
        path:"/creation-annee-mission",
        name:"annee",
        component:AnneeMission
    },
    {
        path:"/creation-norme-mission",
        name:"norme_mission",
        component:normeMission
    },
    {
        path:"/creation-personnel",
        name:"mission_personnel",
        component:missionPersonnel
    },
    {
        path:"/ceration-situtation-matrimoniale",
        name:"situation_matrimoniale",
        component:situationMatrimoniale
    },
    {
        path:"/detail-personnel/:id",
        name:"detailPersonnel",
        component:detailMissionPersonnel
    }
   
]

export default AppRoutes;
