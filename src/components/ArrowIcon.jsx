import {
  faArrowCircleDown,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";

const ArrowIcon = ({ scrollContainerRef, scrollContainerRef2 }) => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const [isArrowVisible, setIsArrowVisible] = useState(true);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (scrollContainerRef2.current?.offsetHeight <= 400) {
        setIsArrowVisible(false);
      } else {
        setIsArrowVisible(true);
      }
    });

    if (scrollContainerRef2.current) {
      resizeObserver.observe(scrollContainerRef2.current);
    }

    return () => {
      if (scrollContainerRef2.current) {
        resizeObserver.disconnect();
      }
    };
  }, [scrollContainerRef2]);

  // console.log("render out");
  const handleScroll = useCallback(() => {
    // console.log("render");

    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;
      const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      setIsScrolledToBottom(atBottom);
    }
  }, [scrollContainerRef]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleArrowClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: isScrolledToBottom ? 0 : scrollContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {isArrowVisible && (
        <FontAwesomeIcon
          style={{
            position: "sticky",
            left: "100%",
            zIndex: 1000,
            cursor: "pointer",
            marginRight: "-5px",
          }}
          size="xl"
          icon={isScrolledToBottom ? faArrowCircleUp : faArrowCircleDown}
          color="#0dcaf0"
          className="anim"
          onClick={handleArrowClick}
        />
      )}
    </>
  );
};

export default ArrowIcon;
