import React from "react";

function ContactForm() {
  return (
    <div>
      <form 
        action="https://formsubmit.co/drmarketingofficial1312@gmail.com" 
        method="POST"
        className="flex flex-col space-y-10"
      >
        <h1 className="text-4xl font-semibold text-primary mb-5">
          Send a Message
        </h1>

        {/* ✅ Hidden inputs for customization */}
        {/* <input type="hidden" name="_subject" value="New Contact Form Submission!" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:5173/thank-you" /> */}
        {/* 👆 Change this URL later to your real domain, for now localhost works */}

        <div className="flex space-x-10 sm:flex-col sm:space-y-10 sm:space-x-0">
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            required
            className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />

          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            required
            className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />
        </div>

        <div className="flex space-x-10 sm:flex-col sm:space-y-10 sm:space-x-0">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />
        </div>

        <div className="flex space-x-10">
          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            required
            className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />
        </div>

        <div className="flex justify-end">
          <button 
            type="submit" 
            className="text-white bg-secondary px-5 py-3 rounded max-w-max"
          >
            Send A Message
          </button>
        </div>

      </form>
    </div>
  );
}

export default ContactForm;
