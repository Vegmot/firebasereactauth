import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { register } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = e => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      register(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign up</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={submitHandler}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' required ref={emailRef} />
            </Form.Group>

            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' required ref={passwordRef} />
            </Form.Group>

            <Form.Group id='confirmPassword'>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control type='password' required ref={confirmPasswordRef} />
            </Form.Group>

            <Button disabled={loading} type='submit' className='btn btn-block'>
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className='w-100 text-center mt-2'>
        Already have an account? <Link to='/login'>Login</Link>
      </div>
    </>
  );
};

export default Register;
