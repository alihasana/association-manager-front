import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Aux from "../../hoc/_Aux";

class Create extends React.Component {

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
          return <Redirect to='/admin/plannings' />
        }
      }

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Création de évenement</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Form.Group controlId="planningNom">
                                                <Form.Label>Titre</Form.Label>
                                                <Form.Control type="text" placeholder="Ajouter un titre" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="planningDateStart">
                                                <Form.Label>Date de démarrage</Form.Label>
                                                <Form.Control type="datetime" placeholder="Date de démarrage du événetment" />
                                            </Form.Group>

                                            <Form.Group controlId="planningDateEnd">
                                                <Form.Label>Date de fin</Form.Label>
                                                <Form.Control type="datetime" placeholder="Date de fin du événetment" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="planningColour">
                                                <Form.Label>Sélectionne de color</Form.Label>
                                                <Form.Control as="select">
                                                    <option className="lightGreen" value="lightGreen">Light Green</option>
                                                    <option className="lightBlue" value="lightBlue">Light Blue</option>
                                                    <option className="lightGray" value="lightGray">Light Gray</option>
                                                    <option className="orange" value="orange">Orange</option>
                                                    <option className="lightYellow" value="lightYellow">Light Yellow</option>
                                                </Form.Control>
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

export default Create;
