import React, { Component } from 'react';
import styles from './messageStyle.module.css';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'


class Message extends Component {
    constructor(props)   {
        super(props)
    }

    changesFormatDate(date) {
        return moment(date).fromNow()
    }

    render() {
        return (
            <div>
                <div className={styles.box}>
                    <div className={styles.user}>
                        <figure>
                            <img src={this.props.picture} className={styles.avatar} alt="avatar"></img>
                        </figure>
                        <span className={styles.displayName}>{this.props.displayName}</span>
                        <span className={styles.username}>{this.props.username}</span>
                        <span className={styles.date}>{this.changesFormatDate(this.props.date)}</span>
                    </div>
                    <div className={styles.boxmessage}>
                        <h2>{this.props.text}</h2>
                    </div>
                    <div className={styles.buttons}>
                        <FontAwesomeIcon icon={faShare} className={styles.icon}/>
                        <FontAwesomeIcon icon={faRetweet} className={styles.icon}/>
                        <FontAwesomeIcon icon={faStar} className={styles.icon}/>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Message;
