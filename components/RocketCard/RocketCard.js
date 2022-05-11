import styles from "./RocketCard.module.css";
import { useState,useEffect } from "react";

export default function RocketCard({ rocket }) {
  
  const [isShown, setShown] = useState("none");  

  const showData = () => {
    if (isShown == "none") {
        setShown("grid")
    } else if (isShown == "grid") {
        setShown("none");
    }
  };


  return (
    <>
      <div className={styles.rocket}>
        
        <div className={styles.rocket__description}>
          <div className={styles.rocket__descriptionName}>{rocket.name}</div>
          <div className={styles.rocket__descriptionDesc}>{rocket.description}</div>
          <div className={styles.rocket__descriptionWiki}><a href={rocket.wikipedia} target="_blank" rel="noreferrer">{rocket.name} Wiki</a></div>
          <div className={styles.rocket__descriptionActive} onClick={showData}>Click to display data</div>
        </div>

        <div className={styles.rocket__img} style={{ backgroundImage: `url(${rocket.flickr_images[0]})` }}></div>
      </div>

      <div className={styles.rocket__perf} style={{ display: isShown }}>
        <div>Name : {rocket.name}</div>
        <div>Height : {rocket.height.meters}m</div>
        <div>Stages : {rocket.stages}</div>
        <div>First stage thrust at sea level : {rocket.first_stage.thrust_sea_level.kN}kN</div>
        <div>First flight : {rocket.first_flight}</div>
        <div>Diameter : {rocket.diameter.meters}m</div>
        <div>Boosters : {rocket.boosters}</div>
        <div>First stage thrust in vacuum : {rocket.first_stage.thrust_vacuum.kN}kN</div>
        <div>Cost per launch : {rocket.cost_per_launch}$</div>
        <div>Mass : {rocket.mass.kg}kg</div>
        <div>Landing legs : {rocket.landing_legs.number}</div>
        <div>Second stage thrust : {rocket.second_stage.thrust.kN}kN</div>
      </div>
    </>
  );
}
