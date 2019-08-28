import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "contacts",
            component: Vue.component( 'Contacts', require( './views/Contacts/Index.vue').default )
        },
        {
            path: "/contacts/new",
            name: 'newContact',
            component: Vue.component( 'NewContact', require( './views/Contacts/Create.vue').default )
        },
        {
            path: "/contacts/:contactId",
            name: "contact",
            component: Vue.component( 'Contact', require( './views/Contacts/Show.vue').default )
        }
    ]
});
