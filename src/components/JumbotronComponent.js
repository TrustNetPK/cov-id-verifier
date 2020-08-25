import React from 'react';
import { Button } from 'reactstrap';
import Auth from '../helpers/Auth';
import { useHistory } from 'react-router-dom';
import VaccinationStatus from '../helpers/VaccinationStatus';
import bannerImg from '../assets/images/banner-img-1.png'
import '../assets/styles/JumbotronComponent.css';

const JumbotronComponent = () => {
  const history = useHistory();

  return (
    <header>
      <div className="pt-5 container-fluid text-center" >
        <div className="row mt-5 pt-5" >
          <div className="col-md-7 mt-5 pt-5 col-sm-12">
            <h1 className="mt-5">Travel Carefree with <br />Vaccination Certificates!</h1>
            <p>Vaccination certificates made reliable and easy.</p>
            <p className="lead">
              This demo shows how an institution can verify a digital immunity certificates of a person either online or face-2-face.</p>
            <Button className="mt-5" size="lg" color="success" onClick={() => {
              let auth_login = Auth.getAuth();
              if (auth_login == null) {
                localStorage.setItem('demo', "PIA");
                history.push('/login')
              }
              else {
                localStorage.setItem('demo', "PIA");
                VaccinationStatus.isVaccinated(false)
                history.push('/bookticket')
              }
            }}>Try Online Booking Demo</Button>

            <Button className="mt-5 ml-3" color="primary" size="lg" onClick={() => {
              let auth_login = Auth.getAuth();
              if (auth_login == null) {
                localStorage.setItem('demo', "CAA");
                history.push('/login')
              }
              else {
                localStorage.setItem('demo', "CAA");
                history.push('/onlocation')
              }
            }}>Try On Location Demo</Button>
          </div>
          <div class="col-md-5 mt-4 p-5 col-sm-12">
            <img src={bannerImg} alt="CovidPerson" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default JumbotronComponent;