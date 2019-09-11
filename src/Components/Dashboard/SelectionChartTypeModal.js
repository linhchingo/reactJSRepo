import React, { Component } from 'react'
import { Modal } from "react-bootstrap";

export default class SelectionChartTypeModal extends Component {
    render() {
        const { show,setShow} = this.props

        return (
            <Modal show={show}
                onHide={setShow}
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

            </Modal>
        );
    }
}
