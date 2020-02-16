import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Aux from "../../hoc/_Aux";

class AssociationEdit extends React.Component {

    state = {
        redirect: false
      };


    setRedirect = () => {
        this.setState({
          redirect: true
        })
      };

      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/sadmin/associations' />
        }
      };

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Modification d'une association</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Form.Group controlId="name">
                                                <Form.Label>Nom</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Le nom de l'association"
                                                    value = "Croix rouge"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="associationType">
                                                <Form.Label>Type</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Type d'association"
                                                    value = "Aide Humanitaire"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="phoneNumber">
                                                <Form.Label>Téléphone</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Le téléphone de l'association"
                                                    value = "+33145689875"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="mobile">
                                                <Form.Label>Mobile</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Le téléphone mobile de l'association"
                                                    value = "+33698546525"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="website">
                                                <Form.Label>Site web</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Le site web de l'association"
                                                    value = "https://www.croix-rouge.org"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            {this.renderRedirect()}
                                            <Button variant="primary" onClick={this.setRedirect}>
                                            Submit
                                            </Button>
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

export default AssociationEdit;
