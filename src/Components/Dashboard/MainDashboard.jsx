import React, { Component } from 'react';
import {
    Container,
    Button
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import SelectionChartTypeModal from "./SelectionChartTypeModal";

class MainDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowModal: false
        }
    }

    toggleModal = () => {
        this.setState({
            isShowModal: !this.state.isShowModal
        })
    }

    hideModal = () => {
        this.setState({
            isShowModal: false
        })
    }

    render() {
        let xModal;

        if (this.state.isShowModal) {
            xModal = <SelectionChartTypeModal show={this.state.isShowModal} setShow={this.hideModal}/>
        }

        return (
            <Container>
                <Button onClick={this.toggleModal}><FontAwesomeIcon icon={faPlusCircle} /> Create a chart</Button>
                {xModal}
            </Container>
        );
    }
}

export default MainDashboard;