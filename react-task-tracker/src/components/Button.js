import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    return (
        <button onClick={props.onClick} className='btn'>{props.text}</button>
    )
}

Button.defaultProps = {
    text : "Unnamed Button",
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
