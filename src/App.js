import { useState, useEffect } from "react";

import { emoji } from "./emoji/emoji.js";

import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Card from "./components/Card/Card.jsx";
import Pagination from "./components/Pagination/Pagination.jsx";

// Deleting repeat words
let emojiWithoutRepeat = emoji.map((elem) => ({
  title: elem.title,
  symbol: elem.symbol,
  keywords: Array.from(new Set(elem.keywords.split(" "))).join(" "),
}));
// console.log(emojiWithoutRepeat);

function App() {
  let numOfPages;
  // const [arrPages, setArrPages] = useState([1, 2, 3]);

  const [inputValue, setInputValue] = useState("");

  // Units on the page
  const [numPerPage, setNumPerPage] = useState(12);

  // Current page
  const [currentPage, setCurrentPage] = useState(1);

  // Showing emoji
  const [arrEmoji, setArrEmoji] = useState(emojiWithoutRepeat);

  useEffect(() => {
    setArrEmoji(filterEmoji());
  }, [inputValue]);
  // Input handler
  const inputValueHandler = (event) => {
    setInputValue(event.target.value);
    setCurrentPage(1);
  };

  // Select handler
  const numPerPageHandler = (event) => {
    setNumPerPage(event.target.value);
    setCurrentPage(1);
  };

  // Number of pages
  numOfPages = Math.ceil(arrEmoji.length / numPerPage);
  console.log(numOfPages);

  //Array buttons
  let arrBtn = [];
  if (currentPage < 5) {
    for (let i = 1; i < 6; i++) {
      arrBtn.push(i);
      console.log(i);
    }
  } else if (currentPage > numOfPages - 3) {
    for (let i = numOfPages - 5; i < numOfPages; i++) {
      arrBtn.push(i);
      console.log(i);
    }
  } else {
    for (let i = currentPage - 3; i < currentPage + 2 && i <= numOfPages; i++) {
      arrBtn.push(i);
      console.log(i);
    }
  }
  console.log(arrBtn);
  console.log(currentPage);

  //-----------------------------------

  // Filter emoji
  function filterEmoji() {
    return emojiWithoutRepeat.filter((elem) =>
      elem.title.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

  // Making emoji page
  let emojiOnPage = arrEmoji.slice(
    currentPage * numPerPage - numPerPage,
    currentPage * numPerPage
  );
  // Set emoji for showing
  // const ShowEmoji = () => setArrEmoji(emojiOnPage);

  // Array for show emoji

  return (
    <>
      <Header />
      <Main
        inputValue={inputValue}
        setInputValue={setInputValue}
        inputValueHandler={inputValueHandler}
        arrEmoji={arrEmoji}
      >
        {console.log(111)}
        {emojiOnPage.map((e, i) => (
          <Card
            key={i}
            emoji={e.symbol}
            title={e.title}
            description={e.keywords}
          />
        ))}
      </Main>
      <Footer
        numperPage={numPerPage}
        setNumPerPage={setNumPerPage}
        numPerPageHandler={numPerPageHandler}
        numOfPages={numOfPages}
        arrBtn={arrBtn}
        setCurrentPage={setCurrentPage}
      >
        <Pagination
          arrBtn={arrBtn}
          setCurrentPage={setCurrentPage}
          numOfPages={numOfPages}
        />
      </Footer>
    </>
  );
}

export default App;
