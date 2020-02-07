import React from 'react';
import {Row, Col, Card, Form /*, Button*/} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class AssociationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            associationName: "",
            associationType: "",
            // associationEntryDate: ""
        };

    }

    handleChange = event => {
        this.setState({ 
            associationName: event.currentTarget.value, 
            associationType: event.currentTarget.value, 
            // associationEntryDate: event.currentTarget.value,
            associationEntryDate: event.currentTarget.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const id = new Date().getTime();
        const nom = this.state.associationName;
        const type = this.state.associationType;
        // const entryAt= this.state.associationEntryAt;
        const entryDate= new Date().getDate();

        this.props.onAssociationAdd({ id, nom, type, entryDate });

        // this.setState({ associationName: "", associationType: "", associationEntryDate: "" });
        this.setState({ associationName: "", associationType: ""});
    };




    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Basic Component</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h5>Form controls</h5>
                                <hr/>
                                <Row>
                                    <Col md={6}>
                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Group>
                                                <Form.Label>Nom</Form.Label>

                                                <input className="form-control"
                                                    type="text" 
                                                    placeholder="Le nom de l'association" 
                                                    value={this.state.associationName}
                                                    onChange={this.handleChange}
                                                />

                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Type</Form.Label>
                                                <input className="form-control" 
                                                    type="text" 
                                                    placeholder="Type d'association"
                                                    value={this.state.associationType}
                                                    onChange={this.handleChange}
                                                />
                                            </Form.Group>

                                            {/* <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Date d'entrée</Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    placeholder="Date d'entrée de l'association"
                                                    value={this.state.associationEntryAt}
                                                    onChange={this.handleChange}
                                                />
                                            </Form.Group> */}
                                            {/* <Button variant="primary">
                                                Confirmer
                                            </Button>
                                             */}
                                            <button className="btn btn-primary">
                                                Confirmer
                                            </button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default AssociationForm;
