import style from "./Category.module.css";

export default function CategoryCard( { musicCategory, imageURL} ) {

  function handleClick(e, category) {
    if (process.browser) {
      if (selected_category.indexOf(category.toLowerCase()) !== -1) {
        selected_category.splice(
          selected_category.indexOf(category.toLowerCase()),
          1
        );
      } else {
        selected_category.push(category.toLowerCase());
      }

      const param = document.getElementById(e);
      const classes = param.classList;

      if (classes.length === 1) {
        param.classList.add('Category_selected__k-mej');
      } else {
        param.classList.remove('Category_selected__k-mej');
      }

    }
  }

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