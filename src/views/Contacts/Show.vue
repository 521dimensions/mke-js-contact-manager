<template>
    <div id="new-contact" class="page">
        <form>
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="First Name" v-model="firstName"/>

            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="Last Name" v-model="lastName"/>

            <label for="phone">Phone</label>
            <input type="text" id="phone" placeholder="Phone" v-model="phone"/>

            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Email" v-model="email"/>

            <a class="button" v-on:click="updateContact()">Update Contact</a>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        }
    },

    created(){
        this.$store.dispatch( 'loadContact', {
            id: this.$route.params.contactId
        });
    },

    computed: {
        contact(){
            return this.$store.getters.getContact;
        },

        contactLoadStatus(){
            return this.$store.getters.getContactLoadStatus;
        },

        contactUpdateStatus(){
            return this.$store.getters.getUpdateContactStatus;
        }
    },

    watch: {
        contactLoadStatus(){
            if( this.contactLoadStatus == 2 ){
                this.firstName = this.contact.first_name;
                this.lastName = this.contact.last_name;
                this.phone = this.contact.phone;
                this.email = this.contact.email;
            }
        },

        contactUpdateStatus(){
            if( this.contactUpdateStatus == 2 ){
                this.$router.push({
                    name: 'contacts'
                });
            }
        }
    },

    methods: {
        addContact(){
            this.$store.dispatch('saveContact', {
                first_name: this.firstName,
                last_name: this.lastName,
                phone: this.phone,
                email: this.email
            });
        },

        updateContact(){
            this.$store.dispatch('updateContact', {
                id: this.contact.id,
                first_name: this.firstName,
                last_name: this.lastName,
                phone: this.phone,
                email: this.email
            });
        }
    }
}
</script>