import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';

function Clock(props) {
  
  const [time, setTime] = useState(null); 

  useEffect(() => {
    setInterval(() => {
      tick();
    }, 1000);
  },[]);

  const tick=()=> {
    setTime(getCurrentTime);
  } 
  const getCurrentTime =()=> {
    const today = new Date();
    today.setMinutes(today.getMinutes() + today.getTimezoneOffset() + parseInt(props.Offset));
    return today.toLocaleString();
  }

  return (
    <div className=''>       
      <div className=''>            
      <div className=''>                    
        <header>
        <Button onClick={props.removeClick} className=''>×</Button>
        <h5>
        {props.Country}        
        </h5>        
        </header>                           
      </div>                  
      <div className=''>
          <p>{time}</p>
          <img height="60px" src={'https://flagicons.lipis.dev/flags/1x1/' + props.ISO.toLowerCase() + '.svg' } />
      </div>
      <footer className=''>
          <h5>{props.Timezone}</h5>                            
        </footer>
      </div>
      </div>
  );
}

export default Clock;