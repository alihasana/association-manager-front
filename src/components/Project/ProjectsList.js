import React from 'react';
import {Row, Col, Card, Table, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Project from "../Project/Project"
import Aux from "../../hoc/_Aux";

import Paginate from "../General/Paginate";

class ProjectsList extends React.Component {

    state = {
        projects: [
          { id: 1, name: "Soutenir l’agriculture en Ile-de-France", owner:"Resto du coeur", status: "En cours", startDate: "25/12/2018 12:32:00", deadLine: "25/12/2019 12:32:00" },
          { id: 2, name: "Répondre aux besoins des familles rurales", owner:"Unicef", status: "Terminé en attente de livraison", startDate: "25/12/2018 12:32:00", deadLine: "25/12/2019 12:32:00" },
          { id: 3, name: "Créer des groupes pour les actives agricoles...", owner:"Emmaûs France", status: "Terminé en production", startDate: "25/12/2018 12:32:00", deadLine: "25/12/2019 12:32:00" },
          { id: 4, name: "Utiliser le dispositif local d’accompagnement...", owner:"Secours populaire", status: "En erreur", startDate: "25/12/2018 12:32:00", deadLine: "25/12/2019 12:32:00" },
          { id: 5, name: "L'informatique pour tous", owner:"Resto du coeur", status: "Annulé", startDate: "25/12/2018 12:32:00", deadLine: "25/12/2019 12:32:00" },
        ],
        redirect: false
      };

      setRedirect = () => {
        this.setState({
          redirect: true
        })
      };

      renderRedirect = (url) => {
        if (this.state.redirect) {
            return <Redirect to={url}/>
        }
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
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as="h5">Liste des projets&nbsp;&nbsp;
                                    {this.renderRedirect('/admin/projets/creer')}
                                    <Button variant="success" onClick={this.setRedirect}>
                                        + Créer un nouveau projet
                                    </Button>
                                </Card.Title>
                            </Card.Header>

                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nom</th>
                                        <th>Association</th>
                                        <th>Statut</th>
                                        <th>Date démarrage</th>
                                        <th>Date de fin</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderRedirect('/admin/projets/modifier')}
                                    {this.state.projects.map(project => (
                                        <Project
                                            details={project}
                                            key={project.id}
                                            onDelete={this.handleDelete}
                                            onEdit = {this.setRedirect}
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

export default ProjectsList;