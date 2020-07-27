import React, { useEffect, useState } from 'react'
import { Container, Col } from 'reactstrap'
import QRComponent from '../components/QRComponent'
import services from '../services.js'

// import VaccinationStatus from '../helpers/VaccinationStatus'



function VaccineVerificationContainer(props) {

    const { dataCallback } = props
    const [QRData, setQRData] = useState("{name:safi}")
    const [connection_id, setConnectionID] = useState(" ")
    const [onPageLoad, setLoad] = useState(true)
    //const [response, setResponse] = useState(null)

    const CreateConnectionInvite = async () => {
        try {
            var myObject = {}
            var headers = {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Credentials": "true",
                "X-API-Key": "secret"
            };
            await services.CreateConnectionInvitation().then(function (response) {
                console.log(response.data);
                var jsonData = JSON.parse(JSON.stringify(response.data))
                myObject.type = "connection_proof"
                myObject.data = {}
                myObject.data.cred_type = "request"
                myObject.data.vaccine_name = "request"
                myObject.data.manufacturer = "request"
                myObject.data.batch_no = "request"
                myObject.data.dose = "request"
                myObject.data.dose_unit = "request"
                myObject.data.validate_from = "request"
                myObject.data.validate_to = "request"
                myObject.data.next_booster_date = "request"
                myObject.data.vaccinator_org = "request"
                myObject.data.vaccinator_did = "request"
                myObject.data.vaccinator_name = "request"
                myObject.data.vaccinator_org_loc = "request"
                myObject.data.vaccinator_org_type = "request"
                myObject.data.vaccinator_org_logo = "request"
                myObject.data.first_name = "request"
                myObject.data.last_name = "request"
                myObject.data.dob = "request"
                myObject.data.nationality = "request"
                myObject.data.gender = "request"
                myObject.data.accreditor_cred_def_id = "request"
                myObject.data.id_doc_type = "request"
                myObject.data.doc_id = "request"
                myObject.org = {}
                myObject.org.name = "Civil Aviation Authorities"
                myObject.org.img = "IMG_URL"
                myObject.invitation = jsonData.invitation
                setConnectionID(jsonData.connection_id)
                setQRData(JSON.stringify(myObject))


            })
                .catch(function (error) {
                    console.log(error);
                });


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // if (onPageLoad) {
        //     setLoad(false)
        //     CreateConnectionInvite()
        // }

        const interval = setInterval(() => {
            console.log('This will run every 5 second!');
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // setTimeout(() => {
    //     //dataCallback(props)
    // }, 5000);


    return (
        <Container className="text-center justify-content-center pt-5 mt-5">
            <h5 className="pb-4 ">Show this QR to the passenger vaccination holder, Get it scanned by their phone</h5>
            <Container>
                <Col>
                    <QRComponent value={QRData} />

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