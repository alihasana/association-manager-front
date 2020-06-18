import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import Aux from "../../hoc/_Aux";
import Dropzone from "./../General/Dropzone";

class Create extends React.Component {

    state = {
        redirect: false,
        productImages: []
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    };

    renderRedirect = (url) => {
        if (this.state.redirect) {
            return <Redirect to={url}/>
        }
    };

    onDrop = (acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.readAsArrayBuffer(file);
        })

        const productImages = this.state.productImages;
        const images = [...productImages, ...acceptedFiles]
        this.setState({
            productImages: images
        })
        console.log(this.state.productImages)
        return this.state.productImages
    };

    render() {

        // Start Vérification du rôle de l'utilisateur pour afficher ou masquer des éléments dans la page
        const isAdmin = window.location.href.indexOf("/admin") !== -1
        //Create
        let adminLink = this.renderRedirect('/admin/projets')
        let superAdminLink = this.renderRedirect('/sadmin/projets')
        let redirectUser;
        let listOfFile = this.state.productImages.map(file => (
            <li key={file.path}>
                {file.path} - {file.size} bytes
            </li>
        ));

        // Edit Project
        function redirectLink() {

            if (isAdmin) {
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
                                <Card.Title as="h5">Création d'une nouvelle produit</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Form.Group controlId="productName">
                                                <Form.Label>Nom</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Le nom du produit"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>


                                            <Form.Group controlId="productStatus">
                                                <Form.Label>Statut</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Le  statut du projet"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="productCategory">
                                                <Form.Label>Category de produit</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Le type de projet"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="productMainImage">
                                                <Dropzone onDrop={this.onDrop} accept={"image/*"} singleOrMultiple={"mutiple"}/>
                                                {this.state.productImages.length === 0 ? '' : listOfFile}
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

export default Create;
