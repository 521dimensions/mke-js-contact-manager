import Axios from "axios";

export default {
    index(){
        return Axios.get( 'https://mylocalwebserver.test/api/v1/contacts' );
    },

    store( firstName, lastName, email, phone ){
        return Axios.post( 'https://mylocalwebserver.test/api/v1/contacts', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone
        });
    },

    show( id ){
        return Axios.get( 'https://mylocalwebserver.test/api/v1/contacts/' + id );
    },

    update( id, firstName, lastName, email, phone ){
        return Axios.put( 'https://mylocalwebserver.test/api/v1/contacts/' + id, {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone
        });
    }
}