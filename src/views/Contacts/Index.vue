<template>
    <div id="contacts">
        <div v-if="contactsLoadStatus == 1">
            <img v-bind:src="'./loading.svg'" style="display: block; margin: auto;"/>
        </div>
        
        <div v-if="contactsLoadStatus == 2" style="text-align: center">
            <a v-on:click="view = 'table'" style="cursor: pointer;">Table</a> | 
            <a v-on:click="view = 'cards'" style="cursor: pointer;">Cards</a>
        </div>

        <table v-if="contactsLoadStatus == 2 && view == 'table'">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contacts" v-bind:key="'contact-'+contact.id">
                    <td>{{ contact.id }}</td>
                    <td>{{ contact.first_name }} {{ contact.last_name }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.phone }}</td>
                    <td>
                        <router-link :to="'/contacts/'+contact.id">Edit</router-link>
                    </td>
                </tr>
                <tr v-if="contacts.length == 0">
                    <td colspan="5" style="text-align: center">
                        No contacts added! Please add some contacts!
                    </td>
                </tr>
            </tbody>
        </table>

        <div v-if="contactsLoadStatus == 2 && view == 'cards'">
            <card 
                v-for="contact in contacts"
                v-bind:key="'contact-card-'+contact.id"
                :contact="contact"/>

            <div style="margin: 20px; text-align: center">
                No contacts added! Please add some contacts!
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../../components/contacts/Card.vue';

export default {
    data(){
        return {
            view: 'table'
        }
    },

    created(){
        this.$store.dispatch( 'loadContacts' );
    },

    components: {
        Card
    },

    computed: {
        contacts(){
            return this.$store.getters.getContacts;
        },

        contactsLoadStatus(){
            return this.$store.getters.getContactsLoadStatus;
        }
    }
}
</script>