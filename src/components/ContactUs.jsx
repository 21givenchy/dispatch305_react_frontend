import React from "react";

import { useEffect, useState } from "react";


import "../styles/ContactUs.css";

import { Row, Col, Form, Button } from "react-bootstrap";

import correctIcon from "../assets/icons/correct-icon.png";

import axios from "axios"



const domain = process.env.REACT_APP_API_DOMAIN_NAME



function ContactUs() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");



  const body = JSON.stringify({
    email,
    name,
    phone,
    comment,
  })


  const sendCommentHandler = async(e) => {
    e.preventDefault();
    if(!name || !email || !comment || !phone){
      alert("Please complete all the fields")
    }

    else{
      await sendComment(body);
      setEmail("");
      setName("");
      setPhone("");
      setComment("")
    }
  }


  return (
    <Row className="contact-us-row">
      <Col xs={12} sm={12} md={6} lg={6} className="contact-us-col">
        <div className="contact-us-col-body contact-us-col-first">
          <p className="contact-us-tag-p">Contact Us</p>

          <h2 className="contact-us-tag-h2">
          Don't wait any longer to contact us. We're here to find the best rates in the industry for you.
          </h2>
        </div>
      </Col>

      <Col xs={12} sm={12} md={6} lg={6} className="contact-us-col">
        <div className="contact-us-col-body contact-us-col-second">
        <p className="contact-us-tag-p"><span className="tspan">Contáctenos</span></p>

          
        </div>
      </Col>
    </Row>
  );
}



const sendComment = async(body) => {

  const config = {
    headers:{
      'Content-Type': 'application/json'
    }
  }

  const url = `${domain}/message/create-comment`;

  const axios_result = await axios.post(url, body, config).then(async(res) => {
    const result = await res.data
  }).catch((error) => {
  })

}






export default ContactUs;
