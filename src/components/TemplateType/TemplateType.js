import React from "react";
import styles from "./TemplateType.module.scss";
import classnames from "classnames";

const TemplateType = props => {
  const { options, setSelected, selected } = props;
  return (
    <div className={styles.alignOptions}>
      <p className={styles.title}>Template type</p>
      <div className={styles.optionsContainer}>
        {options.map(opt => {
          return (
            <div
              key={opt.title}
              onClick={() => setSelected(opt.title)}
              className={classnames(
                styles.alignOptionsItem,
                selected === opt.title && styles.selected
              )}
            >
              <div className={styles.image}>
                <img src={opt.svg} alt={opt.title} />
              </div>
              <p className={styles.optionTitle}>{opt.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TemplateType;
