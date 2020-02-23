import React, {createRef} from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Aux from "../../hoc/_Aux";
import { RegionDropdown } from 'react-country-region-selector';

class AnnounceCreate extends React.Component {
    constructor (props) {
        super(props);
        this.state = { country: 'France', region: '' };
    }

    state = {
        redirect: false
    };

    textInput = createRef();

    focusTextInput = () => this.textInput.current.focus();


    selectRegion (val) {
        this.setState({ region: val });
    }


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
        let adminLink = this.renderRedirect('/admin/announces')
        let superAdminLink = this.renderRedirect('/sadmin/announces')
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
                                <Card.Title as="h5">Création d'un nouveau announce</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Form.Group controlId="lastName">
                                                <Form.Label>Nom</Form.Label>
                                                <Form.Control type="text" placeholder="Le nom de l'announce" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="duration">
                                                <Form.Label>Durée de parution</Form.Label>
                                                <Form.Control as="select">
                                                    <option>15 Seconde</option>
                                                    <option>30 Seconde</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group controlId="assocationType">
                                                <Form.Label>Type d'assocation</Form.Label>
                                                <Form.Control as="select" multiple>
                                                    <option>Sportif</option>
                                                    <option>Religious</option>
                                                    <option>Humanitaire</option>
                                                    <option>Culturelle</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group controlId="region">
                                                <Form.Label>Selectionne de region</Form.Label>
                                                <RegionDropdown
                                                    country={this.state.country}
                                                    value={this.state.region}
                                                    onChange={(val) => this.selectRegion(val)} />
                                            </Form.Group>

                                            <Form.Group controlId="ville">
                                                <Form.Label>Selectionne de ville</Form.Label>
                                                <Form.Control as="select" multiple>
                                                    <option>Evry</option>
                                                    <option>Paris 77émé</option>
                                                    <option>Paris 78émé</option>
                                                    <option>Paris 79émé</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group controlId="age">
                                                <Form.Label>Selectionne de catérgorie d'age</Form.Label>
                                                <Form.Control as="select" multiple>
                                                    <option>Evry</option>
                                                    <option>Paris 77émé</option>
                                                    <option>Paris 78émé</option>
                                                    <option>Paris 79émé</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Ajoutée Announce Portable</Form.Label>
                                                <Form.Control
                                                    type="file"
                                                    ref={this.textInput}
                                                    onClick={this.focusTextInput}
                                                    placeholder="L'Ajoutée announce pour Portable" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Ajoutée Announce ordinateur</Form.Label>
                                                <Form.Control
                                                    type="file"
                                                    ref={this.textInput}
                                                    onClick={this.focusTextInput}
                                                    placeholder="L'Ajoutée announce pour ordinateur" />
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

export default AnnounceCreate;
