import { FunctionComponent } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;

  /** Variant props */
  buttonSize?: string;
  buttonType?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  platform?: string;
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  buttonSize = "Small - 36 Px",
  buttonType = "Primary",
  iconLeft = false,
  iconRight = false,
  platform = "App/Mweb",
}) => {
  return (
    <div
      className={[styles.button1, className].join(" ")}
      data-buttonSize={buttonSize}
      data-buttonType={buttonType}
      data-iconLeft={iconLeft}
      data-iconRight={iconRight}
      data-platform={platform}
    >
      <div className={styles.button}>Proceed</div>
    </div>
  );
};

export default Button;
