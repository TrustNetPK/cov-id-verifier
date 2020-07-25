import React, { useEffect, useState } from 'react'
import { Container, Col } from 'reactstrap'
import QRComponent from '../components/QRComponent'
import services from '../services.js'
import axios from 'axios';
// import VaccinationStatus from '../helpers/VaccinationStatus'



function VaccineVerificationContainer(props) {

    const { dataCallback } = props
    const [QRData, setQRData] = useState("{name:safi}")
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
                myObject.data.first_name = "request"
                myObject.data.last_name = "request"
                myObject.data.cnic = "request"
                myObject.org = {}
                myObject.org.name = "Civil Aviation Authorities"
                myObject.org.img = "IMG_URL"
                myObject.invitation = jsonData.invitation
                //setQRData(JSON.stringify(JSON.parse(JSON.stringify(myObject))))
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
        if (onPageLoad) {
            setLoad(false)
            CreateConnectionInvite()
        }

        // setTimeout(() => {
        //     dataCallback(props)
        // }, 5000);
    });

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
    Batch: "0057",
    Name: "COVID 19 Vaccine",
    Expiry: "01/01/2022",
    Dosage: "2 mm"
}

export default VaccineVerificationContainer