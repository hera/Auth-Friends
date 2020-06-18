import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import authAxios from '../../utils/authAxios';
import {
    Alert,
    Row,
    Col
} from 'reactstrap';

export default function Friend (props) {
    const { id } = useParams();
    const { push } = useHistory();

    const [ friend, setFriend ] = useState();

    const [ error, setError ] = useState('');

    function handleDeleteFriend (event) {
        event.preventDefault();

        authAxios().delete(`/api/friends/${friend.id}`)
            .then(response => {
                push('/friends');
            })
            .catch(error => {
                setError('Error. Could not delete user.');
            })

    }

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
                        <p>
                            <Link to={`/friends/edit/${friend.id}`}>Edit</Link>
                        </p>
                        <p>
                            <a href="/#" onClick={handleDeleteFriend} className="text-danger">Delete</a>
                        </p>
                    </Col>
                </Row>
            }
        </>
    );
}