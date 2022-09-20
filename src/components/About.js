import React,{useState} from 'react';

export default function About(props){

    // const[mystyle,setMyStyle]=useState({
    //       color:"black",
    //       backgroundColor:"white",
    //     })
   let mystyle={
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'rgb(36,74,104)':'white',
       
   }
    return(
        <div className="container">
            <h1 style={{color:props.mode==='dark'?'white':'#042743',}}>{props.head}</h1>
        <div class="accordion accordion-flush" id="accordionFlushExample" style={mystyle}>
            
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed"  style={mystyle}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <strong> Analyze Your text</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"  style={mystyle}>TextUtils gives you a way to Analyze your text  quickly and efficiently. Be it word count,character count or.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"  style={mystyle}>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given
      text. TextUtils report the number of words and characters. Thus it is suitable for writing text with word/character
       limits.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       <strong> Browser Compatible</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"  style={mystyle}>This word counter software works in any web Browser such as Chrome, Firefox,Internet Explorer, Safari, Opera. 
      It suits to count character in facebook, blog, books, excel document, pdf document, essays etc.</div>
    </div>
  </div>
  </div>


</div>
    )
}
