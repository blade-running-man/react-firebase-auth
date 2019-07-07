import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { auth, db } from '../firebase';
import {
    Container, Form, Button
} from 'react-bootstrap';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    firstName: yup.string().min(3).max(20).required(),
    lastName: yup.string().min(3).max(20).required(),
});


class SignUp extends Component {
    handleSubmit = async (values) => {
      const { history } = this.props;
      const { email, password, firstName, lastName } = values;
      try {
        const newUser = await auth.doCreateUserWithEmailAndPassword(email, password);
        console.log('###', newUser);
        await db.doCreateUser(newUser.user.uid, email, firstName, lastName);
        history.push('/profile');
      } catch (error) {
        console.log('-', error)
      }
    }
    render() {
        return (
            <Container>
              <h2 className="text-center">Sign up</h2>
              <Formik
                  initialValues={{ email: '', password: '', firstName: '', lastName: '' }}
                  validationSchema={schema}
                  onSubmit={this.handleSubmit.bind(this)}>
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
                              isInvalid={touched.email && errors.email}/>
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
                              isInvalid={touched.password && errors.password}/>
                            <Form.Control.Feedback type="invalid">
                              {errors.password}
                            </Form.Control.Feedback>
                          </Form.Group>
                      </Form.Row>
                      <Form.Row>
                          <Form.Group>
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                              type="text"
                              name="firstName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.firstName}
                              isValid={touched.firstName && !errors.firstName}
                              isInvalid={touched.firstName && errors.firstName}/>
                            <Form.Control.Feedback type="invalid">
                              {errors.firstName}
                            </Form.Control.Feedback>
                          </Form.Group>
                      </Form.Row>
                      <Form.Row>
                          <Form.Group>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                              type="text"
                              name="lastName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.lastName}
                              isValid={touched.lastName && !errors.lastName}
                              isInvalid={touched.lastName && errors.lastName}/>
                            <Form.Control.Feedback type="invalid">
                              {errors.lastName}
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
