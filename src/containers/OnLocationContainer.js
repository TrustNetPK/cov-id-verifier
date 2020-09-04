import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import VaccineVerificationContainer from './VaccineVerificationContainer';
import { useHistory } from 'react-router-dom';

function OnLocationContainer(props) {
    const [verifyvaccine, setVaccine] = useState(true)

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [nationality, setNationality] = useState('')
    const [doctype, setDocType] = useState('')
    const [doc_id, setDocID] = useState('')
    const [vaccinatorOrg, setVaccinatorOrg] = useState('')
    const [vacName, setVacName] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const [batch, setBatch] = useState('')
    const [dose, setDose] = useState('')
    const [unit, setUnit] = useState('')
    const [validTill, setValidTill] = useState('')
    const [nextBoosterDate, setNextBoosterDate] = useState('')
    const [vaccinatorName, setVaccinatorName] = useState('')

    const history = useHistory();


    return (
        <Container>
            {verifyvaccine &&
                <VaccineVerificationContainer dataCallback={(props) => {
                    setFirstName(props.firstname)
                    setLastName(props.lastname)
                    setGender(props.gender)
                    setDob(props.dob)
                    setNationality(props.nationality)
                    setDocType(props.doctype)
                    setDocID(props.doc_id)
                    setVaccinatorOrg(props.vaccinatorOrg)
                    setVacName(props.vacName)
                    setManufacturer(props.manufacturer)
                    setBatch(props.batch)
                    setDose(props.dose)
                    setUnit(props.unit)
                    setValidTill(props.validTill)
                    setNextBoosterDate(props.nextBoosterDate)
                    setVaccinatorName(props.vaccinatorName)
                    setVaccine(false)
                }} />
            }
            {!verifyvaccine &&
                //console.log("Next Booster Date" + nextBoosterDate)
                history.push("/verification", { firstname: firstname, lastname: lastname, gender: gender, dob: dob, nationality: nationality, doctype: doctype, doc_id: doc_id, vacName: vacName, manufacturer: manufacturer, dose: dose, unit: unit, vaccinatorName: vaccinatorName, vaccinatorOrg: vaccinatorOrg, batch: batch, validTill: validTill, nextBoosterDate: nextBoosterDate })
            }
        </Container>
    );
}

OnLocationContainer.defaultProps = {
    name: "Safi",
    CNIC: "XXXXX-XXXXXXX-X",
    Passport: "123456XBA456"
}
export default OnLocationContainer;