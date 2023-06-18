import React, { useState, useEffect, useContext } from 'react';
import { auth, db } from '../Config/Config';
import { CartContext } from '../Global/CartContext';
import { Navbar } from './Navbar';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';

export const Cashout = (props) => {
  const history = useHistory();
  const { shoppingCart, totalPrice, totalQty, dispatch } = useContext(CartContext);

  const initialValues = {
    cell: '',
    cvv:'',
    address: '',
  };

  const validationSchema = Yup.object().shape({
    cell: Yup.string().min(12,'Debit card number should be 12 digit').required('Debit card number is required'),
    cvv: Yup.string().min(3,'cvv should be 3 digit').max(3,'cvv should be 3 digit').required('cvv number is required'),
    address: Yup.string().min(10,'Address atleast 10 charecter').max(50,'Address max 50 charecter').required('Address is required'),
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection('SignedUpUsersData')
          .doc(user.uid)
          .onSnapshot((snapshot) => {
            setName(snapshot.data().Name);
            setEmail(snapshot.data().Email);
          });
      } else {
        history.push('/login');
      }
    });
  }, []);

  const cashoutSubmit = (values) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const date = new Date();
        const time = date.getTime();
        db.collection('Buyer-info ' + user.uid)
          .doc('_' + time)
          .set({
            BuyerName: name,
            BuyerEmail: email,
            BuyerCell: values.cell,
            BuyerCvv: values.cvv,
            BuyerAddress: values.address,
            BuyerPayment: totalPrice,
            BuyerQuantity: totalQty,
          })
          .then(() => {
            dispatch({ type: 'EMPTY' });
            setSuccessMsg('Your Electricity Bill Payment done successfully. Thanks for visiting us. You will be redirected to the home page after 10 seconds.');
            swal({
              title: 'Success!',
              text: 'Electricity Bill Payment successfully',
              icon: 'success',
              button: 'OK',
            }).then(() => {
              setTimeout(() => {
                history.push('/');
              }, 10000);
            });
          })
          .catch((err) => setError(err.message));
      }
    });
  };

  return (
    <>
      <Navbar user={props.user} />
      <div className="container mt-5 mb-5">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title mb-4">Cashout Details</h2>
            {successMsg && <div className="alert alert-success">{successMsg}</div>}
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={cashoutSubmit}>
              {({ isSubmitting }) => (
                <Form autoComplete="off" className="row g-3">
                  <div className="col-12">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" required value={name} disabled />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" required value={email} disabled />
                  </div>
                  <div className="col-12">
                    <label htmlFor="cell" className="form-label">Debit Card Number</label>
                    <Field type="text" name="cell" className="form-control" />
                    <ErrorMessage name="cell" component="div" className="error-msg" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="cvv" className="form-label">CVV Number</label>
                    <Field type="text" name="cvv" className="form-control" />
                    <ErrorMessage name="cvv" component="div" className="error-msg" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="address" className="form-label">Delivery Address</label>
                    <Field as="textarea" name="address" className="form-control" />
                    <ErrorMessage name="address" component="div" className="error-msg" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="price" className="form-label">Price To Pay</label>
                    <input type="number" className="form-control" required value={totalPrice} disabled />
                  </div>
                  <div className="col-12">
                    <label htmlFor="quantity" className="form-label">Total No of Products</label>
                    <input type="number" className="form-control" required value={totalQty} disabled />
                  </div>
                  <div className="col-12 mt-3">
                    <button type="submit" className="btn btn-success btn-md mybtn" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                    </button>
                  </div>
                  {error && <div className="col-12"><span className="error-msg">{error}</span></div>}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
