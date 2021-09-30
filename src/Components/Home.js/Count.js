import React, {useEffect} from 'react'

import 'react-circular-progressbar/dist/styles.css';
import {buildStyles  } from 'react-circular-progressbar';
import {CountWrapper, ProgressBar} from '../../Styles/HomeStyles'

const Count = ({counter, setCounter, points, setPoints}) => {
const end = 20000;

    useEffect((counter) => {
        const timer = setInterval(() => {
        setCounter(prevCount => prevCount + 1);
      }, 1000);
      if (counter === end) {
          return
      }
      return () => {
        clearInterval(timer);
      };
    }, []);


// console.log(points)
    return (
        <div>
        <CountWrapper>
            <div>
            <ProgressBar
            value={counter} 
            maxValue={end} 
            text={counter}
            styles={buildStyles({
                textColor:'#0D0D0D',
                trailColor: '#555455'
            })}
            >
                  {/* <img src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
                  <p>Steg</p>
                </ProgressBar>
                </div>
        </CountWrapper>
        </div>

    )
}

export default Count
