import React from 'react';
import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import BestProject from "../Common/BestProjects"

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

let link = window.location.href;

class Dashboard extends React.Component {

    state = {
        bestProjects: [
          { id: 1, projectName: "Utiliser le dispositif local d’accompagnement pour repenser le projet de l’association", rating:"5", percentage: "100%"},
          { id: 2, projectName: "L'informatique pour tous", rating:"4", percentage: "80%"},
          { id: 3, projectName: "Répondre aux besoins des familles rurales", rating:"3", percentage: "60%"},
          { id: 4, projectName: "Soutenir l’agriculture en Ile-de-France", rating:"2", percentage: "40%"},
          { id: 5, projectName: "Créer des groupes pour les actives agricoles à l’échelle du Pays", rating:"1", percentage: "20%"},
        ]
      };


    render() {
        if(link.indexOf("sadmin") !== -1){
            console.log("La valeur existe!")
        } else{
                console.log("La valeur n'existe pas!")
        }
        

        // START SADMIN
        if(link.indexOf("sadmin") !== -1){
            return (
                <Aux>
                    <Row>
                        <Col md={6} xl={6}>
                            <Card>
                                <Card.Body>
                                    <h6 className='mb-4'>Nombre d'associations</h6>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-9">
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-globe text-c-green f-30 m-r-5"/> 390</h3>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={6}>
                            <Card>
                                <Card.Body>
                                    <h6 className='mb-4'>Nombre d'utilisateurs</h6>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-9">
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-users text-c-red f-30 m-r-5"/> 39000</h3>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* <Col xl={4}>
                            <Card>
                                <Card.Body>
                                    <h6 className='mb-4'>Nombre d'utilisateurs connecté</h6>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-9">
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-user-check text-c-green f-30 m-r-5"/> 13000</h3>
                                        </div>
                                    </div>
                                    <div className="progress m-t-30" style={{height: '7px'}}>
                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '25%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col> */}
                        <Col md={6} xl={8}>
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>Nombre d'associations par type</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    <Table responsive hover>
                                        <tbody>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Association de fait ou association non déclarée</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>36</h6>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Association loi de 1901</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>68</h6>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Association avec agrément</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>74</h6>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Association d'utilité publique</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted f-w-300"><i className="fa fa-circle text-c-green f-10 m-r-15"/>212</h6>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={4}>
                            <Card>
                            <Card.Body className='border-bottom'>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-auto">
                                            <i className="feather icon-users f-30 text-c-green"/>
                                        </div>
                                        <div className="col">
                                            <h3 className="f-w-300">13000</h3>
                                            <span className="d-block text-uppercase">Nombre d'utilisateur connecté</span>
                                        </div>
                                        <div className="progress m-t-30" style={{height: '7px'}}>
                                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '25%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className='border-bottom'>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-auto">
                                            <i className="feather icon-folder f-30 text-c-green"/>
                                        </div>
                                        <div className="col">
                                            <h3 className="f-w-300">235</h3>
                                            <span className="d-block text-uppercase">Nombre total de projets</span>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-auto">
                                            <i className="feather icon-map-pin f-30 text-c-blue"/>
                                        </div>
                                        <div className="col">
                                            <h3 className="f-w-300">26</h3>
                                            <span className="d-block text-uppercase">Départements représentés</span>
                                        </div>
                                    </div>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        <Col md={6} xl={12}>{/*Col md={6} xl={4}>*/}
                            <Card>
                                <Card.Header>
                                    <Card.Title as='h5'>Rating</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                <div className="row align-items-center justify-content-center m-b-20">
                                        <div className="col-6">
                                            <h2 className="f-w-300 d-flex align-items-center float-left m-0">4.7 <i className="fa fa-star f-10 m-l-10 text-c-yellow"/></h2>
                                        </div>
                                        <div className="col-6">
                                            {/* <h6 className="d-flex  align-items-center float-right m-0">0.4 <i className="fa fa-caret-up text-c-green f-22 m-l-10"/></h6> */}
                                        </div>
                                    </div>

                                    <div className="row">
                                    {this.state.bestProjects.map(bestProject => (
                                            <BestProject
                                                key={bestProject.id}
                                                details={bestProject}
                                            />
                                        ))}
                                </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Aux>
            );
        }
        // END SADMIN




        // START ADMIN
        else if(link.indexOf("admin") !== -1){

            const tabContent = (
            <Aux>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="media-body">
                        <h6 className="m-0 d-inline">600 €</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>16999 €</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="media-body">
                        <h6 className="m-0 d-inline">3000 €</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>13215 €</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="media-body">
                        <h6 className="m-0 d-inline">5 €</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>9671 €</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="media-body">
                        <h6 className="m-0 d-inline">839 €</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>6932 €</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="media-body">
                        <h6 className="m-0 d-inline">160 €</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>5900 €</span>
                    </div>
                </div>
            </Aux>);


            return (
                <Aux>
                    <Row>
                        <Col md={6} xl={4}>
                            <Card>
                                <Card.Body>
                                    <h6 className='mb-4'>Nombre de membre</h6>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-9">
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-users text-c-green f-30 m-r-5"/> 1500</h3>
                                        </div>
                                    </div>
                                    <div className="progress m-t-30" style={{height: '7px'}}>
                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={4}>
                            <Card>
                                <Card.Body>
                                    <h6 className='mb-4'>Somme totale des dons à l'instant T</h6>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-9">
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-book text-c-red f-30 m-r-5"/> 15000 €</h3>
                                        </div>
                                    </div>
                                    <div className="progress m-t-30" style={{height: '7px'}}>
                                        <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '100%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card>
                                <Card.Body>
                                    <h6 className='mb-4'>Nombre d'article vendu</h6>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-9">
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-shopping-cart text-c-green f-30 m-r-5"/> 150</h3>
                                        </div>
                                    </div>
                                    <div className="progress m-t-30" style={{height: '7px'}}>
                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '25%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={8}>
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>Les 5 projets récents</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    <Table responsive hover>
                                        <tbody>
                                        <tr className="unread">
                                            <td>
                                                <h6 className="mb-1">Soutenir l’agriculture en Ile-de-France</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>1</h6>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <h6 className="mb-1">Répondre aux besoins des familles rurales</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>2</h6>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <h6 className="mb-1">Créer des groupes pour les actives agricoles à l’échelle du Pays</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>3</h6>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <h6 className="mb-1">Utiliser le dispositif local d’accompagnement pour repenser le projet de l’association</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted f-w-300"><i className="fa fa-circle text-c-green f-10 m-r-15"/>4</h6>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <h6 className="mb-1">L'informatique pour tous</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted f-w-300"><i className="fa fa-circle text-c-green f-10 m-r-15"/>5</h6>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={4}>
                            <Card className='card-event'>
                                <Card.Body>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col">
                                            <h5 className="m-0">Les évènements</h5>
                                        </div>
                                        <div className="col-auto">
                                            <label className="label theme-bg2 text-white f-14 f-w-400 float-right">18</label>
                                        </div>
                                    </div>
                                    <h2 className="mt-2 f-w-300">45<sub className="text-muted f-14">Competitors</sub></h2>
                                    <h6 className="text-muted mt-3 mb-0">You can participate in event </h6>
                                    <i className="fa fa-calendar text-c-purple f-50"/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={8}>
                            <Card>
                                <Card.Header>
                                    <Card.Title as='h5'>Les projets les plus lucratifs</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="row align-items-center justify-content-center m-b-20">
                                            <div className="col-6">
                                                <h2 className="f-w-300 d-flex align-items-center float-left m-0">4.7 <i className="fa fa-star f-10 m-l-10 text-c-yellow"/></h2>
                                            </div>
                                            <div className="col-6">
                                                {/* <h6 className="d-flex  align-items-center float-right m-0">0.4 <i className="fa fa-caret-up text-c-green f-22 m-l-10"/></h6> */}
                                            </div>
                                        </div>

                                        <div className="row">
                                        {this.state.bestProjects.map(bestProject => (
                                                <BestProject
                                                    key={bestProject.id}
                                                    details={bestProject}
                                                />
                                            ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={4} className='m-b-30'>
                            <Tabs defaultActiveKey="today" id="uncontrolled-tab-example">
                                <Tab eventKey="today" title="Today">
                                    {tabContent}
                                </Tab>
                                <Tab eventKey="week" title="This Week">
                                    {tabContent}
                                </Tab>
                                <Tab eventKey="all" title="All">
                                    {tabContent}
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Aux>
            );
        }
        // END ADMIN




        // START MEMBER
        else if(link.indexOf("membre") !== -1){
            return (
                <Aux>
                    <Row>
                        <Col md={6} xl={4}>
                            <Card>
                                <Card.Body>
                                    <h6 className='mb-4'>Nombre d'associations dans lequel le memebre est inscrit</h6>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-9">
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-globe text-c-green f-30 m-r-5"/> 25</h3>
                                        </div>
                                    </div>
                                    {/* <div className="progress m-t-30" style={{height: '7px'}}>
                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                    </div> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Somme et nombre de dons effectués</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-afile-text text-c-green f-30 m-r-5"/> 4500 €</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">100%</p>
                                    </div>
                                </div>
                                {/* <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                </div> */}
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col xl={4}>
                            <Card>
                                <Card.Body>
                                    <h6 className='mb-4'>Nombre de projet dans lequel le membre est engagé</h6>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-9">
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-folder text-c-green f-30 m-r-5"/> 8</h3>
                                        </div>
                                    </div>
                                    {/* <div className="progress m-t-30" style={{height: '7px'}}>
                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                                    </div> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={8}>
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>Les commandes les plus récentes</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    <Table responsive hover>
                                        <tbody>
                                        <tr className="unread">
                                            <td><h6 className="mb-1">Tee-shirt la croix rouge</h6></td>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>36 €</h6>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td><h6 className="mb-1">Lorem ipsum</h6></td>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>68 €</h6>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td><h6 className="mb-1">Lorem ipsum</h6></td>
                                            <td>
                                              
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>74 €</h6>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td><h6 className="mb-1">Lorem ipsum</h6></td>
                                            <td>
                                               
                                            </td>
                                            <td>
                                                <h6 className="text-muted f-w-300"><i className="fa fa-circle text-c-green f-10 m-r-15"/>212 €</h6>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td><h6 className="mb-1">Lorem ipsum</h6></td>
                                            <td>
                                               
                                            </td>
                                            <td>
                                                <h6 className="text-muted f-w-300"><i className="fa fa-circle text-c-green f-10 m-r-15"/>800 €</h6>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={4}>
                            <Card className='card-event'>
                                    <Card.Body>
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col">
                                                <h5 className="m-0">Vous êtes inscrit dans</h5>
                                            </div>
                                            <div className="col-auto">
                                                {/* <label className="label theme-bg2 text-white f-14 f-w-400 float-right">2</label> */}
                                            </div>
                                        </div>
                                        <h2 className="mt-2 f-w-300">2</h2>
                                        <h6 className="text-muted mt-3 mb-0">Evènements à venir</h6>
                                        <i className="fa fa-calendar text-c-purple f-50"/>
                                    </Card.Body>
                                </Card>
                            <Card>
                                <Card.Body className='border-bottom'>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-auto">
                                            <i className="feather icon-file-text f-30 text-c-yellow"/>
                                        </div>
                                        <div className="col">
                                            <h3 className="f-w-300">4560 €</h3>
                                            <span className="d-block text-uppercase">Somme de déduction fiscale des 12 derniers mois</span>
                                            <br/>
                                            <a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12">
                                            Cliquez ici pour la télécharger
                                            </a>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md={6} xl={12}>
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>Liste des nouveaux arrivants</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    <Table responsive hover>
                                        <tbody>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Isabella Christensen</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>11 MAY 12:56</h6>
                                            </td>
                                            <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Contacter</a></td>
                                        </tr>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Mathilde Andersen</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 MAY 10:35</h6>
                                            </td>
                                            <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Contacter</a></td>
                                        </tr>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Karla Sorensen</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>9 MAY 17:38</h6>
                                            </td>
                                            <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Contacter</a></td>
                                        </tr>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Ida Jorgensen</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted f-w-300"><i className="fa fa-circle text-c-red f-10 m-r-15"/>19 MAY 12:56</h6>
                                            </td>
                                            {/* <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12">Reject</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Approve</a></td> */}
                                            <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Contacter</a></td>
                                        </tr>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Albert Andersen</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>21 July 12:56</h6>
                                            </td>
                                            {/* <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12">Reject</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Approve</a></td> */}
                                            <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Contacter</a></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Aux>
            );
        }
        // END MEMBER
    }
}

export default Dashboard;