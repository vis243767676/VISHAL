import { FunctionComponent } from "react";
import styles from "./Header1.module.css";

export type Header1Type = {
  className?: string;

  /** Variant props */
  action?: string;
  property1?: string;
};

const Header1: FunctionComponent<Header1Type> = ({
  className = "",
  action = "Text Link Button",
  property1 = "Primary",
}) => {
  return (
    <div
      className={[styles.header1, className].join(" ")}
      data-action={action}
      data-property1={property1}
    >
      <h3 className={styles.header}>Factors</h3>
    </div>
  );
};

export default Header1;
