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
        isAdminOrSuperAdmin: window.location.href.indexOf("admin") !== -1
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

    handleDelete = id => {
        const speakers = [...this.state.speakers];
        const index = speakers.findIndex(speaker => speaker.id === id);
        speakers.splice(index, 1);
        this.setState({ speakers });
    };

    render() {

        // Start Vérification du rôle de l'utilisateur pour afficher ou masquer des éléments dans la page
        const isAdmin = window.location.href.indexOf("/admin") !== -1
        const isSAdmin = window.location.href.indexOf("sadmin") !== -1

        let col;

        if(isAdmin || isSAdmin){
            col = <th>Actions</th>
        }

        //Create
        let createAdminLink = this.renderRedirectCreate('/admin/intervenants/creer')
        let createSuperAdminLink = this.renderRedirectCreate('/sadmin/intervenants/creer')
        let authorizedCreate;
        //Edit
        let editAdminLink = this.renderRedirectEdit('/admin/intervenants/modifier')
        let editSuperAdminLink = this.renderRedirectEdit('/sadmin/intervenants/modifier')
        let authorizedEdit;

        // Add Speaker
        function addSpeaker(){
            
            if(isAdmin){
                authorizedCreate = createAdminLink
            } else {
                authorizedCreate = createSuperAdminLink
            }
            return authorizedCreate
        }

        // Edit Speaker
        function editSpeaker(){
            
            if(isAdmin){
                authorizedEdit = editAdminLink
            } else {
                authorizedEdit = editSuperAdminLink
            }
            return authorizedEdit
        }
       
        // End Vérification du rôle de l'utilisateur pour afficher ou masquer des éléments dans la page


        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Liste des intervenants</Card.Title>
                                {/* {this.renderRedirectCreate('/admin/intervenants/creer')} */}
                                {addSpeaker()}
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
                                        {col}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {editSpeaker()}
                                    {this.state.speakers.map(speaker => (
                                        <Speaker
                                            key={speaker.id}
                                            details={speaker}
                                            onDelete={this.handleDelete}
                                            onEdit={this.setRedirectEdit}
                                            isAdminOrSuperAdmin={this.state.isAdminOrSuperAdmin}
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