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
        this.state = {
            pressFavorite: false,
            pressRetweet: false
        }

        this.onPressFavorite = this.onPressFavorite.bind(this);
        this.onPressRetweet = this.onPressRetweet.bind(this);
          
    }

    changesFormatDate(date) {
        return moment(date).fromNow()
    }

    onPressRetweet() {
        this.props.onRetweet();
        this.setState({ pressRetweet: true });
    }

    onPressFavorite() {
        this.props.onFavorite();
        this.setState({ pressFavorite: true });
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
                        <span>
                            <FontAwesomeIcon icon={faShare} 
                            className={styles.icon}/>
                        </span>
                        <span onClick={this.onPressRetweet}>
                            <FontAwesomeIcon icon={faRetweet} className={styles.icon}/>
                            <span className={(this.state.pressRetweet) ? styles.colorBlue : ''}>{this.props.numRetweet}</span>
                        </span>
                        <span onClick={this.onPressFavorite}>
                            <FontAwesomeIcon icon={faStar} className={styles.icon}/>
                            <span className={(this.state.pressFavorite) ? styles.colorYellow : ''}>{this.props.numFavorite}</span>
                        </span>                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;
