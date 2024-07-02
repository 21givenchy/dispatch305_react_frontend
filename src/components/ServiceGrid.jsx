import React from "react";

import "../styles/ServiceGrid.css";

import {Row, Col, Card} from 'react-bootstrap';

import busqueda_img from "../assets/images/busqueda.jpg";
import imaee from "../assets/images/services.jpg"
import precio_img from "../assets/images/precio.jpg";
import setup_img from "../assets/images/setup.jpg";
import detention_img from "../assets/images/detention.jpg";
import complemento_img from "../assets/images/complemento.jpg";
import analitica_img from "../assets/images/analitica.jpg";

function ServiceGrid() {
  return (
      <div className='service-grid-div'>
      <Row className="service-grid-row">
          <Col xs={12} sm={12} md={6} lg={4} className="service-grid-col">
              <Card className="service-grid-card">
                  <img src={imaee} alt="Search Truck Cargo" width={"100%"} height={"100%"} className="service-grid-card-img"/>
              </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} className="service-grid-col">
              <Card className="service-grid-card">
                  <img src={imaee} alt="Negotiating Truck Cargo" width={"100%"} height={"100%"} className="service-grid-card-img"/>
              </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} className="service-grid-col">
              <Card className="service-grid-card">
                  <img src={imaee} alt="Setup Truck Cargo" width={"100%"} height={"100%"} className="service-grid-card-img"/>
              </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} className="service-grid-col">
              <Card className="service-grid-card">
                  <img src={imaee} alt="Detention Truck Cargo" width={"100%"} height={"100%"} className="service-grid-card-img"/>
              </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} className="service-grid-col">
              <Card className="service-grid-card">
                  <img src={imaee} alt="Completing Truck Cargo" width={"100%"} height={"100%"} className="service-grid-card-img"/>
              </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} className="service-grid-col">
              <Card className="service-grid-card">
                  <img src={imaee} alt="Analytics Truck Cargo" width={"100%"} height={"100%"} className="service-grid-card-img"/>
              </Card>
          </Col>
      </Row>
      </div>
  );
}

export default ServiceGrid;
