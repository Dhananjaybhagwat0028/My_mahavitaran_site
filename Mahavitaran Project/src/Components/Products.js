import React, { useContext, useState } from 'react';
import { ProductsContext } from '../Global/ProductsContext';
import { CartContext } from '../Global/CartContext';

export const Products = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.ProductDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      {products.length !== 0 && <h1>Electricity Bill List</h1>}
      <div className='products-container'>
        {products.length === 0 && <div>No Electricity bills to display Or Please check your Internet connection</div>}
        <div className='search-container ml-auto'>
          <label htmlFor='searchTerm'>Search by Consumer Number:</label>
          <div className='input-group'>
            <input
              type='text'
              name='searchTerm'
              className='form-control'
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className='input-group-append'>
              <button className='btn btn-primary' type='button'>
                Search
              </button>
            </div>
          </div>
        </div>
        <table className='table table-striped mt-2'>
          <thead className='thead-dark'>
            <tr>
              <th>Electricity Image</th>
              <th>Customer Name</th>
              <th>Consumer Number</th>
              <th>Total Bill Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr className='product-row' key={product.ProductID}>
                <td className='product-img'>
                  <img
                    src={product.ProductImg}
                    alt='not found'
                    style={{ width: '100px', height: '100px' }}
                    className='img-thumbnail'
                  />
                </td>
                <td className='product-name'>
                  <h6>{product.ProductName}</h6>
                </td>
                <td className='month-name'>
                  <p className='text-justify'>{product.ProductDesc}</p>
                </td>
                <td className='product-price'>
                  <h6>Rs {product.ProductPrice}.00</h6>
                </td>
                <td>
                  <button
                    className='btn btn-primary'
                    onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}
                  >
                    Pay Bill
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
