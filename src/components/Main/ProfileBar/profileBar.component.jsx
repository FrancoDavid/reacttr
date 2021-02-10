import React, { Component } from 'react';
import styles from './profileBarStyles.module.css';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProfileBar extends Component {
    constructor(props) {
        super(props)
    }

    formatUsername(email) {
        return email.split('@')[0];
    }

    render() {
        return (
            <div>
               <div className={styles.user}>
                    <figure>
                        <img src={this.props.picture} className={styles.avatar} alt="avatar"></img>
                    </figure>
                    <span className={styles.username}>Hola @{this.formatUsername(this.props.email)}</span>
                    <button className={styles.btnTweet} onClick={this.props.openText.bind(this)}>
                        <FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon>
                        REACT TWeeT!
                    </button>
                </div>
            </div>
        );
    }
}

export default ProfileBar;
