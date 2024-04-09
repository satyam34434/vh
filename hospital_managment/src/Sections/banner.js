/*import { Link } from "react-router-dom";
import doctor from "../Assets/doctor.webp";
import "./banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <h5 className="backimg">Adding Care to your Life.</h5>
            <h2>Protecting and Taking Care To Of Your Health</h2>
            <button>
              <Link to={"/about"}>Read More</Link>
            </button>
          </div>

          <div className="col-lg-5 col-md-5 bannerImg">
            <img src={doctor} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;*/


/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import doctor from "../Assets/doctor.webp";
import "./banner.css";

function Banner() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <h5 className="backimg">Adding Care to your Life.</h5>
            <h2>Protecting and Taking Care To Of Your Health</h2>
            <button>
              <Link to={"/about"}>Read More</Link>
            </button>
            <button onClick={toggleForm}>Fill out Patient Form</button>
          </div>

          <div className="col-lg-5 col-md-5 bannerImg">
            <img src={doctor} alt="img" />
          </div>
        </div>
        {showForm && (
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <form style={styles.form}>
                <div style={styles.formGroup}>
                  <label>First Name:</label>
                  <input type="text" name="firstName" />
                </div>
                <div style={styles.formGroup}>
                  <label>Last Name:</label>
                  <input type="text" name="lastName" />
                </div>
                <div style={styles.formGroup}>
                  <label>Age:</label>
                  <input type="number" name="age" />
                </div>
                <div style={styles.formGroup}>
                  <label>Gender:</label>
                  <select name="gender">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <label>Medical Condition:</label>
                  <textarea name="condition" />
                </div>
                <div style={styles.formGroup}>
                  <label>Contact Information:</label>
                  <input type="text" name="contact" />
                </div>
                <button type="submit" style={styles.submitButton}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  form: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Banner;

*/


/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import doctor from "../Assets/doctor.webp";
import "./banner.css";

function Banner() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <h5 className="backimg">Adding Care to your Life.</h5>
            <h2>Protecting and Taking Care To Of Your Health</h2>
            <button>
              <Link to={"/about"}>Read More</Link>
            </button>
            <button onClick={toggleForm}>Fill out Patient Form</button>
          </div>

          <div className="col-lg-5 col-md-5 bannerImg">
            <img src={doctor} alt="img" />
          </div>
        </div>
        {showForm && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={toggleForm}>
                &times;
              </span>
              <form style={styles.form}>
                <div style={styles.formGroup}>
                  <label>First Name:</label>
                  <input type="text" name="firstName" />
                </div>
                <div style={styles.formGroup}>
                  <label>Last Name:</label>
                  <input type="text" name="lastName" />
                </div>
                <div style={styles.formGroup}>
                  <label>Age:</label>
                  <input type="number" name="age" />
                </div>
                <div style={styles.formGroup}>
                  <label>Gender:</label>
                  <select name="gender">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <label>Medical Condition:</label>
                  <textarea name="condition" />
                </div>
                <div style={styles.formGroup}>
                  <label>Contact Information:</label>
                  <input type="text" name="contact" />
                </div>
                <button type="submit" style={styles.submitButton}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  form: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Banner;*/



import React, { useState } from "react";
import { Link } from "react-router-dom";
import doctor from "../Assets/doctor.webp";
import "./banner.css";

function Banner() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="banner">
      <div className={`container ${showForm ? 'popup-open' : ''}`}>
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <h5 className="backimg">Adding Care to your Life.</h5>
            <h2>Protecting and Taking Care To Of Your Health</h2>
            <button>
              <Link to={"/about"}>Read More</Link>
            </button>
            
          </div>

          <div className="col-lg-5 col-md-5 bannerImg">
            <img src={doctor} alt="img" />
          </div>
        </div>
        {showForm && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={toggleForm}>
                &times;
              </span>
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



export default Banner;

