import React from 'react';
import {Row, Col, Card, Table, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import Association from '../Association/Association';
//import AssociationForm from '../Association/AssociationForm';

import Aux from "../../hoc/_Aux";

import Paginate from "../General/Paginate";

class AssocationsList extends React.Component {

    state = {
        associations: [
          { id: 1, name: "Resto du coeur", type: "Association loi de 1901", entryDate: "25/12/2019 12:32:00" },
          { id: 2, name: "Secours populaire", type: "Association à but non lucratif", entryDate: "25/01/2019 12:32:00" },
          { id: 3, name: "Unicef", type: "Organisme public international", entryDate: "25/11/2019 12:32:00" },
          { id: 4, name: "Emmaûs France", type: "Association loi 1901", entryDate: "25/10/2019 12:32:00" },
          { id: 5, name: "Croix rouge", type: "Association...", entryDate: "25/01/2020 12:32:00" },
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

      renderRedirectCreate = (url) => {
        if (this.state.redirectCreate) {

            return <Redirect to={url}/>
        }
    };

      renderRedirectEdit = (url) => {
        if (this.state.redirectEdit) {
            return <Redirect to={url}/>
        }
    };

      // Add and Delete

      handleDelete = id => {
        const associations = [...this.state.associations];
        const index = associations.findIndex(association => association.id === id);
    
        associations.splice(index, 1);
    
        this.setState({ associations });
      };      
      
    render() {
        return (
            <Aux>
                <Row>
                    <Col md={9} xl={12}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as="h5">Liste des associations &nbsp;&nbsp;
                                    {this.renderRedirectCreate('/sadmin/associations/creer')}
                                    <Button variant="success" onClick={this.setRedirectCreate}>
                                        + Créer une nouvelle association
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
                                    {this.renderRedirectEdit('/sadmin/associations/modifier')}
                                        {this.state.associations.map(association => (
                                            <Association
                                                details={association}
                                                key={association.id}                                                
                                                onDelete={this.handleDelete}
                                                onEdit = {this.setRedirectEdit}
                                            />
                                        ))}
                                        {/* <AssociationForm onAssociationAdd={this.handleAdd} /> */}
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

export default AssocationsList;