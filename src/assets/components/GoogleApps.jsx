import React from 'react'
import './GoogleApp.scss'
import google from '../imgs//Icons/google.png'
import map from '../imgs//Icons/map.png'

export const GoogleApps = () => {
  return (
    <div className="appsModal">
      <div className="apps">
        <a
          href="https://myaccount.google.com/?utm_source=OGB&utm_medium=app"
          className="app"
        >
          <div className="back-account">
            <div className="account">A</div>
          </div>
          <p className="title">Account</p>
        </a>
        <a href="https://www.google.com/?authuser=0" className="app">
          <img src={google} alt="img" width={40} />
          <div className="title">Searche</div>
        </a>
        <a href="https://www.google.com/maps?authuser=0" className="app">
          <img src={map} alt="img" width={40} />
          <div className="title">Maps</div>
        </a>
        <a
          href="https://play.google.com/store/games?device=windows"
          className="app"
        >
          <img
            src="https://avatars.mds.yandex.net/i?id=86eccca31768bcdf0cd15ec416dc36f91c39f0c3-9095341-images-thumbs&n=13"
            alt="img"
            width={40}
          />
          <div className="title">Play</div>
        </a>
        <a
          href="https://news.google.com/home?hl=en-US&gl=US&ceid=US:en"
          className="app"
        >
          <img
            src="https://www.surgenomics.com/wp-content/uploads/2018/01/newspaper.png"
            alt="img"
            width={40}
          />
          <div className="title">News</div>
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox" className="app">
          <img
            src="https://top-androidd.ru/uploads/mini/korotkaja-novost/4b/0e3290816da4d49869aefe79b8389d.png"
            alt="img"
            width={40}
          />
          <div className="title">Gmail</div>
        </a>
        <a href="https://meet.google.com/?hs=197&authuser=0" className="app">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/93/94/65/9394656f-b33c-a06b-1f7f-8d789be96312/source/100x100bb.png"
            alt="img"
            width={40}
          />
          <div className="title">Meet</div>
        </a>
        <a href="https://mail.google.com/chat/u/0/#onboarding" className="app">
          <img
            src="https://avatars.mds.yandex.net/i?id=49b8045ec7837fbecfb33f197963b7c4a9f02267-9720926-images-thumbs&n=13"
            alt="img"
            width={40}
          />
          <div className="title">Chat</div>
        </a>
        <a href="https://contacts.google.com/" className="app">
          <img
            src="https://avatars.mds.yandex.net/i?id=2b8dffa2f31f8328a48410f7d1c2298b9b0261ea-8496372-images-thumbs&n=13"
            alt="img"
            width={40}
          />
          <div className="title">Contacts</div>
        </a>
        <a href="https://drive.google.com/drive/my-drive" className="app">
          <img
            src="https://topsoft-pc.ru/wp-content/uploads/2021/07/Google-Drive-min-1-100x100.png"
            alt="img"
            width={40}
          />
          <div className="title">Drive</div>
        </a>
        <a href="https://calendar.google.com/calendar/u/0/r" className="app">
          <img
            src="https://arcboosts.com/storage/225/c/72c9efffbf0232cdaf8b859cf145646b-icon.png"
            alt="img"
            width={40}
          />
          <div className="title">Calendar</div>
        </a>
        <a href="https://translate.google.com/" className="app">
          <img
            src="https://cs6.pikabu.ru/avatars/1238/v1238437-568532755.jpg"
            alt="img"
            width={40}
          />
          <div className="title">Translate</div>
        </a>
        <a href="https://photos.google.com/?pli=1" className="app">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/8e/03/51/8e03511d-4212-6bbe-b20b-fb9f6caadba9/source/100x100bb.jpg"
            alt="img"
            width={40}
          />
          <div className="title">Photos</div>
        </a>
        <a
          href="https://myadcenter.google.com/home?ref=app-launcher"
          className="app"
        >
          <img
            src="https://ppcadspro.com/wp-content/uploads/2021/09/Google_Ads_logo.png"
            alt="img"
            width={40}
          />
          <div className="title">Ad Center</div>
        </a>
        <a
          href="https://www.google.com/shopping?source=og&authuser=0"
          className="app"
        >
          <img
            src="https://www.aep-digital.com/wp-content/uploads/2019/08/googleshopping.png"
            alt="img"
            width={40}
          />
          <div className="title">Shopping</div>
        </a>

        <a href="https://docs.google.com/document/u/0/" className="app">
          <img
            src="https://img.icons8.com/ios_filled/2x/4a90e2/google-forms.png"
            alt="img"
            width={40}
          />
          <div className="title">Docs</div>
        </a>
        <a href="https://docs.google.com/spreadsheets/u/0/" className="app">
          <img
            src="https://hotkeysworld.com/program_logo_image/google-spreadsheets-for-web-application/googleSpreatSheets.png"
            alt="img"
            width={40}
          />
          <div className="title">Sheets</div>
        </a>
        <a href="https://www.google.com/finance/?authuser=0" className="app">
          <img
            src="https://lh3.googleusercontent.com/wUP6ZdqVwN4X7kmG3LIuAeTJdk4utsida-jcuh8FOId5I-1d4TGchPdSgMuc5_jmfUXW=w100"
            alt="img"
            width={40}
          />
          <div className="title">Finance</div>
        </a>
      </div>
      <a
        target="_blinc"
        href="https://about.google/products/"
        className="more-apps"
      >
        More from Google
      </a>
    </div>
  );
}
