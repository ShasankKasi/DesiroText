import React,{useState} from 'react';
export default function Textform(props) {
  const [text,setText]=useState("");
  // setText("")
  const handleUpClick=()=>{
    console.log("UpperCase was Clicked");
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase","success");

    // setText("handleUpclick was clicked")
  }
  const handleClearClick=()=>{
    console.log("ClearCase was Clicked");
    let newtext='';
    setText(newtext);
    // setText("handleUpclick was clicked")
    props.showAlert("Text cleared","success");

  }
  const handleOnChange =(event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  const handleLowerClick =()=>{
    console.log("LowerCase is Clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");

  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are removed","success");

  }
  const handleCopyClick =()=>{
    console.log("CopyCase is Clicked");
   var text=document.getElementById("myBox");
   text.select();
   navigator.clipboard.writeText(text.value);
   props.showAlert("Text copied to Clipboard","success");

  }
  return (
<div>
  <h1 style= {{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
  <div className="mb-3">
    <label htmlFor="myBox" className="form-label"></label>
    <textarea value={text} className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black' ,width: 1000}} id="myBox" columns="1000">
    </textarea>
  </div >
  <button style={{color:'black'}} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert into uppercase</button>

  {/* <button style={{color:'black'}} className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert into Lowercase</button> */}
  <button style={{color:'black'}} className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert into Lowercase</button>
  <button style={{color:'black'}} className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy the Text</button>
  <button style={{color:'black'}} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the Text</button>
  <button style={{color:'black'}} className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Clear the Extra Spaces</button>
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1> Your text summary</h1>
    <p>No.of characters is {text.length}</p>
    <p>No. of words is {text.split(" ").length}</p>
  </div>
</div>


  );
}
