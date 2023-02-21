import React from "react";
import AboutImgMsgBtn from "../../components/About-img-msg-btn";
import "./style.css";
import membership from "../../assets/woman.svg";
import executives from "../../assets/man.svg";
import ourMissionLogo from "../../assets/delete.svg";
import ourVisionLogo from "../../assets/google_icon.svg";

function AboutFirstSection() {
  return (
    <div className="abt-section1-wrapper">
      <div className="abt-section1-container">
        <div className="abt-section1-header">
          <h1>About EcoVanguard</h1>
        </div>
        <div className="abt-section1-body">
          <div className="abt-section1-firstMessage">
            <h2>About the Club</h2>
            <p>
              EcoVanguard Club is a grassroots student-led club affiliated to
              the Clean Ibadan Ambassadors (CIA) programme. The purpose is to
              educate both the secondary and higher institution students on the
              importance of proper waste management; advocate for an
              eco-friendly environment and the implementation of a circular
              economy. The youths are the future. Introducing them early to
              these concepts prepares them as change-makers who are capable of
              creating a zero-waste future.
            </p>
          </div>

          <div className="abt-section1-secondMessage">
            <h2>Club Objectives</h2>
            <ol>
              <li>
                Increase awareness among students and staff of the school on
                environmental issues.
              </li>
              <li>
                Assist faculty, staff, administration and students to become
                better stewards of the environment.
              </li>
              <li>Improve waste management practices in Ibadan.</li>
              <li>
                Introduce students and staff of the school to the concept of
                circular economy.
              </li>
            </ol>
          </div>

          <div className="abt-section1-thirdMessage">
            <h2>What We Do</h2>
            <div>
              <ol>
                <li>
                  <h3>ECO-EDUCATION</h3>
                  <p>
                    An eco-friendly environment should be paramount to
                    everybody. As such, we enlighten and educate individuals and
                    students on the importance of maintaining a greener
                    environment. EcoVanguard also has the mandate to inform the
                    public of the dangers of keeping a poor environment. Also,
                    we do not relent in making available on our various
                    platforms the best practices of maintaining our environment
                    to become more habitable for all and sundry.
                  </p>
                </li>
                <li>
                  <h3>ENVIRONMENTAL REFORMATION</h3>
                  <p>
                    Environmental degradation in the world is becoming more
                    rampant and conscious efforts are expected to be taken in
                    order to eliminate this and reform the environment.
                    EcoVanguard members come together to interact together to
                    develop more environmentally friendly technologies and
                    innovative techniques for resource and waste management. We
                    promote the concept of sustainable development in our own
                    little way.
                  </p>
                </li>
                <li>
                  <h3>WASTE MANAGEMENT</h3>
                  <p>
                    Suitable waste management practices have become challenging
                    due to our consumption behaviour and changing socioeconomic
                    condition. We therefore educate the public on the best
                    mechanisms employable in the disposal and management of our
                    wastes. We also encourage individuals to employ the usual Rs
                    of waste management to ensure a more friendly environment.
                  </p>
                </li>
                <li>
                  <h3>GREENER EARTH ADVOCACY</h3>
                  <p>
                    Greener Earth is our main focus and can be best achieved by
                    collective efforts. We advocate for a greener environment
                    free from dangerous gases, polluted air, poisonous water and
                    a harsh land. Through our voices and actions, we are hopeful
                    of being able to push for the desired earth.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutSecondSection() {
  return (
    <div className="abt-section2-wrapper">
      <div className="abt-section2-container">
        <div className="abt-section2-card">
          <img src={ourMissionLogo} alt="Our Mission" />
          <h3 className="our-mission">Our Mission</h3>
          <div className="card-message">
            To make the environment an enabling one foe all and sundry through
            wider advocacy and strict compliance.
          </div>
        </div>

        <div className="abt-section2-card">
          <img src={ourVisionLogo} alt="Our Vision" />
          <h3 className="our-vision">Our Vision</h3>
          <div className="card-message">
            To be the world class changing club in maintaining a healthy
            environment while building a perfect only one earth.{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutThirdSection() {
  return (
    <div>
      <AboutImgMsgBtn
        header={"Membership"}
        msgBody1={
          "During our ten months of existence,the club currently have 1,1735 members across the country,with 425 members being students of tertiary institutiions and 1310 being secondary school students."
        }
        msgBody2={
          "This is because of the very fair eligibility criteria we have for students who are interested in joining the club. You can read our"
        }
        criteria={"eligibility criteria here"}
        msgBtn={"Join us now"}
        btnLink="/signup"
        image={membership}
      />

      <AboutImgMsgBtn
        header={"Executives"}
        msgBody1={
          "The club ensured the election of executives who have the club's best interest at heart. Our executives are people who are nature conscious, and dream and work towards achieving a cleaner and greener earth. "
        }
        msgBody2={
          "They are people of great leadership character and mentality. Together with them,we will make the earth green again."
        }
        msgBtn={"Know the Executives"}
        btnLink="/executives"
        image={executives}
        swap={true}
      />
      <AboutImgMsgBtn
        header={"Locations"}
        msgBody1={
          "During our ten months of existence,the club which started at the University of Ibadan,Oyo state, has now spread the waste management and greener earth campaign to sixteen other states within Nigeria."
        }
        msgBody2={
          "Ecovanguard now have  branches in 19 tertiary institutions and 73 secondary schools."
        }
        msgBtn={"Meet us Today"}
        btnLink="/location"
        image={membership}
      />

      <AboutImgMsgBtn
        header={"Partners"}
        msgBody1={
          "Starting with the CIA (Clean Ibadan Ambassadors) with whom the club partnered with during her creation, the club has now partnered with 12 other prominent organizations who care about the nature and also share the dream of the club."
        }
        msgBtn={"Our partners"}
        btnLink="/partners"
        image={membership}
        swap={true}
      />
    </div>
  );
}

const AboutPage = () => {
  return (
    <>
      <AboutFirstSection />
      <AboutSecondSection />
      <AboutThirdSection />
    </>
  );
};

export default AboutPage;
