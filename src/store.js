import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { contacts } from './state/contacts.js';

export default new Vuex.Store({
    modules: {
        contacts
    }
});
