import React, { useEffect } from 'react'
import { pastActivity } from '../../Data/PastActivity';
const FootPrints = ({setFootPrint, setAllSteps}) => {

    //Räkna ut distansen du gått med hjälp av mängden av steg
        //Hur långt är ett steg -- enligt amerikanska måttsystemet (pace) ca 76 cm
        //Uträkning av steg * längden på ett steg
    // Hur stor är utsläppen av en bil -- Medelstorbil/bensin/ 10 km = 3kg koldioxid
        //Per mil dividerat med steg -- 100 000 cm = 1 km släpper ut 3kg
     
        //Multiplicera utsläpp/steg med aktuella steg

        // 3 / 100000 = 0.00003 * 76 = 0,00228 kg/steg
        let arrSteps = []
        let sum = 0;
        
            pastActivity.map((day) =>{
                let all = day.steps
                 return arrSteps.push(all)
               
                })
                for(var i = 0; i < arrSteps.length; i++){
                
                    sum += arrSteps[i]
                    
                    }
        //    let sumStepsKg = sum * 0.00003
           let sumStepsGram = Math.round(sum * 0.03)
           
           useEffect(()=>{
            setFootPrint(sumStepsGram)
           })


    return (
        <div>
            {/* <h1>Footprint</h1> */}
        </div>
    )
}

export default FootPrints
