import rocketLogo from "./../../assets/rocket.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Rocket logo" />
      <h1>to</h1>
      <h1>do</h1>
    </header>
  )
}