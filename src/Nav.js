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
                  <Link className="Nav__link" id="ChooseUserNav" ref={input => this.inputElement = input} to="/ChooseUser">ChooseUser</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/Login">Login</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/SignUp">SignUp</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/MainSearch">MainSearch</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/EditProfile">EditProfile</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }