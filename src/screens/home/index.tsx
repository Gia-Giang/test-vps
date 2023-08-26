import { Images } from "src/assets/images";
import styles from "./home.module.scss";

export default function HomeScreen() {
  return (
    <div className={styles.container}>
      <h1 className={styles.textLogo}>ONEBOX</h1>
      <img src={Images.logo} alt="logo" className={styles.logo}/>
    </div>
  );
}
