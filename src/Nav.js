import React from 'react';
import { Link } from 'react-router-dom';

  export default class Nav extends React.Component {
    render() {    
      return (
        <nav className="Nav">
          <div className="Nav__container">
            <Link to="/" className="Nav__brand">
              <img src="logo.svg" className="Nav__logo" />
            </Link>

            <div className="Nav__right">
              <ul className="Nav__item-wrapper">
                <li className="Nav__item">
                  <Link className="Nav__link" id="ChooseUserNav" ref={input => this.inputElement = input} to="../pages/ChooseUser/ChooseUser.js">ChooseUser</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="../pages/Login/Login.js">Login</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="../pages/SignUp/SignUp.js">SignUp</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="../pages/MainSearch/MainSearch.js">MainSearch</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="../pages/EditProfile/EditProfile.js">EditProfile</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }