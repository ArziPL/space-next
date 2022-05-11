import Head from "next/head";
import styles from "../styles/Pads.module.css";
import PadCard from "../components/PadCard/PadCard";

export async function getStaticProps(){
    const res = await fetch("https://api.spacexdata.com/v4/landpads")
    const data = await res.json()
    return {props : {pads:data}}
}



function pads({pads}) {
  return (
    <>
      <Head>
          <title>space-pads</title>
      </Head>
      <div className={styles.pads}>
        {pads.map((pad) => (<PadCard pad={pad} key={pad.id}></PadCard>))}
      </div>
    </>
  );
}

export default pads;
