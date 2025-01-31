import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Sidebar from './components/Sidebar';
import { useNavigate } from 'react-router-dom'; 

function Orders() {
  const componentRef = useRef();
  const navigate = useNavigate();

  const handlePrint = () => {
    const input = componentRef.current;
    html2canvas(input, { scrollY: -window.scrollY, scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 200; // A4 width (210mm) minus 10mm for 5mm margins on each side
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 5; // Start with a 5mm top margin

      pdf.addImage(imgData, 'PNG', 5, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Create additional pages if necessary
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 5, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('orders.pdf');
    });
  };


  const HandleOnClick = async () =>{
    navigate('/admin/order_Detail')
    
  }

  return (
 
 <div style={{ width: '100%' }} className="flex flex-col md:flex-row">
      <Sidebar />
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
      >


<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <button
    onClick={handlePrint}
    className="mt-3 bg-gray-500 text-white py-2 px-4 rounded-lg roboto"
  >
    Download as PDF
  </button>
</div>

        <h1
          style={{ width: '98%' }}
          className="text-center text-4xl font-extrabold mb-4 mt-5 text-white bg-gray-800 p-2 rounded-lg shadow-lg"
        >
          ORDERS
        </h1>

        <div
          ref={componentRef}
          style={{ width: '98%', marginTop: '-8px' }}
          className="relative overflow-x-auto shadow-md sm:rounded-lg mx-5 my-5"
        >
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 roboto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Size
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Order Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Sample row */}
              <tr onClick={HandleOnClick} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  White Shade shadow t-shirt
                </th>
                <td className="px-6 py-4">Noob</td>
                <td className="px-6 py-4">Medium</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">Delivered</td>
                <td className="px-6 py-4">
                  <a href=' # ' className="font-medium text-white-600 dark:text-white-500 hover:underline">
                    Edit
                  </a>
                </td>
              </tr>
              
              




              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  White Shade shadow t-shirt
                </th>
                <td className="px-6 py-4">Noob</td>
                <td className="px-6 py-4">Medium</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">Delivered</td>
                <td className="px-6 py-4">
                  <a href=' # '  className="font-medium text-white-600 dark:text-white-500 hover:underline">
                    Edit
                  </a>
                </td>
              </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
