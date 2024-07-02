import { Row, Col, Container } from "react-bootstrap";

import "../styles/Footer.css";
import facebookIcon from "../assets/icons/facbook-icon.png";
import instagramIcon from "../assets/icons/instagram-icon.png";
import { Link } from "react-router-dom";


import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {useContextMenu} from "../context/MenuContext";
import {useAuth} from "../context/AuthContext";

import agreement_download from "../assets/files/Dispatch305-agreement.pdf";

function Footer() {

const {current_link, setCurrentLinkHelper} = useContextMenu();
const {user, login, logout} = useAuth();

    useEffect(() => {
    // console.log(current_link);
  }, [current_link])


  return (
    <footer className="footer">
      <Container className="footer-div">
        <Row className="footer-nav-row">
          <div className="footer-nav">

            
            

            <Link exact to="/"
              as={NavLink}  className="footer-link">
              <span className="secondary-color-span">Maintenance</span>
            </Link>
            
            <Link exact to="/"
              as={NavLink}  className="footer-link">
              <span className="secondary-color-span">Tracking</span>
            </Link>
            
            <Link exact to href="https://invoice-generator.com/thanks?invoice=1"
              as={NavLink}  className="footer-link">
              <span className="secondary-color-span">invoice Generator</span>
            </Link>

          </div>
        </Row>

        <Row className="footer-nav-row">
          <div className="list-of-usa-states-div">
          <p>2024 Urban Logistics</p>

           
          </div>
        </Row>

        

        <Row className="footer-space-row">
          <div className="footer-space-div" />
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
