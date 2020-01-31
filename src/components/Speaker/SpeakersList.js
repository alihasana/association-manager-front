import React from 'react';
import {Row, Col, Card, Button, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class SpeakerList extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Liste des intervenants&nbsp;&nbsp;
                                    <Button variant="success">
                                        + Créer un nouvel intervant
                                    </Button>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nom</th>
                                        <th>Prénom</th>
                                        <th>Date d'entrée</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Jeannine</td>
                                        <td>St Louis</td>
                                        <td>27/01/2020</td>
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
                                        <td>Joseph</td>
                                        <td>Exil</td>
                                        <td>27/01/2020</td>
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
                                        <td>Durant</td>
                                        <td>Paul</td>
                                        <td>27/01/2020</td>
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

export default SpeakerList;