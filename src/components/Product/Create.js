import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import Aux from "../../hoc/_Aux";
import Dropzone from "./../General/Dropzone";
import {toast} from "react-toastify";
import {storage} from "../../services/Firebase";
import Joi from "@hapi/joi"


class Create extends React.Component {

    state = {
        redirect: false,
        productImages: [],
        mainImage: [],
        thumbnail: [],
        progress: {},
        urlsImages: [],
        urlThumbnail: '',
        urlMainImage: '',
        name: '',
        status: '',
        quantity: '',
        Price: '',
        category: '',
        errorName: '',
        errorStatus: '',
        errorQuantity: '',
        errorPrice: '',
        errorCategory: '',
        errorMainImage: '',
        errorMainImageThumbnail: '',
        errorOtherImages: '',
        isDisabled: true,
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
    handleChange = async (e) => {
        const target = e.target;
        const inputId = target.id;
        const inputValue = target.value;
        console.log('value :', inputValue);
        console.log('id :', inputId);

        if(inputId === 'productName'){
            let {error, value} = Joi.string().min(2).max(150).required().validate(inputValue)
            if(error){
                await this.setState({
                    name: '',
                    errorName: "Le nom du produit est obligatoire. Le texte doit contenir moins de 100 caractères et plus de 2 caractères"
                })
            } else {
                await this.setState({
                    errorName: '',
                    name: value.replace(/<[^>]+>/g, '')
                })
            }
        }
        console.log(this.state.name);
        if(this.state.errorName === ''){
            await this.setState({
                isDisabled: false
            })
        } else {
            await this.setState({
                isDisabled: true
            })
        }
    }

    uploadFile = (image, type) => {
        console.log(image)
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        let urls = []
        uploadTask.on(
            "state_changed",
            snapshot => {
                console.log(snapshot.bytesTransferred);
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                let progressState = this.state.progress
                let addProgress = {...progressState, ...{[image.name]:progress}}
                this.setState({progress: addProgress })
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url)
                        if(type === "images") {
                            urls = [...this.state.urlsImages, ...url]
                            this.setState({urlsImages: urls})
                        }
                        if(type === "mainImage") {
                            this.setState({urlMainImage: url})
                        }
                        if(type === "thumbnail") {
                            this.setState({urlThumbnail: url})
                        }
                    });
            }
        );
    };

    mainImage = (acceptedFiles) => {
        if ( this.state.mainImage.length === 1) {
            toast.error("Une seule image pouvant être ajoutée ici !");
        } else {
            this.uploadFile(acceptedFiles[0], 'mainImage');
            this.setState({
                mainImage: acceptedFiles
            })
        }

    };

    thumbnail = (acceptedFiles) => {
        if ( this.state.thumbnail.length === 1) {
            toast.error("Une seule image miniature pouvant être ajoutée ici !");
        } else {
            this.uploadFile(acceptedFiles[0], 'thumbnail');
            this.setState({
                thumbnail: acceptedFiles
            })
        }

    };

    images = (acceptedFiles) => {
        let images;
        if ( this.state.productImages.length !== 0) {
            let imageNotFound = false;
            for (const file of acceptedFiles) {
                for (const fileInFiles of this.state.productImages) {
                    if (fileInFiles.path !== file.path) {
                        imageNotFound = true;
                    } else {
                        imageNotFound = false;
                        toast.error("Le nom du fichier doit être unique !");
                    }
                    if (!imageNotFound) {
                        break;
                    }
                }
            }
            if (imageNotFound) {
                this.uploadFile(acceptedFiles[0], 'images');
                images = [...this.state.productImages, ...acceptedFiles]
            } else {
                images = this.state.productImages;
            }
        } else {
            this.uploadFile(acceptedFiles[0], 'images');
            images = [...this.state.productImages, ...acceptedFiles]
        }
        this.setState({
            productImages: images
        })
        return this.state.productImages
    };

    render() {
        let state = this.state;
        // Start Vérification du rôle de l'utilisateur pour afficher ou masquer des éléments dans la page
        const isAdmin = window.location.href.indexOf("/admin") !== -1
        //Create
        let adminLink = this.renderRedirect('/admin/projets')
        let superAdminLink = this.renderRedirect('/sadmin/projets')
        let redirectUser;
        let listOfFile = state.productImages.map(file => (
            <li key={file.path}>
                {file.path} - {file.size} bytes
            </li>
        ));
        let file = (file) => (
                <li key={file.path}>
                    {file.path} - {file.size} bytes
                </li>
            );
        let feedback = (errorMessage) => (
                <div style={{color:'#db2269', fontSize: '15px', display: 'relative'}}>
                    {errorMessage}
                </div>
            );

        // Edit Project
        let redirectLink = () => {
            if (isAdmin) {
                redirectUser = adminLink
                // editLink = this.renderRedirectEdit('/admin/projets/modifier')
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
                                <Card.Title as="h5">Création d'une nouvelle produit</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Form.Group controlId="productName">
                                                <Form.Label>Nom</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Le nom du produit"
                                                    onChange={this.handleChange}
                                                />
                                                    {state.errorName ? feedback(state.errorName): ''}
                                            </Form.Group>

                                            <Form.Group controlId="productStatus">
                                                <Form.Label>Sélectionne de statut</Form.Label>
                                                <Form.Control as="select">
                                                    <option defaultValue="1">Actif</option>
                                                    <option value="0">Inactif</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group controlId="productQuantity">
                                                <Form.Label>Quantité</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="La quantité de produit"
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="productPrice">
                                                <Form.Label>Prix</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="le prix du produit"
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="productCategory">
                                                <Form.Label>Category de produit</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Le type de projet"
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="productMainImage">
                                                <Form.Label>Image principale</Form.Label>
                                                <Dropzone onDrop={this.mainImage} accept={"image/*"}
                                                          multiple={false}/>
                                                {state.mainImage.length === 0 ? '' : file(state.mainImage[0])}
                                            </Form.Group>
                                            <Form.Group controlId="productMainImageThumbnail">
                                                <Form.Label>Miniature de l'image principale</Form.Label>
                                                <Dropzone onDrop={this.thumbnail} accept={"image/*"}
                                                          multiple={false}/>
                                                {state.thumbnail.length === 0 ? '' : file(state.thumbnail[0])}
                                            </Form.Group>
                                            <Form.Group controlId="productOtherImages">
                                                <Form.Label>Ajouter des images de produits</Form.Label>
                                                <Dropzone onDrop={this.images} accept={"image/*"}
                                                          multiple={true}/>
                                                {state.productImages.length === 0 ? '' : listOfFile}
                                            </Form.Group>
                                            {redirectLink()}
                                            <Button disabled={this.state.isDisabled} variant="primary" onClick={this.setRedirect}>
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

export default Create;
