import Form from "react-bootstrap/Form";
import { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  let firstChar = text.split(" ")[0];
  

  const dontCountSpaces = (word)=>{
    let blankWord = word.trim().split(/\s+/);
    return blankWord;

  }
  const handleUpClick = () => {
    // console.log('uppercase is clicked');
    let newText = text.toUpperCase();
    setText(newText);

    props.showAlert('Converted to UPPERCASE','success');
    
    
  };

  const handleLowClick = () => {
    // console.log('uppercase is clicked');
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showAlert('Converted to lowercase','success');
  };

  const handleOnChange = (event) => {
    // console.log('onchange triggered');
    setText(event.target.value);
    
  };

  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert('Your text is cleared','success')
  };
  return (
    <>
      <div className="container" style={{ color: props.mode==='light'?'black':'white'}}>
        <Form>
          <h2>{props.heading}</h2>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              
              
              onChange={handleOnChange}
              as="textarea"
              rows={7}
              value={text}
              style={{backgroundColor: props.mode==='light'?'white':'#240b0b', color: props.mode==='light'?'black':'white'}}
              
            />
          </Form.Group>
        </Form>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary m-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary m-2" onClick={handleClearClick}>
          Clear
        </button>
        <div className="container my-3">
          <h1>Your text summary</h1>
          <p>
            {" "}
            {firstChar===""?0:dontCountSpaces(text).length} words and {text.length} characters
            {/* blankWord[0]===""?0:noofwords */}
          </p>
          <h3>Preview</h3>
          <p>{text.length>0?text:"Please enter your text above to see the preview"}</p>
        </div>
      </div>
    </>
  );
}

export default TextForm;
