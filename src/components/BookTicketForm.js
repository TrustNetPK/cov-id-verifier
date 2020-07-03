import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Input, Jumbotron, Dropdown, DropdownToggle, DropdownMenu, Label, DropdownItem } from 'reactstrap';
import RightArrow from '../assets/resources/rightarrow.png'
import { useHistory } from 'react-router-dom';


const BookTicketForm = (props) => {
    const { dataCallback } = props

    const [fromdropdownOpen, setOpen] = useState(false)
    const fromtoggle = () => setOpen(!fromdropdownOpen)

    const [todropdownOpen, setoOpen] = useState(false)
    const totoggle = () => setoOpen(!todropdownOpen)


    const [from, setFrom] = useState(props.From)
    const [to, setTo] = useState(props.To)
    const [name, setName] = useState(props.PersonName)
    const [CNIC, setCNIC] = useState(props.Cnic)
    const [passportno, setPassport] = useState(props.Passport)
    const history = useHistory();

    const handleRequest = () => {
        if (props.Name !== "Vaccination Name") {
            if (from === 'Select From Location' | to === 'Select To Location' | name === '' | CNIC === '' | passportno === '') {
                alert('Please fill all fields')
            }
            else {
                history.push("/verification", { Name: name, CNIC: CNIC, Passport: passportno, from: from, to: to })
            }

        }
        else {
            alert("Verify your Vacination")
        }


    }

    const handleVaccination = () => {
        if (props.Name !== "Vaccination Name") {
            alert('You have already verified the vaccination')
        }
        else {
            if (dataCallback !== undefined) {

                dataCallback({ Name: name, CNIC: CNIC, Passport: passportno, From: from, To: to })
            }
            // history.push("/verifyvaccine", { Name: name, CNIC: CNIC, Passport: passportno, from: from, to: to })
        }
    }


    return (
        <Form className="text-center" >
            <h1 className="mb-5 pb-4 mt-2">Fill your flight reservation info</h1>
            <Row form>
                <Col md={5}>
                    <Dropdown isOpen={fromdropdownOpen} toggle={fromtoggle} size="lg" color="primary">
                        <DropdownToggle caret color="primary" >
                            {from}
                        </DropdownToggle>
                        <DropdownMenu value={from} name="fromLocations" >
                            <DropdownItem name="lahore" onClick={(e) => { setFrom(e.target.innerText) }} >Lahore - Allama Iqbal Intl. (LHE)</DropdownItem>

                            <DropdownItem name="karachi" onClick={(e) => { setFrom(e.target.innerText) }} >Karachi - Jinnah Intl. (KHI)</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col md={2}>
                    <img src={RightArrow} alt="Logo" />
                </Col>
                <Col md={5}>
                    <Dropdown isOpen={todropdownOpen} toggle={totoggle} size="lg">
                        <DropdownToggle caret color="primary">
                            {to}
                        </DropdownToggle>
                        <DropdownMenu value={to} name="toLocations" >
                            <DropdownItem name="ain" onClick={(e) => { setTo(e.target.innerText) }} >Al Ain International Airport (AAN)</DropdownItem>
                            <DropdownItem name="jakartra" onClick={(e) => { setTo(e.target.innerText) }} >Jakarta - Soekarno-Hatta (CGK)</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
            </Row>
            <br />
            <Row form>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleEmail">Name</Label>
                        <Input type="text" name="name" value={name} id="exampleEmail" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="examplePassword">CNIC #</Label>
                        <Input type="text" name="cnic" value={CNIC} id="examplePassword" onChange={(e) => setCNIC(e.target.value)} placeholder="CNIC" />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="examplePassword">Passport #</Label>
                        <Input type="text" name="dosage" value={passportno} id="examplePassword" onChange={(e) => setPassport(e.target.value)} placeholder="Passport" />
                    </FormGroup>
                </Col>
            </Row>
            <br />

            <Jumbotron  >
                <h3 className="mb-5 pb-4 mt-2">Vaccination Proof Verification</h3>
                <Row form>
                    <Col md={3}>
                        <FormGroup >
                            <Input type="text" name="name" id="exampleEmail" value={props.Batch} placeholder="Vaccination Batch #" disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>

                            <Input type="text" name="cnic" id="examplePassword" value={props.Name} placeholder="Vaccination Name" disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>

                            <Input type="text" name="dosage" id="examplePassword" value={props.Expiry} placeholder="Expiry" disabled />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>

                            <Input type="text" name="dosage" id="examplePassword" value={props.Dosage} placeholder="Dosage" disabled />
                        </FormGroup>
                    </Col>
                </Row>
                <Button color="warning" className="m-5" onClick={handleVaccination}>Verify your vaccination</Button>
            </Jumbotron>
            <Button color="primary" onClick={handleRequest} className="m-5" >Book Ticket</Button>
        </Form>


    );
}

export default BookTicketForm;