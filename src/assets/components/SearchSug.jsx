import React from "react";
import "./SearchSug.scss";
const SearchSug = ({ result, setSuggest }) => {
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
  return (
    <div className="suggs">
      {filtered.length > 0
        ? filtered.map((item, index) => (
            <div className="sug" key={index}>
              <i class="fa-regular fa-clock"></i>
              {item}
            </div>
          ))
        : () => setSuggest(false)}
    </div>
  );
};

export default SearchSug;
