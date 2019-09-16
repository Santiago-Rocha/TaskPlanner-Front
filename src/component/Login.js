import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import login from "../login.png"

export class Login extends React.Component {

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        console.log("hola prrros")
    }

    render() {
        return (
            <MDBContainer style={{marginTop: "80px"}}>
                <MDBRow>
                    <MDBCol size={8} md={4} className="offset-2 offset-md-4">
                        <p className="h3 text-center">Task Planner</p>
                    </MDBCol>
                    <MDBCol size={4} md={2} className="offset-4 offset-md-5">
                        <img src={login} className="img-fluid"></img>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md={12}>
                        <form onSubmit={this.onSubmit}>
                            <div className="grey-text">
                                <MDBInput
                                    label="Type your email"
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Type your password"
                                    type="password"
                                    validate
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn gradient="aqua" type="submit">Login</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}