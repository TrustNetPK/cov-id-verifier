import { Label, Button, Col, Row, FormGroup, Input, Container } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import Auth from '../helpers/Auth'
import { useHistory } from 'react-router-dom'

import '../assets/styles/LoginContainer.css'

import Success from '../assets/images/success.png'
const VerificationContainer = (props) => {
    const [loadform, setLoadForm] = useState(false)
    const [firstname, setFirstName] = useState(props.location.state.firstname)
    const [lastname, setLastName] = useState(props.location.state.lastname)
    const [gender, setGender] = useState(props.location.state.gender)
    const [dob, setDob] = useState(props.location.state.dob)
    const [nationality, setNationality] = useState(props.location.state.nationality)
    const [doctype, setDocType] = useState(props.location.state.doctype)
    const [docID, setDocID] = useState(props.location.state.docID)
    const [vacName, setVacName] = useState(props.location.state.vacName)
    const [manufacturer, setManufacturer] = useState(props.location.state.manufacturer)
    const [dose, setDose] = useState(props.location.state.dose)
    const [unit, setUnit] = useState(props.location.state.unit)
    const [vaccinatorName, setVaccinatorName] = useState(props.location.state.vaccinatorName)
    const [vaccinatorOrg, setVaccinatorOrg] = useState(props.location.state.vaccinatorOrg)
    const [validTill, setValidTill] = useState(props.location.state.validTill)
    const [nextBoosterDate, setNextBoosterDate] = useState(props.location.state.nextBoosterDate)


    const history = useHistory();

    const handleLogout = () => {
        Auth.signout();
        history.replace('/')

    }

    console.log("Safi check " + nextBoosterDate);
    return (
        <Container fluid className="float-center ml-5 pt-5  mt-4 App">
            <Row form >

                <Col md={4}>
                    <br />
                    <br />
                    <h5 className="mb-5 pb-4 mt-2">Passenger and Vaccine Information</h5>

                    <FormGroup>
                        <Label for="fname">
                            First Name
                    </Label>
                        <Input type="text" name="fname" id="fname" value={firstname} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lname">
                            Last Name
                    </Label>
                        <Input type="text" name="lname" id="lname" value={lastname} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="gender">
                            Gender
                    </Label>
                        <Input type="text" name="gender" id="gender" value={gender} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dob">
                            Date of Birth
                    </Label>

                        <Input type="text" name="dob" id="dob" value={dob} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="nationality">
                            Nationality
                    </Label>
                        <Input type="text" name="nationality" id="nationality" value={nationality} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="doctype">
                            Document Type
                    </Label>
                        <Input type="text" name="doctype" id="doctype" value={doctype} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="docID">
                            Document ID
                    </Label>
                        <Input type="text" name="docID" id="docID" value={docID} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="vacName">
                            Vaccine Name
                    </Label>
                        <Input type="text" name="vacName" id="vacName" value={vacName} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="manufacturer">
                            Manufacturer
                    </Label>
                        <Input type="text" name="manufacturer" id="manufacturer" value={manufacturer} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dose">
                            Dosage
                    </Label>
                        <Input type="text" name="dose" id="dose" value={dose + ' ' + unit} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="vaccinatorName">
                            Vaccinator Name
                    </Label>
                        <Input type="text" name="vaccinatorName" id="vaccinatorName" value={vaccinatorName} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="vaccinatorOrg">
                            Vaccinator Organization
                    </Label>
                        <Input type="text" name="vaccinatorOrg" id="vaccinatorOrg" value={vaccinatorOrg} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="validTill">
                            Valid Till
                    </Label>
                        <Input type="text" name="validTill" id="validTill" value={validTill} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="nextBoosterDate">
                            Next Booster Date
                    </Label>
                        <Input type="text" name="nextBoosterDate" id="nextBoosterDate" value={nextBoosterDate} disabled />
                    </FormGroup>
                    <br />
                    <br />
                    <br />
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