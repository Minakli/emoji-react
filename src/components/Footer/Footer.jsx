import style from "./Footer.module.css";
const Footer = ({
  numPerPage,
  setNumPerPage,
  numPerPageHandler,
  numOfPages,
  arrBtn,
  setCurrentPage,
}) => {
  return (
    <div className={style.footer}>
      <div className={style.decorline}></div>
      <div className={style.container}>
        <div className={style.buttons}>
          <button className={style.btn} onClick={() => setCurrentPage(1)}>
            First
          </button>
          {arrBtn.map((elem) => (
            <button
              key={Math.random()}
              className={style.btn}
              onClick={() => setCurrentPage(elem + 1)}
            >
              {elem + 1}
            </button>
          ))}
          <button
            className={style.btn}
            onClick={() => setCurrentPage(numOfPages)}
          >
            Last
          </button>
        </div>

        <div>
          <p className={style.p}>Per page</p>
          <select value={numPerPage} onChange={numPerPageHandler}>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="48">48</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Footer;
