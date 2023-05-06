import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.h1}>Emoji Finder</h1>
      <p className={style.p}>Find emoji by keywords</p>
    </header>
  );
};

export default Header;
