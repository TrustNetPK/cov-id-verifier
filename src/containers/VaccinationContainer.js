import React, { useState, useEffect } from 'react';
import { Label, Row, Col, FormGroup, Input, Button, Container } from 'reactstrap'
import '../assets/styles/VaccinationForm.css';
import { useHistory } from 'react-router-dom';

function VaccinationContainer(props) {
    const { dataCallback } = props;
    const [getSubmit, SubmitText] = useState("Verify Your Vaccination")
    const history = useHistory();

    useEffect(() => {
        if (props.vacName !== '') {
            SubmitText("Book Ticket")
        }
        else {
            SubmitText("Verify Your Vaccination")
        }
    }, []);

    const handleVaccination = () => {
        // console.log(props);
        if (props.vacName !== '') {
            history.push("/verification", {
                firstname: props.firstname,

                vacName: props.vacName,
                manufacturer: props.manufacturer,
                batch: props.batch,
                dose: props.dose,
                unit: props.unit,
                validTill: props.validTill,
                nextBoosterDate: props.nextBoosterDate,
                vaccinatorName: props.vaccinatorName,
                vaccinatorOrg: props.vaccinatorOrg,
                firstname: props.firstname,
                lastname: props.lastname,
                gender: props.gender,
                dob: props.dob,
                nationality: props.nationality,
                doctype: props.doctype,
                docID: props.docID,
                departureDate: props.departureDate, returnDate: props.returnDate, passenger: props.passenger, cabin: props.cabin, from: props.From, to: props.To
            })
        }
        else {
            if (dataCallback !== undefined) {
                dataCallback({ PersonName: props.PersonName, CNIC: "X", Passport: "x", From: "F", To: "T" })
            }
        }
    }

    return (
        <Container className="mt-5 pt-5">
            <div className="text-center FormBox mt-5 pt-5">
                <h3 className={` ${localStorage.getItem("demo") === "PIA" ? 'className="mb-5 pb-4 mt-2 piaheader' : 'className="mb-5 pb-4 mt-2 header'}`}>Vaccination Proof Verification</h3>
                <br />
                <h4>Vaccination Info</h4>
                <Row form className="mt-5">
                    <Col md={3}>
                        <FormGroup>
                            <Label for="vac_name">Vaccination Name</Label>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="vac_name" id="vac_name" value={props.vacName} placeholder="" disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="manufacturer">Manufacturer</Label>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="manufacturer" id="manufacturer" value={props.manufacturer} disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="batch">Batch No.</Label>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="batch" id="batch" value={props.batch} disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="dose">Dose</Label>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="dose" id="dose" value={(props.dose || '') + ' ' + (props.unit || '')} disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="valid_till">Validation till</Label>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="valid_till" id="valid_till" placeholder="" value={props.validTill} disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="boosterdate">Next Booster Date</Label>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="boosterdate" id="boosterdate" placeholder="" value={props.nextBoosterDate} disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="vaccinatorname">Vaccinator Name</Label>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="vaccinatorname" id="vaccinatorname" value={props.vaccinatorName} disabled />
                        </FormGroup>
                    </Col>

                    <Col md={3}>
                        <FormGroup>
                            <Label for="vaccinatororg">Vaccinator Organization</Label>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="vaccinatororg" id="vaccinatororg" value={props.vaccinatorOrg} disabled />
                        </FormGroup>
                    </Col>
                </Row>

                <br />
                <br />
                <h4>Personal Info</h4>
                <Row form>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="fname" id="firstName" value={props.firstname} disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="lname" id="lastName" value={props.lastname} disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="gender">Gender</Label>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="gender" id="gender" value={props.gender} disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="dob">Date of Birth</Label>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="dob" id="dob" value={props.dob} disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="nationality">Nationality</Label>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="nationality" id="nationality" value={props.nationality} disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="doctype">Travel Document Type</Label>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="doctype" id="doctype" value={props.doctype} disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="docid">Travel Document ID</Label>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="docid" id="docid" value={props.docID} disabled />
                        </FormGroup>
                    </Col>
                </Row>

                {localStorage.getItem("demo") === "PIA" &&
                    <Button color="success" className="mt-5" onClick={handleVaccination}>{getSubmit}</Button>
                }
                {localStorage.getItem("demo") !== "PIA" &&
                    <Button color="primary" className="mt-5" onClick={handleVaccination}>{getSubmit}</Button>
                }

                <br />
                <br />
                <br />
                <br />

            </div>
        </Container>
    );
}

export default VaccinationContainer;