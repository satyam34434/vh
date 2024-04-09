/*import "./about.css";
import { FiHome } from "react-icons/fi";
import NavBars from "../Sections/navbar";
import Footer from "../Sections/footer";

import member1 from "../Assets/member1.22ac1d59.jpg";
import member2 from "../Assets/member2.d03a0686.jpg";
import member3 from "../Assets/member3.0d822ecc.jpg";
import member4 from "../Assets/member4.9045579a.jpg";
import member5 from "../Assets/member5.24eb1821.jpg";
import member6 from "../Assets/member6.be2a77ad.jpg";
import ToTop from "../Sections/totop";
import { Link } from "react-router-dom";

function OurTeam() {
  return (
    <div>
      <NavBars />
      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>Doctors</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/home"}>
                      <FiHome />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Doctors
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={member3} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Piyush Agrawal</h4>
                  <span className="text-secondary">Dentist</span>

                </div>
                <ul className="social-media">
                  <li>
                 
                  </li>
                  <li>
                    
                  </li>
                  <li>
                   
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={member4} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Rajendra Patel</h4>
                  <span className="text-secondary">Cardiologist</span>
                </div>
                <ul className="social-media">
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={member6} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Salman Ajani</h4>
                  <span className="text-secondary">Neurologist</span>
                </div>
                <ul className="social-media">
                  <li>
                   
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={member1} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Addition Smith</h4>
                  <span className="text-secondary">Physiotherapist</span>
                </div>
                <ul className="social-media">
                  <li>
                    
                  </li>
                  <li>
                   
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={member2} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Mahfuz Riad</h4>
                  <span className="text-secondary">ENT</span>
                </div>
                <ul className="social-media">
                  <li>
                   
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={member5} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. David Benjamin</h4>
                  <span className="text-secondary">Operations</span>
                </div>
                <ul className="social-media">
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                   
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToTop />
    </div>
  );
}

export default OurTeam;*/




import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import NavBars from "../Sections/navbar";
import Footer from "../Sections/footer";

import member1 from "../Assets/member1.22ac1d59.jpg";
import member2 from "../Assets/member2.d03a0686.jpg";
import member3 from "../Assets/member3.0d822ecc.jpg";
import member4 from "../Assets/member4.9045579a.jpg";
import member5 from "../Assets/member5.24eb1821.jpg";
import member6 from "../Assets/member6.be2a77ad.jpg";
import ToTop from "../Sections/totop";
import { Link } from "react-router-dom";

function OurTeam() {
  // State variables for search query
  const [nameQuery, setNameQuery] = useState("");
  const [specializationQuery, setSpecializationQuery] = useState("");

  // Sample list of doctors (replace it with your actual list)
  const doctors = [
    { name: "Dr. Piyush Agrawal", specialization: "Dentist", image: member3 },
    { name: "Dr. Rajendra Patel", specialization: "Cardiologist", image: member4 },
    { name: "Dr. Salman Ajani", specialization: "Neurologist", image: member6 },
    // Add more doctors here
  
  ];

  // Filtered list of doctors based on search query
  const filteredDoctors = doctors.filter(doctor => {
    const nameMatch = doctor.name.toLowerCase().includes(nameQuery.toLowerCase());
    const specializationMatch = doctor.specialization.toLowerCase().includes(specializationQuery.toLowerCase());
    return nameMatch && specializationMatch;
  });

  return (
    <div>
      <NavBars />
      <div className="banner-wraper">
        {/* Banner content */}
      </div>
      <div className="container">
        {/* Search input fields */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name"
            value={nameQuery}
            onChange={(e) => setNameQuery(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by specialization"
            value={specializationQuery}
            onChange={(e) => setSpecializationQuery(e.target.value)}
          />
        </div>
        {/* Display filtered doctors */}
        <div className="row justify-content-center">
          {filteredDoctors.map((doctor, index) => (
            <div key={index} className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={doctor.image} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">{doctor.name}</h4>
                    <span className="text-secondary">{doctor.specialization}</span>
                  </div>
                  <ul className="social-media">
                    {/* Social media links */}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <ToTop />
    </div>
  );
}

export default OurTeam;





