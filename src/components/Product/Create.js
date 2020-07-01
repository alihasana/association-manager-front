import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import Aux from "../../hoc/_Aux";
import Dropzone from "./../General/Dropzone";
import {storage} from "../../services/Firebase";
import Joi from "@hapi/joi";
import axios from "axios";


class Create extends React.Component {

    state = {
        redirect: false,
        otherImages: [],
        mainImage: [],
        mainImageThumbnail: [],
        progress: {},
        urlsImages: [],
        urlThumbnail: '',
        urlMainImage: '',
        name: '',
        description: '',
        status: '',
        quantity: '',
        price: '',
        category: '',
        errorName: '',
        errorDescription: '',
        errorStatus: '',
        errorQuantity: '',
        errorPrice: '',
        errorCategory: '',
        errorMainImage: '',
        errorMainImageThumbnail: '',
        errorOtherImages: '',
        isDisabled: true,
    };
    createProduct = async () => {
        let product = {}
        product.name = this.state.name;
        product.description = this.state.description;
        product.mainImage = this.state.urlMainImage;
        product.quantity = this.state.quantity;
        product.price = this.state.price;
        product.mainImageThumbnail = this.state.urlThumbnail;
        product.images = this.state.urlsImages
        console.log('product :');
        console.log(product);
        let query = `
                  mutation
                        {
                          createProduct(
                            name: "${product.name}",
                            description: "${product.description}",
                            quantity: ${product.quantity},
                            mainImageUrl: "${product.mainImage}",
                            mainThumbnailUrl: "${product.mainImageThumbnail}",
                            images: ${JSON.stringify(this.state.urlsImages)},
                            price: ${product.price},
                            vat: 2.2,
                            associationId: 25,
                          ){
                            id,
                            name,
                            description,
                            mainImageUrl,
                            mainThumbnailUrl,
                            images,
                            quantity,
                            price,
                            vat,
                            createdAt,
                            updatedAt
                          }
                        }
                  `;
        console.log(query);
        await axios({
            url: 'http://localhost:4000/graphql',
            method: 'post',
            data: {query}
        }).then((result) => {
            console.log(result)
        });
        this.setState({
            redirect: true
        })
        debugger;
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

        if (inputId === 'productName') {
            let {error, value} = Joi.string().min(2).max(150).required().validate(inputValue);
            (error || value.replace(/<[^>]+>|\s/g, '') === '') ? await this.setState({
                name: '',
                errorName: "Le nom du produit est obligatoire. Le texte doit contenir moins de 100 caractères et plus de 2 caractères"
            }) : await this.setState({
                errorName: '',
                name: (value.replace(/<[^>]+>/g, '')).trim()
            })
        }
        if (inputId === 'productDescription') {
            let {error, value} = Joi.string().min(10).required().validate(inputValue);
            (error || value.replace(/<[^>]+>|\s/g, '') === '') ? await this.setState({
                description: '',
                errorDescription: "La description du produit est obligatoire. Le texte doit comporter plus de 10 caractères"
            }) : await this.setState({
                errorDescription: '',
                description: (value.replace(/<[^>]+>/g, '')).trim()
            });
        }
        if (inputId === 'productQuantity') {
            let {error, value} = Joi.number().max(10000).required().validate(inputValue);
            (error ||(value % 1)) ? await this.setState({
                quantity: '',
                errorQuantity: "La quantité doit être inférieure à 10000 et aucune décimale n'est autorisée"
            }) : await this.setState({
                errorQuantity: '',
                quantity: value
            });
        }
        if (inputId === 'productPrice') {
            let {error, value} = Joi.number().max(1000).required().validate(inputValue);
            (error) ? await this.setState({
                price: '',
                errorPrice: "Le prix du produit doit être inférieur à 1000 euros"
            }) : await this.setState({
                errorPrice: '',
                price: value
            });
        }
        (
            this.state.name === '' || this.state.description === '' ||
            this.state.quantity === '' || this.state.price === ''
        ) ? await this.setState({
            isDisabled: true
        }) : await this.setState({
            isDisabled: false
        })
    }
    uploadFile = (image, type) => {
        console.log(image)
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        let urls = this.state.urlsImages;
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                let progressState = this.state.progress
                let addProgress = {...progressState, ...{[image.name]: progress}}
                this.setState({progress: addProgress})
            },
            error => {
                if(type === 'mainImage' ) {
                    this.setState({
                        mainImage: this.state.mainImage,
                        errorMainImage: "Erreur interne trouvée, contactez l'administrateur"
                    });
                }
                if(type === 'thumbnail' ) {
                    this.setState({
                        mainImageThumbnail: this.state.mainImageThumbnail,
                        errorMainImageThumbnail: "Erreur interne trouvée, contactez l'administrateur"
                    });
                }
                if(type === 'images' ) {
                    this.setState({
                        otherImages: this.state.otherImages,
                        errorOtherImages: "Erreur interne trouvée, contactez l'administrateur"
                    });
                }
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url)
                        if (type === "images") {
                            urls.push(url);
                            this.setState({urlsImages: urls})
                        }
                        if (type === "mainImage") {
                            this.setState({urlMainImage: url})
                        }
                        if (type === "thumbnail") {
                            this.setState({urlThumbnail: url})
                        }
                    });
            }
        );
    };
    mainImage = async (acceptedFiles) => {
        console.log(acceptedFiles[0].size);
        if (this.state.mainImage.length === 1 || acceptedFiles[0].size > 1048576) {
            await this.setState({
                mainImage: this.state.mainImage,
                errorMainImage: "Une seule image peut être ajoutée ici et la taille de l'image doit être inférieure à 1 Mo !"
            });
        } else {
            this.uploadFile(acceptedFiles[0], 'mainImage');
            this.setState({
                errorMainImage: '',
                mainImage: acceptedFiles
            });
        }

    };
    mainImageThumbnail = (acceptedFiles) => {
        if (this.state.mainImageThumbnail.length === 1 || acceptedFiles[0].size > 10000) {
            this.setState({
                mainImageThumbnail: this.state.mainImageThumbnail,
                errorMainImageThumbnail: "Une seule image peut être ajoutée ici et la taille de l'image doit être inférieure à 10 Ko !"
            });
        } else {
            this.uploadFile(acceptedFiles[0], 'thumbnail');
            this.setState({
                errorMainImageThumbnail: '',
                mainImageThumbnail: acceptedFiles
            });
        }
    };
    images = (acceptedFiles) => {
        if (acceptedFiles[0].size <= 1048576 ) {
            let imageDuplicateNotFound = true;
            if (this.state.otherImages.length !== 0) {
                for (const file of acceptedFiles) {
                    for (const fileInFiles of this.state.otherImages) {
                        imageDuplicateNotFound = fileInFiles.path === file.path;
                        if (imageDuplicateNotFound) {
                            break;
                        }
                    }
                }
                if (!imageDuplicateNotFound) {
                    this.uploadFile(acceptedFiles[0], 'images');
                    this.updateOtherImages([...this.state.otherImages, ...acceptedFiles], '')
                } else {
                    this.updateOtherImages(
                        this.state.otherImages,
                        'Le nom du fichier doit être unique !')
                }
            } else {
                this.uploadFile(acceptedFiles[0], 'images');
                this.updateOtherImages([...this.state.otherImages, ...acceptedFiles], '')
            }
        } else {
            this.updateOtherImages(
                this.state.otherImages,
                "la taille de l'image doit être inférieure à 1 Mo !" )
        }
    };
    updateOtherImages = (images, message) => {
         this.setState({
            otherImages: images,
            errorOtherImages: message
        });
    }

    render() {
        let state = this.state;
        // Start Vérification du rôle de l'utilisateur pour afficher ou masquer des éléments dans la page
        const isAdmin = window.location.href.indexOf("/admin") !== -1
        //Create
        let adminLink = this.renderRedirect('/admin/projets')
        let superAdminLink = this.renderRedirect('/sadmin/projets')
        let redirectUser;
        let listOfFile = state.otherImages.map(file => (
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
            <div style={{color: '#db2269', fontSize: '15px', display: 'relative'}}>
                {errorMessage}
            <br/>
            <br/>
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
                                                {state.errorName ? feedback(state.errorName) : ''}
                                            </Form.Group>

                                            <Form.Group controlId="productDescription">
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control
                                                    as="textarea" rows="3"
                                                    placeholder="La description du produit"
                                                    onChange={this.handleChange}
                                                />
                                                {state.errorDescription ? feedback(state.errorDescription) : ''}
                                            </Form.Group>

                                            <Form.Group controlId="productStatus">
                                                <Form.Label>Sélectionne de statut</Form.Label>
                                                <Form.Control as="select">
                                                    <option defaultValue="1">Actif</option>
                                                    <option value="0">Inactif</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group controlId="productQuantity">
                                                <Form.Label>Quantité <small> Aucune décimale n'est autorisée</small></Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="La quantité de produit"
                                                    onChange={this.handleChange}
                                                />
                                                {state.errorQuantity ? feedback(state.errorQuantity) : ''}
                                            </Form.Group>

                                            <Form.Group controlId="productPrice">
                                                <Form.Label>Prix <small>/ unité</small></Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="le prix du produit"
                                                    onChange={this.handleChange}
                                                />
                                                {state.errorPrice ? feedback(state.errorPrice) : ''}
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
                                            <Dropzone
                                                    onDrop={this.mainImage}
                                                    accept={"image/*"}
                                                    multiple={false}
                                                    formId={"productMainImage"}
                                                    fieldName={"Image principale"}
                                                />
                                                {state.mainImage.length === 0 ? '' : file(state.mainImage[0])}
                                                {state.errorMainImage ? feedback(state.errorMainImage) : ''}
                                            <Dropzone onDrop={this.mainImageThumbnail}
                                                          accept={"image/*"}
                                                          multiple={false}
                                                          formId={"productMainImageThumbnail"}
                                                          fieldName={"Miniature de l'image principale"}
                                                />
                                            {state.mainImageThumbnail.length === 0 ? '' : file(state.mainImageThumbnail[0])}
                                            {state.errorMainImageThumbnail ? feedback(state.errorMainImageThumbnail) : ''}
                                            <Dropzone
                                                onDrop={this.images}
                                                accept={"image/*"}
                                                multiple={true}
                                                formId={"productOtherImages"}
                                                fieldName={"Ajouter des images de produits"}
                                            />
                                            {state.otherImages.length === 0 ? '' : listOfFile}
                                            {state.errorOtherImages ? feedback(state.errorOtherImages) : ''}
                                            {redirectLink()}
                                            <Button disabled={this.state.isDisabled} variant="primary"
                                                    onClick={this.createProduct}>
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
