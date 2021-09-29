import {Link} from 'react-router-dom'
import activeClassName from 'react-router'
import styled from 'styled-components'

import { Styles } from '../Styles/GlobalStyling'
import {AiOutlineHome} from 'react-icons/ai'
import {IoIosStats} from 'react-icons/io'
import {FaCoins} from 'react-icons/fa'

export const Wrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:60px; 
clear: both;
    width:100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index:99;
    border-top: 2px solid rgba(167, 156, 163, 0.1);

        a{
        margin:0 35px 0 35px;
    
    }

`
// export const StyledNavLink = styled(NavLink)`
//  margin:0 35px 0 35px;
// `
// export const StyledLink = styled(Link)`
//   color: ${({ active }) => (
//     active ? 'black' : 'red'
//   )}
// `
export const Home = styled(AiOutlineHome)`
color:${Styles.ColorBlack};
font-size:32px;
`
export const Activityicon = styled(IoIosStats)`
color:${Styles.ColorBlack};
font-size:32px;

`
export const PointsIcon = styled(FaCoins)`
color:${Styles.ColorBlack};
font-size:32px;
`