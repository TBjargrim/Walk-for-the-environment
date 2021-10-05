import React,{children, useEffect} from 'react'
import ModalSlideUP from '../../ModalSlideUp'
import Navbar from '../../Navbars/Navbar';
import {pastActivity} from '../../Data/PastActivity'
import Leaf from '../../Images/Leaf.png'
import {Wrapper, StyledUL, ResultButton, Arrow, ModalContainer, StyledLeaf} from './ActivityStyle'

const YourActivity = ({allSteps,setAllSteps,sumPoints,setSumPoints,counter, setModalOpen, modalOpen, points, setPoints, currentMonth, date}) => {

    if(pastActivity[0].date !== date){
        pastActivity.unshift(
            {
                key:pastActivity.length +1,
                date:date,
                month:currentMonth,
                steps:counter,
                points:points,
             })
            
            }

useEffect(()=>{
let sumP= 0;
let sumSteps= 0;
let arrPoints = []
let arrSteps = []

const saved = localStorage.getItem('allActivity');
const initialValue = JSON.parse(saved);

initialValue.map((day) =>{
    let allP = day.points
    let allS = day.steps
     arrPoints.push(allP)
     arrSteps.push(allS)

    })
    for(let i = 0; i < arrPoints.length; i++){
        sumP += arrPoints[i]
        }
    for(let j = 0; j < arrSteps.length; j++){
        sumSteps += arrSteps[j]
        }

     
setSumPoints(sumP)
setAllSteps(sumSteps)
}, [])

useEffect(() =>{
    let num = counter.toString()
 num =num.slice(0,-3);
 num =parseInt(num)
setPoints(num)

const saved = localStorage.getItem('allActivity');
const initialValue = JSON.parse(saved);

let sum= 0;
let arr = []

initialValue.map((day) =>{
    let all = day.steps
     arr.push(all)
    })
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
        }
        setAllSteps(sum)
}, []);
    return (
        <Wrapper>
            <h3>Din Aktivitet</h3>

            <StyledUL>
 {pastActivity.map(
                (day, i)=>(
                    
<li key={day.key}>

    <div>
        {i === 0 ? <p>Today </p> :
<p>{day.date} {day.month}</p> }
<p>{day.points} poäng</p>
</div>
    <h4>{day.steps} <span>steg</span></h4>
    <progress id={day.key} max="20000" value={day.steps}></progress>
    </li>

                )
            )}
            </StyledUL>
            <ResultButton onClick={() => {
            setModalOpen(true)}}>
                <Arrow/>
                Resultat
                </ResultButton>
            <ModalSlideUP modalOpen={modalOpen} onClose={() => setModalOpen(false)} children={children}>
      <ModalContainer>
          <h3>Resultat </h3>
      <h5>{allSteps} steg</h5>
      <p>Detta resulterar i <br/> {sumPoints} poäng <br/>och</p>
<h4>{sumPoints} kr</h4>
<StyledLeaf src={Leaf}/>
<p>att donera till din valda <br/>organisation</p>
</ModalContainer>
            </ModalSlideUP>
            <Navbar/>
        </Wrapper>
    )
}

export default YourActivity
