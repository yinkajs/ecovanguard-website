import React, { useState } from "react";
import styles from "./styles.module.css";
import image1 from "../../assets/boy.png";
import image2 from "../../assets/girl.png";
import image3 from "../../assets/me.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import image from "../../assets/project_image.svg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import ButtonLink from "./../../components/Button/button";

const Projects = () => {
  const [assets, setassets] = useState([image1, image2, image3]);
  const cards = [1, 2, 3];

  const [prevIndex, setPrevIndex] = useState(0);
  const [index, setIndex] = useState(1);
  const [nextIndex, setNextIndex] = useState(2);

  const prevImage = () => {
    setassets((prev) => {
      const last = prev[prev.length - 1];
      const others = prev.slice(0, prev.length - 1);
      return [last, ...others];
    });
  };

  const nextImage = () => {
    setIndex((index + 1) % assets.length);
    setPrevIndex((prevIndex + 1) % assets.length);
    setNextIndex((nextIndex + 1) % assets.length);
  };

  return (
    <div className={styles.projects_container}>
      <div className={styles.heading}>
        <h2>Eco-Projects</h2>
      </div>

      <main>
        <section className={styles.visitation}>
          <h4>Next visitation</h4>

          <div className={styles.action_btns}>
            <button onClick={prevImage} className={styles.prev_btn}>
              <FaChevronLeft />
            </button>
            <button onClick={nextImage} className={styles.next_btn}>
              <FaChevronRight />
            </button>
          </div>

          <div className={styles.carousel_container}>
            <Fade left>
              <div className={styles.prev_image}>
                <img
                  src={assets[prevIndex]}
                  alt="Ecovanguard project "
                  className={styles.carousel_image}
                />
              </div>
            </Fade>
            <Zoom>
              <div className={styles.active_image}>
                <img
                  src={assets[index]}
                  alt="Ecovanguardproject "
                  className={styles.carousel_image}
                />
              </div>
            </Zoom>
            <Fade right>
              <div className={styles.next_image}>
                <img
                  src={assets[nextIndex]}
                  alt="Ecovanguard project "
                  className={styles.carousel_image}
                />
              </div>
            </Fade>
          </div>

          <div className={styles.caption}>
            <h3>The Bodija Market</h3>
          </div>

          <div className={styles.caption_details}>
            <div className={styles.description}>
              <p>Waste Management Awareness Campaign</p>
              <p>24th May, 2022</p>
            </div>

            <div className={styles.campaign}>
              <ButtonLink>Join This Campaign</ButtonLink>
            </div>
          </div>
        </section>

        <section className={styles.cards_container}>
          <h4>Ongoing Projects</h4>
          <div className={styles.cards}>
            {cards.map((item) => {
              return (
                <div className={styles.card}>
                  <img
                    src={image3}
                    alt="Ongoing ecovanguard project"
                    className={styles.card_img}
                  />
                  <div className={styles.card_text}>
                    <p>
                      <strong>Project :</strong> Planting of 200 palm trees
                    </p>
                    <p>
                      <strong>Beneficiary :</strong> University of Ibadan
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.completed_projects}>
          <h4>Executed Projects</h4>
          <div className={styles.completed}>
            <div className={styles.project_image}>
              <img
                src={image}
                className={styles.project_img}
                alt="Completed Project "
              />
            </div>

            <div className={styles.project_description}>
              <p>
                EcoVanguard in a bid to create a greener earth by ensuring
                proper waste management and educating the future generations.
              </p>
              <p>
                We have successfully completed a total of 19 projects to aid
                proper waste management in our communities and the impact of
                these projects are being felt in the society.
              </p>
              <ButtonLink>All Projects</ButtonLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
