import React, {useEffect, useState} from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import './Clocks.css';

function Clocks(props) {
  
  const [time, setTime] = useState(null); 
  const [clockTime, setClockTime] = useState(new Date());

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
    setClockTime(today);
    console.log(clockTime);
    return today.toLocaleString();
  }
  return (
    <Col xs={12} md={4}>
      <Card className='card'>                             
          <Card.Title>
            <Button variant='dark' onClick={props.removeClick} >×</Button>
          </Card.Title>
          <Card.Body>
            <Row className='first-row'>
              <Col  xs={4} className='clock-col'>
                <Clock className='clock-style' size={80} value={clockTime}/> 
              </Col>
              <Col xs={8} className='time-col'>
                <Card.Text>{time}</Card.Text>
                <Card.Text>{props.Timezone}</Card.Text>
              </Col>                                           
            </Row> 
            <Row className='first-row'>
              <Col  xs={4} className='flag-col'>
                <img height="60px" src={'https://flagicons.lipis.dev/flags/1x1/' +props.ISO.toLowerCase()+ '.svg' } />
              </Col>
              <Col xs={8} className='country-col'>
                <Card.Text>{props.Country}</Card.Text>
              </Col>
            </Row>
          </Card.Body>                               
      </Card>
    </Col>
  );
}

export default Clocks;