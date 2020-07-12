import React from 'react';
import { Row, Col, FormGroup, Input, Button, Container } from 'reactstrap'
import '../assets/styles/VaccinationForm.css';
import { useHistory } from 'react-router-dom';

function VaccinationContainer(props) {
    // const { dataCallback } = props;
    // const [from, setFrom] = useState('Select From Location')
    // const [to, setTo] = useState('Select To Location')
    // const [name, setName] = useState('')
    // const [CNIC, setCNIC] = useState('')
    // const [passportno, setPassport] = useState('')
    const history = useHistory();

    const handleVaccination = () => {
        // if (props.Name !== "Vaccination Name") {
        //     alert('You have already verified the vaccination')
        // }
        // else {
        //     if (dataCallback !== undefined) {
        //         dataCallback({ Name: name, CNIC: CNIC, Passport: passportno, From: from, To: to })
        //     }
        // }
        history.push('/verifyvaccine')
    }

    return (
        <Container className="mt-5 pt-5">
            <div className="text-center FormBox mt-5 pt-5">
                <h3 className="mt-2 header">Vaccination Proof Verification</h3>
                <Row form className="mt-5">
                    <Col md={3}>
                        <FormGroup >
                            <Input type="text mt-2" className="inputField rounded-pill" name="name" id="exampleEmail" value={props.Batch} placeholder="Vaccination Batch #" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Input type="text mt-2" className="inputField rounded-pill" name="cnic" id="examplePassword" value={props.Name} placeholder="Vaccination Name" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Input type="text mt-2" className="inputField rounded-pill" name="dosage" id="examplePassword" value={props.Expiry} placeholder="Expiry" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Input type="text" className="inputField rounded-pill" name="dosage" id="examplePassword" value={props.Dosage} placeholder="Dosage" />
                        </FormGroup>
                    </Col>
                </Row>
                <Button color="primary" className="mt-5" onClick={handleVaccination}>Verify your vaccination</Button>
            </div>
        </Container>
    );
}

export default VaccinationContainer;


