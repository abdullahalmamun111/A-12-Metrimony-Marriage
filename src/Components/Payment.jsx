import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import CheckOutform from './checkOutform';
import { useLoaderData } from 'react-router-dom';
import { ContextApi } from '../AuthProvider/AuthContext';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway_PK);

const Payment = () => {
	const data = useLoaderData();
	const {user} = useContext(ContextApi);

	const passingData = {
		biodataId: data.biodataId,
		email: user.email
	}
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Checkout Page</h1>
        <p className="text-center text-gray-600 mb-6">
          Complete your payment to access the contact information.
        </p>

        {/* Payment Form */}

		<Elements stripe={stripePromise}>
		  <CheckOutform passingData={passingData}></CheckOutform>
		</Elements>

        {/* <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="card">
              Card Details
            </label>
            <input
              type="text"
              id="card"
              placeholder="1234 5678 9123 4567"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="expiry">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry"
                placeholder="MM/YY"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="cvc">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                placeholder="123"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-md shadow-lg"
          >
            Pay Now
          </button>
        </form> */}

        <p className="text-center text-sm text-gray-500 mt-4">
          Secured by <span className="font-bold text-purple-600">Matrimony Hub</span>.
        </p>
      </div>
    </div>
  );
};

export default Payment;
