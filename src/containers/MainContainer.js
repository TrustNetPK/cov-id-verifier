import React from 'react';
import { Container } from 'reactstrap';
import JumbotronComponent from '../components/JumbotronComponent';

function MainContainer() {
    return (
        <Container fluid style={{ backgroundColor: '#dae5f2' }}>
            <JumbotronComponent />
        </Container>
    );
}

export default MainContainer;