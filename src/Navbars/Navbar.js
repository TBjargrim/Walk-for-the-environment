import React from 'react'
import {Link} from 'react-router-dom'
import {Wrapper, Home, Activityicon, PointsIcon} from './Styling'

const Navbar = () => {

    return (
        <Wrapper>
      
            {/* <Link to='/'>Landing</Link> */}
            <Link to='/stepcounter'><Home/></Link>
            <Link to='/activity'><Activityicon/></Link>
            <Link to='/organisations'><PointsIcon/></Link>

        </Wrapper>
    )
}

export default Navbar