import React, { useState } from 'react';
import Carrucel from "./Carousel";
import { Row, Col, Container } from 'reactstrap';

const Home = (props) => {
   return (
      <Container>
         <Row>
            <Col
               xs="8"
            >
               <Carrucel />
            </Col>
         </Row>

      </Container>)
}
export default Home