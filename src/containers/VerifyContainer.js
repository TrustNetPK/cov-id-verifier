import React, { useState } from 'react';
import { Container } from 'reactstrap';
import VaccinationContainer from './VaccinationContainer'
import VaccineVerificationContainer from './VaccineVerificationContainer';


function VerifyContainer(props) {
    const [verifyvaccine, setVaccine] = useState(false)
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [nationality, setNationality] = useState('')
    const [doctype, setDocType] = useState('')
    const [docID, setDocID] = useState('')
    const [vaccinatorOrg, setVaccinatorOrg] = useState('')
    const [vacName, setVacName] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const [batch, setBatch] = useState('')
    const [dose, setDose] = useState('')
    const [unit, setUnit] = useState('')
    const [validTill, setValidTill] = useState('')
    const [nextBoosterDate, setNextBoosterDate] = useState('')
    const [vaccinatorName, setVaccinatorName] = useState('')

    return (
        <Container className="pt-2 mt-2 mb-5 ">
            {!verifyvaccine && <VaccinationContainer From={props.location.state.from}
                To={props.location.state.to}
                departureDate={props.location.state.departureDate}
                returnDate={props.location.state.returnDate}
                passenger={props.location.state.passenger}
                cabin={props.location.state.cabin}
                vacName={vacName}
                manufacturer={manufacturer}
                batch={batch}
                dose={dose}
                unit={unit}
                validTill={validTill}
                nextBoosterDate={nextBoosterDate}
                vaccinatorName={vaccinatorName}
                firstname={firstname}
                lastname={lastname}
                gender={gender}
                dob={dob}
                nationality={nationality}
                doctype={doctype}
                docID={docID}
                vaccinatorOrg={vaccinatorOrg}
                dataCallback={(props) => {
                    setVaccine(true)
                }} />}
            {verifyvaccine && <VaccineVerificationContainer dataCallback={(props) => {
                setFirstName(props.firstname)
                setLastName(props.lastname)
                setGender(props.gender)
                setDob(props.dob)
                setVaccine(false)
                setNationality(props.nationality)
                setDocType(props.doctype)
                setDocID(props.docID)
                setVaccinatorOrg(props.vaccinatorOrg)
                setVacName(props.vacName)
                setManufacturer(props.manufacturer)
                setBatch(props.batch)
                setDose(props.dose)
                setUnit(props.unit)
                setValidTill(props.validTill)
                setNextBoosterDate(props.nextBoosterDate)
                setVaccinatorName(props.vaccinatorName)
            }} />}
        </Container>
    );
}
export default VerifyContainer;