import React, { useEffect, useState } from 'react'
import { Container, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap'
import QRComponent from '../components/QRComponent'
import services from '../services.js'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import Auth from '../helpers/Auth'
// import VaccinationStatus from '../helpers/VaccinationStatus'
import '../assets/styles/LoginContainer.css'
import { GET_API_SECRET, GET_VERIFIER_HOST_URL, PROXY_URL } from '../constants'

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
                // console.log("Response of Create Connection Invite: " + JSON.stringify(response.data));
                var org_name = ""
                var org_logo_url = ""
                if (localStorage.getItem("demo") === "PIA") {
                    org_name = "NIA International Airlines"
                    org_logo_url = "https://vaccify.s3.ap-south-1.amazonaws.com/images/pia.png"
                } else if (localStorage.getItem("demo") === "CAA") {
                    org_name = "Civil Aviation Authorities"
                    org_logo_url = "https://vaccify.s3.ap-south-1.amazonaws.com/images/caa.png"
                }
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
                myObject.org.name = org_name
                myObject.org.img = org_logo_url
                myObject.invitation = jsonData
                setConnectionID(jsonData['connection_id'])
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
            "X-API-Key": `${GET_API_SECRET()}`
        };
        axios.get(PROXY_URL + GET_VERIFIER_HOST_URL() + '/connections/' + connection_id, { headers }).then((response) => {
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
            "X-API-Key": `${GET_API_SECRET()}`
        };
        var proofRequestObject = {}
        proofRequestObject.connection_id = connection_id
        proofRequestObject.proof_request = {}
        proofRequestObject.proof_request.name = "Proof of Vaccination"
        proofRequestObject.proof_request.version = "1.0"
        proofRequestObject.proof_request.requested_attributes = {}
        proofRequestObject.proof_request.requested_attributes.n_group_attrs = {}
        proofRequestObject.proof_request.requested_attributes.n_group_attrs.names = [
            "cred_type",
            "vaccine_name",
            "manufacturer",
            "batch_no",
            "dose",
            "dose_unit",
            "validate_from",
            "validate_to",
            "next_booster_date",
            "vaccinator_org",
            "vaccinator_did",
            "vaccinator_name",
            "vaccinator_org_loc",
            "vaccinator_org_type",
            "vaccinator_org_logo",
            "first_name",
            "last_name",
            "dob",
            "nationality",
            "gender",
            "accreditor_cred_def_id",
            "id_doc_type",
            "doc_id"]
        proofRequestObject.proof_request.requested_attributes.n_group_attrs.restrictions = [{ "attr::doc_id::value": requestDocID }]

        proofRequestObject.proof_request.requested_predicates = {}
        var proof_request = JSON.stringify(proofRequestObject)
        // console.log(proof_request)

        axios.post(PROXY_URL + GET_VERIFIER_HOST_URL() + '/present-proof/send-request', proof_request, { headers }).then(function (response) {
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
            "X-API-Key": `${GET_API_SECRET()}`
        };
        axios.post(PROXY_URL + GET_VERIFIER_HOST_URL() + '/present-proof/records/' + presentation_exchange_id + '/verify-presentation', {}, { headers }).then(function (response) {
            var jsonData = JSON.parse(JSON.stringify(response.data))
            console.log("Verify Proof" + jsonData.state);
            if (jsonData.state === "verified") {
                var n_group_attrs = JSON.parse(JSON.stringify((jsonData.presentation.requested_proof.revealed_attr_groups.n_group_attrs)))
                setVacName(n_group_attrs.values.vaccine_name.raw)
                setManufacturer(n_group_attrs.values.manufacturer.raw)
                setBatch(n_group_attrs.values.batch_no.raw)
                setDose(n_group_attrs.values.dose.raw)
                setUnit(n_group_attrs.values.dose_unit.raw)
                setValidTill(n_group_attrs.values.validate_to.raw)
                setNextBoosterDate(n_group_attrs.values.next_booster_date.raw)
                setVaccinatorOrg(n_group_attrs.values.vaccinator_org.raw)
                setVaccinatorName(n_group_attrs.values.vaccinator_name.raw)
                setFirstName(n_group_attrs.values.first_name.raw)
                setLastName(n_group_attrs.values.last_name.raw)
                setDob(n_group_attrs.values.dob.raw)
                setNationality(n_group_attrs.values.nationality.raw)
                setGender(n_group_attrs.values.gender.raw)
                setDocType(n_group_attrs.values.id_doc_type.raw)
                setDocID(n_group_attrs.values.doc_id.raw)
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