import React, { useEffect, useRef } from "react"; // Import necessary React hooks

function ModalDialog({ x, children }) {
  // Create a reference to access the dialog element
  const diaRef = useRef();

  useEffect(() => {
    // Access the current dialog element
    const dialog = diaRef.current;

    // Check if 'x' is false, do nothing and return early
    if (!x) {
      return;
    } else {
      // If 'x' is true, show the modal dialog
      dialog.showModal();
    }

    // Cleanup function to close the dialog when component unmounts or 'x' changes
    return () => {
      dialog.close();
    };

  }, [x]); // Dependency array, effect will run when 'x' changes

  return (
    <div>
      {/* Render the dialog element with a reference */}
      <dialog ref={diaRef}>
        {children} {/* Render the children inside the dialog */}
      </dialog>
    </div>
  );
}

export default ModalDialog; // Export the ModalDialog component
