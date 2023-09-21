import React from 'react'
import './ImgSearch.scss'
import searchImg from '../imgs/Icons/searchImg.svg'

const ImgSearch = ({setSearchImg}) => {
  return (
    <div className="ImgSearch">
      <div className="head">
        <p className="img-title">Seache any image with Google Lens</p>
        <div className="cros-line" onClick={()=>setSearchImg(false)}>
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="inner-box">
        <div className="center-box">
          <img src={searchImg} alt="img" />
          <p className="img-tittle">
            Drag an image here or <a href="file">upload a file</a>
          </p>
        </div>
        <div className="or-line">
          <div className="line"></div>
          <h2 className="or">OR</h2>
          <div className="line"></div>
        </div>
        <form>
          <input type="text" placeholder="Paste image link" />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
}

export default ImgSearch