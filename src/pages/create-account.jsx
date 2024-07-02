import React from "react";
import "../styles/CreateAccount.css";

import { useEffect, useState } from "react";

import axios from "axios"

import { Button, Row, Col, Form } from "react-bootstrap";
import SimpleBanner from "../components/SimpleBanner";

import banner5 from "../assets/images/banner5.jpeg";

import regularFolderIcon from "../assets/icons/folder-icon.png";

import { useNavigate } from "react-router-dom";


  return (
    <div>
      <SimpleBanner
        banner_img={banner5}
        banner_img_description="Create Account Truck Cargo"
      />

      <div className="spacer" />

      <h2 className="text-center create-account-custom-header2">
        <span className="create-account-din-alternate-bold-font">
        Easy Start for Logistics Partners
        </span>
      </h2>

      <div className="create-account-folder-icon-div">
        <img src={regularFolderIcon} alt="Folder Icon Truck Cargo" />
      </div>

      <h4 className="text-center create-account-custom-title">
      Unleash Efficient Cargo Management
      </h4>

      <div className="create-account-paragraph-div">
        <p className="create-account-paragraph-p">
        Establish a smooth partnership with us by providing the necessary documents to create your account and enable us to negotiate on your behalf. Your documents will be stored securely and used exclusively for your company's purposes.
        </p>
      </div>

      <h4 className="text-center create-account-custom-title">
      Join our network of trusted logistics partners and experience the ease of efficient cargo management.
      </h4>
      </div>
</div>
    
     
}
