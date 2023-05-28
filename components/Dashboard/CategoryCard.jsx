import style from "./Category.module.css";

export default function CategoryCard( { musicCategory, imageURL} ) {

  return (
    <div className={style.category__card}>
      <div
        id="1"
        className={style.category__card__icon}
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
        onClick={(e) => handleClick(e.target.id, musicCategory)}
      >
        <div className={style.heading}>
          <h3>{musicCategory}</h3>
        </div>
      </div>
    </div>
  );
}