import { FunctionComponent } from "react";
import styles from "./UserLevel.module.css";

export type UserLevelType = {
  className?: string;
};

const UserLevel: FunctionComponent<UserLevelType> = ({ className = "" }) => {
  return (
    <div className={[styles.userLevel, className].join(" ")}>
      <div className={styles.userLevelInner}>
        <div className={styles.unionParent}>
          <img
            className={styles.unionIcon}
            loading="lazy"
            alt=""
            src="/union.svg"
          />
          <div className={styles.userName}>
            <div className={styles.you}>You</div>
          </div>
          <div className={styles.separator}>6.25%</div>
        </div>
      </div>
      <div className={styles.levelIllustration}>
        <div className={styles.levelBars}>
          <img
            className={styles.levelBarsChild}
            loading="lazy"
            alt=""
            src="/group-1707480806@2x.png"
          />
          <div className={styles.diabeticLevel} />
          <div className={styles.normalPrediabeticLevel}>
            <a className={styles.normal}>Normal</a>
          </div>
          <div className={styles.referenceLevel}>Reference Level</div>
        </div>
        <img
          className={styles.levelBarsIcon}
          loading="lazy"
          alt=""
          src="/vector-734.svg"
        />
        <div className={styles.levelBars1}>
          <div className={styles.levelBarsItem} />
          <div className={styles.levelBarsInner} />
          <div className={styles.preDiabeticWrapper}>
            <div className={styles.preDiabetic}>Pre-diabetic</div>
          </div>
        </div>
        <img
          className={styles.levelBarsIcon1}
          loading="lazy"
          alt=""
          src="/vector-733.svg"
        />
        <div className={styles.levelBars2}>
          <div className={styles.rectangleDiv} />
          <div className={styles.diabeticWrapper}>
            <div className={styles.diabetic}>Diabetic</div>
          </div>
        </div>
        <div className={styles.levelBars3}>5.7%</div>
        <div className={styles.levelBars4}>6.5%</div>
      </div>
    </div>
  );
};

export default UserLevel;
