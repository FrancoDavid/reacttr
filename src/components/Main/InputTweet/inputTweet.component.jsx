import React, { Component } from 'react';
import styles from './inputTweetStyle.module.css';

class InputTweet extends Component {
    render() {
        return (
            <div className={styles.containerInput}>
                <form>
                    <textarea className={styles.text} name="input-message" cols="30" rows="10"></textarea>
                    <div className={styles.footer}>
                        <button className={styles.buttons + ' ' +styles.close}>Cerrar</button>
                        <button className={styles.buttons+ ' ' +styles.send}>Enviar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default InputTweet;
