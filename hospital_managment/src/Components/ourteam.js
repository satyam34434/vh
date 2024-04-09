import "./doctor.css"
import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import NavBars from "../Sections/navbar";
import Footer from "../Sections/footer";
import AppointmentForm from "./AppointmentForm"; // Import the appointment form component

import member1 from "../Assets/member1.22ac1d59.jpg";
import member2 from "../Assets/member2.d03a0686.jpg";
import member3 from "../Assets/member3.0d822ecc.jpg";
import member4 from "../Assets/member4.9045579a.jpg";
import member5 from "../Assets/member5.24eb1821.jpg";
import member6 from "../Assets/member6.be2a77ad.jpg";
import ToTop from "../Sections/totop";
import { Link } from "react-router-dom";

function OurTeam() {
  const [nameQuery, setNameQuery] = useState("");
  const [specializationQuery, setSpecializationQuery] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null); // State to store selected doctor
  const [showAppointmentForm, setShowAppointmentForm] = useState(false); // State to manage visibility of appointment form

  const doctors = [
    { name: "Dr. Piyush Agrawal", specialization: "Dentist", image: member3 },
    { name: "Dr. Rajendra Patel", specialization: "Cardiologist", image: member4 },
    { name: "Dr. Salman Ajani", specialization: "Neurologist", image: member6 },
    { name: "Dr. Addition Smith", specialization: "Physiotherapist", image: member1 },
    { name: "Dr. Mahfuz Riad", specialization: "ENT", image: member2 },
    { name: "Dr. David Benjamin", specialization: "Operations", image: member5 },
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const nameMatch = doctor.name.toLowerCase().includes(nameQuery.toLowerCase());
    const specializationMatch = doctor.specialization.toLowerCase().includes(specializationQuery.toLowerCase());
    return nameMatch && specializationMatch;
  });

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    setShowAppointmentForm(true);
  };

  return (
    <div>
      <NavBars />
      <div className="banner-wraper">
        
      </div>
      <div className="container">
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
        <div className="row justify-content-center">
          {filteredDoctors.map((doctor, index) => (
            <div key={index} className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member" onClick={() => handleDoctorClick(doctor)}> {}
                <div className="team-media">
                  <img src={doctor.image} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">{doctor.name}</h4>
                    <span className="text-secondary">{doctor.specialization}</span>
                  
                  </div>
                  <ul className="social-media">
                    { }
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <ToTop />
      {showAppointmentForm && <AppointmentForm doctor={selectedDoctor} onClose={() => setShowAppointmentForm(false)} />} {/* Render AppointmentForm if showAppointmentForm is true*/ }
    </div>
  );
}

export default OurTeam;
