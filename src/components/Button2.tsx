import { FunctionComponent } from "react";
import styles from "./Button2.module.css";

export type Button2Type = {
  className?: string;

  /** Variant props */
  iconLeft?: boolean;
  iconRight?: boolean;
  state?: string;
  type?: string;
};

const Button2: FunctionComponent<Button2Type> = ({
  className = "",
  iconLeft = false,
  iconRight = false,
  state = "Active",
  type = "Default",
}) => {
  return (
    <div
      className={[styles.button, className].join(" ")}
      data-iconLeft={iconLeft}
      data-iconRight={iconRight}
      data-state={state}
      data-type={type}
    >
      <a className={styles.button20}>Back</a>
    </div>
  );
};

export default Button2;
