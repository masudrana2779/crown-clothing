import React, {Component} from 'react';
import "./App.css";
import HomePage from "./pages/homePage/HomePage.Component";
import {Switch, Route} from 'react-router-dom';
import ShopPagesComponent from "./pages/shopPage/shopPages.component";
import ContactComponent from "./pages/contact/contact.component";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page";
import {auth} from "./firebase/firebase.utils";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }
    componentDidMount() {
        auth.onAuthStateChanged(user =>{
            this.setState({currentUser: user});

            console.log(user, 'user')
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path={'/'} exact component={HomePage}/>
                    <Route path={'/shop'} exact component={ShopPagesComponent}/>
                    <Route path={'/sign'} exact component={SignInAndSignUpPage}/>
                    <Route path={'/contact'} exact component={ContactComponent}/>
                </Switch>
            </div>
        )
    }
}

export default App;
