import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

import { blueGrey900, red900 } from 'material-ui/styles/colors'

const styles = {
    fieldStyle: {
        width: '100%'
    },
    errorStyle: {
        color: red900,
        position: 'absolute',
        bottom: '-0.42rem'
    },
    underlineStyle: {
        borderColor: blueGrey900
    }
}

const ValidatedTextField = field => {
    return(
        <TextField
            style={styles.fieldStyle}
            hintText={field.input.name}
            floatingLabelText={field.input.name}
            type={field.input.name}
            errorStyle={styles.errorStyle}
            underlineFocusStyle={styles.underlineStyle}
            {...field.input}
        />
    )
}

ValidatedTextField.propTypes = {
    field: PropTypes.object
}

export default ValidatedTextField;
