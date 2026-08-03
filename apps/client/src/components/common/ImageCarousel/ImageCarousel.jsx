import { useState } from "react";
import { ChevronLeft, ChevronRight } from "../../../lib/icons";
import { getAsset } from "../../../utils/getAsset";
import "./ImageCarousel.css";

export default function ImageCarousel({ images = [], alt = "" }) {
  const [currentImage, setCurrentImage] = useState(0);
  const current = images[currentImage] ?? images[0];

  const nextImage = () => {
    setCurrentImage((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  if (!images.length) {
    return <div className="image-carousel image-carousel--empty">No Image</div>;
  }

  return (
    <div className="image-carousel">
      <div className="image-carousel__image">
        <img src={getAsset(current.url)} alt={current.altText || alt} />
        {images.length > 1 && (
          <>
            <button
              className="image-carousel__button image-carousel__button--previous"
              onClick={previousImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              className="image-carousel__button image-carousel__button--next"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="image-carousel__indicators">
          {images.map((image, index) => (
            <button
              key={image.id}
              className={`image-carousel__indicator ${
                index === currentImage
                  ? "image-carousel__indicator--active"
                  : ""
              }`}
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
