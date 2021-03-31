import React, { Component } from 'react';
import Message from '../Message/message.component';

class MessageList extends Component {

    constructor(props)   {
        super(props)
    }

    listMessages() {
        return this.props.messages.map((msg, index) => {
            return (<Message text={msg.text}
                            picture={msg.picture}
                            displayName={msg.displayName}
                            username={msg.username}
                            date={msg.date}
                            key={index}
                            numRetweet={msg.retweet}
                            numFavorite={msg.favorite}
                            onRetweet={() => this.props.onRetweet(index)}
                            onFavorite={() => this.props.onFavorite(index)}/>)
        }).reverse();
    }

    render() {
        return (
            <div>{this.listMessages()}</div>
        );
    }
}

export default MessageList;
