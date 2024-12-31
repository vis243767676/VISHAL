import { FunctionComponent } from "react";
import DS2Button from "./DS2Button";
import styles from "./Button3.module.css";

export type Button3Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Button3: FunctionComponent<Button3Type> = ({
  className = "",
  property1 = "2 Button",
}) => {
  return (
    <div
      className={[styles.button, className].join(" ")}
      data-property1={property1}
    >
      <DS2Button
        buttonType="Primary"
        icon={false}
        platform="App-Mweb"
        state="Active"
      />
    </div>
  );
};

export default Button3;
