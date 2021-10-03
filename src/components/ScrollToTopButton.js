import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";
import { ReactComponent as UpIcon } from "../assets/up.svg";

const ScrollToTopButton = () => {
  const [showScrollToTop, setScrollToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setScrollToTop(window.pageYOffset > 500);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top-wrapper">
      {showScrollToTop && (
        <div onClick={scrollToTop}>
          <div className="scroll-top-button">
            <UpIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
