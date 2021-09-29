import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Landing from './Landing';
import InfoOne from './InfoOne';
import InfoTwo from './InfoTwo';
import InfoThree from './InfoThree';

const StepWizzard = ({setViewWizzard}) => {
    const [steps, setSteps] = useState([
        { key: 'landing', label: 'Landing', isDone: true, component: Landing },
        { key: 'firstStep', label: 'My first Step', isDone: false, component: InfoOne },
        { key: 'secondStep', label: 'My second Step', isDone: false, component: InfoTwo },
        { key: 'finalStep', label: 'My Final Step', isDone: false, component: InfoThree },
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
        <div>
{/* <ul>
    {steps.map((step, i) =>{
return <li
key={i}
>
    {activeStep.key === step.key ? <div> <p>Steg {i+1}</p><p>{step.label}</p> </div>: <div></div>}

</li>

    })}
</ul> */}

<div>
    {activeStep.component()}
</div>
<div>
    <button onClick={handleBack} disabled={steps[0].key===activeStep.key}>Back</button>
    <button onClick={handleNext}>{steps[steps.length - 1].key !== activeStep.key ? 'Next' : <div>
        <Link to='/stepcounter'>I get it</Link>
       </div>}
    </button>
</div>
        </div>
    )
}

export default StepWizzard
