import Image from "next/image";
import BackButton from "../component/BackButton/BackButton";
import stylesgratitudewall from "../component/GratitudeWall/gratitudewall.module.css"
import gratitudebackground from "../public/images/GratitudeBackGround1.png"
import styles from "../styles/Home.module.css"
import {useState} from "react"

export default function gratitudewall() {
    const [gratitude, setGratitude] = useState("");
    const [textGratitude, setTextGratitude]= useState("")
    
    function handleClick(e){
        console.log(textGratitude);
        //post/put request to database to add to gratitude table

    }

    function handleChange(e){
        setTextGratitude(e.target.value);
    }

    return (
        <div className={styles.main}>
        <BackButton url={"https://reconnect-surch.netlify.app/home"}/>
        <h1 className={styles.title}>Gratitude Wall</h1>
        <div className={stylesgratitudewall.background}>
            <Image
              alt="GratitudeBackground"
              src={gratitudebackground}
              layout="fill"
              objectFit="cover"
              quality={100}
            />  
        </div>
        
        <h4 className={stylesgratitudewall.subtitle}>What are you grateful for?</h4>
        <input onChange={handleChange} className={stylesgratitudewall.input} type="text" placeholder="type here"></input>
        <button className={styles.button} onClick={handleClick}>Save Gratitude</button>
        <h4 className={stylesgratitudewall.subtitle}>Gratitude diary</h4>
        </div>
    )
}