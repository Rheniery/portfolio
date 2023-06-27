import React, { useEffect, useRef, useState } from 'react';
import { Routes } from 'constants/routes';
import styles from './Navbar.module.scss';
import useMobile from 'hooks/useMobile';
import clsx from 'clsx';
import { ReactComponent as MenuIcon } from 'assets/icons/menu-icon.svg';
import useOutsideClick from 'hooks/useOutsideClick';

const Navbar: React.FC = () => {
  const isMobileVersion = useMobile();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleClickOutside = () => {
    if(isOpen) {
      setIsOpen(false)
    }
  };

  useOutsideClick(containerRef, handleClickOutside);

  const toggleDropdown = (e: any) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isMobileVersion) {
      setIsOpen(false);
    }
  }, [isMobileVersion]);

  const renderMenuList = () => (
    <ul
      className={clsx(
        styles[`dropdown-list${isOpen ? '-open' : ''}`],
        styles[`${isMobileVersion ? 'hide-list' : ''}`]
      )}
      ref={containerRef}
    >
      <li className={styles['list-item']}>
        <a href={Routes.home}>Home</a>
      </li>
      <li className={styles['list-item']}>
        <a href={Routes.chat}>Chat</a>
      </li>
      <li className={styles['list-item']}>
        <a href={Routes.projects}>Projects</a>
      </li>
    </ul>
  );

  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>Rheniery</div>
      <nav
        className={clsx(
          styles['nav-container'],
          isMobileVersion && styles.mobile
        )}
      >
        {isMobileVersion && (
          <button className={styles['menu-button']} onClick={toggleDropdown}>
            <MenuIcon />
          </button>
        )}
        {renderMenuList()}
      </nav>
    </header>
  );
};

export default Navbar;
