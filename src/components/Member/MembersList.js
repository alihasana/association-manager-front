import React from 'react';
import {Row, Col, Card, Table, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Member from '../Member/Member';

import Aux from "../../hoc/_Aux";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

class MembersList extends React.Component {

    state = {
        members: [
          { id: 1, avatar: avatar1, firstName: "Jean", lastName: "Yves", entryDate: "25/12/2019 12:32:00" },
          { id: 2, avatar: avatar2, firstName: "Jeannine", lastName: "Potencier", entryDate: "25/12/2019 12:32:00" },
          { id: 3, avatar: avatar3, firstName: "Paul", lastName: "Vaillant", entryDate: "25/12/2019 12:32:00" },
          { id: 4, avatar: avatar1, firstName: "Edouard", lastName: "Pepin", entryDate: "25/12/2019 12:32:00" },
          { id: 5, avatar: avatar2, firstName: "Ronaldo", lastName: "Perez", entryDate: "25/12/2019 12:32:00" },
        ],
        redirect: false
      };

      setRedirect = () => {
        this.setState({
          redirect: true
        })
      };

      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/admin/creation/utilisateur' />
        }
      };

      handleDelete = id => {
        const members = [...this.state.members];
        const index = members.findIndex(member => member.id === id);
        members.splice(index, 1);
        this.setState({ members });
      };


    render() {
        return (
            <Aux>
                <Row>
                    <Col md={9} xl={12}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as="h5">Liste des membres</Card.Title>
                                {this.renderRedirect()}
                                <Button variant="success" onClick={this.setRedirect}>
                                    + Créer un nouveau membre
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
                                        {this.state.members.map(member => (
                                            <Member
                                                key={member.id}
                                                details={member}
                                                onDelete={this.handleDelete}
                                            />
                                        ))}
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

export default MembersList;
