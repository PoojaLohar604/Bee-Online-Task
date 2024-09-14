import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  const companyInfo = ["About Us", "Career", "We are hiring", "Blog"];
  const legalInfo = [
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Disclaimer",
  ];
  const featuresInfo = [
    "Business Marketing",
    "User Analytics",
    "Live Chat",
    "Unlimited Support",
  ];
  const resourcesInfo = ["iOS & Android", "Watch a Demo", "Customers", "API"];

  const getInTouch = [
    {
      icon: <FiPhone />,
      name: "(480) 555-0103",
    },
    {
      icon: <GrLocation />,
      name: (
        <>
          4517 Washington Ave.Manchester ,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kentucky 39495
        </>
      ),
    },
    {
      icon: <MdEmail />,
      name: "debra.holt@example.com",
    },
  ];

  return (
    <div className="footer-page-container">
      <Container>
        <div className="footer-main-content">
          <div className="info">
            <h5>Company Info</h5>
            <ul>
              {companyInfo.map((data, index) => (
                <li key={index}>
                  <a href="#">{data}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="info">
            <h5>Legal</h5>
            <ul>
              {legalInfo.map((data, index) => (
                <li key={index}>
                  <a href="#">{data}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="info">
            <h5>Features</h5>
            <ul>
              {featuresInfo.map((data, index) => (
                <li key={index}>
                  <a href="#">{data}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="info">
            <h5>Resources</h5>
            <ul>
              {resourcesInfo.map((data, index) => (
                <li key={index}>
                  <a href="#">{data}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="info">
            <h5>Get In Touch</h5>
            <ul>
              {getInTouch.map((item, index) => (
                <li key={index}>
                  <a href="#">
                    {item.icon} &nbsp;{item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="copy-right">
          <div className="text-div">
            <h6>Made With Love By Figmaland All Right Reserved </h6>
          </div>
          <div className="icon-div">
            <FaFacebook />
            <GrInstagram />
            <BsTwitter />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
