import React, { useState } from 'react'

export default function TextForm(props) {
    const[text,setText]=useState("");

    const HandleUpClick = ()=>{
      // console.log("Uppercase was clicked " +text);
       let newText= text.toUpperCase();
       setText(newText);
       props.showAlert("Converted To UpperCase!","Success");
    }

    const HandleLowClick= ()=>{
       let newtext=text.toLowerCase();
       setText(newtext);
       props.showAlert("Converted To LowerCase!","Success");
    }

    const HandleOnChange=(e)=>{
        setText(e.target.value);
       
    }
    const handleClearClick=()=>{
      let newText="";
      setText(newText);
      props.showAlert("Text Cleared!","Success");
    }

    const HandleCopy= ()=>{
      // var text=document.getElementById("myBox");
      // text.select();
      navigator.clipboard.writeText(text);
      // document.getSelection().removeAllRanges();
      props.showAlert("Copied to Clipboard!","Success");
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed!","Success");
    }

  return (
    <>
       <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
          <h1 className='mb-4'>{props.heading}</h1>
          <div className='mb-3'>
           <textarea className="form-control" value={text}  onChange={HandleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows='8' />
          </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 " onClick={HandleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        

        </div>
        <div className='container my-4' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>

    </> 
       
  )
}

