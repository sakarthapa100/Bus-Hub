import React from 'react';

const BookingDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Travel Details */}
        <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <h2 className="text-3xl font-bold">Kathmandu to Pokhara</h2>
          <p className="text-lg mt-1 text-blue-100">10 August 2024</p>
          <div className="mt-6 flex justify-between items-end">
            <div>
              <p className="text-sm uppercase tracking-wide">Departure</p>
              <p className="text-4xl font-bold">07:30 PM</p>
              <p className="mt-1">Kathmandu</p>
            </div>
            <div className="text-center">
              <p className="text-sm uppercase tracking-wide">Duration</p>
              <p className="text-lg font-semibold">8 Hours</p>
            </div>
            <div className="text-right">
              <p className="text-sm uppercase tracking-wide">Arrival</p>
              <p className="text-4xl font-bold">03:30 AM</p>
              <p className="mt-1">Pokhara</p>
            </div>
          </div>
        </div>

        {/* User Details */}
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold mb-4">Your Details</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    +977
                  </span>
                  <input
                    type="text"
                    placeholder="Mobile number"
                    className="flex-1 block w-full border border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </form>
        </div>

        {/* Payment Methods */}
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
          <div className="flex flex-wrap gap-4">
            {['eSewa', 'Khalti', 'MyPay', 'IME Pay', 'ConnectIPS'].map((method) => (
              <label key={method} className="flex items-center">
                <input type="radio" name="payment" className="sr-only" />
                <span className="px-4 py-2 border rounded-md text-sm font-medium cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  {method}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Offer Code */}
        <div className="p-6 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-2">Do you have an offer code?</label>
          <div className="flex">
            <input
              type="text"
              placeholder="OFFER CODE"
              className="flex-grow border border-gray-300 rounded-l-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Apply
            </button>
          </div>
        </div>

        {/* Travel and Payment Details */}
        <div className="p-6 grid grid-cols-1 gap-6 sm:grid-cols-2 bg-gray-50">
          <div>
            <h3 className="text-lg font-semibold mb-2">Travel Details</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="font-medium">Route:</span> Kathmandu - Pokhara</li>
              <li><span className="font-medium">Date:</span> 10 August 2024</li>
              <li><span className="font-medium">Seats:</span> 1 (B15)</li>
              <li><span className="font-medium">Travel:</span> Baniya Travel (Night AC Tourist Sofa Bus)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="font-medium">Total Cost:</span> NPR 1100</li>
              <li><span className="font-medium">Cashback:</span> NPR 60.5</li>
              <li className="text-lg font-semibold text-blue-600"><span className="font-medium">To Pay Amount:</span> NPR 1039.5</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 bg-gray-50 border-t flex justify-between">
          <button className="px-6 py-2 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Go Back
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;