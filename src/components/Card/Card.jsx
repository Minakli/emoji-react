import style from "./Card.module.css";
function Card({ emoji, title, description }) {
  return (
    <div className={style.wrapper}>
      <p className={style.emoji}>{emoji}</p>
      <p className={style.title}>{title}</p>
      <p className={style.description}>{description}</p>
    </div>
  );
}
export default Card;
