import React, { useState, useEffect } from 'react';
import { Row, Col, FormGroup, Input, Button, Container } from 'reactstrap'
import '../assets/styles/VaccinationForm.css';
import { useHistory } from 'react-router-dom';

function VaccinationContainer(props) {
    const { dataCallback } = props;
    const [getSubmit, SubmitText] = useState("Verify your vaccination")
    const history = useHistory();

    useEffect(() => {
        if (props.Name !== "Vaccination Name") {
            SubmitText("Book Ticket")
        }
        else {
            SubmitText("Verify your vaccination")
        }
    }, [getSubmit, props]);
    const handleVaccination = () => {
        // console.log("VaccinationContainer" + JSON.stringify(props))
        // console.log("VaccinationContainer" + props.PersonName)
        if (props.Name !== "Vaccination Name") {

            //console.log("VaccinationContainer" + props.PersonName)
            history.push("/verification", { Name: props.PersonName, CNIC: props.Cnic, Passport: props.Passport, from: props.from, to: props.to })
        }
        else {
            if (dataCallback !== undefined) {
                dataCallback({ PersonName: props.PersonName, CNIC: "X", Passport: "x", From: "F", To: "T" })
            }
        }
        //history.push('/verifyvaccine')
    }

    return (
        <Container className="mt-5 pt-5">
            <div className="text-center FormBox mt-5 pt-5">
                <h3 className={` ${localStorage.getItem("demo") === "PIA" ? 'className="mb-5 pb-4 mt-2 piaheader' : 'className="mb-5 pb-4 mt-2 header'}`}>Vaccination Proof Verification</h3>
                <Row form className="mt-5">
                    <Col md={3}>
                        <FormGroup >
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="name" id="exampleEmail" value={props.Batch} placeholder="Vaccination Batch #" disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="cnic" id="examplePassword" value={props.Name} placeholder="Vaccination Name" disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="expiry" id="examplePassword" value={props.Expiry} placeholder="Expiry" disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Input type="text" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} name="dosage" id="examplePassword" value={props.Dosage} placeholder="Dosage" disabled />
                        </FormGroup>
                    </Col>
                </Row>
                {localStorage.getItem("demo") === "PIA" &&
                    <Button color="success" className="mt-5" onClick={handleVaccination}>{getSubmit}</Button>
                }
                {localStorage.getItem("demo") !== "PIA" &&
                    <Button color="primary" className="mt-5" onClick={handleVaccination}>{getSubmit}</Button>
                }

            </div>
        </Container>
    );
}

export default VaccinationContainer;