import { useState } from "react";
import styles from "../styles/ImageSlider.module.css";

export default function ImageSlider({ imageArray, title }) {
  const [imageNumber, setImageNumber] = useState(0);

  const decreaseImg = function () {
    if (imageNumber > 0) setImageNumber((prev) => --prev);
  };

  const increaseImg = function () {
    if (imageNumber < imageArray.length - 1) setImageNumber((prev) => ++prev);
  };

  return (
    <div className={styles["image-slider"]}>
      <h3 className="sub-section__title">{title}</h3>
      <div className={styles["image-container"]}>
        {imageNumber > 0 && (
          <button onClick={decreaseImg} className={styles["l-btn"]}>
            &larr;
          </button>
        )}
        <div className={styles.container}>
          <img
            src={imageArray[imageNumber].link}
            alt={imageArray[imageNumber].caption}
            className={styles.img}
          />
          <p className={styles.caption}>{imageArray[imageNumber].caption}</p>
        </div>
        {imageNumber < 5 && (
          <button onClick={increaseImg} className={styles["r-btn"]}>
            &rarr;
          </button>
        )}
      </div>
    </div>
  );
}
