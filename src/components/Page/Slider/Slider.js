import React, { useState } from "react";
import styles from "./Slider.module.scss";
import Img1 from "../../../assets/img/img1.jpg";
import Img2 from "../../../assets/img/img2.jpg";
import Img3 from "../../../assets/img/img3.jpg";
import Img4 from "../../../assets/img/img4.jpg";

const Slider = () => {
  const advantages = [
    "Creative concept",
    "Eco-friendly",
    "Comes with an assembly guide",
    "Customizable"
  ];
  const sliderImgs = [Img1, Img2, Img3, Img4];
  const [selectedImg, setSelectedImg] = useState(Img1);
  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderImgs}>
          {sliderImgs.map(img => (
            <img
              src={img}
              alt={img}
              key={img}
              className={styles.img}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
        <div className={styles.selectedImg}>
          <img src={selectedImg} alt="img" className={styles.img} />
        </div>
        <div className={styles.description}>
          <span>Title</span>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century
          </p>
          <div className={styles.btns}>
            <button>Button</button>
            <button>Button</button>
          </div>
          <ul>
            {advantages.map(adv => (
              <li key={adv}>{adv}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slider;
