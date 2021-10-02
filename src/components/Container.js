import { useState, useEffect } from "react";
import Header from "./Header.js";
import Search from "./Search.js";
import Results from "./Results.js";
import data from "../json/data.json";
import searchGifUrl from "../assets/search.gif";
import ScrollToTopButton from "./ScrollToTopButton";
import "./Container.css";

function Container() {
  const [emojiData, setEmojiData] = useState([]);
  const [newEmojiData, setNewEmojiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setEmojiData(data);
  }, []);

  const onChange = (val) => {
    setSearchQuery(val.toLowerCase());

    const queryKeywords = val.toLowerCase().trim().split(" ");

    const newEmojis = [];

    const queryLength = queryKeywords.length;

    let queryLengthSum = 0;

    console.log("\n\n\n NEW LINE \n\n\n");

    if (val.toLowerCase() !== "") {
      emojiData.forEach((item) => {
        let removeDuplicates = [...new Set(item.keywords.trim().split(" "))];
        queryLengthSum = 0;
        queryKeywords.forEach((query) => {
          removeDuplicates.forEach((keyword) => {
            if (keyword.indexOf(query) >= 0) {
              queryLengthSum++;
            }
          });
        });

        if (queryLength <= queryLengthSum) {
          newEmojis.push(item);
        }
      });
    }

    setNewEmojiData(newEmojis);
  };
  return (
    <div className="container">
      <Header />
      <Search onChange={onChange} />
      {!searchQuery ? (
        <div className="first-render">
          <h2>⌨️ Please Type Keywords To Search 👆🏼</h2>
          <img
            src={searchGifUrl}
            alt="Search for emojis"
            width="40%"
            height="40%"
          />
        </div>
      ) : (
        <Results
          emojiFiltered={searchQuery === "" ? emojiData : newEmojiData}
        />
      )}
      <ScrollToTopButton />
    </div>
  );
}

export default Container;
