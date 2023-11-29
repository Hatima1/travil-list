import { useState } from "react";
export default function Form({onadditem}){
    const [description,setdescription]=useState("")
    const [quantity,setquantity]=useState("")
    
      
  
  
    function hundlersumbit(e) {
      e.preventDefault()
      if(!description) return ;
    
       const newitem={description,quantity,packed:false,id:Date.now()}
       onadditem(newitem)
         
         setquantity(1)
      setdescription("")
         }
  
  
    return(
        <form className="add-form" onSubmit={hundlersumbit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select value={quantity} onChange={e=>setquantity(+e.target.value)}>{Array.from({length:20},(_,i)=>i+1).map(num=><option value={num} key={num}  > {num} </option> )}
         </select>
         <input type="text" placeholder="item" value={description} onChange={e=>setdescription(e.target.value)} />
         <button>add</button>
      </form>
     
    )
  
  };