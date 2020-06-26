import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import LogIn from './components/Login/login';
import Register from './components/Register/register';
import MapBox from './components/MapBox/mapBox';

class App extends Component {
    constructor(){
        super();
    
        this.state = {
            email: '',
            password: ''
        }

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(data){
        this.setState({
            email: data.email,
            password: data.password
        })
    }

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact render={ (props) => <Register {...props} handleLogin={this.handleLogin} />} />
                    <Route path='/login' exact render={ (props) => <LogIn {...props} email={this.state.email} password={this.state.password}/>} />
                    <Route path='/mapbox' exact render={ (props) => <MapBox {...props} />} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;