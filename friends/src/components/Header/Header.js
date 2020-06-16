import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header () {
    return (
        <Row className="Header">
            <Col>
                <h1>Friends</h1>
            </Col>
            <Col>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Log In</Link>
                </nav>
            </Col>
        </Row>
    );
}