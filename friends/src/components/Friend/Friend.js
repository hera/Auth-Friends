import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import authAxios from '../../utils/authAxios';
import {
    Alert,
    Row,
    Col
} from 'reactstrap';

export default function Friend (props) {
    const { id } = useParams();

    const [ friend, setFriend ] = useState();

    const [ error, setError ] = useState('');

    useEffect(() => {
        authAxios().get(`/api/friends/${id}`)
            .then(response => {
                setFriend(response.data);
            })
            .catch(error => {
                setError('User with this id does not exist');
                console.log("Couldn't find user");
            })
    }, [])

    return (
        <>
            {
                error &&
                <Row>
                    <Col>
                        <Alert color="danger">{ error }</Alert>
                    </Col>
                </Row>
            }

            {
                friend && 
                <Row>
                    <Col>
                        <h3>{ friend.name }</h3>
                        <p>Age: { friend.age }</p>
                        <p>
                            E-mail:{' '}
                            <a href={`mailto:${friend.email}`}>
                                { friend.email }
                            </a>
                        </p>
                    </Col>
                </Row>
            }
        </>
    );
}