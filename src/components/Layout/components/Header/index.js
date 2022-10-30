import styles from "./Header.module.scss";
import clsx from "clsx";
import images from "~/assets/images";

function Header() {
  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        <div className={clsx(styles.logo)}>
          <img src={images.logo} alt="logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
