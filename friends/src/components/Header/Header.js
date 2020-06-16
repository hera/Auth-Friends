import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header () {
    function isLoggedIn () {
        if (localStorage.getItem('loginToken')) {
            return true;
        }
        return false;
    }

    return (
        <Row className="Header">
            <Col>
                <h1>Friends</h1>
            </Col>
            <Col>
                <nav>
                    <Link to="/">Home</Link>
                    {
                        isLoggedIn()
                        ? <Link to="/logout">Log Out</Link>
                        : <Link to="/login">Log In</Link>
                    }
                </nav>
            </Col>
        </Row>
    );
}