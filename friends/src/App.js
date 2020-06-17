import React, {useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Container } from 'reactstrap';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import './App.scss';
import PrivateRoute from './utils/privateRoute';
import FriendList from './components/FriendList/FriendList';
import Friend from './components/Friend/Friend';
import NewFriend from './components/NewFriend/NewFriend';
import EditFriend from './components/EditFriend/EditFriend';

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

                <PrivateRoute exact path="/friends" component={FriendList} />

                <PrivateRoute path="/friends/edit/:id" component={EditFriend} />

                <PrivateRoute path="/friends/:id" component={Friend} />

                <PrivateRoute path="/new" component={NewFriend} />
            </Switch>
        </Container>
    );
}

export default App;
