import React from "react";
import "../styles/CreateAccount.css";
import SimpleBanner from "../components/SimpleBanner";
import road from "../assets/images/road.jpg";
import regularFolderIcon from "../assets/icons/folder-icon.png";
import { useNavigate } from "react-router-dom";

function Services() {
  return (
    <>
      <SimpleBanner
        banner_img={road}
        banner_img_description="Create Account Truck Cargo"
      />

      <h4 className="text-center create-account-custom-header2">
        <span className="create-account-din-alternate-bold-font">
          Easy Start for Logistics Partners
        </span>
      </h4>

      <div className="create-account-folder-icon-div">
        <img src={regularFolderIcon} alt="Folder Icon Truck Cargo" />
      </div>

      <h2 className="text-center create-account-custom-title">
        Unleash Efficient Cargo Management
      </h2>

      <div className="create-account-paragraph-div">
        <p className="create-account-paragraph-p">
          Establish a smooth partnership with us by providing the necessary documents to create your account and enable us to negotiate on your behalf. Your documents will be stored securely and used exclusively for your company's purposes.
        </p>
      </div>

      <h4 className="text-center create-account-custom-title">
        Why Urban Trucks
      </h4>

      <div className="flex flex-wrap justify-around">
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-6 bg-white">
          <div className="flex items-center justify-center mb-4">
            <img src={regularFolderIcon} alt="Local Knowledge Icon" className="w-12 h-12"/>
          </div>
          <h5 className="text-xl font-bold mb-2">Local Knowledge</h5>
          <p>Intimate knowledge of the regional operating environment, with 88 years experience tackling logistics challenges in East and Central Africa.</p>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-6 bg-white">
          <div className="flex items-center justify-center mb-4">
            <img src={regularFolderIcon} alt="Integrated Supply Chain Icon" className="w-12 h-12"/>
          </div>
          <h5 className="text-xl font-bold mb-2">Integrated Supply Chain</h5>
          <p>Fully integrated supply chain with strategic corridor assets and specialised transport assets across the region.</p>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-6 bg-white">
          <div className="flex items-center justify-center mb-4">
            <img src={regularFolderIcon} alt="Solutions Design Icon" className="w-12 h-12"/>
          </div>
          <h5 className="text-xl font-bold mb-2">Solutions Design</h5>
          <p>Track record in designing complex logistics solutions to international standards and satisfying customers.</p>
        </div>
        <div className="w-100 rounded overflow-hidden shadow-lg m-4 p-6 bg-white">
          <div className="flex items-center justify-center mb-4">
            <img src={regularFolderIcon} alt="Technical Expertise Icon" className="w-12 h-12"/>
          </div>
          <h5 className="text-xl font-bold mb-2">Technical Expertise</h5>
          <p>Highly trained team experienced in delivering successful projects across some of the harshest terrains in the region.</p>
        </div>
      </div>
      
    </>
  );
}

export default Services;