import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import Auth from '../helpers/Auth';
import { useHistory } from 'react-router-dom';
import VaccinationStatus from '../helpers/VaccinationStatus';
import bannerImg from '../assets/images/banner-img-1.png'
import '../assets/styles/JumbotronComponent.css';

const JumbotronComponent = () => {
  const history = useHistory();

  return (
    <header>
      <div className="container-fluid text-center" >
        <div className="row mt-5 pt-3" >
          <div className="col-md-7 mt-5 pt-5 col-sm-12">
            <h1 className="mt-5">Travel Easy with <br />Vaccination Certificates!</h1>
            <p>This is what we believe at Vaccify.</p>
            <p className="lead">
              We enable you to hold digital verifiable immunity certificates in your mobile.</p>
            <Button className="mt-5" outline size="lg" color="primary"  onClick={() => {
              VaccinationStatus.isVaccinated(false)
              history.push('/bookticket')
            }}>Try Online Booking Demo</Button>
            <Button  className="mt-5 ml-3" outline color="primary" size="lg" onClick={() => {
              let auth_login = Auth.getAuth();
              if (auth_login == null) {
                history.push('/login')
              }
              else {
                history.push('/onlocation')
              }
            }}>Try On Location Demo</Button>
            </div>
          <div class="col-md-5 mt-2 p-5 col-sm-12">
            <img src={bannerImg} alt="CovidPerson" />
          </div>
        </div>
      </div>
      </header>
  );
};

export default JumbotronComponent;