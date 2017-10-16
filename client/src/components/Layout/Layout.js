import React from 'react'
import PropTypes from 'prop-types'

import { Route, Switch } from 'react-router-dom';

import { Header } from '../../containers/Header'
import { Footer } from '../../containers/Footer'

import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            {/* Might want to put your header bar here... */}
            <Switch>
                <Route exact path="/" component={Header} />
                <Route exact path="/profile/:id" component={Header} />
            </Switch>
        </div>
        <div className="appContent">
            {children}
        </div>
        {/* And a footer here, but not on the login route... */}
        <Footer/>
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;

