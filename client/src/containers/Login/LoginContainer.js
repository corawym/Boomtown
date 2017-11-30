import React, { Component } from 'react'
import * as firebase from 'firebase'
import { formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import Login from './Login'

class LoginContainer extends Component {

    static propTypes = {
    };

    login = async (e) => {
        e.preventDefault();
        try{
            await firebase.auth().signInWithEmailAndPassword(this.props.loginInput.email, this.props.loginInput.password);
        }catch(e){
            console.log(e);
        }
    }

    render() {
        const { user } = this.props;
        if(user){
            return(
                <Redirect to='/' />
            )
        }
        return (
            <Login login={this.login} />
        );
    }
}

// get the input value from login redux form
const mapStateToProps = state => {
    const values = formValueSelector('loginForm')
    return {
        loginInput: values(state, 'email', 'password'),
        user: state.login.user
    }
}

export default connect (mapStateToProps)(LoginContainer)
