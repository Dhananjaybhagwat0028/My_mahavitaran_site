import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth } from '../Config/Config';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export const Login = (props) => {
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  const onSubmit = (values, { setSubmitting }) => {
    auth.signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        swal({
          title: 'Success!',
          text: 'Login successful',
          icon: 'success',
          button: 'OK',
        });
        props.history.push('/');
      })
      .catch(err => {
        console.error(err);
        swal({
          title: 'Error!',
          text: 'Invalid username or password',
          icon: 'warning',
          button: 'OK',
        });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
      
        <div className="col-md-6">
        
          <div className="card" style={{ maxWidth: '600px', backgroundColor: '#FBF1D3' }}>
          
            <div className="card-body">
            
              <h2 className="card-title text-center mb-4">Login</h2>
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                  <Form autoComplete="off">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field type="email" name="email" className="form-control" />
                      <ErrorMessage name="email" component="div" className="error-msg" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field type="password" name="password" className="form-control" />
                      <ErrorMessage name="password" component="div" className="error-msg" />
                    </div>

                    <button type="submit" className="btn btn-success btn-block" disabled={isSubmitting}>
                      {isSubmitting ? 'Logging in...' : 'LOGIN'}
                    </button>
                  </Form>
                )}
              </Formik>

              <div className="text-center mt-3">
                <span>
                  Don't have an account? <Link to="signup">Register Here</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                </>
  );
};



