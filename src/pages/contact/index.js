import React from "react";
import "./index.css";
import contactSrc from "../../assets/eco-contact.svg";
import InputComponent from "./../../components/Input/input";
import ButtonLink from "../../components/Button/button";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { useQuery } from "react-query";
const Contact = () => {
  const handleQuery = async (ev) => {
    const URL = `https://jsonplaceholder.typicode.com/posts`;

    let response = await fetch(URL, {
      method: "POST",
      body: new FormData(ev.target),
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.text();
  };
  const { isLoading, isError, data, error, refetch } = useQuery(
    "contact-form",
    handleQuery,
    {
      refetchOnWindowFocus: false,
      enabled: false, // stops the query from running automatically
    }
  );
  const handleSubmit = (ev) => {
    ev.preventDefault();
    refetch();
    ev.target.reset();
  };
  if (isError) return <div>{error}</div>;
  return (
    <section className="">
      <main className="contact">
        <div className="contact__form">
          <h1>Contact Us</h1>
          <h1>
            {isLoading} {isError} {data}
          </h1>
          <p>
            In doubt of any issue or want to lodge a complaint? Or do you simply
            want to inform us? Let us know what you think. We would love to hear
            from you.{" "}
          </p>
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Your Email</label>
              <br />
              <InputComponent
                placeholder="Enter your email address"
                type="email"
                id="email"
                name="email"
                className="contact__input"
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="comment">what do you need help with</label>
              <br />
              <textarea
                id="comment"
                name="comment"
                placeholder="Enter what you need help with"
                className="contact__textarea"
                maxLength={200}
                required
              ></textarea>
            </div>
            <ButtonLink type="submit" className="contact__btn">
              Send Message
            </ButtonLink>
            <div className="contact__policy">
              <input type="checkbox" name="policy" id="policy" required />
              <label htmlFor="policy">
                <small>
                  I agree with the <a href="/policy">privacy policy</a>
                </small>
              </label>
            </div>
          </form>
          <div className="contact__links">
            <label>
              <small>Reach out and follow us on social media</small>
            </label>
          </div>
          <div className="contact__icons">
            <br />
            <br />
            <i>
              <a href="https://www.linkedin.com/company/ecovanguard-club-ui/">
                <FaLinkedin />
              </a>
            </i>
            <i>
              <a href="https://www.instagram.com/ui_ecovanguard_club/">
                <FaInstagram />
              </a>
            </i>
            <br />
            <br />
          </div>
        </div>
        <div className="contact__image">
          <img
            src={contactSrc}
            alt="Contact us illustration"
            width="600"
            height="600"
          />
        </div>
      </main>
    </section>
  );
};

export default Contact;
