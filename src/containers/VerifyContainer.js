import React, { useState } from 'react';
import { Container } from 'reactstrap';
import VaccinationContainer from './VaccinationContainer'
import VaccineVerificationContainer from './VaccineVerificationContainer';


function VerifyContainer(props) {
    const [verifyvaccine, setVaccine] = useState(false)
    const [dosage, setDosage] = useState('Dosage')
    const [batch, setBatch] = useState('Vaccination Batch #')
    const [expiry, setExpiry] = useState('Expiry')
    const [vaccName, setVaccName] = useState('Vaccination Name')

    return (
        <Container className="pt-2 mt-2 mb-5 ">
            {!verifyvaccine && <VaccinationContainer From={props.location.state.from} To={props.location.state.to} PersonName={props.location.state.PersonName} Passport={props.location.state.Passport} Cnic={props.location.state.CNIC} Name={vaccName} Expiry={expiry} Batch={batch} Dosage={dosage} dataCallback={(props) => {
                setVaccine(true)
            }} />}
            {verifyvaccine && <VaccineVerificationContainer dataCallback={(props) => {
                setDosage(props.Dosage)
                setExpiry(props.Expiry)
                setVaccName(props.Name)
                setBatch(props.Batch)
                setVaccine(false)
            }} />}
        </Container>
    );
}
export default VerifyContainer;