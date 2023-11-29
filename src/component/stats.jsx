import { useState } from "react"
export default function Stats({items ,clear}){
    if(!items.length)return(
      <p className="stats"><em>star ading some items</em></p>
    )
    const numitem=items.length
    const numpcked=items.filter((item)=>item.packed).length
    const pris=Math.round((numpcked/numitem *100))
    return(
      <footer className="stats">
        
        
        <em>
          {pris===100?"you ready to go":
          `you have ${numitem} and alredy backed ${numpcked} (${pris?pris:"0"}%)`
          }  </em>
            
      </footer>
    )
  };
  
  