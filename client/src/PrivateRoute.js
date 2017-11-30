import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import CircularProgress from 'material-ui/CircularProgress';

const PrivateRoute = ({ component: Component, user, auth, ...rest }) => {
  if ( auth !== null ) {
    return(
      
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
    )  
  } else {
    return(
      <CircularProgress size={60} thickness={7} />
    )
  }
};

export default connect (state => {
  return {
    user: state.login.user
  }
})(PrivateRoute);