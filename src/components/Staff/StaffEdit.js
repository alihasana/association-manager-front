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
    }

    renderRedirect = (url) => {
        if (this.state.redirect) {
            return <Redirect to={url} />
        }
    }

    render() {
        // Start Vérification du rôle de l'utilisateur pour afficher ou masquer des éléments dans la page
        const isAdmin = window.location.href.indexOf("/admin") !== -1
        //Create
        let adminLink = this.renderRedirect('/admin/staffs')
        let superAdminLink = this.renderRedirect('/sadmin/staffs')
        let redirectUser;

        // Edit Project
        function redirectLink(){
            
            if(isAdmin){
                redirectUser = adminLink
            } else {
                redirectUser = superAdminLink
            }
            return redirectUser
        }
       
        // End Vérification du rôle de l'utilisateur pour afficher ou masquer des éléments dans la page

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
                                                <Form.Control
                                                    type="text"
                                                    placeholder="le nom du staff"
                                                    value="Jean"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="lastName">
                                                <Form.Label>Prénom</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="le prénom du staff"
                                                    value="Yves"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="lastName">
                                                <Form.Label>Date d'entrée</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="01/12/2017 12:32:00"
                                                    value="Jean"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="lastName">
                                                <Form.Label>Responsable</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Directeur"
                                                    value="Jean"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            {redirectLink()}
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
