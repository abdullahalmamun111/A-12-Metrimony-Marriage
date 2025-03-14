import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useSecure from "../Hooks/useSecure";
import { ContextApi } from "../AuthProvider/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutform = ({ passingData }) => {
  const {user} = useContext(ContextApi)
  const [clientSecret, setClientSecret] = useState('')
  const [error, setError] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useSecure();
  const amount = 500;
  const navigate = useNavigate()

  useEffect(() => {
	axiosSecure.post('/create-payment-intent',{amount:amount})
	.then(res => {
		console.log(res.data.clientSecret)
		setClientSecret(res.data.clientSecret)
	})
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

	const {error,paymentMethod} = await stripe.createPaymentMethod({
		type:'card',
		card,
	})

	if(error){
		console.log('error', error)
		setError(error.message)
	}
	else{
		console.log('payment method', paymentMethod)
		setError('')
	}

    // confirm payment
	const {paymentIntent, error:confirmErorr} = await stripe.confirmCardPayment(clientSecret,{
		payment_method: {
			card: card,
			billing_details: {
				email: user?.email || 'anonymous',
				name: user?.displayName || 'anonymous'
			}
		}
	})

	if(confirmErorr){
		console.log('confirm error')
	}
	else{
		console.log('payment intenet',paymentIntent)

		if(paymentIntent.status === 'succeeded'){
			const reqUserData = {
				email: user.email,
				name:user.displayName,
				biodataId:passingData.biodataId,
        bioName:passingData.name,
        bioEmail:passingData.bioEmail,
        bioMobile:passingData.mobile,
			}
      

		 const res = await axiosSecure.post('/request',reqUserData)
		 console.log('payment saved', res.data)
		 if(res.data.insertedId){
			Swal.fire({
			  position: "center",
			  icon: "success",
			  title: "Your Request has been Successfull",
			  showConfirmButton: false,
			  timer: 1500
			});
      navigate('/')
		  }	
		}
	}
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-xl font-semibold text-blue-600 mb-4">
        Biodata No: <span className="font-bold">{passingData.biodataId}</span>
      </h1>
      <h3 className="text-lg text-gray-700 mb-6">
        Email: <span className="font-medium">{passingData.email}</span>
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Pay $5
        </button>
		<p className="text-red-500">
			{error}
		</p>
      </form>
    </div>
  );
};

export default CheckOutform;
