import React, { useState } from 'react';
import { Container } from 'reactstrap';
import VaccineVerificationContainer from './VaccineVerificationContainer';
import { useHistory } from 'react-router-dom';

function OnLocationContainer(props) {
    const [verifyvaccine, setVaccine] = useState(true)
    const [name, setName] = useState('')
    const [CNIC, setCNIC] = useState('')
    const [passportno, setPassport] = useState('')
    const history = useHistory();
    return (
        <Container>
            {verifyvaccine &&
                <VaccineVerificationContainer dataCallback={(props) => {
                    setName("Safi ur Rehman")
                    setCNIC("XXXXX-XXXXXXX-X")
                    setPassport('123456XBA456')
                    setVaccine(false)

                }}
                />
            }
            {!verifyvaccine &&
                history.push("/verification", { Name: name, CNIC: CNIC, Passport: passportno })

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