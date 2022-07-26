import { useUser } from "@auth0/nextjs-auth0";
import Logout from "../component/Logout/logout";
import TabBar from "../component/TabBar/TabBar";
import Image from "next/image";
import backgroundImage from "../public/images/SettingsBackGround.png";
import styles from "../styles/Settings.module.css";
import BackButton from "../component/BackButton/BackButton";

export default function Settings() {
  const { user, error, isLoading } = useUser();
  return (
    <main className={styles.title}>
      <BackButton url={"/home"} />
      <h1>Settings</h1>
      <div className={styles.backgroundImage}>
        <Image
          alt="SettingsBackground"
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className={styles.body}>
        <h3>Notifications</h3>

        <h3>Dark Mode</h3>

        {user ? <Logout /> : null}
      </div>
    </main>
  );
}
