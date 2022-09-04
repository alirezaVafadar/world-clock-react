import React, {useEffect, useState} from 'react';
import Clocks from './Clocks';
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
      <Container >
          <Row className='justify-center'>
          <h1 className='head'>World Clock</h1>
            <Col  xs={12} md={8} className='justify-center'>
              <Form.Select className='select' aria-label="Default select example" value={selectedClock} onChange={handleChange}>
                {timezone.map((zone)=>{return(<option className='select' value={zone.Timezone} key={zone.Timezone} onChange={handleChange}>{zone.Country}-{zone.Timezone}</option>)})}
              </Form.Select>
              <Button onClick={addTimeZone} className="add-button">ADD CLOCK </Button>
            </Col>
          </Row>
          <Row>
            {clocks.map(((zone)=>{return(<Clocks {...zone} key={zone.Timezone} removeClick={()=>removeClick(zone.Timezone)} />)}))}
          </Row>
      </Container>
    </React.Fragment>

  );
}

export default App;