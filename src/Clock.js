import React, {useEffect, useState} from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';

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
    <Col xs={12} md={4}>
      <Card className='card'>                             
          <Card.Title className='coin-title'>
            <Button onClick={props.removeClick} className=''>×</Button>
          </Card.Title>
            <Card.Body>
              <h5>  
              <img height="60px" src={'https://flagicons.lipis.dev/flags/1x1/' +props.ISO.toLowerCase()+ '.svg' } /> 
              {props.Country}     
              </h5>                                            
              <Row>
                  <p>{time}</p>
              </Row>
                <Card.Text className=''>
                  <h5>{props.Timezone}</h5>                            
                </Card.Text>
            </Card.Body> 
        </Card>
      </Col>
  );
}

export default Clock;