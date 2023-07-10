'use client'
import Button from "./Button"
import { useState } from "react"
import Modal from 'react-modal'

Modal.setAppElement("#root");

export default function CartButton(){
    const [modalIsOpen, setIsOpen] = useState(false);
    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      };

    
  

  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }
  

    return (
        <div>
            <Button onClick={openModal}>Add to Cart</Button> 
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
        </div>
    )      
}