import React from 'react'
import {Link} from 'react-router-dom'

const NavbarDesktop = () => {

    return (
        <div>
            <Link to='/'>Landing</Link>
            <Link to='/stepcounter'>Home/Stepcounter</Link>
        </div>
    )
}

export default NavbarDesktop
