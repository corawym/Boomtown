import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Link,
  Redirect
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
import { NotFound } from './containers/NotFound/'

import configStore from './configStore'


const store = configStore()
console.log(store)
console.log(store.getState())

store.dispatch({
    type: 'GET_CARD_ITEMS_BEGIN'
})

const Boomtown = () => (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={CardsContainer} />
                        <Route path="/login" component={Login} />
                        <Route path="/profile/:id" component={Profile} />
                        {/*<Route path="/share" component={Share} />*/}
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </Router>
        </MuiThemeProvider>
    </Provider>

)

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
