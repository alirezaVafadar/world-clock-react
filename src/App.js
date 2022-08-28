import React, {useEffect, useState} from 'react';
import Clock from './Clock';
import timezone from './timezone.json';
import './App.css';
import { Button } from 'react-bootstrap';

function App(props) {
  
  const [clocks, setClocks] = useState([]); 
  const [selectedClock, setSelectedClock] = useState('Asia/Tehran');

  const handleChange = e => {
    setSelectedClock(e.target.value);
  }

  const addTimeZone=()=> {
    if (clocks.findIndex(c => c.Timezone == selectedClock) < 0) {
        const zone = timezone.find(k => k.Timezone == selectedClock);
        setClocks(prevState => [...prevState, zone] );
    }
  }

  const removeClick=(zone)=>
    {
      let updateClocks = clocks;
      let index = updateClocks.findIndex(t => t.Timezone === zone);
      updateClocks.splice(index,1)
      setClocks(updateClocks);
    }

    const optionItems = timezone.map((zone) =>
    <option value={zone.Timezone} key={zone.Timezone} onChange={handleChange}>{zone.Country}-{zone.Timezone}</option>
    );

    const showClocks = clocks.map((zone) =>
        <Clock {...zone} key={zone.Timezone} removeClick={()=>removeClick(zone.Timezone)} />
    );
  return (
    <div className="">
                <div>
                    <p> 
                        <select className="" value={selectedClock} onChange={handleChange} >
                            {optionItems}
                        </select>
                    </p>
                    <p>
                        <button onClick={addTimeZone} className="">ADD CLOCK </button>
                    </p>
                </div>
                {showClocks}
            </div>

  );
}

export default App;
