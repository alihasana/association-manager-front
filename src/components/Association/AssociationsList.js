import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Association from '../Association/Association';
//import AssociationForm from '../Association/AssociationForm';

import Aux from "../../hoc/_Aux";

class AssocationsList extends React.Component {

    state = {
        associations: [
          { id: 1, name: "Resto du coeur", type: "Association loi de 1901", entryDate: "25/12/2019 12:32:00" },
          { id: 2, name: "Secours populaire", type: "Association à but non lucratif", entryDate: "25/01/2019 12:32:00" },
          { id: 3, name: "Unicef", type: "Organisme public international", entryDate: "25/11/2019 12:32:00" },
          { id: 4, name: "Emmaûs France", type: "Association loi 1901", entryDate: "25/10/2019 12:32:00" },
          { id: 5, name: "Croix rouge", type: "Association...", entryDate: "25/01/2020 12:32:00" },
        ]
      };


      // Add and Delete

      handleDelete = id => {
        const associations = [...this.state.associations];
        const index = associations.findIndex(association => association.id === id);
    
        associations.splice(index, 1);
    
        this.setState({ associations });
      };
    
    //   handleAdd = association => {
    //     const associations = [...this.state.associations];
    //     associations.push(association);
    
    //     this.setState({ associations });
    //   };

      
      
    render() {

        const title = "Liste des clients";

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">{title}</Card.Title>
                                {/* <span className="d-block m-t-5">use props <code>hover</code> with <code>Table</code> component</span> */}
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
                                        {this.state.associations.map(association => (
                                            <Association
                                                key={association.id}
                                                details={association}
                                                onDelete={this.handleDelete}
                                            />
                                        ))}
                                        {/* <AssociationForm onAssociationAdd={this.handleAdd} /> */}
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