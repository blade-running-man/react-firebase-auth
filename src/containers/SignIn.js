import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { auth } from '../firebase';
import {
  Container, Form, Button
} from 'react-bootstrap';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

class SignUp extends Component {
    handleSubmit = async(values) => {
      const { history } = this.props;
      const { email, password } = values;
      try {
        await auth.doSignInWithEmailAndPassword(email, password)
        history.push('/profile');
      } catch (error) {
        console.log('-', error)
      }
    };

    render() {
        return (
            <Container>
                <h2 className="text-center">Sign up</h2>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={schema}
                    onSubmit={this.handleSubmit}>
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                      <Form noValidate onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group>
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                isValid={touched.email && !errors.email}
                                isInvalid={touched.email && errors.email} />
                              <Form.Control.Feedback type="invalid">
                                {errors.email}
                              </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                isValid={touched.password && !errors.password}
                                isInvalid={touched.password && errors.password} />
                              <Form.Control.Feedback type="invalid">
                                {errors.password}
                              </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Button type="submit" disabled={isSubmitting}>Sign up</Button>
                        </Form.Row>
                      </Form>
                    )}
                </Formik>
            </Container>
        )
    }
};

export default SignUp;
