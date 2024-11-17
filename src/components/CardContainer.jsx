import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function CardContainer({ titulo, children }) {
  const refOuterContainer = useRef(null);
  const refInnerContainer = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  const handleScroll = (direction) => {
    const containerWidth = refInnerContainer.current.scrollWidth;
    const visibleWidth = refOuterContainer.current.offsetWidth;
    const maxTranslateX = visibleWidth - containerWidth;

    if (direction === "left") {
      setTranslateX((prev) => Math.min(prev + 200, 0));
    } else {
      setTranslateX((prev) => Math.max(prev - 200, maxTranslateX));
    }
  };

  return (
    <div className="flex flex-col gap-5 px-10 py-8">
      <h1 className="text-3xl font-bold">{titulo}</h1>
      <div className="w-full overflow-hidden relative" ref={refOuterContainer}>
        <button
          onClick={() => handleScroll("left")}
          className="bg-white/30 hover:bg-white hover:text-black size-14 rounded-full flex items-center justify-center absolute z-10 top-1/2 transition-all duration-300"
        >
          <IoIosArrowBack className="size-10" />
        </button>
        <div
          className="flex gap-8 w-fit transition-transform duration-300 ease-in-out"
          ref={refInnerContainer}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {children}
        </div>
        <button
          onClick={() => handleScroll("right")}
          className="bg-white/30 hover:bg-white hover:text-black size-14 rounded-full flex items-center justify-center absolute z-10 top-1/2 right-0 transition-all duration-300"
        >
          <IoIosArrowForward className="size-10" />
        </button>
      </div>
    </div>
  );
}