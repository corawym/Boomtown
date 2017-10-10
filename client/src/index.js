import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import muiTheme from './config/theme'

import Layout from './components/Layout'
// import Login from './containers/Login'
// import { CardsContainer } from './containers/Cards'
import { Profile } from './containers/Profile/'

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Layout>
            {/*<Login />*/}
            {/*<CardsContainer />*/}
            <Profile />
        </Layout>
    </MuiThemeProvider>

)

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
