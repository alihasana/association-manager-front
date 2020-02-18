import React from 'react';
import {Row, Col, Card, Table, Button} from 'react-bootstrap';
import Paginate from "../General/Paginate";
import Speaker from '../Speaker/Speaker';
import Aux from "../../hoc/_Aux";
import { Redirect } from 'react-router-dom';

class SpeakerList extends React.Component {

    state = {
        speakers: [
          { id: 1, firstName: "Dupuis", lastName: "De Vassart", email: "test@test.org" },
          { id: 2, firstName: "Roland", lastName: "Couteau", email: "test@test.org" },
          { id: 3, firstName: "Juliette", lastName: "Venard", email: "test@test.org" },
          { id: 4, firstName: "Louis", lastName: "Suarez", email: "test@test.org" },
          { id: 5, firstName: "Leonard", lastName: "Perez", email: "test@test.org" },
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
            return <Redirect to='/admin/intervenant/creer'/>
        }
    };

    renderRedirectEdit = () => {
        if (this.state.redirectEdit) {
            return <Redirect to='/admin/intervenant/modifier'/>
        }
    };

    handleDelete = id => {
        const speakers = [...this.state.speakers];
        const index = speakers.findIndex(speaker => speaker.id === id);
        speakers.splice(index, 1);
        this.setState({ speakers });
    };

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Liste des intervenants</Card.Title>
                                {this.renderRedirectCreate()}
                                    <Button variant="success" onClick={this.setRedirectCreate}>
                                        + Créer un nouveau intervenant
                                    </Button>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nom</th>
                                        <th>Prénom</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderRedirectEdit()}
                                    {this.state.speakers.map(speaker => (
                                        <Speaker
                                            key={speaker.id}
                                            details={speaker}
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
            </Aux>
        );
    }
}

export default SpeakerList;