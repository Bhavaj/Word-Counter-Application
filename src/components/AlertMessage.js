import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';


export default function AlertMessage(props) {
    const [show, setShow] = useState(true);

    const capitalize = (word)=>{
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    if (show) {
      return (
        props.alert && <Alert style={{backgroundColor: props.mode==='light'?'skyblue':'red', color: props.mode==='light'?'black':'white'}} variant= {props.alert.type} onClose={() => setShow(false)} >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
        </Alert>
      );
    }
    
}
