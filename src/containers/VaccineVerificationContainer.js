import React, { useEffect, useState } from 'react'
import { Container, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap'
import QRComponent from '../components/QRComponent'
import services from '../services.js'
import axios from 'axios';
import { API_SECRET } from '../constants'
import { useHistory } from 'react-router-dom'
import Auth from '../helpers/Auth'
// import VaccinationStatus from '../helpers/VaccinationStatus'
import '../assets/styles/LoginContainer.css'

export var requestDocID = '';

function VaccineVerificationContainer(props) {

    const { dataCallback } = props
    const history = useHistory();
    const [QRData, setQRData] = useState("{name:safi}")
    const [message, setMessage] = useState("")
    const [connection_id, setConnectionID] = useState("")
    const [invitationState, setInvitationState] = useState("Nil")
    const [onPageLoad, setLoad] = useState(true)
    const [sendProof, setProofRequest] = useState(true)
    const [presentation_exchange_id, setPresentationExchangeID] = useState("")
    // const [credential_id, setCredId] = useState("4kfmXB6jB2jB5Knt7uskb6:3:CL:1699:vpx29pm44")

    //Vaccination Attributes
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
    //const [response, setResponse] = useState(null)


    const {
        className
    } = props;
    const [modal, setModal] = useState(true);
    const [inputDocID, setInputDocID] = useState('')
    const dialogKeyboard = false

    const toggle = () => setModal(!modal);
    const closeModal = () => {
        if (inputDocID !== '') {
            requestDocID = inputDocID
            if (connection_id === "") {
                setLoad(false)
                CreateConnectionInvite()
                setMessage("Waiting for Accepting Connection ...")
            }

            // console.log("Connection ID = " + connection_id)
            // console.log("State = " + (invitationState))
            toggle();
        }
    }

    const exit = () => {
        Auth.signout();
        history.replace('/')
    }

    const CreateConnectionInvite = async () => {
        try {
            var myObject = {}
            await services.CreateConnectionInvitation().then(function (response) {
                console.log("Response of Create Connection Invite: " + JSON.stringify(response.data));
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
                // console.log("Invitation Link: " + JSON.stringify(jsonData.inviatation))
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

    const VerifierGetConnectionInfo = async () => {
        var headers = {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
            "X-API-Key": `${API_SECRET}`
        };
        axios.get('/connections/' + connection_id, { headers }).then((response) => {
            var jsonData = JSON.parse(JSON.stringify(response.data))
            setMessage("Accepting the invitation of yours ...")
            setInvitationState(jsonData.state)
            // console.log("Setting invitationState" + invitationState);

        })
            .catch(function (error) {
                console.log(error);
            });
    }

    const VerifierSendProofRequest = async () => {
        setMessage("Sending Request to Verify the Credentials ...")
        var headers = {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
            "X-API-Key": `${API_SECRET}`
        };
        var proofRequestObject = {}
        proofRequestObject.connection_id = connection_id
        proofRequestObject.proof_request = {}
        proofRequestObject.proof_request.name = "Proof of COVID Vaccination"
        proofRequestObject.proof_request.version = "1.0"
        proofRequestObject.proof_request.requested_attributes = {}
        proofRequestObject.proof_request.requested_attributes.attr1_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr1_referent.name = "cred_type"
        proofRequestObject.proof_request.requested_attributes.attr1_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr2_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr2_referent.name = "vaccine_name"
        proofRequestObject.proof_request.requested_attributes.attr2_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr3_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr3_referent.name = "manufacturer"
        proofRequestObject.proof_request.requested_attributes.attr3_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr4_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr4_referent.name = "batch_no"
        proofRequestObject.proof_request.requested_attributes.attr4_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr5_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr5_referent.name = "dose"
        proofRequestObject.proof_request.requested_attributes.attr5_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr6_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr6_referent.name = "dose_unit"
        proofRequestObject.proof_request.requested_attributes.attr6_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr7_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr7_referent.name = "validate_from"
        proofRequestObject.proof_request.requested_attributes.attr7_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr8_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr8_referent.name = "validate_to"
        proofRequestObject.proof_request.requested_attributes.attr8_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr9_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr9_referent.name = "next_booster_date"
        proofRequestObject.proof_request.requested_attributes.attr9_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr10_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr10_referent.name = "vaccinator_org"
        proofRequestObject.proof_request.requested_attributes.attr10_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr11_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr11_referent.name = "vaccinator_did"
        proofRequestObject.proof_request.requested_attributes.attr11_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr12_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr12_referent.name = "vaccinator_name"
        proofRequestObject.proof_request.requested_attributes.attr12_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr13_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr13_referent.name = "vaccinator_org_loc"
        proofRequestObject.proof_request.requested_attributes.attr13_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr14_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr14_referent.name = "vaccinator_org_type"
        proofRequestObject.proof_request.requested_attributes.attr14_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr15_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr15_referent.name = "vaccinator_org_logo"
        proofRequestObject.proof_request.requested_attributes.attr15_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr16_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr16_referent.name = "first_name"
        proofRequestObject.proof_request.requested_attributes.attr16_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr17_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr17_referent.name = "last_name"
        proofRequestObject.proof_request.requested_attributes.attr17_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr18_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr18_referent.name = "dob"
        proofRequestObject.proof_request.requested_attributes.attr18_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr19_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr19_referent.name = "nationality"
        proofRequestObject.proof_request.requested_attributes.attr19_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr20_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr20_referent.name = "gender"
        proofRequestObject.proof_request.requested_attributes.attr20_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr21_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr21_referent.name = "accreditor_cred_def_id"
        proofRequestObject.proof_request.requested_attributes.attr21_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr22_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr22_referent.name = "id_doc_type"
        proofRequestObject.proof_request.requested_attributes.attr22_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_attributes.attr23_referent = {}
        proofRequestObject.proof_request.requested_attributes.attr23_referent.name = "doc_id"
        proofRequestObject.proof_request.requested_attributes.attr23_referent.restrictions = [{ "cred_def_id": requestDocID }]

        proofRequestObject.proof_request.requested_predicates = {}
        var proof_request = JSON.stringify(proofRequestObject)
        // console.log(proof_request)

        axios.post('/present-proof/send-request', proof_request, { headers }).then(function (response) {
            var jsonData = JSON.parse(JSON.stringify(response.data))
            // console.log(jsonData.presentation_exchange_id);
            setPresentationExchangeID(jsonData.presentation_exchange_id)
            setProofRequest(false)
            console.log("Setting Proof Request = " + sendProof);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    const VerifierVerifyProof = async () => {
        setMessage("Verifying the Credentials ...")
        var headers = {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
            "X-API-Key": `${API_SECRET}`
        };
        axios.post('/present-proof/records/' + presentation_exchange_id + '/verify-presentation', {}, { headers }).then(function (response) {
            var jsonData = JSON.parse(JSON.stringify(response.data))
            console.log("Verify Proof" + jsonData.state);
            if (jsonData.state === "verified") {
                var attr_data = JSON.parse(JSON.stringify((jsonData.presentation.requested_proof.revealed_attrs)))
                setVacName(attr_data.attr2_referent.raw)
                setManufacturer(attr_data.attr3_referent.raw)
                setBatch(attr_data.attr4_referent.raw)
                setDose(attr_data.attr5_referent.raw)
                setUnit(attr_data.attr6_referent.raw)
                setValidTill(attr_data.attr8_referent.raw)
                setNextBoosterDate(attr_data.attr9_referent.raw)
                setVaccinatorOrg(attr_data.attr10_referent.raw)
                setVaccinatorName(attr_data.attr12_referent.raw)
                setFirstName(attr_data.attr16_referent.raw)
                setLastName(attr_data.attr17_referent.raw)
                setDob(attr_data.attr18_referent.raw)
                setNationality(attr_data.attr19_referent.raw)
                setGender(attr_data.attr20_referent.raw)
                setDocType(attr_data.attr22_referent.raw)
                setDocID(attr_data.attr23_referent.raw)
                setVaccine(true)
                // console.log(attr_data.attr1_referent.raw)

            }

            //console.log("Setting Proof Request = " + sendProof);
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        // if (connection_id === "" && onPageLoad) {
        //     setLoad(false)
        //     CreateConnectionInvite()
        //     setMessage("Waiting for Accepting Connection ...")
        // }

        // // console.log("Connection ID = " + connection_id)
        // console.log("State = " + (invitationState))


        const interval = setInterval(() => {
            if (invitationState !== "response" && requestDocID !== '') {
                VerifierGetConnectionInfo()
            }
            else if (invitationState === "response" && sendProof) {
                VerifierSendProofRequest()
                setProofRequest(false)
                console.log("Setting Proof Request = " + sendProof);
            }
            else if (!sendProof && presentation_exchange_id !== "") {
                console.log("Verify Proof = " + presentation_exchange_id);
                VerifierVerifyProof()
            }

            if (verifyvaccine) {
                dataCallback({
                    vacName: vacName,
                    manufacturer: manufacturer,
                    batch: batch,
                    dose: dose,
                    unit: unit,
                    validTill: validTill,
                    nextBoosterDate: nextBoosterDate,
                    vaccinatorName: vaccinatorName,
                    vaccinatorOrg: vaccinatorOrg,
                    firstname: firstname,
                    lastname: lastname,
                    gender: gender,
                    dob: dob,
                    nationality: nationality,
                    doctype: doctype,
                    docID: docID,

                })
            }

        }, 5000);
        return () => clearInterval(interval);

        // setTimeout(() => {
        //     dataCallback(props)
        // }, 5000)

    }, [invitationState, connection_id, sendProof, presentation_exchange_id, verifyvaccine]);


    return (
        <Container className="text-center justify-content-center pt-5 mt-5">
            {(invitationState === "invitation") && <h5 className="pb-4 ">Show this QR to the passenger vaccination holder, Get it scanned by their phone</h5>}
            <Container>
                <Col>
                    {(invitationState === "Nil" && (modal === false) && <div className="vertical-center">Please Wait ...</div>)}
                    {(invitationState === "invitation") && (modal === false) && <QRComponent value={QRData} />}
                    {(invitationState === "response") && (modal === false) && <div className="vertical-center">{message}</div>}
                </Col>
            </Container>

            <Modal isOpen={modal} toggle={toggle} className={className} keyboard={dialogKeyboard} backdrop="static" centered>
                <ModalHeader>User Travel Document ID</ModalHeader>
                <ModalBody>
                    <Input type="text" placeholder="Enter Document ID Here" onChange={(e) => setInputDocID(e.target.value)} rows={5} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={closeModal}>Continue</Button>{' '}
                    <Button color="danger" onClick={exit}>Exit</Button>{' '}
                </ModalFooter>
            </Modal>
        </Container>
    )
}

// VaccineVerificationContainer.defaultProps = {
//     vacName: "SARS-CoV2",
//     manufacturer: "Moderna",
//     batch: "GHE-343r4",
//     dose: "0.2",
//     unit: "ml",
//     validTill: "12-31-2030",
//     nextBoosterDate: "12-31-2030",
//     vaccinatorName: "Dr. Zeeshan Ali",
//     vaccinatorOrg: "WeCare Hospital",
//     firstname: "Ali",
//     lastname: "Ahsan",
//     gender: "Male",
//     dob: "1990-02-21",
//     nationality: "Pakistani",
//     doctype: "Passport",
//     docID: "CV83831643",
// }
export default VaccineVerificationContainer