import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Aux from "../../hoc/_Aux";

class ProjectCreate extends React.Component {

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
          return <Redirect to='/admin/projets' />
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
                                                <Form.Label>Projet</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Le nom du projet"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="startAt">
                                                <Form.Label>Date de démarrage</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Date de démarrage du projet"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="endDate">
                                                <Form.Label>Date de fin</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="La date à laquelle le projet se termine"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="status">
                                                <Form.Label>Statut</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Le  statut du projet"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="projectType">
                                                <Form.Label>Type de projet</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Le type de projet"
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

export default ProjectCreate;
