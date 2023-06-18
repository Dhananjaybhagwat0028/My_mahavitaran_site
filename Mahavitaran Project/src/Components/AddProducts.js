import React, { useState } from 'react';
import { storage, db } from '../Config/Config';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';

export const AddProducts = () => {
  const [error, setError] = useState('');

  const types = ['image/png', 'image/jpeg']; // image types

  const initialValues = {
    productName: '',
    productDesc: '',
    productDescc: '',
    productPrice: 0,
    productImg: null,
  };

  const validationSchema = Yup.object().shape({
    productName: Yup.string().min(3,'Customer name required at least 3 charecter').required('Customer name is required'),
    productDesc: Yup.string().min(6,'Consumer Number required at least 6 charecter').required('Consumer Number is required'),
   
    productPrice: Yup.number().required('Electricity bill price is required').positive('Electricity bill price must be positive'),
    productImg: Yup.mixed().test('fileType', 'Invalid file type', (value) => value && types.includes(value.type)),
  });

  const productImgHandler = (e, setFieldValue) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setFieldValue('productImg', selectedFile);
      setError('');
    } else {
      setFieldValue('productImg', null);
      setError('Please select a valid image type (jpg or png)');
    }
  };

  const addProduct = (values, { resetForm, setSubmitting }) => {
    const { productName,productDesc, productPrice, productImg } = values;
    const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => setError(err.message),
      () => {
        storage
          .ref('product-images')
          .child(productImg.name)
          .getDownloadURL()
          .then((url) => {
            db.collection('Products')
              .add({
                ProductName: productName,
                ProductDesc: productDesc,
                
                ProductPrice: Number(productPrice),
                ProductImg: url,
              })
              .then(() => {
                swal({
                    title: 'Success!',
                    text: 'Electricity Bill Added successful',
                    icon: 'success',
                    button: 'OK',
                  });
                resetForm();
                setError('');
                setSubmitting(false);
              })
              .catch((err) => {
                setError(err.message);
                setSubmitting(false);
              });
          });
      }
    );
  };

  return (
    <div className='container'>
      <br />
      <h2>ADD Billing Unit</h2>
      <hr />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={addProduct}>
        {({ isSubmitting, setFieldValue }) => (
          <Form autoComplete='off' className='form-group'>
            <div className='mb-3'>
            <label htmlFor='productName'>Customer Name</label>
            <Field type='text' name='productName' className='form-control' />
            <ErrorMessage name='productName' component='div' className='error-msg' />
            </div>
            {/* <br /> */}
            <div className='mb-3'>
            <label htmlFor='productDesc'>Consumer Number</label>
            <Field type='text' name='productDesc' className='form-control' />
            <ErrorMessage name='productDesc' component='div' className='error-msg' />
            </div>
            
            {/* <br /> */}
            
              <div className='mb-3'>
            <label htmlFor='productPrice'>Total Bill Price</label>
            <Field type='number' name='productPrice' className='form-control' />
            <ErrorMessage name='productPrice' component='div' className='error-msg' />
              </div>
            {/* <br /> */}

            <div className='mb-3'>
            <label htmlFor='productImg'>Electricity Meter Image</label>
            <input
              type='file'
              name='productImg'
              id='file'
              className='form-control'
              onChange={(e) => productImgHandler(e, setFieldValue)}
            />
            <ErrorMessage name='productImg' component='div' className='error-msg' />
            </div>
            <br />

            <button type='submit' className='btn btn-success btn-md mybtn' disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'ADD'}
            </button>
          </Form>
        )}
      </Formik>

      {error && <span className='error-msg'>{error}</span>}
    </div>
  );
};
