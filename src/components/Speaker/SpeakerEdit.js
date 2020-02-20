import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Aux from "../../hoc/_Aux";

class SpeakerCreate extends React.Component {

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
        let adminLink = this.renderRedirect('/admin/intervenants')
        let superAdminLink = this.renderRedirect('/sadmin/intervenants')
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
                                <Card.Title as="h5">Modifier intervenant</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Form.Group controlId="lastName">
                                                <Form.Label>Nom</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Dupuis"
                                                    value="Yves"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="firstName">
                                                <Form.Label>Prénom</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value="De Vassart"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="username">
                                                <Form.Label>Nom d'utilisateur</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value="d_devassart"
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value="test@test.org"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="mobile">
                                                <Form.Label>Mobile</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value="+33654986548"
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

export default SpeakerCreate;
