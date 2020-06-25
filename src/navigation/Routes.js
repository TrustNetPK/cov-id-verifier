import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainContainer from '../containers/MainContainer'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'

function Routes() {
    return (
        <Router>
            <div>
                <Route component={HeaderComponent} />
                <Switch>
                    <Route path="/" exact component={MainContainer} />
                </Switch>
                <FooterComponent />
            </div>
        </Router>
    )
}

export default Routes