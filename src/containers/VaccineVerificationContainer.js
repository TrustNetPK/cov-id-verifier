import React, { useEffect } from 'react'
import { Container, Col } from 'reactstrap'
import QRComponent from '../components/QRComponent'
// import VaccinationStatus from '../helpers/VaccinationStatus'



function VaccineVerificationContainer(props) {

    const { dataCallback } = props

    useEffect(() => {
        setTimeout(() => {
            dataCallback(props)
        }, 5000);
    });

    return (
        <Container className="text-center justify-content-center pt-5 mt-5">
            <h5 className="pb-4 ">Show this QR to the passenger vaccination holder, Get it scanned by their phone</h5>
            <Container>
                <Col>
                    <QRComponent value={JSON.stringify(props)} />
                </Col>
            </Container>
        </Container>
    )
}

VaccineVerificationContainer.defaultProps = {
    vacName: "SARS-CoV2",
    manufacturer: "Moderna",
    batch: "GHE-343r4",
    dose: "0.2",
    unit: "ml",
    validTill: "12-31-2030",
    nextBoosterDate: "12-31-2030",
    vaccinatorName: "Dr. Zeeshan Ali",
    vaccinatorOrg: "WeCare Hospital",
    firstname: "Ali",
    lastname: "Ahsan",
    gender: "Male",
    dob: "1990-02-21",
    nationality: "Pakistani",
    doctype: "Passport",
    docID: "CV83831643",

}

export default VaccineVerificationContainer