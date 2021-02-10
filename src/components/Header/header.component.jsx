import React, { Component } from 'react';
import styles from './headerStyle.module.css';

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <h1>REACTTR</h1>
            </header>
        );
    }
}

export default Header;

