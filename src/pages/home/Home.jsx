import React from "react";
import { Header } from "../../components/export";
import {Listing} from "../../components/export";
import{ RecentPost } from "../../components/export"

const Home = () => {
  return (
    <>
      <Header />
      <section className="px-6 md:px-[12%] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Grid - Long Text */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              Sell Your House Fast in Baton Rouge
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We understand that selling a house can be stressful and
              time-consuming. That’s why we make it simple. Whether your home
              needs repairs, you’re facing foreclosure, or you just want to sell
              quickly without the hassle of dealing with agents, we’re here to
              help. We buy houses in any condition and pay cash, so you don’t
              have to worry about commissions, hidden fees, or waiting months to
              close. Our process is transparent, fast, and designed to give you
              peace of mind while putting more money in your pocket. No matter
              your situation, we’re committed to offering fair and honest
              solutions tailored to your needs.
            </p>
          </div>

          {/* Right Grid - Art Card + Recent Posts */}
          <div className="py-2">
            {/* Art Card */}
            <Listing />

            {/* Recent Posts */}
            <RecentPost />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
