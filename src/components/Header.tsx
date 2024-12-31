import { FunctionComponent } from "react";
import PWA from "./PWA";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;

  /** Variant props */
  header?: string;
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  header = "PWA",
}) => {
  return (
    <section
      className={[styles.header, className].join(" ")}
      data-header={header}
    >
      <PWA header="PWA" />
    </section>
  );
};

export default Header;
