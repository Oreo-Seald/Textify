import React , {useState} from "react"
export default function TextForm(props) {
const[text , setText] = useState('')


  const handleUserclixk = () =>{
    console.log('Weve recorded A state change');
    let newy = text.toUpperCase();
    setText(newy)
  }
  const handleUsercliyk = () =>{
    console.log('Weve recorded A state change');
    let newe = text.toLowerCase();
    setText(newe)
  }
  const handleStateChange = (event) =>{
console.log('go to hell')
setText(event.target.value)
  }
 const  handlefieldclear = ()=>{
   let newx = ''
   setText(newx)
   console.log('executed')
   if(text===''){

  }
  else{

    let mst = new SpeechSynthesisUtterance();
    mst.text = 'Text Box cleared'
    window.speechSynthesis.speak(mst)

   props.showAlert('Text Box cleared' , 'Success: ')
  
  }

 }
 let legt = text.split(" ").length
 let left;
if(text===''){
left=0
}
else {
  left=legt
}

const handlevoice = () =>{
  speechSynthesis.cancel();
  const voices = window.speechSynthesis.getVoices();
const lastVoice = voices[voices.length - 0];
  let msg = new SpeechSynthesisUtterance();
  msg.text = document.getElementById('form').value
msg.voice  = lastVoice


  window.speechSynthesis.speak(msg)
  setTimeout(() => {
    speechSynthesis.cancel();

  }, 15000);

  if(text===''){

  }
  else{
    props.showAlert('This may take some time' , 'Warning: ')
 
  
  }
  }
  
  
  



const handlestyles = ()=>{
 
  let copyText = document.getElementById('form').value
  //copyText.select();
  navigator.clipboard.writeText(copyText);
  console.log(copyText)

if(text===''){

}
else{

  let msy = new SpeechSynthesisUtterance();
    msy.text = 'Copied'
    window.speechSynthesis.speak(msy)

 props.showAlert('Copied To ClipBoard' , 'Success: ')

}
}
  return (
    <>
    <div>
      
     <h1 className='head' >{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="MyTextBox" className="form-label"></label>
  <textarea className="form-control" value={text} onChange = {handleStateChange}  id="form" rows="8" ></textarea>
</div>
<button className="btn btn-primary" onClick={handleUserclixk}>UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleUsercliyk}>LowerCase</button>
<button className="btn btn-danger " onClick={handlefieldclear} id = "rty"> Clear Field</button>
<button className="btn btn-success mx-2" onClick={handlestyles} id = "crg">Copy To Clipboard</button>
<button className="btn btn-info" id="btn2" onClick={handlevoice}>{props.text}</button>

    </div>
    
    <div className="conatiner">
      <h2 className="white my-3">Text Summary</h2>
      <p className="white1">{text.length} charecters and {left} words</p>
    
      <h3 className="white">Preview</h3>
      <p className="white">{text}</p>
    </div>
    </>
  )
}
