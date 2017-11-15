import React from 'react'
import PropTypes from 'prop-types'
import { RaisedButton, Paper } from 'material-ui'
import { reduxForm, Field } from 'redux-form'

import ValidatedTextField from '../../components/ValidatedTextField'

import './styles.css'
import logo from '../../images/boomtown-logo.svg'
import bottomLeft from '../../images/home-bl.svg'
import topRight from '../../images/home-tr.svg'

const Login = ({ login }) => (
    <div className="page login">
        <div className="logo">
            <img src={logo} alt="Boomtown Logo" />
        </div>
        <div className="topRight">
            <img src={topRight} alt="Sky" />
        </div>
        <div className="bottomLeft">
            <img src={bottomLeft} alt="City" />
        </div>
        <div className="cardContainer">
            <Paper zDepth={5}>
                <div className="formContainer">
                    <form onSubmit={login} autoComplete="off">
                        <div>
                            {/*<ValidatedTextField label="Email" />*/}
                            <Field name="email" type="email" component={ValidatedTextField} />
                        </div>
                        <div>
                            {/*<ValidatedTextField label="Password" />*/}
                            <Field name="password" type="password" component={ValidatedTextField} />
                        </div>
                        <RaisedButton className="enterButton" primary fullWidth type="submit">
                            Enter
                        </RaisedButton>
                    </form>
                </div>
            </Paper>
        </div>
    </div>
)

Login.propTypes = {
    login: PropTypes.func.isRequired
}

const loginForm = reduxForm ({
    form: 'loginForm'
})(Login)

export default loginForm
