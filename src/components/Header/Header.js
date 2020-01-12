import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.navLink}>
                <Link to='/'><strong>LOGO</strong></Link>
                <Link to='/'>Home</Link>
                <Link to='/catalog'>Каталог</Link>
                <Link to='/admin-panel'>Админка</Link>
                <a href='/'>Login</a>
            </div>
        </div>
    )
};

export default Header;