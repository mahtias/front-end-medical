import Vue from "vue";
import Vuex from "vuex";

import UtilisateursModule from './modules/auth/index'
import MenuModule from './modules/paraMenu'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Utilisateurs: UtilisateursModule,
        MenuPara: MenuModule,
    }
})
