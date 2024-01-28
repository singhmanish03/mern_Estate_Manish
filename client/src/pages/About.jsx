import React, { useState } from 'react';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // You can replace the console.log with your actual form submission code
  };

  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-extrabold text-slate-800'>Welcome to Manish Estate</h1>
        <p className='mt-4 text-lg text-slate-600'>Your Premier Partner in Real Estate</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='mb-6'>
          <p className='mb-4 text-xl text-slate-700 leading-7'>
            Manish Estate is your premier partner in realizing your dream home or seamlessly selling your property. Our team of experienced agents is committed to providing top-notch service, ensuring an exceptional real estate experience.
          </p>
          <p className='mb-4 text-xl text-slate-700 leading-7'>
            At Manish Estate, we recognize that buying or selling a property is a significant decision. We offer personalized guidance, expert advice, and an in-depth understanding of the local market to empower you to make informed choices.
          </p>
        </div>

        <div>
          <img
            src='https://archello.s3.eu-central-1.amazonaws.com/images/2020/12/29/the-crossboundaries-alembic-real-estate-office-offices-archello.1609241605.3552.jpg'  // Add an image URL or replace with an actual image path
            alt='Manish Estate Office'
            className='w-full h-auto rounded-lg shadow-md'
          />
        </div>
      </div>

      <div className='mt-12'>
        <h2 className='text-4xl font-bold mb-6 text-slate-800'>Our Mission</h2>
        <p className='mb-6 text-lg text-slate-700 leading-8'>
          At Manish Estate, our mission is to empower you to achieve your real estate goals. We accomplish this by providing expert advice, delivering personalized service, and offering a comprehensive understanding of the local real estate market.
        </p>

        <h2 className='text-4xl font-bold mb-6 text-slate-800'>Why Choose Manish Estate?</h2>
        <ul className='list-disc pl-8 mb-8 text-lg text-slate-700'>
          <li className='mb-3'>Experienced and knowledgeable team of real estate agents.</li>
          <li className='mb-3'>Commitment to exceptional customer service.</li>
          <li className='mb-3'>In-depth understanding of local market trends.</li>
          <li className='mb-3'>Guidance through every step of the buying or selling process.</li>
          <li>Personalized solutions tailored to your needs.</li>
        </ul>

        <h2 className='text-4xl font-bold mb-6 text-slate-800'>Contact Us</h2>
        <p className='mb-8 text-lg text-slate-700 leading-8'>
          Ready to embark on your real estate journey? <span className="text-rose-500 font-bold">Contact Manish Estate</span> today. Our team is here to assist you with any inquiries and guide you through the exciting world of real estate.
        </p>

        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-slate-700'>
                Your Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                autoComplete='name'
                value={formData.name}
                onChange={handleChange}
                className='mt-1 p-3 border border-slate-500 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300'
                required
              />
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium text-slate-700'>
                Your Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                autoComplete='email'
                value={formData.email}
                onChange={handleChange}
                className='mt-1 p-3 border border-slate-500 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300'
                required
              />
            </div>
          </div>

          <div className='mt-6'>
            <label htmlFor='message' className='block text-sm font-medium text-slate-700'>
              Your Message
            </label>
            <textarea
              id='message'
              name='message'
              rows='4'
              value={formData.message}
              onChange={handleChange}
              className='mt-1 p-3 border border-slate-500 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300'
              required
            ></textarea>
          </div>

          <div className='mt-6'>
            <button
              type='submit'
              className='bg-rose-500 text-white p-3 rounded-md hover:bg-rose-600 transition duration-300'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
