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
        redirectEdit: false,
        isSuperAdmin: window.location.href.indexOf("sadmin") !== -1
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
        
        // Start Vérification du rôle de l'utilisateur pour afficher ou masquer des éléments dans la page
        const isSadmin = window.location.href.indexOf("sadmin") !== -1
        let col;
        let btnCreate;

        if(isSadmin){
            col = <th>Actions</th>;
            btnCreate = 
                <Button variant="success" onClick={this.setRedirectCreate}>
                    + Créer une nouvelle association
                </Button>
        }
        // End Vérification du rôle de l'utilisateur pour afficher ou masquer des éléments dans la page
        
        return (
            <Aux>
                <Row>
                    <Col md={9} xl={12}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as="h5">Liste des associations &nbsp;&nbsp;
                                    {this.renderRedirectCreate('/sadmin/associations/creer')}
                                    {btnCreate}
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
                                        {col}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderRedirectEdit('/sadmin/associations/modifier')}
                                        {this.state.associations.map(association => (
                                            <Association
                                                details={association}
                                                onEdit = {this.setRedirectEdit}
                                                onDelete = {this.handleDelete}
                                                isSuperAdmin={this.state.isSuperAdmin}
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

export default AssocationsList;