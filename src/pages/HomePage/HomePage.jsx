import React from "react";
import ImgMsgBtn from "../../components/img-msg-btn-component/index.js";
import "./style.css";
import logo1 from "../../assets/edit-box.svg";
import logo2 from "../../assets/delete.svg";
import ProjectImg1 from "../../assets/ProjectImg1.jpg";
import ProjectImg2 from "../../assets/waste-bin-rounded.png";
import EventImg1 from "../../assets/EventImg1.png";
import EventImg2 from "../../assets/EventImg2.png";
import ButtonLink from "../../components/Button/button";
import ImageSlider from "../../components/carousel/";
import InputComponent from "../../components/Input/input";
import { Link } from "react-router-dom";

function SimpleCarousel() {
  const slides = [
    {
      imgName: "environmental-reformation.jpg",
      title: "environmental reformation",
    },
    {
      imgName: "waste-management.jpg",
      title: "waste management",
    },
    {
      imgName: "eco-education.jpg",
      title: "eco-education",
    },
    {
      imgName: "greener-nature.jpg",
      title: "greener nature advocacy",
    },
  ];
  return (
    <section>
      <ImageSlider slides={slides} />
    </section>
  );
}

function SecondSection(props) {
  return (
    <div className="section2-wrapper">
      <div className="section2-container">
        <div className="center">
          <h2>What we do</h2>
        </div>
        <div className="section2-body">
          <div className="top">
            <div className="sect2-msg msg1">
              <img src={logo1} alt="" />
              <div>
                <h2>Education</h2>
                <p>
                  We educate secondary school and tertiary institution students
                  on the importance of proper waste management practices and
                  advocate for an eco-friendly environment and the
                  implementation of a circular economy.
                </p>
              </div>
            </div>
            <div className="sect2-msg msg2">
              <img src={logo2} alt="" />
              <div>
                <h2>Waste Management</h2>
                <p>
                  We advocate having a clean city which in turn leads to having
                  a greener earth leading to an eco-friendly environment and the
                  implementation of a circular economy.
                </p>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="sect2-msg msg3">
              <img src={logo1} alt="" />
              <div>
                <h2>Education</h2>
                <p>
                  We educate secondary school and tertiary institution students
                  on the importance of proper waste management practices and
                  advocate for an eco-friendly environment and the
                  implementation of a circular economy.
                </p>
              </div>
            </div>
            <div className="sect2-msg msg4">
              <img src={logo2} alt="" />
              <div>
                <h2>Waste Management</h2>
                <p>
                  We advocate having a clean city which in turn leads to having
                  a greener earth leading to an eco-friendly environment and the
                  implementation of a circular economy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="center">
          <Link to="/about">
            <ButtonLink>About the Club</ButtonLink>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ThirdSection() {
  return (
    <div className="section3-wrapper">
      <div className="section3-container">
        <div className="sect3-header">
          <h2>Our members</h2>
        </div>
        <div className="sect3-body">
          <div className="sec-sch">
            <div>73</div>
            <h3>Secondary Schools</h3>
          </div>
          <div className="all-members">
            <div className="center">73</div>
            <h3>All members</h3>
          </div>
          <div className="tert-inst">
            <div>73</div>
            <h3>Tertiary Institutions</h3>
          </div>
        </div>
        <div className="center">
          <Link to="/signup">
            <ButtonLink>Join Us</ButtonLink>
          </Link>
        </div>
      </div>
    </div>
  );
}

function FourthSection() {
  return (
    <div>
      <ImgMsgBtn
        mainHeader={"Our Projects"}
        msgHeader={"Ecovanguard Projects"}
        msgBody1={
          "All Ecovanuard’s Projects are focused on one aim - to make the earth a better place for everyone to live in.With our projects, we want to make the environment- land, water and air more habitable and toxic free."
        }
        msgBtn={"See Projects"}
        btnLink="/projects"
        image={ProjectImg1}
        swap={true}
      />

      <ImgMsgBtn
        msgHeader={"Ongoing Project"}
        msgBody1={
          "The EcoVanguard club is currently working towards donating 200 pieces of this set of waste disposal system to the University of Ibadan. We believe this will aid proper waste management in the University environment and lead to an overall clean and healthy environment. "
        }
        msgBtn={"Fund Project"}
        btnLink="/donate"
        image={ProjectImg2}
        swap={false}
      />

      <ImgMsgBtn
        mainHeader={"Events"}
        msgHeader={"Last Event"}
        msgBody1={
          "During the last “World Water Day” which happened on 26th March 2022, the Ecovanguard club members  in Ibadan led by the club’s Patron Engineer W.O Ajagbe attended their  first official outing the Engr Bola Ige annual lecture at the NSE headquarters Ibadan. read more..."
        }
        msgBtn={"Gallery"}
        btnLink="/gallery"
        image={EventImg1}
        swap={true}
      />

      <ImgMsgBtn
        mainHeader={"Our Next Day Out"}
        msgHeader={"Bodija Market"}
        msgBody1={
          "Ecovanguard club in conjuction with the CIA (Clean Ibadan Ambassador) will be visiting the Bodija Market to enlighten the marketers on the side effects of improper waste disposal on the society and the earth in general, we will also provide them with waste bins."
        }
        msgBtn={"Join this Campaign"}
        image={EventImg2}
        swap={false}
      />
    </div>
  );
}
function NewsletterComponent() {
  return (
    <div className="center">
      <h3 style={{ color: "#3a3a3a" }}>
        Subscribe to our newsletter to get the latest update about nature and
        the ecosystem
      </h3>
      <InputComponent
        type="email"
        placeholder="ecovanguard@gmail.com"
        bgImage="mail-icon.svg"
        className="subscribe-input"
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ButtonLink type="submit">Subscribe</ButtonLink>
    </div>
  );
}
const HomePage = () => {
  return (
    <main className="">
      <SimpleCarousel />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <NewsletterComponent />
    </main>
  );
};

export default HomePage;
