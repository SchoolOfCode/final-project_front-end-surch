import React from "react";
import MoodState from "./MoodState/MoodState";
import awful from "../../public/images/awful.png";
import bad from "../../public/images/bad.png";
import ok from "../../public/images/ok.png";
import good from "../../public/images/good.png";
import great from "../../public/images/great.png";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

function MoodQuestion() {
  return (
    <div className={styles.moodQuestionContainer}>
      <MoodState src={awful} alt="awful" mood="Awful" />
      <MoodState src={bad} alt="bad" mood="Bad" />
      <MoodState src={ok} alt="ok" mood="OK" />
      <MoodState src={good} alt="good" mood="Good" />
      <MoodState src={great} alt="great" mood="Great" />
    </div>
  );
}

export default MoodQuestion;
