import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Aux from "../../hoc/_Aux";

class AssociationCreate extends React.Component {

    state = {
        redirect: false
      };


    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/sadmin/associations' />
        }
      }

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Création d'une nouvelle association</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Form.Group controlId="name">
                                                <Form.Label>Nom</Form.Label>
                                                <Form.Control type="text" placeholder="Le nom de l'association" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="associationType">
                                                <Form.Label>Type</Form.Label>
                                                <Form.Control type="text" placeholder="Type d'association" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="phoneNumber">
                                                <Form.Label>Nom d'utilisateur</Form.Label>
                                                <Form.Control type="text" placeholder="Le téléphone de l'association" />
                                            </Form.Group>

                                            <Form.Group controlId="mobile">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Le téléphone mobile de l'association" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="website">
                                                <Form.Label>Mobile</Form.Label>
                                                <Form.Control type="text" placeholder="Le site web de l'association" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="dataUsageAgreement">
                                                <Form.Check type="checkbox" label="J'ai lu et j'accepte les CGU" />
                                            </Form.Group>
                                            <Form.Group controlId="dataUsageAgreement">
                                                <Form.Check type="checkbox" label="J'accepte les condition d'utilisation de ce service" />
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

export default AssociationCreate;
