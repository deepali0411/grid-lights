import react from "react";
import cx from "classnames";
import styles from "./cell.module.scss";

const Cell = ({ data, index, clickButton, filled, isDisabled }) => {
  return data === 1 ? (
    <button
      className={cx(styles.cell, { [styles.selectedCell]: filled })}
      onClick={() => clickButton(index)}
      disabled={isDisabled}
    ></button>
  ) : (
    <div></div>
  );
};
export default Cell;
