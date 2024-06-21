import { useState ,useRef} from 'react'


function Form() {
   let inpRef1=useRef(null)
   let inpRef2=useRef(null)
   let inpRef3=useRef(null)
   let inpRef4=useRef(null)
   let inpRef5=useRef(null)

let[set,setVALUE]=useState(false)




let obj={border:set?"green solid 2px":"red solid 2px"}
 function handleChange(e){
    e.preventDefault()
  
if(inpRef1.current.value.length==5){
    setVALUE(!set)
}
    
 }




    function handleSubmit(e){
        e.preventDefault()
      let object={
        name:inpRef1.current.value,
        place:inpRef2.current.value,
        age:inpRef3.current.value,
        mobileno:inpRef4.current.value,
        course:inpRef5.current.value
    
    
    
      }  
      console.log(object)
    
    }




 return(
  <div>
  
   <form onSubmit={handleSubmit}>
    <label>name: </label>
    
    <input style={{marginLeft:"25px",...obj}} ref={inpRef1} placeholder='enter at least five characters'  onChange={handleChange} id="first"/><br/>
    <p>{set?"":"name input at laeast contain 5 characters"}</p>
    
    <label>place:</label>
    <input  style={{marginLeft:"27px"}} ref={inpRef2} /><br/>
    <label>age:</label>
    <input style={{marginLeft:"38px"}} ref={inpRef3}/><br/>
    <label>mobile no:</label>
    <input ref={inpRef4}/><br/>
    <label>course:</label>
    <input style={{marginLeft:"25px"}} ref={inpRef5}/><br/>
    <input type="submit" style={{marginLeft:"120px"}}/>


   </form>
  </div>
 )    
  
}

export default Form
