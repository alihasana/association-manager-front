import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Aux from "../../hoc/_Aux";

class StaffCreate extends React.Component {

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
          return <Redirect to='/admin/staffs' />
        }
      };

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Modifier est detail de staff</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Form.Group controlId="lastName">
                                                <Form.Label>Nom</Form.Label>
                                                <Form.Control type="text" placeholder="Le nom de staff" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="lastName">
                                                <Form.Label>Prénom</Form.Label>
                                                <Form.Control type="text" placeholder="Le prénom de staff" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="lastName">
                                                <Form.Label>Date d'entrée</Form.Label>
                                                <Form.Control type="date" placeholder="Date d'entrée" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="lastName">
                                                <Form.Label>Responsable</Form.Label>
                                                <Form.Control type="text" placeholder="Responsable" />
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

export default StaffCreate;
