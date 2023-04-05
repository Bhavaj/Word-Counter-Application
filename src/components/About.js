import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React, {useState} from 'react';

export default function About(props) {
    const [myStyle, setMyStyle] = useState({
        backgroundColor : 'white',
        color : 'black'
    });
    const [btnText, setButtonText] = useState("Enable dark mode");

    let toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            

            setButtonText("enable dark mode")
            console.log(props.mode);
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })

            console.log(props.mode);

            setButtonText('enable light mode');
        }
    }
    
  return (
    <div className="container" style={myStyle}>

    <Card className="text-center" style={myStyle}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary"  onClick={toggleStyle}>{btnText}</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    
</div>
  );
}
