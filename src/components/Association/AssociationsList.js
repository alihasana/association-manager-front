import React from 'react';
import {Row, Col, Button, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class AssocationsList extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Liste des associations&nbsp;&nbsp;
                                    <Button variant="success">
                                        + Créer un nouvelle association
                                    </Button>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nom</th>
                                        <th>Type</th>
                                        <th>Date d'entrée</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Croix Rouge</td>
                                        <td>Humanitaire</td>
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
                                        <td>US Créteil</td>
                                        <td>Sportive</td>
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
                                        <td>Sans frontières</td>
                                        <td>Humanitaire</td>
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

export default AssocationsList;