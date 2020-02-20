import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Aux from "../../hoc/_Aux";

class ProjectEdit extends React.Component {

    state = {
        redirect: false
      };


    setRedirect = () => {
        this.setState({
          redirect: true
        })
      };

      renderRedirect = (url) => {
        if (this.state.redirect) {
          return <Redirect to={url} />
        }
      };

    render() {
        // Start Vérification du rôle de l'utilisateur pour afficher ou masquer des éléments dans la page
        const isAdmin = window.location.href.indexOf("/admin") !== -1
        //Create
        let adminLink = this.renderRedirect('/admin/projets')
        let superAdminLink = this.renderRedirect('/sadmin/projets')
        let redirectUser;

        // Edit Project
        function redirectLink(){
            
            if(isAdmin){
                redirectUser = adminLink
                // editLink = this.renderRedirectEdit('/admin/projets/modifier')
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
                                <Card.Title as="h5">Modification d'une association</Card.Title>
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
                                                    value="Lorem...lorem.nom"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="startAt">
                                                <Form.Label>Date de démarrage</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Date de démarrage du projet"
                                                    value="Lorem...date.de.démarrage"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="endDate">
                                                <Form.Label>Date de fin</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="La date à laquelle le projet se termine"
                                                    value="Lorem...date.de.fin"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="status">
                                                <Form.Label>Statut</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Le  statut du projet"
                                                    value="Lorem...statut"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="projectType">
                                                <Form.Label>Type de projet</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Le type de projet"
                                                    value="Lorem...type"
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

export default ProjectEdit;
