import React from "react";

const ImgButtonComponent = ({
  label,
  src, // Image source
  alt, // Image alt text
  onClick,
  customColor,
  customWidth,
  customHeight,
  customTextColor
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: customColor,
        width: customWidth,
        height: customHeight,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px 50px 10px 50px",
        border: "1px solid #FFBF00",
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {src && (
        <img
          src={src}
          alt={alt}
          style={{ width: "50px", height: "50px", marginBottom: "10px" }}
        />
      )}
      <span style={{ color: "black", fontWeight: "bold", fontSize: "16px" }}>
        {label}
      </span>
    </button>
  );
};

export default ImgButtonComponent;
