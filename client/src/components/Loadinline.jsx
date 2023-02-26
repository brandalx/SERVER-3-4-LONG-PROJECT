import React, { useEffect } from "react";

const LoadingLine = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = document.body.scrollHeight - window.innerHeight;
      const currentScrollPosition = window.pageYOffset;
      const loadingLine = document.getElementById("loadingLine");

      if (loadingLine) {
        loadingLine.style.width =
          (currentScrollPosition / scrollDistance) * 100 + "%";

        if (currentScrollPosition === scrollDistance) {
          loadingLine.style.width = "100%";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="css-selector "
      id="loadingLine"
      style={{
        width: "0%",
        height: "5px",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "99999",
      }}
    />
  );
};

export default LoadingLine;
