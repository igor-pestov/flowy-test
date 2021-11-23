import { useState } from "react";
import "./Navigation.scss"
function Navigation() {
    const list: Array<string> = ['Triggers', 'Actions', 'Loggers'] 
    const [active, setActive] = useState<number>()
    return (
      <div className="Navigation">
        {list.map((elem,idx)=> {
            return (
                <div className={idx === active ?"nav-element active" : "nav-element" } onClick={()=> setActive(idx)}>{elem}</div>
            )
        })}
      </div>
    );
  }
  
  export default Navigation;
  