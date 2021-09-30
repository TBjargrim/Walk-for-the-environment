import styled from 'styled-components'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

export const CountWrapper = styled.div`
width:100%;
display:flex;
justify-content:center;
/* background:linear-gradient(#83C4FF,#FF1AB3); */
div{
    width:400px;
}
`
export const ProgressBar = styled(CircularProgressbarWithChildren)`
color:linear-gradient(#83C4FF,#FF1AB3) !important;
/* color:black; */

`