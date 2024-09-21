import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Modles() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Modal Title</h2>
        <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default Modles;
