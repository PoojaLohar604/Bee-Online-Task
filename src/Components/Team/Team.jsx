import React from "react";
import "./Team.css";
import Container from "react-bootstrap/esm/Container";
import userone from "../../assets/userone.png";
import usertwo from "../../assets/usertwo.png";
import userthree from "../../assets/userthree.png";
import userfour from "../../assets/userfour.png";
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,  // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200, // Large desktop
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // Medium screens (tablets in landscape)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Small screens (tablets in portrait)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Extra small screens (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const carouselData = [
    {
      image: userone,
      name: "Julian Jameson",
      work: "Profession",
      facebook: <FaFacebook />,
      instagram: <GrInstagram />,
      twitter: <BsTwitter />,
    },
    {
      image: usertwo,
      name: "Julian Jameson",
      work: "Profession",
      facebook: <FaFacebook />,
      instagram: <GrInstagram />,
      twitter: <BsTwitter />,
    },
    {
      image: userthree,
      name: "Julian Jameson",
      work: "Profession",
      facebook: <FaFacebook />,
      instagram: <GrInstagram />,
      twitter: <BsTwitter />,
    },
    {
      image: userfour,
      name: "Julian Jameson",
      work: "Profession",
      facebook: <FaFacebook />,
      instagram: <GrInstagram />,
      twitter: <BsTwitter />,
    },
  ];

  return (
    <div className="team-page-container">
      <Container>
        <div className="team-page-main-content">
          <div className="team-text-details">
            <h5>Team</h5>
            <h2>Get Quality Education</h2>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="team-carousel-div">
            <Slider {...settings}>
              {carouselData.map((item, index) => (
                <div className="team-center">
                  <div className="team-card" key={index}>
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.work}</p>
                  <div className="card-icons">
                    {item.facebook}
                    {item.instagram}
                    {item.twitter}
                  </div>
                </div>
                </div>
                
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
