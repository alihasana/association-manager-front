import React from 'react';
import {Row, Col, Card, Button, Table} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import Group from './Group'
import Aux from "../../hoc/_Aux";
import Paginate from "../General/Paginate";

class GroupList extends React.Component {

    state = {
        groups: [
            {id: 1, groupName: "group1"},
            {id: 2, groupName: "group2"},
            {id: 3, groupName: "group3"},
            {id: 4, groupName: "group4"},
            {id: 5, groupName: "group5"},
        ],
        redirectCreate: false,
        redirectEdit: false,
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
            return <Redirect to='/admin/creation/groupe'/>
        }
    };

    renderRedirectEdit = () => {
        if (this.state.redirectEdit) {
            return <Redirect to='/admin/éditer/groupe'/>
        }
    };


    handleDelete = id => {
        const groups = [...this.state.groups];
        const index = groups.findIndex(group => group.id === id);

        groups.splice(index, 1);

        this.setState({groups});
    };

    render() {
        return (
            <Aux>
                <Row>
                    <Col md={9} xl={12}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as="h5">Groupe&nbsp;&nbsp;
                                    {this.renderRedirectCreate()}
                                    <Button variant="success" onClick={this.setRedirectCreate}>
                                        + Créer un nouveau groupe
                                    </Button>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Groupe Nom</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderRedirectEdit()}
                                    {this.state.groups.map(group => (
                                        <Group
                                            details={group}
                                            key={group.id}
                                            onDelete={this.handleDelete}
                                            onEdit = {this.setRedirectEdit}
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
            </Aux>
        );
    }
}

export default GroupList;
