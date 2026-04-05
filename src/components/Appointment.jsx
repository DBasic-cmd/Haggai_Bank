import React from "react";
import assets from "../assets/assets";

const Appointment = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-gray-200 text-center">
          Ready to start your home ownership Journey?
        </h1>
        <p className=" text-white dark:text-gray-200 text-center">
          Speak with our mortgage team today — no obligation, no jargon.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <button className="bg-white text-red-700 px-6 py-2 rounded-lg font-semibold hover:bg-red-700 hover:text-white transition-colors duration-200">
                  Schedule an Appointment
                </button>
                <button className="text-white bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors duration-200">
                  Get a call back
                </button>
        </div>

        <div className="flex items-center justify-center gap-6 mt-6">
            <p>
                <img src={assets.email_icon} alt="" className="text-red-700 inline-block" />
                <span className="ml-2 text-white dark:text-gray-200">
                    info@haggaibank.com
                </span>
            </p>
            <p>
                <img src={assets.person_icon} alt="" className="text-red-700 inline-block" />
                <span className="ml-2 text-white dark:text-gray-200">
                    07045994840
                </span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
