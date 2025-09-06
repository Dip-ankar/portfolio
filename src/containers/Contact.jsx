import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
// 1. Import EmailJS
import emailjs from '@emailjs/browser';
import SectionTitle from '../components/shared/SectionTitle';

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  // 2. Define your EmailJS credentials from your .env file
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // 3. Updated onSubmit function to use EmailJS
  const onSubmit = (data) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Message sent successfully!');
        reset(); // Clear the form fields
      })
      .catch((err) => {
        console.error('FAILED...', err);
        toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <SectionTitle title="Get In Touch" subtitle="I’m open to new opportunities." />
        <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register('name', { required: 'Name is required' })}
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="5"
              {...register('message', { required: 'Message is required' })}
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-cyan-500 text-white font-bold py-3 rounded-md hover:bg-cyan-600 transition duration-300 disabled:bg-gray-500"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;