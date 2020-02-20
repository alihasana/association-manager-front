import React from 'react';
import {Row, Col, Card, Button, Table} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import Group from './Group'
import Aux from "../../hoc/_Aux";
import Paginate from "../General/Paginate";

class GroupList extends React.Component {

    state = {
        groups: [
            {id: 1, groupName: "group1"},
            {id: 2, groupName: "group2"},
            {id: 3, groupName: "group3"},
            {id: 4, groupName: "group4"},
            {id: 5, groupName: "group5"},
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
        const groups = [...this.state.groups];
        const index = groups.findIndex(group => group.id === id);

        groups.splice(index, 1);

        this.setState({groups});
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
        let createAdminLink = this.renderRedirectCreate('/admin/groupe/creer')
        let createSuperAdminLink = this.renderRedirectCreate('/sadmin/groupe/creer')
        let authorizedCreate;
        //Edit
        let editAdminLink = this.renderRedirectEdit('/admin/groupe/modifier')
        let editSuperAdminLink = this.renderRedirectEdit('/sadmin/groupe/modifier')
        let authorizedEdit;

        // Add Project
        function addGroup(){
            
            if(isAdmin){
                authorizedCreate = createAdminLink
            } else {
                authorizedCreate = createSuperAdminLink
            }
            return authorizedCreate
        }

        // Edit Project
        function editGroup(){
            
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
                    <Col md={9} xl={12}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as="h5">Groupe&nbsp;&nbsp;
                                    {addGroup()}
                                    <Button variant="success" onClick={this.setRedirectCreate}>
                                        + Créer un nouveau groupe
                                    </Button>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Groupe Nom</th>
                                        {col}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {editGroup()}
                                    {this.state.groups.map(group => (
                                        <Group
                                            details={group}
                                            key={group.id}
                                            onDelete={this.handleDelete}
                                            onEdit = {this.setRedirectEdit}
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

export default GroupList;
