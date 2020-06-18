import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    UncontrolledAlert
} from 'reactstrap';
import authAxios from '../../utils/authAxios';

export default function NewFriend (props) {

    const initialFriendData = {
        name: '',
        age: '',
        email: '',
    };

    const initialError = '';

    const [friendData, setFriendData] = useState(initialFriendData);
    const [error, setError] = useState(initialError);

    const { push } = useHistory();

    function handleInput (event) {
        setFriendData({
            ...friendData,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit (event) {
        event.preventDefault();

        authAxios().post('/api/friends', friendData)
            .then(response => {
                setFriendData(initialFriendData);
                push('/friends');
            })
            .catch(error => {
                setError('Please enter correct user info');
            })
    }

    return (
        <Row>
            <Col lg="6">
                <h2>New Friend</h2>
                { error &&
                    <UncontrolledAlert color="danger">{error}</UncontrolledAlert>
                }
                <Form onSubmit={handleSubmit}>
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
                        <Button color="primary">Add</Button>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    );
}