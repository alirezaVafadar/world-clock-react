import React, {useEffect, useState} from 'react';
import Clock from './Clock';
import timezone from './timezone.json';
import './App.css';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import NavbarComponent from './navbarComponent';

function App() {
  
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

  function removeClick(zone)
    {
      const newClocks = clocks.filter(t => t.Timezone != zone);
      setClocks(newClocks);
    }
  return (
    <React.Fragment>
      <NavbarComponent/>
      <Container>
          <Row>
            <Col  xs={10} md={6}>
              <h1 className='head'>World Clock</h1>
              <Form.Select aria-label="Default select example" value={selectedClock} onChange={handleChange}>
                {timezone.map((zone)=>{return(<option value={zone.Timezone} key={zone.Timezone} onChange={handleChange}>{zone.Country}-{zone.Timezone}</option>)})}
              </Form.Select>
              <Button onClick={addTimeZone} className="">ADD CLOCK </Button>
            </Col>
          </Row>
          <Row>
            {clocks.map(((zone)=>{return(<Clock {...zone} key={zone.Timezone} removeClick={()=>removeClick(zone.Timezone)} />)}))}
          </Row>
      </Container>
    </React.Fragment>

  );
}

export default App;