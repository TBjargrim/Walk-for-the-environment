import React from 'react'

import {Wrapper, Home, Activityicon, PointsIcon, StyledNavLink} from './Styling'

const Navbar = () => {

    return (
        <Wrapper>
            <StyledNavLink to='/home' activeClassName='active'>
                <Home/>
                </StyledNavLink>
            <StyledNavLink to='/activity' activeClassName="active"><Activityicon/></StyledNavLink>
            <StyledNavLink to='/organisations' activeClassName="active"><PointsIcon/></StyledNavLink>

        </Wrapper>
    )
}

export default Navbar