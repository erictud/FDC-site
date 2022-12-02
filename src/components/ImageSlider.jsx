import { useState } from "react";
import styles from "../styles/ImageSlider.module.css";

const imageArray = [
  {
    link: "/images/slider/imagine1.jpg",
    caption: "caption 1",
  },
  {
    link: "/images/slider/imagine1.jpg",
    caption: "caption 2",
  },
  {
    link: "/images/slider/imagine1.jpg",
    caption: "caption 3",
  },
];

export default function ImageSlider() {
  const [imageNumber, setImageNumber] = useState(0);

  const decreaseImg = function () {
    if (imageNumber > 0) setImageNumber((prev) => --prev);
  };

  const increaseImg = function () {
    if (imageNumber < imageArray.length - 1) setImageNumber((prev) => ++prev);
  };

  return (
    <div className={styles["image-slider"]}>
      <h3 className="sub-section__title">Galerie imagini</h3>
      <div className={styles["image-container"]}>
        <button onClick={decreaseImg} className={styles["l-btn"]}>
          &larr;
        </button>
        <div className={styles.container}>
          <img src={imageArray[imageNumber].link} alt="" className={styles.img} />
          <p className={styles.caption}>{imageArray[imageNumber].caption}</p>
        </div>
        <button onClick={increaseImg} className={styles["r-btn"]}>
          &rarr;
        </button>
      </div>
    </div>
  );
}
