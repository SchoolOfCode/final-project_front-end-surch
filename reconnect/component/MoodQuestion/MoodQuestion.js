import React, { useState } from "react";
import MoodState from "./MoodState/MoodState";
import awful from "../../public/images/awful.png";
import bad from "../../public/images/bad.png";
import ok from "../../public/images/ok.png";
import good from "../../public/images/good.png";
import great from "../../public/images/great.png";
import styles from "../../styles/Home.module.css";
import {useRouter} from "next/router"

function MoodQuestion(props) {

    const router = useRouter();
    
    let initialMood = {
      isAwful: false,
      isBad: false, 
      isOK: false, 
      isGreat: false, 
      isGood: false
    }

    const [mood, setMood] = useState(initialMood);

    
  
    function handleClick(e){

      console.log(e);
      let selectedMood = e.target.alt;

      switch (selectedMood) {
        case 'awful':
          return setMood({
            isAwful: true,
            isBad: false, 
            isOK: false, 
            isGreat: false, 
            isGood: false })
        case 'bad':
          return setMood({
            isAwful: false,
            isBad: true, 
            isOK: false, 
            isGreat: false, 
            isGood: false })
        case 'ok':
          return setMood({
            isAwful: false,
            isBad: false, 
            isOK: true, 
            isGreat: false, 
            isGood: false })
        case 'good':
          return setMood({
            isAwful: false,
            isBad: false, 
            isOK: false, 
            isGreat: false, 
            isGood: true })
        case 'great':
        return setMood({
          isAwful: false,
          isBad: false, 
          isOK: false, 
          isGreat: true, 
          isGood: false })
        default:
          return null
      }
      }
    

      
    
    
  
      

return (
     <div className={styles.moodQuestionContainer} onClick={handleClick}>
      <MoodState src={awful} alt="awful" mood="Awful" isSelected={mood.isAwful}/>
      <MoodState src={bad} alt="bad" mood="Bad" isSelected={mood.isBad} />
      <MoodState src={ok} alt="ok" mood="Okay" isSelected={mood.isOK} />
      <MoodState src={good} alt="good" mood="Good" isSelected={mood.isGood} />
      <MoodState src={great} alt="great" mood="Great" isSelected={mood.isGreat} />
     </div>
  );
}


export default MoodQuestion;