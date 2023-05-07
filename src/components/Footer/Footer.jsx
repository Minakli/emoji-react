import style from "./Footer.module.css";
const Footer = ({
  numPerPage,
  setNumPerPage,
  numPerPageHandler,
  numOfPages,
  arrBtn,
  setCurrentPage,
  children,
}) => {
  return (
    <div className={style.footer}>
      <div className={style.decorline}></div>
      <div className={style.container}>
        {children}
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
