import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Speaker from '../Speaker/Speaker';

import Aux from "../../hoc/_Aux";

class SpeakerList extends React.Component {

    state = {
        speakers: [
          { id: 1, firstName: "Dupuis", lastName: "De Vassart", entryDate: "25/12/2019 12:32:00" },
          { id: 2, firstName: "Roland", lastName: "Couteau", entryDate: "25/12/2019 12:32:00" },
          { id: 3, firstName: "Juliette", lastName: "Venard", entryDate: "25/12/2019 12:32:00" },
          { id: 4, firstName: "Louis", lastName: "Suarez", entryDate: "25/12/2019 12:32:00" },
          { id: 5, firstName: "Leonard", lastName: "Perez", entryDate: "25/12/2019 12:32:00" },
        ]
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
                                {/* <span className="d-block m-t-5">use props <code>hover</code> with <code>Table</code> component</span> */}
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
                                    {this.state.speakers.map(speaker => (
                                        <Speaker
                                            key={speaker.id}
                                            details={speaker}
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

export default SpeakerList;