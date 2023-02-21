import React from "react";
import earth from "../../assets/earth.svg";
import InputComponent from "../../components/Input/input";
import styles from "./styles.module.css";
import ButtonLink from "./../../components/Button/button";

const Donate = () => {
  return (
    <div className={styles.donate_container}>
      <h1 className="center">Donate to Nature</h1>

      <div className={styles.hero_section}>
        <div className={styles.hero_content}>
          <div className={styles.hero_text}>
            <h2>Our Aim</h2>
            <p>
              Getting the earth to <strong> greenest </strong> it has ever been
              through proper waste management and Eco-education before 2030.
            </p>
          </div>
          <div className={styles.hero_image}>
            <img src={earth} alt="Earth" />
          </div>
        </div>
      </div>

      <div className={styles.donation_sub_container}>
        <div className={styles.donation}>
          <div className={styles.questions}>
            <div className={styles.first}>
              <h2>How can you help nature</h2>
              <p>
                The least you can personally do for nature is ensuring that
                every environment you find yourself is kept clean.
              </p>
              <p>
                You can do more by volunteering for the community development
                and cleaning
              </p>
              <p>
                Another way you can help nature is by funding organisations
                whose sole purpose is to ensure the greenness and
                Eco-friendliness of earth. Organizations like EcoVanguard.
              </p>
            </div>
            <div className={styles.second}>
              <h2>How would my donations be spent</h2>
              <p>
                At EcoVanguard, our priorities are teaching the future
                generation how to ensure proper waste management is carried out
                and and creating an Eco-friendly environment through clean
                cities.
              </p>
              <p>
                We ensure you that your donations will be spent on projects that
                fulfil these purposes.
              </p>
            </div>
          </div>

          <div className={styles.card_details}>
            <form>
              <label htmlFor="amount">Amount</label>
              <InputComponent
                placeholder="Input the amount you want to donate"
                type="search"
                id="amount"
                className={styles.input_size}
              />
              <br />
              <br />
              <div>
                <label htmlFor="name">Card Name</label>
                <InputComponent
                  placeholder="Input card name"
                  type="search"
                  id="name"
                  className={styles.input_size}
                />
              </div>
              <br />
              <div>
                <label htmlFor="amount">Card Number</label>
                <InputComponent
                  placeholder="1234 5678 9012 3456"
                  type="number"
                  id="number"
                  className={styles.input_size}
                  bgImage="mastercard.svg"
                />
              </div>
              <br />
              <div className={styles.card_pin}>
                <div>
                  <label htmlFor="amount">Expiry date</label>
                  <InputComponent
                    type="number"
                    placeholder="MM / YY"
                    required
                    min="1"
                  />
                </div>

                <div>
                  <label htmlFor="number">CVV</label>
                  <InputComponent
                    type="number"
                    placeholder="123"
                    required
                    min="1"
                  />
                </div>
              </div>
              <br />
              <div className={styles.card_save}>
                <label htmlFor="save" className="check">
                  Save my card
                </label>
                <div>
                  <input type="checkbox" id="save" required />
                </div>
              </div>
              <div>
                <ButtonLink type="submit" className={styles.donate_btn}>
                  Donate
                </ButtonLink>
                <p className="center">
                  Powered by{" "}
                  <a
                    href="https://paystack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Paystack
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
