import React from 'react';
import {Row, Col, Card, Button, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

class StaffsList extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col md={9} xl={12}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as="h5">Liste des staffs&nbsp;&nbsp;
                                    <Button variant="success">
                                        + Créer un nouveau staff
                                    </Button>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Collaborateurs</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="unread">
                                        <th scope="row">1</th>
                                        <td>
                                            <img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/> Jean Yves 
                                            <br/>
                                            <img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/> Manon Louijou
                                            <br/>
                                            <img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/> Manonno Bulot
                                        </td>
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
                                    <tr className="unread">
                                        <th scope="row">2</th>
                                        <td>
                                            <img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/> Paulette Bago 
                                            <br/>
                                            <img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/> Bodyguard St Lo</td>
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
                                    <tr className="unread">
                                        <th scope="row">3</th>
                                        <td>
                                            <img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/> Jean Yves Younes
                                            <br/> 
                                            <img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/> Eddy Badio
                                        </td>
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

export default StaffsList;
