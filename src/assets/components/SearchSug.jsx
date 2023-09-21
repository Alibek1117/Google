import React from "react";
import "./SearchSug.scss";
const SearchSug = ({ result, setSuggest, setSearchValue }) => {
  console.log(result);
  let sugg = [
    "java script asoslari",
    "react JS",
    "tailwind cheat sheet",
    "font Awesome snd",
    "yandex map",
    "google icons",
    "google fonts",
  ];
  console.log(sugg);
  const filtered =
    sugg &&
    sugg.filter((item) => {
      return item.includes(result);
    });
  console.log(filtered);
  filtered.find((item, i) => {
    if (sugg[i] === item) {
      console.log("true");
    }
  });
  const handleSugs = (e) => {
    const inputVal = e.target.innerText;
    setSearchValue(inputVal)
    // console.log(inputVal);
  };
  return (
    <div className="suggs" onClick={handleSugs}>
      {filtered.length > 0
        ? filtered.map((item, index) => (
            <div className="sug" key={index}>
              <i className="fa-regular fa-clock"></i>
              {item}
            </div>
          ))
        : () => setSuggest(false)}
    </div>
  );
};

export default SearchSug;
