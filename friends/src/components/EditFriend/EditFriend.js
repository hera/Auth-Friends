import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Alert
} from 'reactstrap';
import authAxios from '../../utils/authAxios';

export default function EditFriend (props) {
    const { id } = useParams();
    const { push } = useHistory();

    const initialFriendData = {
        name: '',
        age: '',
        email: '',
    };

    const initialError = '';

    const [friendData, setFriendData] = useState(initialFriendData);
    const [error, setError] = useState(initialError);
    const [userId, setUserId] = useState();

    function handleInput (event) {
        setFriendData({
            ...friendData,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit (event) {
        event.preventDefault();

        authAxios().put(`/api/friends/${userId}`, friendData)
            .then(response => {
                setFriendData(initialFriendData);
                push(`/friends/${userId}`);
            })
            .catch(error => {
                setError('Error');
            });
    }

    useEffect(() => {
        if (Number(id) >= 0) {
            setUserId(Number(id));
            authAxios().get(`/api/friends/${Number(id)}`)
                .then(response => {
                    setFriendData(response.data);
                })
                .catch(error => {
                    setError('User with this id does not exist');
                    console.log("Couldn't find user");
                });
        } else {
            setError('Please provide correct user id');
        }
    }, []);

    return (
        <Row>
            <Col lg="6">
                <h2>Edit Friend</h2>
                { error
                    ? <Alert color="danger">{error}</Alert>
                    : <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name:</Label>
                            <Input type="text" name="name" id="name" value={friendData.name} onChange={handleInput} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="age">Age:</Label>
                            <Input type="text" name="age" id="age" value={friendData.age} onChange={handleInput} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">E-mail:</Label>
                            <Input type="email" name="email" id="email" value={friendData.email} onChange={handleInput} />
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary">Edit</Button>
                        </FormGroup>
                    </Form>
                }
            </Col>
        </Row>
    );
}