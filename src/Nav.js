import React from 'react';
import { Link } from 'react-router-dom';
import Button from '/Users/markqian/Desktop/hacklympics/src/components/Button.js';

  export default class Nav extends React.Component {

    constructor(props) {
      super(props)
  
      // Create the ref
      this.exampleRef = React.createRef()
    }
  
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
                  <Link className="Nav__link" id="ChooseUserNav" ref={this.exampleRef} to="/Users/markqian/Desktop/hacklympics/src/pages/ChooseUser/ChooseUser.js">ChooseUser</Link>
                  {/* <Button text="Photographer" left="22" top="50" to="/Users/markqian/Desktop/hacklympics/src/pages/ChooseUser/ChooseUser.js"></Button> */}
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/Users/markqian/Desktop/hacklympics/src/pages/Login/Login.js">Login</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/Users/markqian/Desktop/hacklympics/src/pages/SignUp/SignUp.js">SignUp</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/Users/markqian/Desktop/hacklympics/src/pages/MainSearch/MainSearch.js">MainSearch</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/Users/markqian/Desktop/hacklympics/src/pages/EditProfile/EditProfile.js">EditProfile</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }