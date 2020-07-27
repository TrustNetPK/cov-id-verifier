import { Label, Button, Col, Row, FormGroup, Input, Container } from 'reactstrap';
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

    console.log(JSON.stringify(props));
    return (
        <Container fluid className="float-center ml-5 pt-5  mt-4 App">
            <Row form >

                <Col md={4}>
                    <br />
                    <br />
                    <h5 className="mb-5 pb-4 mt-2">Passenger & Vaccine Information</h5>
                    {/* <FormGroup>
                        <Input type="text" name="name" value={props.location.state.Name} id="exampleEmail" placeholder="Name" disabled />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="name" value={props.location.state.CNIC} id="exampleEmail" placeholder="CNIC" disabled />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="name" value={props.location.state.Passport} id="exampleEmail" placeholder="Passport" disabled />
                    </FormGroup> */}

                    <FormGroup>
                        <Label for="fname">
                            First Name
                    </Label>
                        <Input type="text" name="fname" id="fname" value={props.location.state.firstname} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lname">
                            Last Name
                    </Label>
                        <Input type="text" name="lname" id="lname" value={props.location.state.lastname} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="gender">
                            Gender
                    </Label>
                        <Input type="text" name="gender" id="gender" value={props.location.state.gender} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dob">
                            Date of Birth
                    </Label>
                        <Input type="text" name="dob" id="dob" value={props.location.state.dob} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="nationality">
                            Nationality
                    </Label>
                        <Input type="text" name="nationality" id="nationality" value={props.location.state.nationality} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="doctype">
                            Document Type
                    </Label>
                        <Input type="text" name="doctype" id="doctype" value={props.location.state.doctype} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="docID">
                            Document ID
                    </Label>
                        <Input type="text" name="docID" id="docID" value={props.location.state.docID} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="vacName">
                            Vaccine Name
                    </Label>
                        <Input type="text" name="vacName" id="vacName" value={props.location.state.vacName} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="manufacturer">
                            Manufacturer
                    </Label>
                        <Input type="text" name="manufacturer" id="manufacturer" value={props.location.state.manufacturer} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dose">
                            Dosage
                    </Label>
                        <Input type="text" name="dose" id="dose" value={props.location.state.dose + ' ' + props.location.state.unit} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="vaccinatorName">
                            Vaccinator Name
                    </Label>
                        <Input type="text" name="vaccinatorName" id="vaccinatorName" value={props.location.state.vaccinatorName} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="vaccinatorOrg">
                            Vaccinator Organization
                    </Label>
                        <Input type="text" name="vaccinatorOrg" id="vaccinatorOrg" value={props.location.state.vaccinatorOrg} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="validTill">
                            Valid Till
                    </Label>
                        <Input type="text" name="validTill" id="validTill" value={props.location.state.validTill} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="nextBoosterDate">
                            Next Booster Date
                    </Label>
                        <Input type="text" name="nextBoosterDate" id="nextBoosterDate" value={props.location.state.nextBoosterDate} disabled />
                    </FormGroup>
                    <br />
                    <br />
                    <br />
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