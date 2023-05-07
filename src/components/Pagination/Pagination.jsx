import style from "./Pagination.module.css";

const Pagination = ({ arrBtn, setCurrentPage, numOfPages }) => {
  return (
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
      <button className={style.btn} onClick={() => setCurrentPage(numOfPages)}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
