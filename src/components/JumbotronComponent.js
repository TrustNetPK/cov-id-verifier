import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import Auth from '../helpers/Auth';
import { useHistory } from 'react-router-dom';
import VaccinationStatus from '../helpers/VaccinationStatus';
import BannerImage from '../assets/resources/bannerimg.png'

const JumbotronComponent = () => {
  const history = useHistory();




  return (
    <div>
      <Jumbotron fluid>
        <Row form >
          <Col md={6}>
            <Container fluid className="pt-2 pl-5 ">
              <h1 className="display-5">Travel Easy with <br />Vaccination Certificates</h1>
              <p className="display-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>


              <p className="lead">
                <Button color="primary" className="mr-5" onClick={() => {
                  VaccinationStatus.isVaccinated(false)
                  history.push('/bookticket')
                }}>Try Online Booking Demo</Button>
                <Button color="primary" onClick={() => {
                  let auth_login = Auth.getAuth();
                  if (auth_login == null) {
                    history.push('/login')
                  }
                  else {
                    history.push('/onlocation')
                  }
                }}>Try On Location Demo</Button>
              </p>
            </Container>
          </Col>
          <Col md={6} className="text-center">
            <img className="text-center" src={BannerImage} alt="Logo" />
          </Col>
        </Row>
      </Jumbotron>
    </div >
  );
};

export default JumbotronComponent;