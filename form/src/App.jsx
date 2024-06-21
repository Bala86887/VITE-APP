import { useState ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from "./FormValidation/formRules"

function App() {
   let inpRef1=useRef(null)
   let inpRef2=useRef(null)
   let inpRef3=useRef(null)
   let inpRef4=useRef(null)
   let inpRef5=useRef(null)


 function handlePress(e,next){
    e.preventDefault()
if(e.key=="Tab"){
next.current.focus()
}

 }



 return(
  <div>
    <h1>using Tab </h1>
   <form>
    <label>name: </label>
    <input style={{marginLeft:"25px"}} type="number" ref={inpRef1} onKeyDown={(event)=>handlePress(event,inpRef2)}/><br/>
    <label>place:</label>
    <input  style={{marginLeft:"27px"}} ref={inpRef2} onKeyDown={(event)=>handlePress(event,inpRef3)}/><br/>
    <label>age:</label>
    <input style={{marginLeft:"38px"}} ref={inpRef3} onKeyDown={(event)=>handlePress(event,inpRef4)}/><br/>
    <label>mobile no:</label>
    <input ref={inpRef4} onKeyDown={(event)=>handlePress(event,inpRef5)}/><br/>
    <label>course:</label>
    <input style={{marginLeft:"25px"}} ref={inpRef5} onKeyDown={(event)=>handlePress(event,inpRef1)}/><br/>

   </form>

   <h1>Form Validataion</h1>
   <Form/>
  </div>
 )    
  
}

export default App
