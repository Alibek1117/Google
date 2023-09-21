import React from 'react'
import './Account.scss'
const Account = ({setAccount}) => {
  return (
    <div className="accountt">
      <div className="mail">
        <p>Someone@gmail.com</p>
      </div>
      <div className="exit" onClick={()=>setAccount(false)}>
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div className="main">
        <div className="user">
          <h2>S</h2>
          <div className="edite">
            <span class="edite-img material-symbols-outlined">edit</span>
          </div>
        </div>
        <h2 className="user-title">Hi, Someone!</h2>
        <a
          className="manage"
          href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act"
        >
          Manage your Google Account
        </a>
        <div className="btns">
          <a
            href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&ec=GAlA8wE&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1107572079%3A1695231046270308&theme=glif"
            className="left"
          >
            <div className="sircle">
              <i class="fa-solid fa-plus"></i>
            </div>
            <p>Add account</p>
          </a>
          <a
            href="https://accounts.google.com/signout/chrome/landing?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&oc=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&hl=en"
            className="right"
          >
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <p>Sign Out</p>
          </a>
        </div>
      </div>
      <footer>
        <a href=" https://policies.google.com/privacy?hl=en">Privacy Policy</a>
        <span className="dot"></span>
        <a href="https://policies.google.com/terms?hl=en">Terms of Service</a>
      </footer>
    </div>
  );
}

export default Account