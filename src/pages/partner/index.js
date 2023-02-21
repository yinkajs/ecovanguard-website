import React from "react";
import "./index.css";
import ministryLogo from "../../assets/ministry-of-tech.jpg";
import nieeLogo from "../../assets/niee.jpg";
import urbanLogo from "../../assets/ibadan-urban.jpg";
import museumLogo from "../../assets/waste-museum.jpg";
import uiLogo from "../../assets/ui.jpg";
import leadLogo from "../../assets/lead-city.jpg";
import nseLogo from "../../assets/nse.jpg";
import nse2Logo from "../../assets/nse2.jpg";
import envLogo from "../../assets/fme.jpg";
import qalamLogo from "../../assets/al-qaalam.jpg";
import polyLogo from "../../assets/poly-high.jpg";
import fmeeLogo from "../../assets/fmee.jpg";
import Modal from "./modal";

const Partner = () => {
  return (
    <section>
      <div className="partner__bg-image">
        <h4>partners of nature</h4>
        <Modal />
      </div>
      <main className="partners">
        <h1 className="center">Our Partners</h1>
        <div className="partners__grid">
          <div className="partners__grid__box">
            <img
              src={ministryLogo}
              alt="Federal Ministry of Science, Technology and Innovation's logo"
              width="150"
              height="150"
            />
            <div className="partners__grid__box__text">
              <h3>Federal Ministry of Science, Technology and Innovation</h3>
              <p>Governmental Body</p>
            </div>
          </div>
          <div className="partners__grid__box">
            <img
              src={nieeLogo}
              alt="Nigeria Institution of Environmental Engineers's logo"
              width="150"
              height="150"
            />
            <div className="partners__grid__box__text">
              <h3>Nigeria Institution of Environmental Engineers</h3>
              <p>Professionals Association</p>
            </div>
          </div>
          <div className="partners__grid__box">
            <img
              src={urbanLogo}
              alt="Ibadan Urban Flood Management Project's logo"
              width="150"
              height="150"
            />
            <div className="partners__grid__box__text">
              <h3>Ibadan Urban Flood Management Project</h3>
              <p>Environmental protection Agency</p>
            </div>
          </div>
          <div className="partners__grid__box">
            <img
              src={museumLogo}
              alt="The Waste Museum (egbindoro), Ibadan's logo"
              width="150"
              height="150"
            />
            <div className="partners__grid__box__text">
              <h3>The Waste Museum (Egbindoro), Ibadan</h3>
              <p>Waste management organisation</p>
            </div>
          </div>
          <div className="partners__grid__box">
            <img
              src={uiLogo}
              alt="University Of Ibadan's logo"
              width="150"
              height="150"
            />
            <div className="partners__grid__box__text">
              <h3>University Of Ibadan</h3>
              <p>Nigerian University</p>
            </div>
          </div>
          <div className="partners__grid__box">
            <img
              src={leadLogo}
              alt="Lead City University's logo"
              width="150"
              height="150"
            />
            <div className="partners__grid__box__text">
              <h3>Lead City University, Ibadan</h3>
              <p>Nigerian University</p>
            </div>
          </div>
          <div className="partners__grid__box">
            <img
              src={nseLogo}
              alt="Nigeria Society of Engineers's logo"
              width="150"
              height="150"
            />
            <div className="partners__grid__box__text">
              <h3>Nigeria Society of Engineers</h3>
              <p>Professionals Association</p>
            </div>
          </div>
          <div className="partners__grid__box">
            <img
              src={envLogo}
              alt="Federal Ministry of Environment's logo"
              width="150"
              height="150"
            />
            <div className="partners__grid__box__text">
              <h3>Federal Ministry of Environment</h3>
              <p>Governmental Body</p>
            </div>
          </div>
        </div>
        <aside className="partners__list">
          <h2 className="center">All Partners</h2>
          <section>
            <h3>Education</h3>
            <div className="partners__list__image">
              <img
                src={uiLogo}
                alt="University Of Ibadan's logo"
                width="150"
                height="150"
              />{" "}
              <img
                src={leadLogo}
                alt="Lead City University's logo"
                width="150"
                height="150"
              />
              <img
                src={qalamLogo}
                alt="Al-qalam school's logo"
                width="150"
                height="150"
              />
              <img
                src={polyLogo}
                alt="Polytechnic high school's logo"
                width="150"
                height="150"
              />
            </div>
          </section>
          <section>
            <h3>Governmental Bodies</h3>
            <div className="partners__list__image">
              <img
                src={fmeeLogo}
                alt="Lead City University's logo"
                width="150"
                height="150"
              />
              <img
                src={ministryLogo}
                alt="Federal Ministry of Science, Technology and Innovation's logo"
                width="150"
                height="150"
              />
              <img
                src={envLogo}
                alt="Federal Ministry of Environment's logo"
                width="150"
                height="150"
              />
            </div>
          </section>
          <section>
            <h3>Non-governmental Organisations</h3>
            <div className="partners__list__image">
              <img
                src={museumLogo}
                alt="The Waste Museum (egbindoro), Ibadan's logo"
                width="150"
                height="150"
              />
              <img
                src={nse2Logo}
                alt="Nigeria Society of Engineers's logo"
                width="150"
                height="150"
              />
              <img
                src={urbanLogo}
                alt="Ibadan Urban Flood Management Project's logo"
                width="150"
                height="150"
              />
              <img
                src={nieeLogo}
                alt="Nigeria Society of Engineers's logo"
                width="150"
                height="150"
              />
            </div>
          </section>
        </aside>
      </main>
    </section>
  );
};

export default Partner;
