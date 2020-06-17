import React, {useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Container } from 'reactstrap';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import './App.scss';

function App() {
    const token = localStorage.getItem('loginToken');
    const [loggedIn, setLoggedIn] = useState(token && false);

    return (
        <Container>
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Switch>
                <Route exact path="/">
                    <Login setLoggedIn={setLoggedIn} />
                </Route>
                <Route path="/login">
                    <Login setLoggedIn={setLoggedIn} />
                </Route>
            </Switch>
        </Container>
    );
}

export default App;
