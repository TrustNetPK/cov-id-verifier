import { Button, Col, Row, FormGroup, Input, Container } from 'reactstrap';
import React from 'react';
import Auth from '../helpers/Auth'
import { useHistory } from 'react-router-dom'

import '../assets/styles/LoginContainer.css'

import Success from '../assets/images/success.png'
const VerificationContainer = (props) => {

    const history = useHistory();

    const handleLogout = () => {
        Auth.signout();
        history.replace('/')

    }

    return (
        <Container fluid className="float-center ml-5 pt-5  mt-4 App">
            <Row form >

                <Col md={4}>
                    <h5 className="mb-5 pb-4 mt-2">Passenger & Vaccine Information</h5>
                    <FormGroup>
                        <Input type="text" name="name" value={props.location.state.Name} id="exampleEmail" placeholder="Name" disabled />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="name" value={props.location.state.CNIC} id="exampleEmail" placeholder="CNIC" disabled />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="name" value={props.location.state.Passport} id="exampleEmail" placeholder="Passport" disabled />
                    </FormGroup>
                    {/* <FormGroup>
                    <Input type="text" name="name" id="exampleEmail" placeholder="Name" disabled />
                </FormGroup> */}
                </Col>

                <Col md={6} className="text-center">
                    <img className="text-center w-25" src={Success} alt="Logo" />
                    <h4 className="ml-md-5 pb-4 mt-4">
                        Vaccination Certificate Has Been Verified Successfully
          </h4>
                    <p className="ml-md-5 pb-4 mt-2">
                        The Passenger's digital vaccination certificate has been successfuly verified, Please verify their personal information from the proof and validate it against their travel document.
          </p>
                    <div className="text-center ">
                        <Button className="mt-2" color="primary" size="lg" onClick={handleLogout} >Go Back</Button>
                    </div>
                </Col>
            </Row>
        </Container>);
}

export default VerificationContainer;