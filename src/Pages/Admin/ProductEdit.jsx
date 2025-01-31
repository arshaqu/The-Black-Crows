import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { useParams } from 'react-router-dom';
import adminAxios from '../../Axios/AdminAxios';

function ProductEdit() {
  const { id } = useParams();
  const [sizes, setSize] = useState([]);
  const [formData, setFormData] = useState({
    product: '',
    file: null,
    size: '',
    color: '',
    price: '',
    description: '',
  });

  // Fetch product data
  const getData = async () => {
    try {
      const response = await adminAxios.get(`/admin_side/products/${id}`);
      const productData = response.data.data;
      setFormData({
        product: productData.Product_name || '',
        size: productData.Product_size || '',
        color: productData.Product_colour || '',
        price: productData.Product_price || '',
        description: productData.Product_description || '',
        file: null, // File won't be preloaded
      });
    } catch (error) {
      console.error('Error fetching product:', error);
      alert('Error loading product data');
    }
  };

  // Fetch sizes
  const getSize = async () => {
    try {
      const response = await adminAxios.get('/admin_side/sizes/');
      setSize(response.data.data);
    } catch (error) {
      console.error('Error fetching sizes:', error);
    }
  };


  const handleSubmit = async () =>{
    try {
      const response = await adminAxios.put(`/admin_side/products/${formData}`)
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }
  }


  // Handle form submission
 
  useEffect(() => {
    getData();
    getSize();
    // eslint-disable-next-line
  },[]);

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />

      <div
        style={{ backgroundColor: '#476D7C' }}
        className="p-6 mt-12 rounded-lg w-full md:w-3/4 lg:w-1/2 mx-auto md:ml-12 addproform halant mb-2"
      >
        <h1 className="text-center text-4xl font-serif text-white">EDIT PRODUCT</h1>
        <form className="mt-2" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="user_avatar" className="block mb-1 text-sm text-white">
              Upload file
            </label>
            <input
              id="user_avatar"
              type="file"
              onChange={(e)=>{setFormData(e.target.value)}}
              className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="product" className="block mb-1 text-sm text-white">
              Product Name
            </label>
            <input
              id="product"
              type="text"
              value={formData.product}
              onChange={(e)=>{setFormData(e.target.value)}}
              required
              className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300"
            />
          </div>

          <div className="mb-3 flex">
            <div className="w-1/2">
              <label htmlFor="size" className="block mb-1 text-sm text-white">
                Product Size
              </label>
              <select
                id="size"
                value={formData.size}
                onChange={(e)=>{setFormData(e.target.value)}}

                required
                className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300"
              >
                <option value="" disabled>
                  Select a size
                </option>
                {sizes.map((size) => (
                  <option key={size.id} value={size.Product_size}>
                    {size.Product_size}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-1/2 ml-2">
              <label htmlFor="color" className="block mb-1 text-sm text-white">
                Product Color
              </label>
              <input
                id="color"
                type="text"
                value={formData.color}
                onChange={(e)=>{setFormData(e.target.value)}}
                required
                className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="block mb-1 text-sm text-white">
              Product Price
            </label>
            <input
              id="price"
              type="text"
              value={formData.price}
              onChange={(e)=>{setFormData(e.target.value)}}
              required
              className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="block mb-1 text-sm text-white">
              Product Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e)=>{setFormData(e.target.value)}}
              rows="4"
              required
              className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300"
            ></textarea>
          </div>

          <button
            type="submit"
            style={{ backgroundColor: '#233142' }}
            className="w-full p-2.5 text-sm text-white bg-dark rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductEdit;
