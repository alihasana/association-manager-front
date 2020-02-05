import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Project from "../Project/Project"

import Aux from "../../hoc/_Aux";

class ProjectsList extends React.Component {

    state = {
        projects: [
          { id: 1, name: "Soutenir l’agriculture en Ile-de-France", owner:"Resto du coeur", status: "En cours", startDate: "25/12/2018 12:32:00", deadLine: "25/12/2019 12:32:00" },
          { id: 2, name: "Répondre aux besoins des familles rurales", owner:"Unicef", status: "Terminé en attente de livraison", startDate: "25/12/2018 12:32:00", deadLine: "25/12/2019 12:32:00" },
          { id: 3, name: "Créer des groupes pour les actives agricoles...", owner:"Emmaûs France", status: "Terminé en production", startDate: "25/12/2018 12:32:00", deadLine: "25/12/2019 12:32:00" },
          { id: 4, name: "Utiliser le dispositif local d’accompagnement...", owner:"Secours populaire", status: "En erreur", startDate: "25/12/2018 12:32:00", deadLine: "25/12/2019 12:32:00" },
          { id: 5, name: "L'informatique pour tous", owner:"Resto du coeur", status: "Annulé", startDate: "25/12/2018 12:32:00", deadLine: "25/12/2019 12:32:00" },
        ]
      };

      handleDelete = id => {
        const projects = [...this.state.projects];
        const index = projects.findIndex(project => project.id === id);
    
        projects.splice(index, 1);
    
        this.setState({ projects });
      };

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Liste des projets</Card.Title>
                                {/* <span className="d-block m-t-5">use props <code>hover</code> with <code>Table</code> component</span> */}
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nom</th>
                                        <th>Statut</th>
                                        <th>Date démarrage</th>
                                        <th>Date de fin</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.projects.map(project => (
                                        <Project
                                            key={project.id}
                                            details={project}
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

export default ProjectsList;