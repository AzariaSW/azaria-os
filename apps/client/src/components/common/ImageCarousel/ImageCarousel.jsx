import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "../../../lib/icons";
import { getAsset } from "../../../utils/getAsset";
import "./ImageCarousel.css";

export default function ImageCarousel({ images = [], image = null, alt = "" }) {
  const normalizedImages = (() => {
    if (images.length > 0) {
      return images;
    }

    if (Array.isArray(image)) {
      return image;
    }

    if (typeof image === "string") {
      return [{ id: "single-image", url: image }];
    }

    if (image && typeof image === "object" && image.url) {
      return [image];
    }

    return [];
  })();
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const current = normalizedImages[currentImage] ?? normalizedImages[0];

  const nextImage = () => {
    setCurrentImage((current) =>
      current === normalizedImages.length - 1 ? 0 : current + 1,
    );
  };

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? normalizedImages.length - 1 : current - 1,
    );
  };

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!normalizedImages.length) {
    return <div className="image-carousel image-carousel--empty">No Image</div>;
  }

  return (
    <>
      <div className="image-carousel">
        <div className="image-carousel__image">
          <img
            src={getAsset(current.url)}
            alt={current.altText || alt}
            onClick={() => setIsOpen(true)}
          />
          {normalizedImages.length > 1 && (
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
              <div className="image-carousel__indicators">
                {normalizedImages.map((image, index) => (
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
            </>
          )}
        </div>
      </div>
      {isOpen && (
        <div
          className="image-carousel__overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="image-carousel__modal"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={getAsset(current.url)} alt={current.altText || alt} />
            {normalizedImages.length > 1 && (
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
                <div className="image-carousel__indicators">
                {normalizedImages.map((image, index) => (
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
              </>
            )}
            <button
              className="image-carousel__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
