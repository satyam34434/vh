import MobileImg from "../Assets/mobile.f82d7322.png";
import WomanImg from "../Assets/women.eb5c49c5.png";
import "./account.css";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createBooking, createPatient } from "../Redux/booking/action";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// const notify = (text) => toast(text);

function Account() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [disease, setDisease] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    function refreshPage() {
      window.location.reload(true);
    }

    if (
      !email ||
      !name ||
      !number ||
      !disease ||
      !age ||
      !gender ||
      !address ||
      !date
    ) {
      alert("enter all fields");
      const timer = setTimeout(() => {
        refreshPage();
      }, 100);
      return () => clearTimeout(timer);
    }

    try {
      const foodResponse = await axios.post(
        `http://localhost:7001/user/register`,
        { email, name, number, disease, age, gender, address, date }
      );

      if (foodResponse) {
        const timer = setTimeout(() => {
          refreshPage();
        }, 100);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ToastContainer />
      <section className="section-area account-wraper1">
        <div className="container-fluid">
          <div className="appointment-inner section-sp2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                  <div className="appointment-form form-wraper">
                    <h3>Add Patient</h3>
                    <form action="#" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="email"
                          // value={formData.email}
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          // value={formData.patientName}
                          name="patientName"
                          onChange={(e) => setName(e.target.value)}
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Phone Number"
                          // value={formData.mobile}
                          name="mobile"
                          onChange={(e) => setNumber(e.target.value)}
                          required
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="disease"
                          // value={formData.disease}
                          name="disease"
                          onChange={(e) => setDisease(e.target.value)}
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Age"
                          name="age"
                          onChange={(e) => setAge(e.target.value)}
                        ></input>
                      </div>
                      <div className="form-group">
                        <select
                          className="form-select form-control"
                          name="gender"
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          name="address"
                          onChange={(e) => setAddress(e.target.value)}
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          onChange={(e) => setDate(e.target.value)}
                          required
                        ></input>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-secondary btn-lg"
                      >
                        {loading ? "Loading..." : "Book Now"}
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12">
                  <div className="appointment-thumb">
                    <img src={MobileImg} alt="img" />
                    <div className="images-group">
                      <img className="img1" src={WomanImg} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Account;