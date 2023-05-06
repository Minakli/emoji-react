import { useState } from "react";

import { emoji } from "./emoji/emoji.js";

import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Card from "./components/Card/Card.jsx";

function App() {
  let numOfPages;
  // const [arrPages, setArrPages] = useState([1, 2, 3]);

  const [inputValue, setInputValue] = useState("");

  // Units on the page
  const [numPerPage, setNumPerPage] = useState(12);

  // Current page
  const [currentPage, setCurrentPage] = useState(1);

  // Input handler
  const inputValueHandler = (event) => {
    setInputValue(event.target.value);
    setArrEmoji(emojiOnPage);
    console.log(emojiOnPage);
  };

  // Select handler
  const numPerPageHandler = (event) => {
    setNumPerPage(event.target.value);
    setArrEmoji(emojiOnPage);
    console.log(emojiOnPage);
  };

  //Array buttons
  let arrBtn = [];
  if (currentPage < 5) {
    for (let i = 1; i < 6; i++) {
      arrBtn.push(i);
    }
  } else if (currentPage > numOfPages - 3) {
    for (let i = numOfPages - 5; i < numOfPages; i++) {
      arrBtn.push(i);
    }
  } else {
    for (let i = currentPage - 3; i < currentPage + 2 && i <= numOfPages; i++) {
      arrBtn.push(i);
    }
  }

  console.log(currentPage);

  // Deleting repeat words
  emoji.map(
    (elem) =>
      (elem.keywords = Array.from(new Set(elem.keywords.split(" "))).join(" "))
  );

  //-----------------------------------
  const [arrEmoji, setArrEmoji] = useState(emoji.splice(0, numPerPage));

  // Filter emoji
  let emojiFiltred = emoji.filter((elem) =>
    elem.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  // setArrEmoji(a);
  console.log(emojiFiltred);

  // Number of pages
  numOfPages = Math.ceil(emojiFiltred.length / numPerPage);
  console.log(numOfPages);

  // Making emoji page
  let emojiOnPage = emojiFiltred.splice(
    currentPage * (numPerPage - 1) + 1,
    currentPage * numPerPage
  );
  console.log(emojiOnPage);
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
        {arrEmoji.map((e, i) => (
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
      ></Footer>
    </>
  );
}

export default App;
