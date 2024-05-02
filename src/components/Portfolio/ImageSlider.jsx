import React, { useEffect, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const ImageSlider = ({ imgList, cls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let id;
  const slides = document.querySelectorAll(`.${cls}`);

  const leftClick = () => {
    if (id) {
      clearTimeout(id);
    }
    const newIndex = currentIndex === 0 ? imgList.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);

    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${newIndex * 100}%)`;
    });
  };

  const rightClick = () => {
    if (id) {
      clearTimeout(id);
    }
    const newIndex = currentIndex === imgList.length - 1 ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);

    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${newIndex * 100}%)`;
    });
  };

  useEffect(() => {
    slides.forEach((slide, i) => {
      slide.style.left = `${i * 100}%`;
    });

    id = setTimeout(() => {
      const newIndex =
        currentIndex === imgList.length - 1 ? 0 : currentIndex + 1;

      setCurrentIndex(newIndex);

      slides.forEach((slide) => {
        slide.style.transform = `translateX(-${newIndex * 100}%)`;
      });
    }, 5000);
  });

  return (
    <div className="img-slider relative h-[180px] w-full">
      {imgList &&
        imgList.map((img) => (
          <img
            loading="lazy"
            key={img}
            src={img}
            alt=""
            className={`${cls} absolute h-full w-full top-0 transition-all duration-[1500ms]`}
          />
        ))}
      <div
        className="arrow absolute left-3 top-[50%] translate-y-[-50%] rounded-md bg-arrow p-1 flex items-center justify-center cursor-pointer"
        onClick={leftClick}
      >
        <AiFillCaretLeft className="text-xl opacity-50" />
      </div>
      <div
        className="arrow absolute right-3 top-[50%] translate-y-[-50%] rounded-md bg-arrow p-1 flex items-center justify-center cursor-pointer"
        onClick={rightClick}
      >
        <AiFillCaretRight className="text-xl opacity-50" />
      </div>
      <div className="absolute left-[50%] bottom-3 translate-x-[-50%] flex gap-3 shrink-0">
        {imgList &&
          imgList.map((ele, index) => (
            <div
              key={index}
              onClick={() => {
                if (id) {
                  clearTimeout(id);
                }
                setCurrentIndex(index);
                slides.forEach((slide) => {
                  slide.style.transform = `translateX(-${index * 100}%)`;
                });
              }}
              className={`${
                index === currentIndex ? "bg-mainColor" : ""
              } h-4 w-4 border-[2px] border-black opacity-50 cursor-pointer rounded-full hover:opacity-80`}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default ImageSlider;
