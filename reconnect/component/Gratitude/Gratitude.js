import Image from "next/image";
import brain from "../../public/images/brain.png"
import styles from "../../styles/Home.module.css"
import stylesGratitude from "./Gratitude.module.css"
import {useState} from "react"
import { Router } from "next/router";

export default function Gratitude(){
    const [gratitude, setGratitude] = useState("");
    const [textGratitude, setTextGratitude]= useState("")

    function handleClick(e){
        console.log(textGratitude);
        //post/put request to database to add to gratitude table

    }

    function handleChange(e){
        setTextGratitude(e.target.value);
    }

    return(
        <div className={styles.gratitudeContainer}>
          <Image layout="fixed" src={brain} height={122} width={124}/>
            <div className={styles.gratitudeBox}>
                <p className={stylesGratitude.ptags}>What are you grateful for?</p>
                    <div className={stylesGratitude.inputContainer}>
                        <input onChange={handleChange} className={stylesGratitude.input}placeholder="type here"></input>
                        <p onClick={handleClick} className={stylesGratitude.addButton}>+</p>
                    </div>
                <p className={stylesGratitude.ptags}>date | reason</p>
            </div>
            <a href={"https://reconnect-surch.netlify.app/gratitudewall"} className={styles.seeAll}>see all</a>
        </div>
    )
}