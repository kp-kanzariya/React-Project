import React, { useEffect, useRef } from "react";

function ModalDialog({ x, children }) {
  const diaRef = useRef();
  useEffect(() => {
    const dialog = diaRef.current;

    if (!x)
         {
        return;
    }
     else {
        dialog.showModal();
    }

    return()=>{
        dialog.close();
    }
    
  });
  return (
    <div>
      <dialog ref={diaRef}>{children}</dialog>
    </div>
  );
}

export default ModalDialog;
