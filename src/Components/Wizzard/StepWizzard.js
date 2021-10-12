import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import InfoOne from './InfoOne';
import InfoTwo from './InfoTwo';
import InfoThree from './InfoThree';

import {TopDiv, WizzardWrapper, ButtonsArrow, DivButton,Front, Back, Check} from './StyledWizzard'
import FilledCircel from '../../Images/FilledCircel.png'
import Circel from '../../Images/Circel.png'

const StepWizzard = () => {
    const [steps, setSteps] = useState([
        { key: 'firstStep', label: 'Minska klimatavtryck', isDone: true, component: InfoOne },
        { key: 'secondStep', label: 'Registrera steg', isDone: false, component: InfoTwo },
        { key: 'finalStep', label: 'Små förändringar', isDone: false, component: InfoThree },
      ]);
      const [activeStep, setActiveStep] = useState(steps[0]);

      const handleNext = () => {
        if (steps[steps.length - 1].key === activeStep.key) {
            // setViewWizzard('viewed')
            return;
          }
         
          const index = steps.findIndex(x => x.key === activeStep.key);
          setSteps(prevStep => prevStep.map(x => {
            if (x.key === activeStep.key) x.isDone = true;
            return x;
          }))
          setActiveStep(steps[index + 1]);
    }
   
    const handleBack = () => {
        const index = steps.findIndex(x => x.key === activeStep.key);
        if (index === 0) return;
       
        setSteps(prevStep => prevStep.map(x => {
          if (x.key === activeStep.key) x.isDone = false;
          return x;
        }))
        setActiveStep(steps[index - 1]);
    }
    return (
        <TopDiv>
<ul>
    {steps.map((step, i) =>{
return <li
key={i}
>
    {activeStep.key === step.key ? <div><img src={FilledCircel} alt='filled circle'/></div>: <div><img src={Circel} alt='circle'/></div>}
</li>
    })}
</ul>
<WizzardWrapper>
    <div>
    {activeStep.component()}
    </div>
<DivButton>
    <ButtonsArrow onClick={handleBack} disabled={steps[0].key===activeStep.key}><Back/></ButtonsArrow>
    <ButtonsArrow onClick={handleNext}>{steps[steps.length - 1].key !== activeStep.key ? <Front/> : <div>
        <Link to='/home'><Check/></Link>
       </div>}
    </ButtonsArrow>
</DivButton>
</WizzardWrapper>
        </TopDiv>
  
    )
}

export default StepWizzard
