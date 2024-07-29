import React from "react";
import "../styles/UserAccountInfo.css";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import inland from "../assets/images/analitica.jpg";
import tras from "../assets/images/tras.jpg";
import SimpleBanner from "../components/SimpleBanner";

export default function UserAccountInfo() {
  return (
    <div className="profile-div p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4">Project Logistics</h2>
      <SimpleBanner
        banner_img={inland}
        banner_img_description={"Service Detail Truck Cargo"}
      />
      <p className="mb-4">
        Over the last 40 years, we have supported some of the largest Infrastructure, Mining and Oil & Gas projects across East and Central Africa with a full range of logistics services.
      </p>
      <p className="mb-4">
        Today we are the leading project logistics group in the region providing end-to-end solutions for complex projects including detailed route surveys, specialist heavy lift transport, and remote site materials handling.
      </p>
      <p className="mb-4">
        Regionally, we are accredited to carry dangerous cargo including chemicals for the mining industry. All our drivers are highly trained and all dangerous goods are escorted by specially designed spill response equipped vehicles.
      </p>

      <h3 className="text-center text-xl font-semibold mt-6 mb-4">Out-of-Gauge and Heavy Haulage</h3>
      <SimpleBanner
        banner_img={tras}
        banner_img_description={"Service Detail Truck Cargo"}
      />
      <p className="mb-4">
        Our transport arms, Transeast and Mainline Carriers, specialise in the transport of heavy and out-of-gauge cargo to remote locations across East and Central Africa.
      </p>
      <p className="mb-4">
        Our fleet of heavy lift vehicles and equipment includes hydraulic and modular low loaders, giving us the capacity to simultaneously move multiple loads allowing timely delivery.
      </p>
      <p className="mb-4">
        With over 80 various types of material handling equipment vehicles and special trucks and trailers, our heavy lift division specialises in complex lifts for Oil & Gas equipment throughout the region. The jacking and skidding equipment enables remote site offloading and positioning.
      </p>

      
    </div>
  );
}