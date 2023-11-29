import { useState } from "react";
export default function Item({obj,deletitemforone,checkboxfornone}) {
    return(
      <>
    <li>
      <input type="checkbox" value={obj.packed} onChange={()=>checkboxfornone(obj.id)}  /> 
      <span style={obj.packed?{textDecoration:"line-through"}:{}}>{obj.quantity} {obj.description} </span>
      <button onClick={()=>deletitemforone(obj.id)} style={{color:"white"}}>&times;</button>
    </li>
      </>
  )
  
}