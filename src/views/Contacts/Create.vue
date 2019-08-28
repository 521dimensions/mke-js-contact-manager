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

            <a class="button" v-on:click="addContact()">Add Contact</a>
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

    computed: {
        contactAddStatus(){
            return this.$store.getters.getAddContactStatus;
        }
    },

    watch: {
        contactAddStatus(){
            if( this.contactAddStatus == 2 ){
                // Programatic Navigation
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
        }
    }
}
</script>