import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth, db } from '../Config/Config';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export const Signup = (props) => {
  const initialValues = {
    name: '',
    email: '',
    mobile:'',
    consumernumber:'',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, 'Invalid Mobile number')
      .required('Mobile number is required'),
    consumernumber: Yup.string().min(6,'Consumer number should be 6 digit').max(6,'Not more than 6 digit').required('Consumer number is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    auth.createUserWithEmailAndPassword(values.email, values.password)
      .then((cred) => {
        db.collection('SignedUpUsersData').doc(cred.user.uid).set({
          Name: values.name,
          Email: values.email,
          Mobile:values.mobile,
          ConsumerNumber : values.consumernumber,
          Password: values.password,
        })
          .then(() => {
            swal({
              title: "Success!",
              text: "Customer registered successfully",
              icon: "success",
              button: "OK",
            });
            props.history.push('/login');
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err))
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className='container mt-5 mb-5'>
      <div className='card mx-auto' style={{ maxWidth: '500px', backgroundColor: '#FBF1D3' }}>
        <div className='card-body'>
          <h2 className='card-title text-center'>Sign up</h2>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form autoComplete='off' className='form-group'>
                <div className='mb-3'>
                  <label htmlFor='name'>Name</label>
                  <Field type='text' name='name' className='form-control' />
                  <ErrorMessage name='name' component='div' className='error-msg' />
                </div>

                <div className='mb-3'>
                  <label htmlFor='email'>Email</label>
                  <Field type='email' name='email' className='form-control' />
                  <ErrorMessage name='email' component='div' className='error-msg' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='mobile'>Mobile No</label>
                  <Field type='number' name='mobile' className='form-control' />
                  <ErrorMessage name='mobile' component='div' className='error-msg' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='Consumer'>Consumer Number</label>
                  <Field type='number' name='consumernumber' className='form-control' />
                  <ErrorMessage name='consumernumber' component='div' className='error-msg' />
                </div>

                <div className='mb-3'>
                  <label htmlFor='password'>Password</label>
                  <Field type='password' name='password' className='form-control' />
                  <ErrorMessage name='password' component='div' className='error-msg' />
                </div>

                <button
                  type='submit'
                  className='btn btn-success  btn-md mybtn'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                </button>
              </Form>
            )}
          </Formik>

          <div className='mt-3 text-center'>
            Already have an account? Login <Link to='login'>Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};



