import React from 'react';
import {Row, Col, Card, Table, Button} from 'react-bootstrap';
import Paginate from "../General/Paginate";
import Announce from './Announce';
import Aux from "../../hoc/_Aux";
import { Redirect } from 'react-router-dom';

class AnnounceList extends React.Component {

    state = {
        announce: [
          { id: 1, name: "lamp", duration: "30", assocationType: "sportivf", region: "Ile de france", ville: "Paris 77", age: "25", linkMobile: "25" , linkComputer: "25" },
          { id: 2, name: "lamp", duration: "15", assocationType: "sportivf", region: "Ile de france", ville: "Paris 77", age: "25", linkMobile: "25" , linkComputer: "25" },
          { id: 3, name: "lamp", duration: "30", assocationType: "sportivf", region: "Ile de france", ville: "Paris 77", age: "25", linkMobile: "25" , linkComputer: "25" },
          { id: 4, name: "lamp", duration: "15", assocationType: "sportivf", region: "Ile de france", ville: "Paris 77", age: "25", linkMobile: "25" , linkComputer: "25" },
          { id: 5, name: "lamp", duration: "30", assocationType: "sportivf", region: "Ile de france", ville: "Paris 77", age: "25", linkMobile: "25" , linkComputer: "25" },
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
        const announce = [...this.state.announce];
        const index = announce.findIndex(speaker => speaker.id === id);
        announce.splice(index, 1);
        this.setState({ announce });
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
        let createAdminLink = this.renderRedirectCreate('/admin/annonces/creer')
        let createSuperAdminLink = this.renderRedirectCreate('/sadmin/annonces/creer')
        let authorizedCreate;
        //Edit/sadmin/announces/creer
        let editAdminLink = this.renderRedirectEdit('/admin/annonces/modifier')
        let editSuperAdminLink = this.renderRedirectEdit('/sadmin/annonces/modifier')
        let authorizedEdit;

        // Add Speaker
        function addAnnouce(){

            if(isAdmin){
                authorizedCreate = createAdminLink
            } else {
                authorizedCreate = createSuperAdminLink
            }
            return authorizedCreate
        }

        // Edit Speaker
        function editAnnounce(){

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
                                <Card.Title as="h5">Liste des annonces</Card.Title>
                                {/* {this.renderRedirectCreate('/admin/announce/creer')} */}
                                {addAnnouce()}
                                <Button variant="success" onClick={this.setRedirectCreate}>
                                    + Créer une nouvelle annonce
                                </Button>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Titre de l'annonce</th>
                                        <th>Durée d'affichage</th>
                                        <th>Type d'association</th>
                                        <th>Région</th>
                                        <th>Ville</th>
                                        <th>Catérgorie d'age</th>
                                        <th>Lien de l'annonce pour le mobile</th>
                                        <th>Lien de l'annonce pour le site</th>
                                        {col}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {editAnnounce()}
                                    {this.state.announce.map(speaker => (
                                        <Announce
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

export default AnnounceList;
