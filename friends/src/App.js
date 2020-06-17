import React, {useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Container } from 'reactstrap';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import './App.scss';
import PrivateRoute from './utils/privateRoute';
import FriendList from './components/FriendList/FriendList';

function App() {
    const token = localStorage.getItem('loginToken');
    const [loggedIn, setLoggedIn] = useState(Boolean(token));

    return (
        <Container>
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Switch>

                <Route exact path="/">
                    <Redirect to="/friends" />
                </Route>

                <Route path="/login">
                    <Login setLoggedIn={setLoggedIn} />
                </Route>

                <PrivateRoute path="/friends" component={FriendList} />

            </Switch>
        </Container>
    );
}

export default App;
