import { FunctionComponent } from "react";
import Button2 from "./Button2";
import styles from "./PWA.module.css";

export type PWAType = {
  className?: string;

  /** Variant props */
  header?: string;
};

const PWA: FunctionComponent<PWAType> = ({
  className = "",
  header = "PWA",
}) => {
  return (
    <div className={[styles.pwa, className].join(" ")} data-header={header}>
      <img className={styles.statusbarIcon} alt="" src="/statusbar.svg" />
      <div className={styles.navigation}>
        <div className={styles.homePage}>
          <img
            className={styles.xCloseIcon}
            loading="lazy"
            alt=""
            src="/xclose.svg"
          />
          <a className={styles.companyName}>Bajaj Finserv Health</a>
        </div>
        <div className={styles.homePage1}>
          <div className={styles.buttonWrapper}>
            <Button2
              iconLeft={false}
              iconRight={false}
              state="Active"
              type="Text"
            />
          </div>
          <a className={styles.productName}>Assessment</a>
          <img className={styles.icons} loading="lazy" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PWA;
