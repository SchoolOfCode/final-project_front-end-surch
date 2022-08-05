import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DisplayLogo from "../component/DisplayLogo/DisplayLogo";
import MascotSmall from "../component/MascotSmall/MascotSmall";
import MoodQuestion from "../component/MoodQuestion/MoodQuestion";
import Gratitude from "../component/Gratitude/Gratitude";
import Quote from "../component/Quote/Quote"
import ChallengeCard from "../component/ChallengeCard/ChallengeCard";
import ActivityCard from "../component/ActivityCard/ActivityCard";
import meditationPic from "../public/images/maditation.png"
import breathingPic from "../public/images/Breathing.png"
import stretchingPic from "../public/images/Stretching.png"
import yogaPic from "../public/images/Yoga.png"
import { useUser } from "@auth0/nextjs-auth0";
import ExploreCard from "../component/ExploreCard/ExploreCard";

export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <div className={styles.container}>
      <Head>
        <title>Reconnect</title>
        <meta name="description" content="Wellness App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DisplayLogo  />
        <div className={styles.mascotContainer}>
        <MascotSmall className={styles.mascotSmall} />
        </div>
        <h1 className={styles.title}>
          Hi Guest,
          <br />
          How are you feeling?
        </h1>
        <MoodQuestion className={styles.moodQuestion} url={"https://reconnect-surch.netlify.app/moodtracker"}/>
        <Gratitude/>
        <Quote/>
        <h1 className={styles.title}>Challenges of the week</h1>
        <div className={styles.challenges}>
          <ChallengeCard challenge={"Go to the Park"}/>
          <ChallengeCard challenge={"Walk 5k steps"}/>
          <ChallengeCard challenge={"Get 15 mins of sun"}/>
          <ChallengeCard challenge={"Go for a coffee with a friend"}/>
        </div>

        <h1 className={styles.title}>Explore</h1>
        <div className={styles.exploreBox}>
          <div className={styles.sleepTips}>
          <ExploreCard url={"https://www.healthline.com/nutrition/17-tips-to-sleep-better"} title={"Better Sleep tips"}/>
          </div>
          <div className={styles.increaseHappiness}>
          <ExploreCard url={"https://www.nhs.uk/mental-health/self-help/tips-and-support/how-to-be-happier/"} title={"Increase Happiness"}/>
          </div>
          <div className={styles.healthyMeals}>
          <ExploreCard url={"https://www.bbcgoodfood.com/recipes/collection/quick-and-healthy-recipes"} title={"Healthy Meals"}/>
          </div>
        </div>

        <div>
        <h1 className={styles.title}>All Activities</h1>
        <ActivityCard title={"Meditation"} image={meditationPic} url={"https://reconnect-surch.netlify.app/meditation"}/>
        <ActivityCard title={"Breathing Exercises"} image={breathingPic} url={"https://reconnect-surch.netlify.app/breathingExercises"}/>
        <ActivityCard title={"Stretching"} image={stretchingPic} url={"https://reconnect-surch.netlify.app/stretching"}/>
        <ActivityCard title={"Yoga "} image={yogaPic} url={"https://reconnect-surch.netlify.app/yoga"}/>
        </div>
        <div className={styles.spacetoNavBar}>
        </div>
      </main>
    </div>
  );
}
