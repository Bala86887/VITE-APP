import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let[name,setName]=useState("") 
 let[place,setPlace]=useState("") 
 let[save,set]=useState([])
function inputName(event){
setName(event.target.value)
}
function inputPlace(eventtwo){
  setPlace(eventtwo.target.value) 
}

function addTodo(){
 let obj={name,place}
 set([...save,obj])
 setName("")
 setPlace("")

}
console.log(save)

  return(
    <div>    
      <input placeholder="enter name"  onChange={inputName} value={name}/><br/>
      <input placeholder="enter your place" onChange={inputPlace} value={place}/>  <br/>
      <button onClick={addTodo}>ADD TODO</button>


  <table>
    <tr>
      <th>name</th>
      <th>place</th>
    </tr>
    {save.map((ele)=>(
      <tr>
        <td>{ele.name}</td>
        <td>{ele.place}</td>
      </tr>

    ))}
  </table>
     
    </div>
  )
}

export default App
