import { Children } from "react";
import style from "./Main.module.css";
import Card from "../Card/Card.jsx";

const Main = ({ inputValue, inputValueHandler, Children, arrEmoji }) => {
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

      <div className={style.container}>
        {" "}
        {Children}
        {arrEmoji.map((e, i) => (
          <Card
            key={i}
            emoji={e.symbol}
            title={e.title}
            description={e.keywords}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
