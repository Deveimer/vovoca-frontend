import { useState } from "react";
import style from "./Category.module.css";

export default function CategoryCard( { musicCategory, imageURL, handleClick} ) {

  const [ clicked, setClicked] = useState(false);
  
  return (
    <div className={style.category__card}>
      <div
        id="1"
        className={style.category__card__icon+" "+(clicked?style.selected:'')}
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
        onClick={(e) => {
          setClicked(!clicked);
          handleClick(e.target.id, musicCategory);
        }}
      >
        <div className={style.heading}>
          <h3>{musicCategory}</h3>
        </div>
      </div>
    </div>
  );
}