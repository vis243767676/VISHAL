import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./Button1.module.css";

export type Button1Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Button1: FunctionComponent<Button1Type> = ({
  className = "",
  property1 = "2 Button",
}) => {
  return (
    <div
      className={[styles.button, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
          <Button
            buttonSize="Small - 36 Px"
            buttonType="Primary"
            iconLeft={false}
            iconRight={false}
            platform="AppMweb"
          />
        </div>
      </div>
    </div>
  );
};

export default Button1;
