import React from "react";
import styles from "./TwoImages.module.scss";
import Date from "../../../assets/svgs/date-icon.svg";
import Img from "../../../assets/img/profPic.png";
import FbIcon from "../../../assets/svgs/facebook-icon.svg";
import InstaIcon from "../../../assets/svgs/instagram-icon.svg";
import TwitterIcon from "../../../assets/svgs/twitter-icon.svg";

const TwoImages = () => {
  return (
    <div className={styles.twoImgs}>
      <div className={styles.twoImgsWrapper}>
        <img src={Img} alt="img" className={styles.img} />
        <div className={styles.columns}>
          <div className={styles.socialMedia}>
            <span>Share</span>
            <img src={FbIcon} alt="Facebook" />
            <img src={InstaIcon} alt="Instagram" />
            <img src={TwitterIcon} alt="Twitter" />
          </div>
          <div className={styles.content}>
            <span>Title</span>
            <div className={styles.date}>
              <img src={Date} alt="date" />
              <span>22/12/2019</span>
            </div>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century
            </p>
            <img src={Img} alt="img" className={styles.img} />
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoImages;
