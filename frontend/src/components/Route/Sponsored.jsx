import React, { useState, useEffect } from "react";
import styles from "../../styles/styles";
import { MdKeyboardArrowUp } from "react-icons/md";

const Sponsored = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-5 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png"
            style={{ width: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start mt-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxDNWh7hH3GUnryIpBGSdLFdcZigSz2TDXvp5x-ybhw&s"
            style={{ width: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png"
            style={{ width: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpxxOwmSh275knZ3GIVX7_bagb6boaxfAhw3GXuW9285F6K_HmzqsJYMzk3o0mLmCxyA&usqp=CAU " // Replace this with the URL of your image
            style={{ width: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
      </div>
      {showScrollButton && (
        <div
          className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer shadow-md absolute right-4 bottom-4"
          onClick={scrollToTop}
        >
          <MdKeyboardArrowUp size={24} />
        </div>
      )}
    </div>
  );
};

export default Sponsored;
