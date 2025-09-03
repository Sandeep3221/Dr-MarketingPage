import React from "react";

function Address() {
  return (
    <div>
      <div className="bg-primary rounded-3xl flex flex-col space-y-10 px-10 py-5 text-white w-full">
        <h1 className="text-3xl font-semibold">Get In Touch</h1>
        <p>
          Dr. Markeking is digital marketing agency , we provide markeking and
          development services
        </p>

        {/* Visit */}
        <div className="flex items-center space-x-5 sm:flex-col sm:items-start sm:space-x-0 sm:space-y-3">
          <div className="h-12 w-12 bg-[#ffa60021] flex items-center justify-center rounded">
            <i className="ri-map-pin-line text-3xl text-secondary"></i>
          </div>
          <div className="break-words">
            <h1 className="font-semibold text-xl">Visit Us</h1>
            <p>Prafullnagar, Champasari, Siliguri, West Bengal</p>
          </div>
        </div>

        {/* Mail */}
        <div className="flex items-center space-x-5 sm:flex-col sm:items-start sm:space-x-0 sm:space-y-3">
          <div className="h-12 w-12 bg-[#ffa60021] flex items-center justify-center rounded">
            <i className="ri-mail-line text-3xl text-secondary"></i>
          </div>
          <div className="break-words w-full">
            <h1 className="font-semibold text-xl">Mail Us</h1>
            <p className="break-words">
              drmarketingofficial1312@gmail.com
            </p>
          </div>
        </div>

        {/* Call */}
        <div className="flex items-center space-x-5 sm:flex-col sm:items-start sm:space-x-0 sm:space-y-3">
          <div className="h-12 w-12 bg-[#ffa60021] flex items-center justify-center rounded">
            <i className="ri-phone-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Call Us</h1>
            <p>9832351169</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
