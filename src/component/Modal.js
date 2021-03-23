import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
function ModalAdd(props) {
    console.log("🚀 ~ file: Modal.js ~ line 4 ~ Example ~ props", props)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Thêm mới sản phẩm
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.toggleModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    )

}

export default ModalAdd