import "./App.css";
import HomePage from "./pages/homePage/HomePage.Component";
import {Switch, Route} from 'react-router-dom';
import ShopPagesComponent from "./pages/shopPage/shopPages.component";

function App() {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact component={HomePage} />
                <Route path={'/shop'} exact component={ShopPagesComponent} />
            </Switch>
        </div>
    );
}

export default App;
