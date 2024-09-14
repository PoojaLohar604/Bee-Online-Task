import React from "react";
import "./Packages.css";
import Container from "react-bootstrap/Container";
import { IoIosArrowForward } from "react-icons/io";
import certificate from "../../assets/certificate.png";
import telescope from '../../assets/telescope.png'

const Packages = () => {
  const cardData = [
    {
      icon: certificate,
      title: "Certified Teacher",
      details: "The gradual accumulation of information about ",
    },
    {
        icon: telescope,
        title: "Expert instruction",
        details: "The gradual accumulation of information about ",
    }
  ];
  return (
    <div className="packages-page-container">
      <Container>
        <div className="packages-main-content">
          <div className="packages-left-div">
            <div className="red-line-div"> </div>
            <h2>Approdable Packages</h2>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
            <button className="button-svg">
              Learn More <IoIosArrowForward className="arrow-icon" />
            </button>
          </div>
          <div className="packages-right-div">
            <div className="center-card">
            {cardData.map((data,index)=>(
             <div className="packages-card" key={index}>
                <img src={data.icon}/>
                <h5>{data.title}</h5>
                <div className="red-line"></div>
                <p>{data.details}</p>
             </div>
            ))}
            </div>
    
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Packages;
