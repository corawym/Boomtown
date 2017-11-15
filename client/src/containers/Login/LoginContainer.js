import React, { Component } from 'react'
import * as firebase from 'firebase'
// import PropTypes from 'prop-types';

import Login from './Login'

class LoginContainer extends Component {

    static propTypes = {
    };

    login = (e) => {
        e.preventDefault();
        console.log('You clicked the login button.');
        // firebase.auth().createUserWithEmailAndPassword('mackenzie@redacademy.com', '1234567')
        //         .then( user => firebase.database()
        //                                 .ref(`users/${user.uid}`)
        //                                 .set({
        //                                     email:'mackenzie@redacademy.com',
        //                                     fullname:'Mackenzie Kieran',
        //                                     bio:"Thar she blows."
        //                                 }))
    }

    render() {
        return (
            <Login login={this.login} />
        );
    }
}

export default LoginContainer
