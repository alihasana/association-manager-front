import React from 'react';
import {Row, Col, Card, Table, Button} from 'react-bootstrap';
import Paginate from "../General/Paginate";
import Announce from './Announce';
import Aux from "../../hoc/_Aux";
import { Redirect } from 'react-router-dom';

class AnnounceList extends React.Component {

    state = {
        announce: [
          { id: 1, name: "lamp", duration: "30", assocationType: "sportivf", region: "Ile de france", ville: "Paris 77", age: "25", linkMobile: "https://media.ekosport.fr/INTERSHOP/static/WFS/EKO-FR-Site/-/EKO/fr_FR/Medias/images_espace_marque_1402x250px/ambiance_picture19.jpg" , linkComputer: "https://media.ekosport.fr/INTERSHOP/static/WFS/EKO-FR-Site/-/EKO/fr_FR/Medias/images_espace_marque_1402x250px/ambiance_picture19.jpg" },
          { id: 2, name: "lamp", duration: "15", assocationType: "sportivf", region: "Ile de france", ville: "Paris 77", age: "25", linkMobile: "https://media.ekosport.fr/INTERSHOP/static/WFS/EKO-FR-Site/-/EKO/fr_FR/Medias/images_espace_marque_1402x250px/ambiance_picture19.jpg" , linkComputer: "https://media.ekosport.fr/INTERSHOP/static/WFS/EKO-FR-Site/-/EKO/fr_FR/Medias/images_espace_marque_1402x250px/ambiance_picture19.jpg" },
          { id: 3, name: "lamp", duration: "30", assocationType: "sportivf", region: "Ile de france", ville: "Paris 77", age: "25", linkMobile: "https://media.ekosport.fr/INTERSHOP/static/WFS/EKO-FR-Site/-/EKO/fr_FR/Medias/images_espace_marque_1402x250px/ambiance_picture19.jpg" , linkComputer: "https://media.ekosport.fr/INTERSHOP/static/WFS/EKO-FR-Site/-/EKO/fr_FR/Medias/images_espace_marque_1402x250px/ambiance_picture19.jpg" },
          { id: 4, name: "lamp", duration: "15", assocationType: "sportivf", region: "Ile de france", ville: "Paris 77", age: "25", linkMobile: "https://media.ekosport.fr/INTERSHOP/static/WFS/EKO-FR-Site/-/EKO/fr_FR/Medias/images_espace_marque_1402x250px/ambiance_picture19.jpg" , linkComputer: "https://media.ekosport.fr/INTERSHOP/static/WFS/EKO-FR-Site/-/EKO/fr_FR/Medias/images_espace_marque_1402x250px/ambiance_picture19.jpg" },
          { id: 5, name: "lamp", duration: "30", assocationType: "sportivf", region: "Ile de france", ville: "Paris 77", age: "25", linkMobile: "https://media.ekosport.fr/INTERSHOP/static/WFS/EKO-FR-Site/-/EKO/fr_FR/Medias/images_espace_marque_1402x250px/ambiance_picture19.jpg" , linkComputer: "https://media.ekosport.fr/INTERSHOP/static/WFS/EKO-FR-Site/-/EKO/fr_FR/Medias/images_espace_marque_1402x250px/ambiance_picture19.jpg" },
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
        let createAdminLink = this.renderRedirectCreate('/admin/announces/creer')
        let createSuperAdminLink = this.renderRedirectCreate('/sadmin/announces/creer')
        let authorizedCreate;
        //Edit/sadmin/announces/creer
        let editAdminLink = this.renderRedirectEdit('/admin/announces/modifier')
        let editSuperAdminLink = this.renderRedirectEdit('/sadmin/announces/modifier')
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
                                <Card.Title as="h5">Liste des announce</Card.Title>
                                {/* {this.renderRedirectCreate('/admin/announce/creer')} */}
                                {addAnnouce()}
                                <Button variant="success" onClick={this.setRedirectCreate}>
                                    + Créer un nouveau announce
                                </Button>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nom</th>
                                        <th>Duration</th>
                                        <th>Type d'assocation</th>
                                        <th>Region</th>
                                        <th>Ville</th>
                                        <th>Catérgorie age</th>
                                        <th>Lien announce portable</th>
                                        <th>Lien announce ordinateur</th>
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
