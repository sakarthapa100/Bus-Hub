import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('General');
  const [activeIndex, setActiveIndex] = useState(null);

  const categories = ['General', 'Ticket-related', 'Payment', 'Cancellation & Refund', 'Insurance'];

  const faqData = {
    General: [
      {
        question: 'What is BusHub?',
        answer: 'BusHub is an online bus ticketing platform that allows you to book bus tickets for various routes across the country.'
      },
      {
        question: 'How do I create an account on BusHub?',
        answer: 'You can create an account by clicking on the "Sign Up" button on the top right corner of our website or app. Follow the prompts to enter your details and create your account.'
      },
      {
        question: 'Is it necessary to create an account to book tickets?',
        answer: `While it's not mandatory, creating an account helps you manage your bookings more easily and access features like saved payment methods and travel history.`
      }
    ],
    'Ticket-related': [
      {
        question: 'How do I book a bus ticket on BusHub?',
        answer: 'To book a ticket, enter your origin, destination, and travel date on our homepage. Select your preferred bus from the list of available options, choose your seat, and proceed to payment.'
      },
      {
        question: 'Can I book a return ticket?',
        answer: 'Yes, you can book return tickets. Simply use the "Round Trip" option when searching for buses on our platform.'
      },
      {
        question: 'How do I get my ticket after booking?',
        answer: `Once your booking is confirmed, you'll receive an e-ticket via email and SMS. You can also find your ticket in the "My Bookings" section of your account.`
      }
    ],
    Payment: [
      {
        question: 'Is it safe to use my credit or debit card to buy bus tickets on BusHub?',
        answer: 'Yes, it is safe to use your credit or debit card on our platform. We use industry-standard encryption to protect your payment information.'
      },
      {
        question: 'Does the owner of the credit card/debit card with which the bus ticket is purchased need to be one of the passengers?',
        answer: 'No, the cardholder does not necessarily need to be a passenger. You can purchase tickets for others using your card.'
      },
      {
        question: 'What are the different payment options available on Bus Ticket booking?',
        answer: 'We offer various payment options including credit/debit cards, net banking, UPI, and digital wallets.'
      }
    ],
    'Cancellation & Refund': [
      {
        question: 'What is the cancellation policy for bus tickets?',
        answer: 'Cancellation policies vary depending on the bus operator. You can find the specific policy for your ticket in the booking details.'
      },
      {
        question: 'How do I cancel my bus ticket?',
        answer: 'To cancel your ticket, go to "My Bookings" in your account, select the ticket you wish to cancel, and follow the cancellation process.'
      },
      {
        question: 'How long does it take to process a refund?',
        answer: 'Refunds typically take 5-7 business days to process, depending on your bank and the payment method used.'
      }
    ],
    Insurance: [
      {
        question: 'Does BusHub offer travel insurance?',
        answer: 'Yes, we offer travel insurance as an optional add-on when you book your ticket. It covers trip cancellations, delays, and other travel-related issues.'
      },
      {
        question: 'What does the travel insurance cover?',
        answer: 'Our travel insurance typically covers trip cancellation, travel delays, lost baggage, and medical emergencies during your journey.'
      },
      {
        question: 'How do I make a claim on my travel insurance?',
        answer: 'To make a claim, contact our customer support team with your booking details and insurance information. They will guide you through the claim process.'
      }
    ]
  };

  return (
    <div className="max-w-[82rem] mx-auto p-8 bg-white mt-10 mb-10  ">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">FAQs related to Bus Tickets Booking</h1>
      
      <div className="flex mb-8 justify-center bg-white rounded-lg shadow-md p-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              activeCategory === category
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {faqData[activeCategory]?.map((faq, index) => (
          <div key={index} className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full text-left p-4 focus:outline-none"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="p-4 text-gray-600 border-t">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQSection;
// good