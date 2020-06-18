import Vue from "vue";
import Vuex from "vuex";

import UtilisateursModule from './modules/auth/index'


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Utilisateurs: UtilisateursModule,
    }
})
