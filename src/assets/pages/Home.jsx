import React, { useEffect, useState } from "react";
import appsIcon from "../imgs/Icons/apps.png";
import insta from "../imgs/Icons/insta.png";
import search from "../imgs/Icons/icon_search.svg";
import camera from "../imgs/Icons/lens_icon.svg";
import plus from "../imgs/Icons/plus.svg";
import voise from "../imgs/Icons/googlemic_clr_24px.svg";
import "./Home.scss";
import AppsIcon from "../components/AppsIcon";
import { GoogleApps } from "../components/GoogleApps";
import Account from "../components/Account";
import SearchSug from "../components/SearchSug";
import { Arrays } from "../components/Arrays";
import Shortcut from "../components/Shortcut";
import ImgSearch from "../components/ImgSearch";

// let shortcutArr = [
//   {
//     name: "Instagram",
//     url: "Instagram.com",
//   },
//   {
//     name: "Telegram",
//     url: "Instagram.com",
//   },
//   {
//     name: "You Tube",
//     url: "Instagram.com",
//   },
//   {
//     name: "Git Hub",
//     url: "Instagram.com",
//   },
//   {
//     name: "Netlify",
//     url: "Instagram.com",
//   },
// ];

const Home = () => {
  const [apps, setApps] = useState(false);
  const [account, setAccount] = useState(false);
  const [suggest, setSuggest] = useState(false);
  const [result, setResult] = useState("");
  const [obj, setObj] = useState(null);
  const [shortModal, setShortModal] = useState(false);
  const [imgSearch, setSearchImg] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [shortcutArr, setShortcutArr] = useState(() => {
    const storedArr = localStorage.getItem("shortcutArr");
    return storedArr
      ? JSON.parse(storedArr)
      : [
          {
            name: "Instagram",
            url: "https://www.instagram.com",
          },
          {
            name: "Telegramm",
            url: "https://www.telegram.org",
          },
          {
            name: "You Tube",
            url: "https://www.youtube.com",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("shortcutArr", JSON.stringify(shortcutArr));
  }, [shortcutArr]);
  useEffect(() => {
    if (obj) {
      const existingShortcut = shortcutArr.find(
        (item) => item.name === obj.name,
      );
      if (!existingShortcut) {
        setShortcutArr((prevArr) => [...prevArr, obj]);
      }
    }
  }, [obj, shortcutArr]);

  const handleHome = () => {
    setApps(false);
    setAccount(false);
    setSuggest(false);
    setSearchImg(false);
  };

  const handleApp = () => {
    setApps(!apps);
  };
  const handleAcc = () => {
    setAccount(!account);
  };
  const handleInput = () => {
    setSuggest(true);
  };

  const handleShortModal = () => {
    setShortModal(true);
  };
  const handleImgSearch = () => {
    setSearchImg(true);
  };

  // console.log(newArr);
  return (
    <div className="home-page" onClick={(e) => handleHome()}>
      <nav>
        <ul>
          <li>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl">Gmail</a>
          </li>
          <li>
            <a href="https://www.google.com/imghp?hl=en&tab=ri&ogbl">Images</a>
          </li>
          <li
            onClick={(e) => {
              e.stopPropagation();
              handleApp();
            }}
          >
            <AppsIcon />
          </li>
          <li
            onClick={(e) => {
              e.stopPropagation();
              handleAcc();
            }}
          >
            <div className="back-account">
              <div className="account">S</div>
            </div>
          </li>
        </ul>
      </nav>
      <div className="main">
        <h1 className="title">Google</h1>
        <div className="searche">
          <div className="search">
            <img className="search-icon" src={search} alt="search" />
            <form
              className="search-input"
              onSubmit={(e) => {
                e.stopPropagation();
              }}
            >
              <input
                onChange={(e) => {
                  // e.stopPropagation();
                  setResult(e.target.value);
                  console.log(e);
                  //  handleInput()
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleInput();
                }}
                className="search-input"
                type="text"
                // value={searchValue}
                placeholder="Search Google or type a URL"
              />
            </form>
            {result.length >0 && (<i className="fa-solid fa-xmark"></i>)}
            <img className="voise-icon" src={voise} alt="voise" />
            <img
              className="camera-icon"
              src={camera}
              alt="camera"
              onClick={(e) => {
                e.stopPropagation();
                handleImgSearch();
              }}
            />
          </div>
          {suggest && (
            <div className="suggest">
              {
                <SearchSug
                  result={result}
                  setSuggest={setSuggest}
                  setSearchValue={setSearchValue}
                />
              }
            </div>
          )}
        </div>
      </div>
      <div className="shortCuts">
        <div className="cards">
          {shortcutArr &&
            shortcutArr.map((item, index) => (
              <a href={item.url} className="card" key={index}>
                <div className="appImg">
                  <div className="inner-app">{item.name.slice(0, 1)}</div>
                </div>
                <p className="subtitle">{item.name}</p>
              </a>
            ))}

          <div
            className={shortcutArr.length <= 7 ? "card" : "hidden"}
            onClick={() => handleShortModal()}
          >
            <div className="appImg">
              <img src={plus} alt="" />
            </div>
            <p className="subtitle">Add shortcut</p>
          </div>
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {apps && <GoogleApps />}
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {account && <Account setAccount={setAccount} />}
      </div>
      {/* <SearchSug /> */}
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {shortModal && (
          <Shortcut setShortModal={setShortModal} setObj={setObj} />
        )}
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {imgSearch && <ImgSearch setSearchImg={setSearchImg} />}
      </div>
    </div>
  );
};

export default Home;
