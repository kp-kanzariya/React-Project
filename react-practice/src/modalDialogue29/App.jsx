import { useState } from "react";
import ModalDialog from "./ModalDialog";
import Booking from "./Booking";

function AppModal() {
  const [show,setShow] = useState(false)
  return (
    <div className="app">
      <Booking/>
      {/* <h1>Pop-up Modal Example</h1>

      <button onClick={()=>{setShow(true)}}>Open Modal</button>

      <ModalDialog x={show}>
        <h1>THIS IS ALERT</h1>
        <button onClick={()=>{setShow(false)}} >Close</button>
      </ModalDialog> */}
    </div>
  );
}

export default AppModal;
