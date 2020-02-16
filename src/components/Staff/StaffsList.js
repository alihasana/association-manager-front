import StaffsChart from "./StaffsChart"
import React from 'react';
import {Row, Col, Card, Table, Button} from 'react-bootstrap';
import Member from '../Member/Member';
import Paginate from './../General/Paginate'
import Aux from "../../hoc/_Aux";
import { Redirect } from 'react-router-dom';
import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';



class StaffsList extends React.Component {

    state = {
        members: [
            {id: 1, avatar: avatar1, firstName: "Jean", lastName: "Yves", entryDate: "01/12/2017 12:32:00"},
            {id: 2, avatar: avatar2, firstName: "Jeannine", lastName: "Potencier", entryDate: "05/12/2018 12:32:00"},
            {id: 3, avatar: avatar3, firstName: "Paul", lastName: "Vaillant", entryDate: "25/12/2019 12:32:00"},
            {id: 4, avatar: avatar1, firstName: "Edouard", lastName: "Pepin", entryDate: "25/01/2018 12:32:00"},
            {id: 5, avatar: avatar2, firstName: "Ronaldo", lastName: "Perez", entryDate: "25/12/2016 12:32:00"},
            {id: 6, avatar: avatar2, firstName: "Douglas", lastName: "Crockford", entryDate: "25/02/2015 12:32:00"},
            {id: 7, avatar: avatar2, firstName: "Sheryl", lastName: "Sandberg", entryDate: "25/03/2014 12:32:00"},
            {id: 8, avatar: avatar2, firstName: "Ronaldo", lastName: "Vaillant", entryDate: "02/12/2013 12:32:00"},
            {id: 9, avatar: avatar2, firstName: "Brendan", lastName: "Eich", entryDate: "05/05/2012 12:32:00"},
        ],
        redirectCreate: false,
        redirectEdit: false
    };

    setRedirectCreate = () => {
        this.setState({
            redirectCreate: true
        })
    };
    setRedirectEdit = () => {
        this.setState({
            redirectEdit: true
        })
    };

    renderRedirectCreate = () => {
        if (this.state.redirectCreate) {
            return <Redirect to='/admin/staff/creer'/>
        }
    };

    renderRedirectEdit = () => {
        if (this.state.redirectEdit) {
            return <Redirect to='/admin/staff/modifier'/>
        }
    };

    handleDelete = id => {
        const members = [...this.state.members];
        const index = members.findIndex(member => member.id === id);

        members.splice(index, 1);

        this.setState({members});
    };

    render() {
        return (
            <Aux>
                {/*Include organisational chart for staff*/}
                <StaffsChart/>
                <Card>
                    <Row>
                        <Col md={9} xl={12}>
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as="h5">Liste des staffs</Card.Title>
                                    {this.renderRedirectCreate()}
                                    <Button variant="success" onClick={this.setRedirectCreate}>
                                        + Créer un nouveau staff
                                    </Button>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    <Table responsive hover>
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Avatar</th>
                                            <th>Nom</th>
                                            <th>Prénom</th>
                                            <th>Date d'entrée</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.renderRedirectEdit('/admin/éditer/staff')}
                                        {this.state.members.map(member => (
                                            <Member
                                                key={member.id}
                                                details={member}
                                                onDelete={this.handleDelete}
                                                onEdit={this.setRedirectEdit}
                                            />
                                        ))}
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="offset-5">
                        <Paginate/>
                    </Row>
                </Card>
            </Aux>
        );
    }
}

export default StaffsList;
