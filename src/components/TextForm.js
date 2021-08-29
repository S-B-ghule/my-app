
import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpperClick = ()=>{
        // console.log('You clicked upper click function'+text);
        let newText = text.toUpperCase();
        props.showAlert("Converted to Uppercase!", "success");
        setText(newText);  
    }
    const handleLowerClick = ()=>{
        // console.log('You clicked upper click function'+text);
        let newText = text.toLowerCase();
        props.showAlert("Converted to Lowercase!", "success");

        setText(newText); 
    }
    const handleClearClick = ()=>{
        // console.log('You clicked upper click function'+text);
        let newText = '';
        props.showAlert("Text has been Cleared!", "success");

        setText(newText);  
    }
   
    const handleSpeakClick = ()=>{
        // console.log('You clicked upper click function'+text);
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("I am reading your text!", "success");

    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Your text has been copied to Clipboard!", "success");

    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Your Extra Spaces has been removed!", "success");

    }

    const handleOnchange=(event)=>{                //to update state it compulsory to write this handleOnchange fn
        // console.log('On change');                     //this onchange event helps to edit the textbox
        setText(event.target.value);                  //this setText for editing the textBox   
    }
    const[text,setText] = useState('');
    

    return (
        <>
        <div className='container' style={{color: props.mode=== 'dark'?'white':'#122788'}}>
         <h1>{props.heading} </h1>       {/*heading is written in App.js file */}
        <div className="mb-3">
        {/* here we are writing some logic for dark mode using ternary operators and using props */}
        <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'? 'grey': 'white', color:props.mode=== 'dark'?'white': '#122788'}}
 id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperClick}>Convert text to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert text to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-2" onClick={handleSpeakClick}>Can I read for U?</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      {/* below styles is for summary and preview section */}
      <div className="container my-3 " style={{color: props.mode=== 'dark'?'white':'#122788'}}>
          <h2>Your Summary</h2>
             <p>{text.split(" ").length-1} <b>words</b> and {text.length} <b>Character</b></p>
             {/* <p>{Math.floor((0.008 * text.split("").length/3))} Minutes to read</p> */}
             <p>You will need {0.008 * text.split(" ").length} <b>minutes</b> to read.</p>
            <h2>Your preview</h2>
             <p>{text.length>0?text:"Enter something in the textBox above to preview something"}</p>
      </div>
      </>
    )

    }