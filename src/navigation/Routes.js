import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainContainer from '../containers/MainContainer'
import HeaderComponent from '../components/HeaderComponent'
import PIAHeaderComponent from '../components/PIAHeaderComponent'
import CAAHeaderComponent from '../components/CAAHeaderComponent'
import FooterComponent from '../components/FooterComponent'
import LoginContainer from '../containers/LoginContainer'
import VaccineVerification from '../containers/VerifyContainer'
import BookTicketContainer from '../containers/BookTicketContainer'
import Auth from '../helpers/Auth'
import NoAuthContainer from '../containers/NoAuthContainer'
import VaccineVerificationContainer from '../containers/VaccineVerificationContainer'
import VerificationContainer from '../containers/VerificationContainer'
import OnLocationContainer from '../containers/OnLocationContainer'
import VaccinationContainer from '../containers/VaccinationContainer'

const PrivateRoute = ({ component, ...options }) => {
    var headerComponent = undefined
    if (localStorage.getItem("demo") === "PIA") {
        headerComponent = PIAHeaderComponent
    } else if (localStorage.getItem("demo") === "CAA") {
        headerComponent = CAAHeaderComponent
    } else {
        headerComponent = HeaderComponent
    }
    // const headerComponent = localStorage.getItem("demo") === "PIA" ? PIAHeaderComponent : HeaderComponent;
    const finalComponent = Auth.getAuth() ? component : NoAuthContainer;
    return (
        <div>
            <Route component={headerComponent} />
            <Route {...options} component={finalComponent} />
        </div>
    );
};

const HeaderRoute = ({ component, bodycomponent, ...options }) => {
    // const finalComponent = localStorage.getItem("demo") === "PIA" ? PIAHeaderComponent : HeaderComponent;
    var finalComponent = undefined
    if (localStorage.getItem("demo") === "PIA") {
        finalComponent = PIAHeaderComponent
    } else if (localStorage.getItem("demo") === "CAA") {
        finalComponent = CAAHeaderComponent
    } else {
        finalComponent = HeaderComponent
    }
    return (
        <div>
            <Route component={finalComponent} />
            <Route {...options} component={bodycomponent} />
        </div>
    )
};

function Routes() {
    return (
        <Router>
            <div>
                <Route component={HeaderComponent} />
                <Switch>
                    <PrivateRoute path="/onlocation" component={OnLocationContainer} />
                    <HeaderRoute path="/verification" bodycomponent={VerificationContainer} />
                    <HeaderRoute path="/proof" bodycomponent={VaccinationContainer} />
                    <HeaderRoute path="/verifyvaccine" bodycomponent={VaccineVerificationContainer} />
                    <HeaderRoute path="/vaccineverification" bodycomponent={VaccineVerification} />
                    <HeaderRoute path="/bookticket" bodycomponent={BookTicketContainer} />
                    <HeaderRoute path="/noauth" bodycomponent={NoAuthContainer} />
                    <Route path="/" exact component={MainContainer} />
                    <HeaderRoute path="/login" bodycomponent={LoginContainer} />
                </Switch>
                <FooterComponent />
            </div>
        </Router>
    )
}

export default Routes