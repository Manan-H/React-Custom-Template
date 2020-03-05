import React, { useState } from "react";
import styles from "./EmailSignature.module.scss";
import classnames from "classnames";
import TemplateType from "../TemplateType/TemplateType";
import LeftAlign from "../../assets/svgs/email-layout1.svg";
import CenterAlign from "../../assets/svgs/email-layout2.svg";
import RightAlign from "../../assets/svgs/email-layout3.svg";
import ProfilePic from "../../assets/img/profPic.png";
import FbIcon from "../../assets/svgs/facebook-icon.svg";
import InstaIcon from "../../assets/svgs/instagram-icon.svg";
import TwitterIcon from "../../assets/svgs/twitter-icon.svg";

function EmailSignature() {
  const { left, center, right } = styles;
  const alignOptions = [
    { title: "Left Align Layout", svg: LeftAlign },
    { title: "Center Align Layout", svg: CenterAlign },
    { title: "Right Align Layout", svg: RightAlign }
  ];

  const [selectedLayout, setSelectedLayout] = useState(alignOptions[0].title);

  return (
    <div className={styles.emailSignature}>
      <TemplateType
        options={alignOptions}
        setSelected={setSelectedLayout}
        selected={selectedLayout}
      />
      <div className={styles.emailSignatureWrapper}>
        <div className={styles.profileContainer}>
          <div
            className={classnames(
              selectedLayout === "Left Align Layout" && left,
              selectedLayout === "Center Align Layout" && center,
              selectedLayout === "Right Align Layout" && right
            )}
          >
            <div className={styles.profilePic}>
              <img src={ProfilePic} alt="Profile pic" />
            </div>
            <div className={styles.username}>
              <p>Name Surname</p>
              <p>Web Developer</p>
            </div>
            <div className={styles.socialMedia}>
              <img src={FbIcon} alt="Facebook" />
              <img src={InstaIcon} alt="Instagram" />
              <img src={TwitterIcon} alt="Twitter" />
            </div>

            <div className={styles.description}>
              <span>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailSignature;
