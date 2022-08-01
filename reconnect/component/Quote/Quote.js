import styles from "../../styles/Home.module.css"

export default function quote(){
    return(
        <div className={styles.quoteBox}>
            <h3 className={styles.quoteText}><em>"This is a super well thought out mind boggling quote that I thought of"</em></h3>
            <h6 className={styles.quoteAuthor}><em>~Ismail Ali</em></h6>
        </div>
    )
}