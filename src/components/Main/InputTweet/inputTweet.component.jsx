import React, { Component } from 'react';
import styles from './inputTweetStyle.module.css';

class InputTweet extends Component {
    render() {
        return (
            <div className={styles.containerInput} onSubmit={this.props.onSendText}>
                <form>
                    <textarea className={styles.text} name="message" cols="30" rows="10"></textarea>
                    <div className={styles.footer}>
                        <button className={styles.buttons + ' ' +styles.close} onClick={this.props.onCloseText}>Cerrar</button>
                        <button className={styles.buttons+ ' ' +styles.send} type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default InputTweet;
