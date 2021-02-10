import React, { Component } from 'react';
import Message from '../Message/message.component';

class MessageList extends Component {

    constructor(props)   {
        super(props)
    }


    render() {
        return (
            <div>
                {   
                    this.props.messages.map((msg, index) => {
                        return (<Message text={msg.text}
                                        picture={msg.picture}
                                        displayName={msg.displayName}
                                        username={msg.username}
                                        date={msg.date}
                                        key={index}/>)
                    })
                }
            </div>
        );
    }
}

export default MessageList;
