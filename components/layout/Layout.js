import styles from "./Layout.module.css"
import Link from "next/link";

function Layout() {


    return (
        <div className={styles.layout}>
            <Link href="/"><div className={styles.layout__title}>space-next</div></Link>
            <Link href="/rockets"><div className={styles.layout__rockets}>Rockets</div></Link>
            <Link href="/pads"><div className={styles.layout__landing}>Landing pads</div></Link>
        </div>
    );
}

export default Layout;