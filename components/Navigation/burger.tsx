import React, { useState } from 'react';
import classNames from 'classnames';
import navigation from './navigation.module.scss';

export const Burger = () => {
  const [showMenu, setShowMenu] = useState(false);
  const burgerClass = classNames(navigation.burger, {
    [navigation['burger--active']]: showMenu,
  });

  function handleBurgerClick() {
    setShowMenu(!showMenu);
  }

  return (
    <div className={burgerClass} onClick={() => handleBurgerClick()}>
      <span className={navigation['burger__line']} />
      <span className={navigation['burger__line']} />
    </div>
  );
};
