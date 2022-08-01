import Image from "next/image";
import styles from "../../../styles/Home.module.css";

function MoodState(props) {
  return (
    <div className={styles.moodStateContainer}>
      <Image
        src={props.src}
        alt={props.alt}
        width={26.43}
        height={26.43}
      ></Image>
      <p>{props.mood}</p>
    </div>
  );
}

export default MoodState;
