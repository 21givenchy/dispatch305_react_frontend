import React from "react";
import "../styles/Service.css";

import { Button } from "react-bootstrap";
import SimpleBanner from "../components/SimpleBanner";

import dollarIcon from "../assets/icons/money-icon.png";
import trucks from "../assets/images/trucks.jpg";
import { Link } from "react-router-dom";

export default function Service() {
  return (
    <div>
      <SimpleBanner
        banner_img={trucks}
        banner_img_description={"Service Detail Truck Cargo"}
      />

      <div className="spacer" />

      <h2 className="text-center service-custom-header2">
        <span className="service-din-alternate-bold-font">
          Choose the service of your preference
        </span>
      </h2>

      <div className="service-dollar-icon-div">
        <img src={dollarIcon} alt="Folder Icon Truck Cargo" />
      </div>

      <h4 className="text-center service-custom-title">
        And you can get the following services
      </h4>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        <div className="max-w-xs rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 p-6">
          <h4 className="service-plan-title text-xl font-bold">Road Freight</h4>
          <p className="service-p">
            We are able to offer dedicated road freight services as well as pre-carriage and on-carriage as part of a multi-modal, door-to-door solution.
            <br />
            Through Transeast, our subsidiary transport company, we provide a range of road transport solutions to inland.
          </p>
        </div>

        <div className="max-w-xs rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 p-6">
          <h4 className="service-plan-title text-xl font-bold">Project Logistics</h4>
          <p className="service-p">
            We specialise in project logistics services, offering an integrated approach and tailored solutions at international standards for complex projects across all sectors.
          </p>
        </div>

        <div className="max-w-xs rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 p-6">
          <h4 className="service-plan-title text-xl font-bold">Contract Logistics</h4>
          <p className="service-p">
            Our contract logistics arm, Freight Forwarders Solutions, provides warehousing, inventory management, and secondary distribution solutions.
          </p>
        </div>
      </div>

      <div className="service-button-div text-center mt-6">
        <Link to="/create-account">
          <Button variant="primary" className="service-button">
            START NOW!
          </Button>
        </Link>
      </div>
    </div>
  );
}