import { useState } from "react"; // Import useState hook for managing component state
import ModalDialog from "./ModalDialog"; // Import ModalDialog component for displaying modal
import Booking from "./Booking"; // Import Booking component (not used for modal functionality)

function AppModal() {
  // State variable to control the visibility of the modal
  const [show, setShow] = useState(false);

  return (
    <div className="app">
      {/* Render the Booking component */}
      <Booking />

      <h1>Pop-up Modal Example</h1>

      {/* Button to open the modal */}
      <button onClick={() => setShow(true)}>Open Modal</button>

      {/* ModalDialog component rendered based on the 'show' state */}
      <ModalDialog x={show}>
        {/* Modal content */}
        <h1>THIS IS ALERT</h1>
        {/* Button to close the modal */}
        <button onClick={() => setShow(false)}>Close</button>
      </ModalDialog>
    </div>
  );
}

export default AppModal; // Export the AppModal component for use in other parts of the application
