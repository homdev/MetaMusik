import React from "react";
import { Link } from "react-router-dom";
import logoGif from "images/logo-gif.gif";
import logoImg from "images/logo.png";
import logoLightImg from "images/logo-gif.gif";

export interface LogoProps {
  img?: string;
  gif?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  gif = logoGif,
  imgLight = logoLightImg,
  className = "",
}) => {
  return (
    <Link
      to="/"
      className={`ttnc-logo inline-block text-primary-6000 ${className}`}
    >
      {/* THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {img ? (
      <div className="flex">
                <img
        className={`block max-h-12 ${gif ? "dark:hidden" : ""}`}
        src={gif}
        alt="Logo"
        style={{ flex: 1 }}
        />
        <img
          className={`block max-h-12 ${imgLight ? "dark:hidden" : ""}`}
          src={img}
          alt="Logo"
          style={{ flex: 1 }}
        />
      </div>
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <img
          className="hidden max-h-12 dark:block"
          src={imgLight}
          alt="Logo-Light"
        />
      )}
    </Link>
  );
};

export default Logo;
