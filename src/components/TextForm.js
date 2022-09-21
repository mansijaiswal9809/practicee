import React, {useState} from "react";

export default function TextForm(props) {
  const handleOnChange = (event)=>{
    setText(event.target.value);
    console.log(text)
  }
  const btn=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Capiatised","success")
    // console.log('clicked'+ text)
  }
  const RemoveExtraSpace =()=>{
    let newText=text.replace(/\s\s+/g," ");
    setText(newText)
    props.showAlert("Space Removed","success")
  }
  const [text, setText] = useState('');
  return (
    <div className="container" style={{color:props.mode==="dark" ? "white" : "black"}}>
      <h1>{props.heading}</h1>
      <textarea name="" id="" cols="100" rows="10" value={text} onChange={handleOnChange}></textarea>
      <div id="button">
        <button className="btn btn-primary mx-1" onClick={btn}>Convert To UPPERCASE</button>
        <button className="btn btn-primary mx-1" onClick={RemoveExtraSpace} mx-1>Remove extra space</button>
      </div>
      <h1>Your text has {text.split(" ").filter(x=>x!=="").length} words and {text.length} characters</h1>
    </div>
  );
}
