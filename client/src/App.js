import   "./App.css"
import Login from './components/Login';
import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/home" >
                        <Header/>
                        <Home/>
                    </Route>
                    <Route path="/" component={Login}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
