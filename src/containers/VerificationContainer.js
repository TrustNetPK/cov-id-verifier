import { Col, Row, FormGroup, Input, Container } from 'reactstrap';
import React from 'react';

import '../assets/styles/LoginContainer.css'

import BannerImage from '../assets/resources/bannerimg.png'
const VerificationContainer = (props) => {
    return (
        <Container fluid className="float-center ml-5 pt-5  mt-4 App">
            <Row form >

                <Col md={4}>
                    <h5 className="mb-5 pb-4 mt-2">Passenger Ticket Information</h5>
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
                    <img className="text-center" src={BannerImage} alt="Logo" />
                    <h4 className="ml-5 pb-4 mt-5">Vaccination Verified Ticket Booking Verified Successfully</h4>
                    <p className="ml-5 pb-4 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Col>
            </Row>
        </Container>);
}

export default VerificationContainer;