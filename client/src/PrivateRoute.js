import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    location={rest.location}
    render={props => (
      user ? (
        <Component {...props} />
      )
      : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
    )}
  />
);

export default connect (state => {
  return {
    user: state.login.user
  }
})(PrivateRoute);