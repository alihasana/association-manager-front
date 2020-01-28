import React from 'react';
import {Row, Col, Button, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class ProjectsList extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Liste des projets&nbsp;&nbsp;
                                    <Button variant="success">
                                        + Créer un nouveau projet
                                    </Button>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Projet</th>
                                        <th>Domaine</th>
                                        <th>Association</th>
                                        <th>Démarrage</th>
                                        <th>Fin</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Fabrication de tablette</td>
                                        <td>Informatique</td>
                                        <td>Free Formation</td>
                                        <td>27/01/2020</td>
                                        <td>29/01/2020</td>
                                        <td>
                                            <Button variant="secondary">
                                                <i className="fa fa-eye f-22 m-r-10"/>
                                            </Button>
                                            <Button variant="primary">
                                                <i className="fa fa-edit f-22 m-r-10"/>
                                            </Button>
                                            <Button variant="danger">
                                                <i className="fa fa-trash f-22 m-r-10"/>
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Distribution des tablette</td>
                                        <td>Soutien scolaire</td>
                                        <td>Free formation</td>
                                        <td>30/01/2020</td>
                                        <td>31/01/2020</td>
                                        <td>
                                            <Button variant="secondary">
                                                <i className="fa fa-eye f-22 m-r-10"/>
                                            </Button>
                                            <Button variant="primary">
                                                <i className="fa fa-edit f-22 m-r-10"/>
                                            </Button>
                                            <Button variant="danger">
                                                <i className="fa fa-trash f-22 m-r-10"/>
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Formation sur l'utilisation des tablettes</td>
                                        <td>Informatique</td>
                                        <td>Free Formation</td>
                                        <td>01/02/2020</td>
                                        <td>05/02/2020</td>
                                        <td>
                                            <Button variant="secondary">
                                                <i className="fa fa-eye f-22 m-r-10"/>
                                            </Button>
                                            <Button variant="primary">
                                                <i className="fa fa-edit f-22 m-r-10"/>
                                            </Button>
                                            <Button variant="danger">
                                                <i className="fa fa-trash f-22 m-r-10"/>
                                            </Button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ProjectsList;