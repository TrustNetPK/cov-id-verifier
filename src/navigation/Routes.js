import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainContainer from '../containers/MainContainer'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import LoginContainer from '../containers/LoginContainer'
import BookTicketContainer from '../containers/BookTicketContainer'
import Auth from '../helpers/Auth'
import NoAuthContainer from '../containers/NoAuthContainer'
import VaccineVerificationContainer from '../containers/VaccineVerificationContainer'
import VerificationContainer from '../containers/VerificationContainer'
import OnLocationContainer from '../containers/OnLocationContainer'
import VaccinationContainer from '../containers/VaccinationContainer'

const PrivateRoute = ({ component, ...options }) => {
    const finalComponent = Auth.getAuth() ? component : NoAuthContainer;
    return <Route {...options} component={finalComponent} />;
};

function Routes() {
    return (
        <Router>
            <div>
                <Route component={HeaderComponent} />
                <Switch>
                    <PrivateRoute path="/onlocation" component={OnLocationContainer} />
                    <Route path="/verification" component={VerificationContainer} />
                    <Route path="/proof" component={VaccinationContainer} />
                    <Route path="/verifyvaccine" component={VaccineVerificationContainer} />
                    <Route path="/bookticket" component={BookTicketContainer} />
                    <Route path="/noauth" component={NoAuthContainer} />
                    <Route path="/" exact component={MainContainer} />
                    <Route path="/login" component={LoginContainer} />
                </Switch>
                <FooterComponent />
            </div>
        </Router>
    )
}

export default Routes