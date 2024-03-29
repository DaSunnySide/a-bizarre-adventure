import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div className="navigation">
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div className="navigationList">
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>The album!</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>My Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </div>
);

const NavigationNonAuth = () => (
  <div className="navigationList">
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>The album!</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In for full features.</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
