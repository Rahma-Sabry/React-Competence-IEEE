import { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        padding: "12px 16px",
        borderRadius: "50%",
        border: "none",
        backgroundColor: "#5465FF",
        color: "white",
        fontSize: "18px",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        zIndex: 1000
      }}
    >
      ↑
    </button>
  );
}

export default ScrollToTopButton;