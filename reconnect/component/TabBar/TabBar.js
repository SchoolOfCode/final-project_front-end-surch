import Styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  IoHomeSharp,
  IoHomeOutline,
  IoStarOutline,
  IoStar,
  IoSettingsOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import { AiOutlinePlusSquare, AiFillPlusSquare } from "react-icons/ai";

function TabBar(props) {
  const router = useRouter();
  const [activeTabs, setActiveTabs] = useState(props.name);
  useEffect(() => {
    // ***** to update links to proper pages *****//
    switch (activeTabs) {
      case "home":
        router.push("/");
        break;
      case "favourites":
        router.push("/");
        break;
      case "add":
        router.push("/");
        break;
      case "account":
        router.push("/");
        break;
      default:
        router.push("/");
        break;
    }
  }, [activeTabs, router]);

  // ***** to update icons *****//
  // title of icon and box around icon with rounded corners
  return (
    <div className={`${Styles.bottomNav}`}>
      <div className={`${Styles.bnTab}`}>
        {activeTabs === "home" ? (
          <IoHomeSharp
            size="35"
            color="#000"
            onClick={() => setActiveTabs("home")}
          />
        ) : (
          <IoHomeOutline
            size="35"
            color="#000"
            onClick={() => setActiveTabs("home")}
          />
        )}
      </div>
      <div className={`${Styles.bnTab}`}>
        {activeTabs === "favourites" ? (
          <IoStar
            size="35"
            color="#000"
            onClick={() => setActiveTabs("favourites")}
          />
        ) : (
          <IoStarOutline
            size="35"
            color="#000"
            onClick={() => setActiveTabs("favourites")}
          />
        )}
      </div>
      <div className={`${Styles.bnTab}`}>
        {activeTabs === "add" ? (
          <AiFillPlusSquare
            size="35"
            color="#000"
            onClick={() => setActiveTabs("add")}
          />
        ) : (
          <AiOutlinePlusSquare
            size="35"
            color="#000"
            onClick={() => setActiveTabs("add")}
          />
        )}
      </div>
      <div className={`${Styles.bnTab}`}>
        {activeTabs === "account" ? (
          <IoSettingsSharp
            size="35"
            color="#000"
            onClick={() => setActiveTabs("account")}
          />
        ) : (
          <IoSettingsOutline
            size="35"
            color="#000"
            onClick={() => setActiveTabs("account")}
          />
        )}
      </div>
    </div>
  );
}

export default TabBar;
