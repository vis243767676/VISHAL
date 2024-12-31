import { FunctionComponent } from "react";
import styles from "./DesignElement.module.css";

export type DesignElementType = {
  className?: string;
};

const DesignElement: FunctionComponent<DesignElementType> = ({
  className = "",
}) => {
  return <div className={[styles.designElement, className].join(" ")} />;
};

export default DesignElement;
