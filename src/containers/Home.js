import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Home extends Component {
  render() {
      console.log(this);
      return (
        <Container>
            <h2 className="text-center">Hello world</h2>
        </Container>
      )
  }
};

export default Home;
