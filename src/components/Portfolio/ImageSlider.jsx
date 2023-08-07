import React, { useEffect, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const ImageSlider = ({ imgList }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    let id;

    const leftClick = () => {
        if (id) {
            clearTimeout(id);
        }
        const newIndex =
            currentIndex === 0 ? imgList.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex);
    };

    const rightClick = () => {
        if (id) {
            clearTimeout(id);
        }
        const newIndex =
            currentIndex === imgList.length - 1 ? 0 : currentIndex + 1;

        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        id = setTimeout(() => {
            const newIndex =
                currentIndex === imgList.length - 1 ? 0 : currentIndex + 1;

            setCurrentIndex(newIndex);
        }, 5000);
    });

    return (
        <div className="relative">
            <div
                className="h-[180px] w-full transition-all duration-1000 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${imgList[currentIndex]})` }}
            ></div>
            <div
                className="arrow absolute left-3 top-[50%] translate-y-[-50%] rounded-md bg-arrow p-1 flex items-center justify-center cursor-pointer"
                onClick={leftClick}
            >
                <AiFillCaretLeft className="text-xl opacity-40" />
            </div>
            <div
                className="arrow absolute right-3 top-[50%] translate-y-[-50%] rounded-md bg-arrow p-1 flex items-center justify-center cursor-pointer"
                onClick={rightClick}
            >
                <AiFillCaretRight className="text-xl opacity-40" />
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
                            }}
                            className={`${
                                index === currentIndex ? "bg-mainColor" : ""
                            } h-4 w-4 border-[2px] border-black opacity-40 cursor-pointer rounded-full hover:opacity-60`}
                        ></div>
                    ))}
            </div>
        </div>
    );
};

export default ImageSlider;
