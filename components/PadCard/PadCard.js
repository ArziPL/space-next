import styles from "./PadCard.module.css";

export default function PadCard({ pad }) {
  return (
    <>
      <div className={styles.pad}>
          <div className={styles.pad__main}>
              <div className={styles.pad__mainName}>{pad.name}</div>
              <div>{pad.details}</div>
              <div className={styles.pad__mainWiki}><a href={pad.wikipedia} target="_blank" rel="noreferrer">{pad.name} Wiki</a></div>
          </div>

          <div className={styles.pad__img} style={{backgroundImage:`url(${pad.images.large[0]})`}}></div>

          <div className={styles.pad__desc}>
              <div>Full name : {pad.full_name}</div>
              <div>Type : {pad.type}</div>
              <div>Locality : {pad.locality}</div>
              <div>Region : {pad.region}</div>
              <div>Latitude : {pad.latitude}</div>
              <div>Longitude : {pad.longitude}</div>
              <div>Landing attempts : {pad.landing_attempts}</div>
              <div>Landing successes : {pad.landing_successes}</div>
          </div>
      </div>
    </>
  );
}
