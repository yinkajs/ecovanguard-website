import React from "react";
import ModalComponent from "./modal";
import styles from "./executive.module.css";
import { EXECUTIVES, getExecutiveById } from "./executives-details";

const Executive = () => {
  const [allStates, setAllStates] = React.useState({
    executiveId: null,
    executiveData: {},
    showModal: false,
  });
  const setId = (id) => {
    setAllStates({
      executiveId: id,
      executiveData: getExecutiveById(id),
      showModal: true,
    });
  };
  return (
    <section className={styles.executive}>
      <main className="">
        <h1 className="center">Our Executives</h1>
        <p>
          The club's operations have been successful, thanks to her amiable
          executives, all the way from the National Executives down to the state
          executives, they have all been representing the club quite well.{" "}
        </p>
        <section>
          <h2>University of Ibadan Executives</h2>
          <br />
          <div className="center">
            <div className={styles.executive__photos}>
              {EXECUTIVES.map((img) => (
                <div
                  className={styles.executive__photos__box}
                  key={img.name}
                  onClick={() => setId(img.id)}
                >
                  <img
                    src={img.src}
                    alt={`${img.position},
                    EcoVanguard club`}
                    width={300}
                    height={300}
                  />
                  <h3>{img.name} </h3>
                  <span>{img.position}</span>
                </div>
              ))}
              <ModalComponent
                setAllStates={setAllStates}
                allStates={allStates}
              />
            </div>
          </div>
        </section>
        <section>
          <h2>Lead City University Executives</h2>
        </section>
      </main>
    </section>
  );
};

export default Executive;
