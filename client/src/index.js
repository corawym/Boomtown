import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import muiTheme from './config/theme'

import Layout from './components/Layout'
import Login from './containers/Login'
import { CardsContainer } from './containers/Cards'
import { Profile } from './containers/Profile'
import { NotFound } from './containers/NotFound'
import { Share } from './containers/Share'

import configStore from './redux/configStore'


const store = configStore()

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={CardsContainer} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile/:id" component={Profile} />
                    <Route path="/share" component={Share} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    </MuiThemeProvider>
)

ReactDOM.render(
    <Provider store={store}>
        <Boomtown />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
