import React from 'react'
import {Modal,Button} from "react-bootstrap";
  
  export const DeleteModal = (props) => {
    return (
      
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Uyarı
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Kayıdı silmek ister misiniz?</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onDelete} variant = "danger">Sil</Button>
        </Modal.Footer>
      </Modal>
    )
  }
  