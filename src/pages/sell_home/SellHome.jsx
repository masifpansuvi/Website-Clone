// src/pages/SellHousePage.jsx
import React from "react";
import Header from "../../components/Header/Header";
import Listing from "../../components/Listing/Listing";
import RecentPost from "../../components/RecentPost/RecentPost";
import Testimonials from "../../components/testimonials/Testimonials";
import CashOffer from "../../components/CashOffer/CashOffer";
import privacyImg from "../../assets/home_image/privacyImg.jpeg";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../CommonCss.css";

const SellHousePage = () => {
  return (
    <>
      <Header />
      
      <section className="px-4 md:px-[12%] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 font-primary">
            <h2 className="text-[28px] md:text-[39px] tracking-tight font-bold mb-3 text-justify leading-[36px] md:leading-[45px] text-[#212529]">
              We Buy Properties In Any Condition – Find Out Below If Your Baton
              Rouge Property Qualifies For Us To Make You{" "}
              <u>An All Cash Offer…</u>
            </h2>
            <p className="mb-4 normal-size">See how...</p>
            <p className="normal-size mb-2">
              Are you currently facing any of these situations?
            </p>

            <ul className="list-disc ml-6 md:ml-10 space-y-0 normal-size text-[#212529] leading-7 mb-8">
              <li>
                Are You In <strong>Foreclosure</strong> or Are About To Be?
              </li>
              <li>
                Do You Own <strong>Unwanted Rental Property?</strong>
              </li>
              <li>
                Do You Have Frustrating Tenants (Or Family Members) That You
                Can’t Get Rid Of?
              </li>
              <li>
                Do You Own A <strong>Vacant Property?</strong>
              </li>
              <li>
                Did You <strong>Inherit An Unwanted Property?</strong>
              </li>
              <li>
                Do You <strong>Need To Relocate Quickly</strong> And Need To
                Sell Your Current House Fast?
              </li>
              <li>
                Do You Want To{" "}
                <strong>Avoid Paying Realtor Commissions?</strong>
              </li>
              <li>
                Are You Going Through A <strong>Divorce?</strong>
              </li>
              <li>
                Do You <strong>Have Little Or No Equity</strong> And Need To
                Sell?
              </li>
              <li>
                Do You Own A “Fixer Upper” That You Don’t Want To Fix Up Or
                Don’t Have Time To Fix Up?
              </li>
            </ul>

            <p className="normal-size mt-4 text-left">
              If you answered “yes” to one or more of these questions, we can
              help!{" "}
              <u>
                We are specialists in solving real estate problems… especially
                ones that pose a financial burden on you
              </u>
              , the homeowner. We can solve almost any financial problem that
              your property is causing.
            </p>
            <p className="normal-size mt-2 text-left">
              We want to help you take control of your situation, end the
              hassles, and get back to living the life you want to live. And you
              deserve to know all of the options available to you right now.
              Simply fill out the short form below or give us a call, and our
              experts will help you (with no pushy sales techniques or
              obligation)… we’ll help you make sense of all of this confusion
              and we’ll present you with the options that can potentially change
              your life and help you get back to normal.
            </p>
            <p className="normal-size mt-2 text-left">
              Send us information in the form below and we’ll get back to you
              promptly (usually within 24 hours) – we’ll give you a call and
              <u> show you the options to help solve your current situation.</u>
            </p>
            <p className="normal-size">
              All of this 100% free to you (we don’t charge you any fees). 100%{" "}
              <u>no hassle.</u> 100% <u>no obligation.</u> <u>No commitment.</u>
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-6 text-[#212529]">
              Fill Out The Form Below And <br />
              We’ll Chat With You Within 24 Hours
            </h3>

            <CashOffer
              title=""
              description=""
              containerClass="max-w-full md:max-w-[70%] mx-auto bg-gray-100 p-6 md:p-4 border border-gray-300 shadow-md font-primary"
              titleClass="text-lg md:text-[21px] font-bold mb-2"
              descriptionClass="text-black mb-4 w-full"
              inputClass="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              buttonClass="w-full md:w-auto mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300"
            />

            <p className="normal-size text-center mt-10">
              <strong>Or give us a call at (225) 772-2747</strong> to chat with
              us over the phone
            </p>
            <img
              src={privacyImg}
              alt="privacy image"
              className="mx-auto mt-4"
            />

            {/* Socials */}
            <ul className="flex gap-4 mt-16 justify-center md:justify-start">
              <li className="facebook flex items-center bg-blue-600 text-[14px] rounded px-4">
                <FaFacebookF className="text-white" />
                <span className="ml-2 hidden md:inline">share</span>
              </li>
              <li className="twitter flex items-center bg-black text-white text-[14px] rounded px-4">
                <FaXTwitter />
                <span className="ml-2 hidden md:inline">share</span>
              </li>
            </ul>
          </div>

          {/* Right Sidebar */}
          <div className="py-2 space-y-6">
            <Listing buttonClass="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300" />
            <Testimonials />
            <CashOffer
              title="Get Your Fair Cash Offer: Start Below!"
              description="We buy houses in ANY CONDITION in LOUISIANA. There are no commissions or fees and no obligation whatsoever. Start below by giving us a bit of information about your property or call (225) 772-2747..."
              containerClass="w-full mx-auto bg-gray-100 p-6 md:p-4 border border-gray-300 shadow-md font-primary"
              titleClass="text-lg md:text-[21px] font-bold mb-2"
              descriptionClass="text-black mb-4 w-full"
              inputClass="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              buttonClass="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300"
            />
            <RecentPost />
          </div>
        </div>
      </section>
    </>
  );
};

export default SellHousePage;
