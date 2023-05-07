import style from "./Main.module.css";
import Card from "../Card/Card.jsx";

const Main = ({ inputValue, inputValueHandler, children, arrEmoji }) => {
  console.log(inputValue);
  return (
    <main className={style.main}>
      <input
        onChange={inputValueHandler}
        className={style.input}
        type="text"
        placeholder="  Placeholder"
        value={inputValue}
      />

      <div className={style.container}> {children}</div>
    </main>
  );
};

export default Main;
