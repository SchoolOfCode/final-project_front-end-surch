import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DisplayLogo from "../component/DisplayLogo/DisplayLogo";
import MascotSmall from "../component/MascotSmall/MascotSmall";
import MoodQuestion from "../component/MoodQuestion/MoodQuestion";
import Gratitude from "../component/Gratitude/Gratitude";
import Quote from "../component/Quote/Quote"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reconnect</title>
        <meta name="description" content="Wellness App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DisplayLogo className={styles.displayLogo} />
        <MascotSmall className={styles.mascotSmall} />
        <h1 className={styles.title}>
          Hi Guest,
          <br />
          How are you feeling?
        </h1>
        <MoodQuestion className={styles.moodQuestion} />
        <Gratitude/>
        <Quote/>
      </main>
    </div>
  );
}
