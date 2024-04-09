import "../index.css";
import { BsGithub, BsLinkedin, BsLink45Deg } from "react-icons/bs";

import NavBars from "./navbar";
import Footer from "./footer";

function Team() {
  return (
    <div>
      <NavBars />
      <section className="section-area section-sp3 team-wraper">
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">Our Team</h6>
            <h2 className="title">Meet the creators</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Raj singh</h4>
                    <span className="text-secondary">MERN</span>
                  </div>
                  <ul className="social-media">
                    
                    
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member active">
                <div className="team-media">
                  
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Rahul</h4>
                    <span className="text-secondary">MERN</span>
                  </div>
                  <ul className="social-media">
                    
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
                  
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Satyam</h4>
                    <span className="text-secondary">MERN</span>
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
      </section>
      <Footer />
    </div>
  );
}

export default Team;
