import { useState } from "react";
export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button
      className="navbar-toggler first-button border-0"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded={isOpen ? "true" : "false"}
      aria-label="Toggle navigation"
      onClick={handleToggle}
    >
      <div className={`animated-icon1 ${isOpen ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};
