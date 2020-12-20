import React from "react";
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav__container">
          <div className="Nav__right">
            <ul className="Nav__item-wrapper">
              <li className="Nav__item">
                <Link
                  className="Nav__link"
                  id="ChooseUserNav"
                  ref={(input) => (this.inputElement = input)}
                  to="/"
                >
                  ChooseUser
                </Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/login">
                  Login
                </Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/signup">
                  SignUp
                </Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/search">
                  MainSearch
                </Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/profile">
                  EditProfile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
