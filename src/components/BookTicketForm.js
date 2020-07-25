import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, Label, DropdownItem } from 'reactstrap';
import RightArrow from '../assets/resources/rightarrow.png'
import { useHistory } from 'react-router-dom';
import '../assets/styles/VaccinationForm.css'

const BookTicketForm = () => {
    // const { dataCallback } = props
    var cdate = new Date();
    cdate.setDate(cdate.getDate() + 7);
    const [fromdropdownOpen, setOpen] = useState(false)
    const fromtoggle = () => setOpen(!fromdropdownOpen)

    const [todropdownOpen, setoOpen] = useState(false)
    const totoggle = () => setoOpen(!todropdownOpen)

    const [from, setFrom] = useState('Lahore - Allama Iqbal Intl. (LHE)')
    const [to, setTo] = useState('London Gatwick (LGW)')
    const [departureDate, setDepartureDate] = useState(new Date().toISOString().substring(0, 10))
    const [returnDate, setReturnDate] = useState(cdate.toISOString().substring(0, 10))
    const [passenger, setPassenger] = useState('1 Adult, 0 Child')
    const [cabin, setCabin] = useState('Economy')
    const history = useHistory();




    const handleSubmit = () => {

        if (from === 'Select From Location' | to === 'Select To Location' | departureDate === '' | returnDate === '' | passenger === '') {
            alert('Please fill all fields')
        }
        else {
            //  console.log(passportno + name)
            history.push("/vaccineverification", { departureDate: departureDate, returnDate: returnDate, passenger: passenger, from: from, to: to, cabin: cabin })
        }
    }

    return (
        <Form className="text-center mt-5 pt-5 FormBox align-self-center" >
            <h1 className={` ${localStorage.getItem("demo") === "PIA" ? 'className="mb-5 pb-4 mt-2 piaheader' : 'className="mb-5 pb-4 mt-2 header'}`}
            >Fill your flight reservation info</h1>

            <br />
            <FormGroup tag="fieldset">
                <FormGroup check sm={2}>
                    <Label check>
                        <Input type="radio" defaultChecked name="radio1" />{' '}
            Return

          </Label>

                    <Label check sm={2}>
                        <Input type="radio" disabled name="radio1" />{' '}
            One way
          </Label>
                </FormGroup>
            </FormGroup>

            <br />
            <Row form>
                <Col md={5}>
                    {localStorage.getItem("demo") === "PIA" &&
                        <Dropdown isOpen={fromdropdownOpen} toggle={fromtoggle} size="lg" color="success">
                            <DropdownToggle caret color="success" >
                                {from}
                            </DropdownToggle>
                            <DropdownMenu value={from} name="fromLocations" >
                                <DropdownItem name="lahore" onClick={(e) => { setFrom(e.target.innerText) }} >Lahore - Allama Iqbal Intl. (LHE)</DropdownItem>

                                <DropdownItem name="karachi" onClick={(e) => { setFrom(e.target.innerText) }} >Karachi - Jinnah Intl. (KHI)</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>}

                    {localStorage.getItem("demo") !== "PIA" &&
                        <Dropdown isOpen={fromdropdownOpen} toggle={fromtoggle} size="lg" color="primary">
                            <DropdownToggle caret color="primary" >
                                {from}
                            </DropdownToggle>
                            <DropdownMenu value={from} name="fromLocations" >
                                <DropdownItem name="lahore" onClick={(e) => { setFrom(e.target.innerText) }} >Lahore - Allama Iqbal Intl. (LHE)</DropdownItem>

                                <DropdownItem name="karachi" onClick={(e) => { setFrom(e.target.innerText) }} >Karachi - Jinnah Intl. (KHI)</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>}



                </Col>
                <Col md={2}>
                    <img src={RightArrow} alt="Logo" />
                </Col>
                <Col md={5}>
                    {localStorage.getItem("demo") === "PIA" &&
                        <Dropdown isOpen={todropdownOpen} toggle={totoggle} size="lg">
                            <DropdownToggle caret color="success">
                                {to}
                            </DropdownToggle>
                            <DropdownMenu value={to} name="toLocations" >
                                <DropdownItem name="dxb" onClick={(e) => { setTo(e.target.innerText) }} >Dubai International Airport (DXB)</DropdownItem>
                                <DropdownItem name="jakartra" onClick={(e) => { setTo(e.target.innerText) }} >Jakarta - Soekarno-Hatta (CGK)</DropdownItem>
                                <DropdownItem name="hel" onClick={(e) => { setTo(e.target.innerText) }} >Helsinki International Airport (HEL)</DropdownItem>
                                <DropdownItem name="lgw" onClick={(e) => { setTo(e.target.innerText) }} >London Gatwick (LGW)</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    }
                    {localStorage.getItem("demo") !== "PIA" &&
                        <Dropdown isOpen={todropdownOpen} toggle={totoggle} size="lg">
                            <DropdownToggle caret color="primary">
                                {to}
                            </DropdownToggle>
                            <DropdownMenu value={to} name="toLocations" >
                                <DropdownItem name="dxb" onClick={(e) => { setTo(e.target.innerText) }} >Dubai International Airport (DXB)</DropdownItem>
                                <DropdownItem name="jakartra" onClick={(e) => { setTo(e.target.innerText) }} >Jakarta - Soekarno-Hatta (CGK)</DropdownItem>
                                <DropdownItem name="hel" onClick={(e) => { setTo(e.target.innerText) }} >Helsinki International Airport (HEL)</DropdownItem>
                                <DropdownItem name="lgw" onClick={(e) => { setTo(e.target.innerText) }} >London Gatwick (LGW)</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    }
                </Col>
            </Row>
            <br />
            <Row form>
                <Col md={4}>
                    <FormGroup>
                        <Label for="departure">Departure Date</Label>
                        <Input type="date" name="date" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`}
                            id="departure" onChange={(e) => setDepartureDate(e.target.value)} placeholder="" value={departureDate} />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        {/* <Label for="examplePassword">CNIC #</Label> */}
                        {/* <Input type="text" name="cnic" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} id="examplePassword" onChange={(e) => setCNIC(e.target.value)} placeholder="CNIC" /> */}
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="returndate">Return Date</Label>
                        <Input type="date" name="returndate" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} id="examplePassword" onChange={(e) => setReturnDate(e.target.value)} placeholder="" value={returnDate} />
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={4}>
                    <FormGroup>
                        <Label for="passenger">Passenger(s)</Label>
                        <Input type="select" name="passenger" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`}
                            id="passenger" onChange={(e) => setPassenger(e.target.value)} placeholder="" value={passenger} >
                            <option>1 Adult, 0 Child</option>
                            <option>2 Adult, 0 Child</option>
                            <option>2 Adult, 1 Child</option>
                            <option>2 Adult, 2 Child</option>
                            <option>2 Adult, 3 Child</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        {/* <Label for="examplePassword">CNIC #</Label> */}
                        {/* <Input type="text" name="cnic" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} id="examplePassword" onChange={(e) => setCNIC(e.target.value)} placeholder="CNIC" /> */}
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="cabin">Cabin</Label>
                        <Input type="select" name="cabin" className={` ${localStorage.getItem("demo") === "PIA" ? 'greeninputField rounded-pill' : 'inputField rounded-pill'}`} id="examplePassword" onChange={(e) => setCabin(e.target.value)} placeholder="" value={cabin} >
                            <option>Economy</option>
                            <option>Executive Economy</option>
                            <option>Business</option>

                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            {localStorage.getItem("demo") !== "PIA" &&
                <Button onClick={handleSubmit} outline color="primary" className="m-3">Submit</Button>
            }
            {localStorage.getItem("demo") === "PIA" &&
                <Button onClick={handleSubmit} outline color="success" className="m-3">Submit</Button>
            }

        </Form>
    );
}

export default BookTicketForm;