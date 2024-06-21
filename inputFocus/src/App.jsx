import { useState ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { useEffect } from 'react'

function App() {
  let[name,setName]=useState("")
  let obj=useRef()
  useEffect(function(inp){
    console.log(inp)
    // document.getElementById("inp").focus()
    obj.current.focus()
  },[])
function color(){
  document.getElementById("head").style.color="blue"
}

  function handleChange(event){
setName(event.target.value)
  }
 return(
<div>
  <h1 id="head">{name}</h1>
  <input id="inp" ref={obj} onChange={handleChange} value={name}/>
  <button onClick={color}>color</button>
 
</div>

 ) 
}

export default App
