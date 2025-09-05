import React from "react";

// Props with default title, description, and classes
const CashOffer = ({
  title = "Get Your Fair Cash Offer: Start Below!",
  description = "We buy houses in ANY CONDITION in LOUISIANA. There are no commissions or fees and no obligation whatsoever. Start below by giving us a bit of information about your property or call (225) 772-2747...",
  containerClass = "max-w-[60%] w-full mx-auto bg-gray-100 p-6 md:p-8 rounded-xl shadow-md font-primary",
  titleClass = "text-2xl md:text-3xl font-bold mb-2",
  descriptionClass = "text-gray-800 mb-4 max-w-[80%]",
  inputClass = "w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400",
  buttonClass = "mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300",
}) => {
  return (
    <div className={containerClass}>
      {/* Header */}
      <h1 className={titleClass}>{title}</h1>
      <p className={descriptionClass}>{description}</p>

      {/* Form */}
      <form className="flex flex-col gap-4">
        {/* Property Address */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="address">
            Property Address <span className="text-red-500">*</span>
          </label>
          <input type="text" id="address" placeholder="Enter Your Address" className={inputClass} />
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="phone">
              Phone
            </label>
            <input type="text" id="phone" placeholder="Enter Phone" className={inputClass} />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input type="email" id="email" placeholder="Enter Email" className={inputClass} />
          </div>
        </div>

        {/* CAPTCHA Placeholder */}
        <div>
          <label className="block mb-1 font-medium">CAPTCHA</label>
          <div className={inputClass + " flex items-center justify-center text-gray-500 h-14"}>
            CAPTCHA Placeholder
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className={buttonClass}>
          Get My Fair Cash Offer &raquo;
        </button>
      </form>
    </div>
  );
};

export default CashOffer;
