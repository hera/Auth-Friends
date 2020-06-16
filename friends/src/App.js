import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Container } from 'reactstrap';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import './App.scss';

function App() {
    return (
        <Container>
            <Header />
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>
        </Container>
    );
}

export default App;
