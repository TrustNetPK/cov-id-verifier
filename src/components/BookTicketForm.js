import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Input, Jumbotron, Dropdown, DropdownToggle, DropdownMenu, Label, DropdownItem } from 'reactstrap';
import RightArrow from '../assets/resources/rightarrow.png'
import { useHistory } from 'react-router-dom';
import '../assets/styles/VaccinationForm.css';

const BookTicketForm = (props) => {
    const { dataCallback } = props

    const [fromdropdownOpen, setOpen] = useState(false)
    const fromtoggle = () => setOpen(!fromdropdownOpen)

    const [todropdownOpen, setoOpen] = useState(false)
    const totoggle = () => setoOpen(!todropdownOpen)

    const [from, setFrom] = useState('Select From Location')
    const [to, setTo] = useState('Select To Location')
    const [name, setName] = useState('')
    const [CNIC, setCNIC] = useState('')
    const [passportno, setPassport] = useState('')
    const history = useHistory();

    const handleSubmit = () => {
       
            if (from === 'Select From Location' | to === 'Select To Location' | name === '' | CNIC === '' | passportno === '') {
                alert('Please fill all fields')
            }
            else {
                history.push("/proof", { Name: name, CNIC: CNIC, Passport: passportno, from: from, to: to })
            }
    }

    return (
        <Form className="text-center mt-5 pt-5 FormBox align-self-center" >
            <h1 className="mb-5 pb-4 mt-2 header">Fill your flight reservation info</h1>
            <Row form>
                <Col md={5}>
                    <Dropdown isOpen={fromdropdownOpen} toggle={fromtoggle} size="lg" color="primary">
                        <DropdownToggle caret color="primary" >
                            {from}
                        </DropdownToggle>
                        <DropdownMenu name="fromLocations" >
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
                        <DropdownMenu name="toLocations" >
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
                        <Input type="text" name="name" className="inputField rounded-pill" id="exampleEmail" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="examplePassword">CNIC #</Label>
                        <Input type="text" name="cnic" className="inputField rounded-pill" id="examplePassword" onChange={(e) => setCNIC(e.target.value)} placeholder="CNIC" />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="examplePassword">Passport #</Label>
                        <Input type="text" name="dosage" className="inputField rounded-pill"  id="examplePassword" onChange={(e) => setPassport(e.target.value)} placeholder="Passport" />
                    </FormGroup>
                </Col>
            </Row>
            <Button onClick={handleSubmit} outline color="primary" className="m-3">Submit</Button>
        </Form>
    );
}

export default BookTicketForm;