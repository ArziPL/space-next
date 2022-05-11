import Head from "next/head";
import styles from "../styles/Rockets.module.css"
import RocketCard from "../components/RocketCard/RocketCard";

export async function getStaticProps(context) {
    const res = await fetch("https://api.spacexdata.com/v4/rockets")
    const data = await res.json()
    return { props: {rockets: data} };
}


function rockets({rockets}) {
    return (
        <>
        <Head>
            <title>space-rockets</title>
        </Head>
        <div className={styles.rockets}>
            {rockets.map((rocket) => (
                <RocketCard rocket={rocket} key={rocket.id}></RocketCard>
            ))}
        </div>
        
        </>
    );
}

export default rockets;