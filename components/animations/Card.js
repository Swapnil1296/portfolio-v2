import React from "react";

import style from "./Card.module.css";
import Image from "next/image";

const Card = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.image}>
            {/* Correct className usage and ensure image path is correctly imported */}
            <img
              src={`/assets/icons/javascript-js-square.svg`}
              alt="JavaScript Logo"
            />
          </div>
          <div className={style.content}>
            <h3>This is content</h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
