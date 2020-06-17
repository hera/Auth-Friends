import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import './Header.scss';

export default function Header (props) {
    const { loggedIn, setLoggedIn } = props;
    const { push } = useHistory();

    function handleLogOut (event) {
        event.preventDefault();
        localStorage.removeItem('loginToken');
        setLoggedIn(false);
        push('/');
    }

    return (
        <Row className="Header">
            <Col>
                <h1>Friends</h1>
            </Col>
            <Col>
                <nav>
                    {
                        loggedIn
                        ? (
                            <>
                                <Link to="/friends">Friends</Link>
                                <a href="/#" onClick={handleLogOut}>Log Out</a>
                            </>
                        )
                        : <Link to="/login">Log In</Link>
                    }
                </nav>
            </Col>
        </Row>
    );
}