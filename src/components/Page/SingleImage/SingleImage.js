import React from "react";
import styles from "./SingleImage.module.scss";
import Date from "../../../assets/svgs/date-icon.svg";
import View from "../../../assets/svgs/view-icon.svg";
import Img from "../../../assets/img/profPic.png";
import FbIcon from "../../../assets/svgs/facebook-icon.svg";
import InstaIcon from "../../../assets/svgs/instagram-icon.svg";
import TwitterIcon from "../../../assets/svgs/twitter-icon.svg";

const SingleImage = () => {
  return (
    <div className={styles.singleImg}>
      <div className={styles.singleImgWrapper}>
        <p>Category Name</p>
        <p>Title</p>
        <div className={styles.details}>
          <span>Author Name</span>
          <div className={styles.date}>
            <img src={Date} alt="date" />
            <span>22/12/2019</span>
          </div>
          <div className={styles.views}>
            <img src={View} alt="Views" />
            <span>256</span>
          </div>
        </div>
        <img src={Img} alt="img" className={styles.img} />
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century
        </p>
        <div className={styles.socialMedia}>
          <span>Share</span>
          <img src={FbIcon} alt="Facebook" />
          <img src={InstaIcon} alt="Instagram" />
          <img src={TwitterIcon} alt="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
