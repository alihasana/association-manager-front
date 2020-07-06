import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Aux from "../../hoc/_Aux";
import Joi from "@hapi/joi";
import api from "../../services/api";
import {toast} from "react-toastify";

class StaffCreate extends React.Component {

    state = {
        redirect: false,
        memberId: '',
        entryDate: '',
        responsibility: '',
        errorResponsibility: '',
        isDisabled: true,
        member : [],
      };

    componentDidMount() {
        this.getMember();
    }
    getMember = async () => {
        await api
            .get("membres/lister")
            .then(res => {
                console.log(res);
                this.setState({
                    member: res.data['hydra:member']
                })
            });

        console.log(this.state.member);
    }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

      renderRedirect = (url) => {
        if (this.state.redirect) {
          return <Redirect to={url} />
        }
      };

    onSubmit = async () => {
        let staff = {}
        staff.memberId = this.state.memberId
        staff.responsibility = this.state.responsibility
        staff.dateOfEntry = this.state.entryDate
        await api
            .put(`membre/${staff.memberId}/modifier`, staff)
            .then(res => {
                console.log(res);
                this.setRedirect();
                toast.success('Le personnel est créé avec succès')
            });
    }

    handleChange = async (e) => {
        const target = e.target;
        const inputId = target.id;
        const inputValue = target.value;
        console.log('value :', inputValue);
        console.log('id :', inputId);

        if (inputId === 'member') {
            await this.setState({
                memberId : inputValue
            })
        }

        if (inputId === 'entryDate') {
           await this.setState({
                entryDate: inputValue
            })
        }
        if (inputId === 'responsibility') {
            let {error, value} = Joi.string().min(2).required().validate(inputValue);
            (error || value.replace(/<[^>]+>|\s/g, '') === '') ? await this.setState({
                responsibility: '',
                errorResponsibility: "La responsibilité est obligatoire. Le texte doit comporter plus de 10 caractères"
            }) : await this.setState({
                errorResponsibility: '',
                responsibility: (value.replace(/<[^>]+>/g, '')).trim()
            });
        }
        (
            this.state.member === [] || this.state.firstName === '' ||
            this.state.entryDate === ''
        ) ? await this.setState({
            isDisabled: true
        }) : await this.setState({
            isDisabled: false
        })
    }


    render() {
        console.log()
        // Start Vérification du rôle de l'utilisateur pour afficher ou masquer des éléments dans la page
        const isAdmin = window.location.href.indexOf("/admin") !== -1
        //Create
        let adminLink = this.renderRedirect('/admin/staffs')
        let superAdminLink = this.renderRedirect('/sadmin/staffs')
        let redirectUser;
        let state = this.state;
        let staff = (members) => (
            members.map(member => (
                <option key = {member.userId.id}
                        value={member.userId.id}
                >
                    {member.userId.lastName} {member.userId.firstName}
                </option>
            ))
        );
        let feedback = (errorMessage) => (
            <div style={{color: '#db2269', fontSize: '15px', display: 'relative'}}>
                {errorMessage}
                <br/>
                <br/>
            </div>
        );

        // Edit Project
        function redirectLink(){
            if(isAdmin){
                redirectUser = adminLink
            } else {
                redirectUser = superAdminLink
            }
            return redirectUser
        }

        // End Vérification du rôle de l'utilisateur pour afficher ou masquer des éléments dans la page

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Création d'un nouvel personnel dan staff</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Form.Group controlId="member">
                                                <Form.Label>Sélectionnez le membre</Form.Label>
                                                <Form.Control as="select"
                                                              onChange={this.handleChange}>
                                                    <option value="" key='productStatus'> Selectionnez le membre</option>
                                                    {(state.member === []) ? 'Selectionnez le membre': staff(state.member)}
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="entryDate">
                                                <Form.Label>Date d'entrée</Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    placeholder="La date d'entrée d'entrée"
                                                    onChange={this.handleChange}
                                                />
                                                {state.errorEntryDate ? feedback(state.errorEntryDate) : ''}
                                            </Form.Group>
                                            <Form.Group controlId="responsibility">
                                                <Form.Label>Responsibilité</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Le responsibilité"
                                                    onChange={this.handleChange}
                                                />
                                            </Form.Group>
                                            {redirectLink()}
                                            <Button variant="primary" onClick={this.onSubmit}>
                                            Submit
                                            </Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default StaffCreate;
