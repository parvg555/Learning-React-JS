import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const onClick = (e) => {
        console.log("Button clicked")
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1> 
            <Button text = "Add" onClick = {onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
