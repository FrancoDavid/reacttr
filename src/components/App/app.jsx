import React, { Component } from 'react';
import Header from '../Header/header.component';
import Main from '../Main/main.component';
import { Switch } from 'react-router-dom';



class App extends Component {

    constructor()   {
        super()
        this.state = {
            user: {
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_sf-YpPF_UUVW8Mf6c4EZQTozu8jxLVTIPA&usqp=CAU',
                email: 'franco@live.com',
                displayName: 'franco',
                onOpenText: false
            }
        }
    }

    render() {
        return(
            
            <div>
                <Header />
                <Switch>
                    <Route path='/' component={} />
                    <Route path='/' component={} />
                    <Route path='/' component={} />
                </Switch>
                {/* <Main user={this.state.user}/> */}
            </div>
        ) 
    }
}

export default App;