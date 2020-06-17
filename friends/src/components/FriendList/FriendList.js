import React, { useState, useEffect } from 'react';
import authAxios from '../../utils/authAxios';
import {
    Row,
    Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default function FriendList (props) {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        authAxios().get('/api/friends')
            .then(response => {
                setFriends(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <>
            {
                friends && friends.map(friend => {
                    return (
                        <Row>
                            <Col>
                                <h4>{ friend.name }</h4>
                                <Link to={`/friends/${friend.id}`}>Details</Link>
                                <hr />
                            </Col>
                        </Row>
                    );
                })
            }
        </>
    );
}