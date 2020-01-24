import React from 'react';
import styles from './NavMenu.module.css';
import { NavLink } from 'react-router-dom';


function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <NavLink exact to ='/' className = {styles.link} activeClassName={styles.activeLink}>Users</NavLink>
            <NavLink to ='/Form' className = {styles.link} activeClassName={styles.activeLink}>Form</NavLink>
            <NavLink to ='/todos' className = {styles.link} activeClassName={styles.activeLink}>Todo</NavLink>  
            <NavLink  to = '/weather' className={styles.link} activeClassName={styles.activeLink}>Weather</NavLink>  
        </div>
    );
}

export default NavMenu;


