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
                    date: Date.now(),
                    retweet: 0,
                    favorite: 0
                },
                {
                    text: 'Hola EN REACT',
                    picture: 'https://www.w3schools.com/howto/img_avatar.png',
                    displayName: 'Redrum',
                    username: 'redrum.sama',
                    date: Date.now(),
                    retweet: 0,
                    favorite: 0
                }
            ]
        }
        this.handlerCloseText = this.handlerCloseText.bind(this);
        this.handlerOpenInput = this.handlerOpenInput.bind(this);
        this.handlerSendText = this.handlerSendText.bind(this);
        this.handlerRetweet = this.handlerRetweet.bind(this);
        this.handlerFavorite = this.handlerFavorite.bind(this);
    }

    showInputTweet() {
        console.log('show', this.state.openText);
        if (this.state.openText) {
            return (<InputTweet 
            onSendText={this.handlerSendText}
            onCloseText={this.handlerCloseText}></InputTweet>)
        }
    }

    handlerOpenInput(event) {
        console.log('handeando');
        event.preventDefault();
        this.setState({ openText: true  })
    }

    handlerSendText(event) {
        event.preventDefault();
        const new_message = {
            text: event.target.message.value,
            picture: this.props.user.photoUrl,
            displayName: this.props.user.displayName,
            username: this.props.user.email,
            date: Date.now(),
            retweet: 0,
            favorite: 0
        };
        console.log(new_message);

        this.setState({
            messages: this.state.messages.concat(new_message),
            openText: false
        });
    }

    handlerCloseText(event) {
        event.preventDefault();
        this.setState({ openText:   false});
    }

    handlerRetweet(id_msg) {
        console.log('handler re--');
        let messages = this.state.messages.map((msg, index) => {
            if (index === id_msg) {
                msg.retweet ++;
            }
            return msg;
        });

        this.setState({
            messages
        })
    }

    handlerFavorite(id_msg) {
        console.log('handler favo');
        let messages = this.state.messages.map((msg, index) => {
            if (index === id_msg) {
                msg.favorite ++;
            }
            return msg;
        });

        this.setState({
            messages
        })
    }

    render() {
        return (
            <div>
                <ProfileBar email={this.props.user.email}
                            picture={this.props.user.photoUrl}  
                            openText={this.handlerOpenInput}/>
                {this.showInputTweet()}
                <MessageList messages={this.state.messages}
                             onRetweet={this.handlerRetweet}
                             onFavorite={this.handlerFavorite}/>
            </div>            
        );
    }
}

export default Main;
