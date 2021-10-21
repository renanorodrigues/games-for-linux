import React from 'react';
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import BlueBackground from '../shared/Background/BlueBackground';

interface LoginProps {
  titlePhrase: String,
  buttonPhrase: String
}

const LoginForm: React.FC<LoginProps> = ({ titlePhrase, buttonPhrase }) => {
  return (
    <Row>
      <Col lg={{span: 6, offset: 3}} md={{span: 8, offset: 2}}>
        <BlueBackground>
          <h4>{ titlePhrase }</h4>

          <InputGroup className="mt-3">
            <FormControl placeholder="your_email@mail.com" />
          </InputGroup>

          <InputGroup className="mt-3">
            <FormControl placeholder="password" />
          </InputGroup>

          <Button className="btn btn-info mt-3 w-100">{ buttonPhrase }</Button>

          <br />

          <small>
            Forgot my password
          </small>
        </BlueBackground>
      </Col>
    </Row>
  )
}

export default LoginForm;