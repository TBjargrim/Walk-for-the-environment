import React,{useState, useEffect} from 'react'
import {Router, Route, Switch} from 'react-router-dom'

import StepCounter from './Components/Home.js/Stepcounter';
import StepWizzard from './Components/Wizzard/StepWizzard'
import history from './Components/History'
import Toggle from './DarkLightMode/Toggle'
import  {useDarkMode} from './DarkLightMode/useDarkMode'
import { lightTheme, darkTheme } from './DarkLightMode/Themes'
import {ThemeProvider} from "styled-components"
import {GlobalStyles} from './Styles/GlobalStyling'

import Landing from './Components/Landing/Landing';
import YourActivity from './Components/CollectedData/YourActivity';
import ChooseOrganisation from './Components/Organisations/ChooseOrganisation';
import ThankYou from './Components/ThankYou/ThankYou';
import InfoOrganisation from './Components/Organisations/InfoOrganisation';
import {pastActivity} from './Data/PastActivity'
import SignIn from './Components/SignInSignUp/SignIn';
import SignUp from './Components/SignInSignUp/SignUp';

function App() {
  const [theme, themeToggler] = useDarkMode();

const themeMode = theme === 'light' ? lightTheme : darkTheme;
const [modalOpen, setModalOpen] = useState(false);
const [modalOpen2, setModalOpen2] = useState(false);

const [points, setPoints] = useState(9);
const [sumPoints, setSumPoints] = useState(0);

const [allSteps, setAllSteps] = useState();
const [counter, setCounter] = useState(9000);

const [footPrint, setFootPrint] = useState();
const [ice, setIce] =useState();
const [name, setName] =useState('');
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');


const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
"July", "Aug", "Sept", "Oct", "Nov", "Dec"
];
const weekdays = ["Mån", "Tis", "Ons", "Tors", "Fre", "Lör",
"Sön" 
];
  let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth();
let weekday = newDate.getDay()
let currentMonth = monthNames[month]
let currentDay = weekdays[weekday -1]

let arrSteps = []
let sum = 0;

    pastActivity.map((day) =>{
        let all = day.steps
         return arrSteps.push(all)
       
        })
        for(var i = 0; i < arrSteps.length; i++){
        
            sum += arrSteps[i]
            
            }

   let sumStepsGram = Math.round(sum * 0.03)

   let sumIce = footPrint * 0.000003
   let fixedNum = sumIce.toFixed(4)
useEffect(()=>{
  localStorage.setItem('allActivity', JSON.stringify(pastActivity))
  setFootPrint(sumStepsGram)
  setIce(fixedNum)
  })


  return (
    <Router history={history}>
    <ThemeProvider theme={themeMode}>
    <GlobalStyles/>
    <div>
      <Toggle theme={theme} toggleTheme={themeToggler} /> 
      <Switch>
      <Route exact path='/'> 
 <Landing />
      </Route>
      <Route path='/signin'> 
 <SignIn setUserName={setUserName} userName={userName} setPassword={setPassword} password={password}/>
      </Route>
      <Route path='/signup'> 
 <SignUp name ={name} setName={setName} setUserName={setUserName} userName={userName} setPassword={setPassword} password={password} />
      </Route>
<Route path='/wizzard'>
<StepWizzard 
/>
</Route>
      <Route path='/home'> <StepCounter 
      ice={ice}
      points={points}
      setPoints={setPoints}
            modalOpen={modalOpen} 
            modalOpen2={modalOpen2} 
            setModalOpen={setModalOpen}
            setModalOpen2={setModalOpen2}
            currentDay={currentDay}
            currentMonth={currentMonth}
            date={date}
            counter={counter}
            setCounter={setCounter}
            footPrint={footPrint}
/> 
            </Route>
<Route path='/activity'> 
<YourActivity 
      modalOpen={modalOpen} 
      setModalOpen={setModalOpen}
            points={points}
      setPoints={setPoints}
      sumPoints={sumPoints}
      setSumPoints={setSumPoints}
      currentMonth={currentMonth}
      date={date}
      counter={counter}
      setCounter={setCounter}
      allSteps={allSteps}
      setAllSteps={setAllSteps}/> 
</Route>
<Route path='/organisations/:organisation' component={InfoOrganisation}/> 
<Route path='/organisations'> <ChooseOrganisation sumPoints={sumPoints} setSumPoints={setSumPoints}/> </Route>

<Route path='/thankyou'> <ThankYou sumPoints={sumPoints} footPrint={footPrint} setFootPrint={setFootPrint} setSumPoints={setSumPoints} ice={ice} setIce={setIce}/> </Route>
      </Switch>
   
    </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
