import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const JumbotronComponent = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid className="pt-2 pl-5 pr-5">
          <h1 className="display-5 text-break">Travel Easy with <br />Vaccination Certificates</h1>
          <p className="display-9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>


          <p className="lead">
            <Button color="primary" className="mr-3">Try Online Booking Demo</Button>
            <Button color="primary">Try On Location Demo</Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;