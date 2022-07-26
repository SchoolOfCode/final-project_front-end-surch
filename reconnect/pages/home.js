import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DisplayLogo from "../component/DisplayLogo/DisplayLogo";
import MascotSmall from "../component/MascotSmall/MascotSmall";
import MoodQuestion from "../component/MoodQuestion/MoodQuestion";
import Gratitude from "../component/Gratitude/Gratitude";
import Quote from "../component/Quote/Quote";
import ActivityCard from "../component/ActivityCard/ActivityCard";
import meditationPic from "../public/images/maditation.png";
import breathingPic from "../public/images/Breathing.png";
import stretchingPic from "../public/images/Stretching.png";
import yogaPic from "../public/images/Yoga.png";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import ExploreCard from "../component/ExploreCard/ExploreCard";
import MoodContext from "../component/MoodContext/MoodContext.js";
import { useContext, useEffect } from "react";
import ChallengeSection from "../component/ChallengeSection/ChallengeSection";
import AchievementContext from "../component/AchievementContext/AchievementContext";


export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const [mood, setMood] = useContext(MoodContext);
  const [achievementList, setAchievementList] = useContext(AchievementContext);

  async function getChallenge() {
    const response = await fetch(
      "https://reconnect-surch.herokuapp.com/achievement"
    );
    const data = await response.json();
    setAchievementList([...data.payload]);
  }

  useEffect(() => {
    getChallenge();
  }, []);


  let userName;

  if (user){
    if (user.given_name) {
      userName = user.given_name;
    } else {
      userName = user.name;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Reconnect</title>
        <meta name="description" content="Wellness App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DisplayLogo />
        <div className={styles.mascotContainer}>
          <MascotSmall className={styles.mascotSmall} />
        </div>
        <h1 className={styles.title}>
          Hi {user ? userName : "Guest"},
          <br />
          How are you feeling?
        </h1>

        <MoodQuestion className={styles.moodQuestion} />
        <Gratitude />
        <Quote />

        <h1 className={styles.title}>Explore</h1>
        <div className={styles.exploreBox}>
          <div className={styles.sleepTips}>
          <ExploreCard url={"https://www.healthline.com/nutrition/17-tips-to-sleep-better"} title={"Better Sleep tips"}/>
          </div>
          <div className={styles.increaseHappiness}>
          <ExploreCard url={"https://www.youtube.com/watch?v=ExukCRD7gN0"} title={"Increase Happiness"}/>
          </div>
          <div className={styles.healthyMeals}>
          <ExploreCard url={"https://www.bbcgoodfood.com/recipes/collection/quick-and-healthy-recipes"} title={"Healthy Meals"}/>
          </div>
        </div>

        <ChallengeSection />

        <div>
          <h1 className={styles.title}>All Activities</h1>
          <ActivityCard
            title={"Meditation"}
            image={meditationPic}
            url={"/meditation"}
          />
          <ActivityCard
            title={"Breathing Exercises"}
            image={breathingPic}
            url={"/breathing"}
          />
          <ActivityCard
            title={"Stretching"}
            image={stretchingPic}
            url={"/stretching"}
          />
          <ActivityCard title={"Yoga "} image={yogaPic} url={"/yoga"} />
        </div>
        <div className={styles.spacetoNavBar}></div>
      </main>
    </div>
  );
}
