import ContactsAPI from '../api/contacts.js';

export const contacts = {
    state: {
        contacts: [],
        contactsLoadStatus: 0,

        contact: {},
        contactLoadStatus: 0,

        addContactStatus: 0,
        updateContactStatus: 0
    },

    actions: {
        loadContacts( { commit } ){
            commit( 'setContactsLoadStatus', 1 );

            ContactsAPI.index()
                .then( function( response ){
                    commit( 'setContacts', response.data );
                    commit( 'setContactsLoadStatus', 2 );
                })
                .catch( function(){
                    commit( 'setContacts', [] );
                    commit( 'setContactsLoadStatus', 3 );
                });
        },

        loadContact( { commit }, data ){
            commit( 'setContactLoadStatus', 1 );

            ContactsAPI.show( data.id )
                .then( function( response ){
                    commit( 'setContact', response.data );
                    commit( 'setContactLoadStatus', 2 );
                })
                .catch( function(){
                    commit( 'setContact', {} );
                    commit( 'setContactLoadStatus', 3 );
                });
        },

        saveContact( { commit }, data ){
            commit( 'setAddContactStatus', 1 );

            ContactsAPI.store( data.first_name, data.last_name, data.email, data.phone )
                .then( function(){
                    commit( 'setAddContactStatus', 2 );
                })
                .catch( function(){
                    commit( 'setAddContactStatus', 3 );
                });
        },

        updateContact( { commit }, data ){
            commit( 'setUpdateContactStatus', 1 );

            ContactsAPI.update( data.id, data.first_name, data.last_name, data.email, data.phone )
                .then( function(){
                    commit( 'setUpdateContactStatus', 2 );
                })
                .catch( function(){
                    commit( 'setUpdateContactStatus', 3 );
                });
        }
    },

    mutations: {
        setContacts( state, contacts ){
            state.contacts = contacts;
        },

        setContactsLoadStatus( state, status ){
            state.contactsLoadStatus = status;
        },

        setContact( state, contact ){
            state.contact = contact;
        },

        setContactLoadStatus( state, status ){
            state.contactLoadStatus = status;
        },

        setAddContactStatus( state, status ){
            state.addContactStatus = status;
        },

        setUpdateContactStatus( state, status ){
            state.updateContactStatus = status;
        }
    },

    getters: {
        getContacts( state ){
            return state.contacts;
        },

        getContactsLoadStatus( state ){
            return state.contactsLoadStatus;
        },

        getContact( state ){
            return state.contact;
        },

        getContactLoadStatus( state ){
            return state.contactLoadStatus;
        },

        getAddContactStatus( state ){
            return state.addContactStatus;
        },

        getUpdateContactStatus( state ){
            return state.updateContactStatus;
        }
    }
}