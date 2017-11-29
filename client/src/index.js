import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';

import './index.css'
import muiTheme from './config/theme';
import client from './config/apolloClient';

import Layout from './components/Layout';
import Login from './containers/Login';
import { CardsContainer } from './containers/Cards';
import { Profile } from './containers/Profile';
import { NotFound } from './containers/NotFound';
import { Share } from './containers/Share';
import { loginSuccess, logoutSuccess } from './redux/modules/login';
import configStore from './redux/configStore';
import PrivateRoute from './PrivateRoute';

const store = configStore()

const config = {
    apiKey: "AIzaSyCeCPwIZYs_4omqZcolYjsRzJ7F5Z4wV58",
    authDomain: "boomtown-6d207.firebaseapp.com",
    databaseURL: "https://boomtown-6d207.firebaseio.com",
    projectId: "boomtown-6d207",
    storageBucket: "boomtown-6d207.appspot.com",
    messagingSenderId: "816574523629"
  };
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    console.log(user);
    if (user) {
        store.dispatch(loginSuccess(user));
    } else {
        store.dispatch(logoutSuccess());
    }
});

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <Layout>
                <Switch>
                    <Route path="/login" component={Login} />
                    <PrivateRoute exact path="/" component={CardsContainer} />
                    <PrivateRoute path="/profile/:id" component={Profile} />
                    <PrivateRoute path="/share" component={Share} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    </MuiThemeProvider>
)

ReactDOM.render(
    <ApolloProvider client={client} store={store}>
        <Boomtown />
    </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
