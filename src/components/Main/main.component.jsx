import React, { Component } from 'react';
import MessageList from './ MessageList/messageList.component';
import ProfileBar from './ProfileBar/profileBar.component';
import InputTweet from './InputTweet/inputTweet.component';

class Main extends Component {

    constructor(props)  {
        super(props)
        this.state = {
            openText: false,
            messages: [
                {
                    text: 'Hola EN REACT',
                    picture: 'https://www.w3schools.com/howto/img_avatar.png',
                    displayName: 'Redrum',
                    username: 'redrum.sama',
                    date: Date.now()
                },
                {
                    text: 'Hola EN REACT',
                    picture: 'https://www.w3schools.com/howto/img_avatar.png',
                    displayName: 'Redrum',
                    username: 'redrum.sama',
                    date: Date.now()
                }
            ]
        }
    }

    showInputTweet() {
        console.log('show', this.state.openText);
        if (this.state.openText) {
            return <InputTweet></InputTweet>
        }
    }

    handlerOpenInput(event) {
        console.log('handeando');
        event.preventDefault();
        this.setState({
            openText: true
        })
    }


    render() {
        return (
            <div>
                <ProfileBar email={this.props.user.email}
                            picture={this.props.user.photoUrl}  
                            openText={this.handlerOpenInput}/>
                {this.showInputTweet()}
                <MessageList messages={this.state.messages} />
            </div>            
        );
    }
}

export default Main;
