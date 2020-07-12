import React from 'react'
import { Container, Col } from 'reactstrap'
import QRComponent from '../components/QRComponent'
// import VaccinationStatus from '../helpers/VaccinationStatus'



function VaccineVerificationContainer(props) {
    // const [isVaccinated, checkVaccine] = useState(false)
    // const { dataCallback } = props

    // useEffect(() => {
    //     checkVaccine(true)
    //     VaccinationStatus.isVaccinated(isVaccinated)
    // dataCallback(props)
    // });

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
    Batch: "0057",
    Name: "COVID 19 Vaccine",
    Expiry: "01/01/2022",
    Dosage: "2 mm"
}

export default VaccineVerificationContainer