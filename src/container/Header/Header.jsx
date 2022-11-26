import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="It’s Finger Lickin’ Good!"/>
      {/* <h1 className="app__header-h1">It’s Finger Lickin’ Good!</h1> */}
      <p className="p__desc" style={{ margin: '2rem 0' }}>Kentucky Fried Chicken has been around for a long time and so has this popular slogan. When you hear “finger lickin’ good” you instantly think of the delicious chicken sold by the company and I guarantee you’ll want to lick your fingers clean after consuming their products.</p>
      <button type="button" className="custom__button">Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;