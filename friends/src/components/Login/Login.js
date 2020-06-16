import React from 'react';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export default function Login () {
    return (
        <Row>
            <Col lg="6">
                <h2>Log In</h2>
                <Form>
                    <FormGroup>
                        <Label for="username">Username:</Label>
                        <Input type="text" name="username" id="username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password:</Label>
                        <Input type="password" name="password" id="password" />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary">Log In</Button>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    );
}