import React from 'react';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import Field from "../../Forms/Field";
import AuthAPI from "../../../services/AuthAPI";
import { toast } from "react-toastify";

class SignUp1 extends React.Component {

    state = {
        username: "",
        password: "",
        showPassword: false,
        showPasswordIcon: 'feather icon-eye',
        isAuthenticated :false
    };

    handleChange = ({ currentTarget }) => {
        const { value, name } = currentTarget;
        this.setState({ [name]: value });
    };

    togglePasswordVisibility = () => {
        if(!this.state.showPassword) this.setState({
                showPassword : true,
                showPasswordIcon: 'feather icon-eye-off'
            });
        else this.setState({
                showPassword : false,
                showPasswordIcon: 'feather icon-eye'
            })
    };

    handleSubmit = async event => {
        event.preventDefault();

        try {
            await AuthAPI.authenticate(this.state.username, this.state.password);
            this.setState({error :""});
            this.setState({isAuthenticated :true});
            // TODO: need to change depends on user role
            this.props.history.push('/sadmin')
        } catch (error) {
            toast.error("Vérifiez vos identifiants de connexion !");
        }
    };


    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <form
                                onSubmit={this.handleSubmit}
                                className="card-body text-center"
                            >
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                <h3 className="mb-4">Login</h3>
                                <div className="input-group mb-3">
                                    <Field
                                        label="Adresse email"
                                        labelClassName = "sr-only sr-only-focusable"
                                        name="username"
                                        type= "email"
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="input-group mb-4">
                                    <Field
                                        label="Mot de passe"
                                        labelClassName = "sr-only sr-only-focusable"
                                        name="password"
                                        type= {(this.state.showPassword)? "text": "password"}
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        placeholder="Mot de passe"
                                    />

                                    <div className="input-group-append"
                                         style={{cursor: "pointer"}}
                                         onClick={this.togglePasswordVisibility}>
                                        <div className="input-group-text" >
                                            <i className={this.state.showPasswordIcon}/>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div>*/}
                                <button className="btn btn-primary shadow-2 mb-4">Se connecter</button>
                                {/* <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1">Reset</NavLink></p>
                                <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p> */}
                            </form>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;
