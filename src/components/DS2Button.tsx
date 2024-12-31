import { FunctionComponent } from "react";
import styles from "./DS2Button.module.css";

export type DS2ButtonType = {
  className?: string;

  /** Variant props */
  buttonType?: string;
  icon?: boolean;
  platform?: string;
  state?: string;
};

const DS2Button: FunctionComponent<DS2ButtonType> = ({
  className = "",
  buttonType = "Primary",
  icon = false,
  platform = "App-Mweb",
  state = "Active",
}) => {
  return (
    <button
      className={[styles.ds2Button, className].join(" ")}
      data-buttonType={buttonType}
      data-icon={icon}
      data-platform={platform}
      data-state={state}
    >
      <div className={styles.button}>Continue</div>
    </button>
  );
};

export default DS2Button;
