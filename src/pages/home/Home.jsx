import React from "react";
import "./Home.css";
import { Header } from "../../components/export";
import { Listing } from "../../components/export";
import { RecentPost } from "../../components/export";
import { CashOffer } from "../../components/export";
import arrowImg from "../../assets/home_image/arrow.png";
import { Link } from "react-router-dom";
import sellout from "../../assets/home_image/sellout.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <section className="hero flex justify-center font-primary">
        <div className="flex justify-end w-[50%] pt-10 pr-5 font-primary text-white">
          <div className="overley w-[504px] h-[350px] p-4">
            <h1 className="text-[30px] font-bold my-2 leading-[36px]">
              Sell Your House Fast In Baton Rouge, LOUISIANA
            </h1>
            <p className="text-[18px] py-2">
              <strong>No </strong>Fees. <strong>No </strong>Commissions. Put
              More Cash In Your Pocket.
            </p>
            <p className="text-[18px] py-3 ">
              Flooded House? Need Repairs? Tired of tenants? Inherited house?
              <strong>
                {" "}
                <u>
                  <b>SELL TO US!!</b>
                </u>
              </strong>
            </p>
            <strong className="text-[24px] leading-[27px] pb-4">
              You’ll Get A Fair Offer – You Choose The Closing Date. We Pay All
              Costs!
            </strong>
            <div className="flex gap-20 my-2">
              <p className="text-[18px] ">Fill out the short form…</p>
              <img src={arrowImg} />
            </div>
          </div>
        </div>
        <div className=" w-[50%] flex justify-start pl-4 py-10 ">
          <div className=" h-[80%]">
            <CashOffer
              containerClass="max-w-[78%] bg-gray-100 md:p-3 font-primary"
              title="What Do You Have To Lose? Get Started Now..."
              description="We buy houses in ANY CONDITION in LOUISIANA. There are no commissions or fees and no obligation whatsoever. Start below by giving us a bit of information about your property or call (225) 772-2747..."
              titleClass="text-[18px] md:text-[21px] font-bold mb-2"
              descriptionClass="text-gray-800 mb-4 text-[18px]"
              inputClass="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              buttonClass="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300"
            />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-[12%] py-12 font-primary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 font-primary">
            <h2 className="text-4xl font-bold mb-6 text-center px-1 leading-11 text-[#212529]">
              “I Need To Sell My House Fast In Baton Rouge!”
            </h2>
            <h3 className="text-[#212529] text-3xl px-2 leading-9 text-center font-bold">
              We Buy Houses Anywhere In Baton Rouge And Other Parts of
              LOUISIANA, And At Any Price.
              <Link to={"./works"} className="text-blue-500">
                Check Out How Our Process Works
              </Link>
              . We’re Ready To Give You A Fair Offer For Your House.
            </h3>
            <p className="same-style font-primary">
              If you want to sell your Baton Rouge house… we’re ready to give
              you a fair all-cash offer.
            </p>
            <p className="same-style">
              Stop the frustration of your unwanted property. Let us buy your
              LOUISIANA house now, regardless of condition.
            </p>
            <p className="same-style">
              Avoiding foreclosure? House in PROBATE? Facing divorce? Moving?
              Upside down in your mortgage? Liens? It doesn’t matter whether you
              live in it, you’re renting it out, it’s vacant, or not even
              habitable. We help owners who have inherited an unwanted property,
              own a vacant house, are behind on payments, owe liens, downsized
              and can’t sell… even if the house needs repairs that you can’t pay
              for… and yes, even if the house is fire damaged or has bad rental
              tenants.
            </p>
            <p className="same-style">
              Basically, if you have a property and need to sell it… we’d like
              to make you a fair cash offer and close on it when you’re ready to
              sell.
            </p>
            <div className="w-full ">
              {/* Heading */}
              <h2 className="text-4xl font-bold mb-4 mt-8">
                Do You Need To Sell Your House in Baton Rouge, LOUISIANA?
              </h2>

              {/* Paragraph + Image Card */}
              <div className="flex gap-6 text-[18px]">
                {/* Left side paragraph */}
                <div className="flex-1">
                  <p className="mb-4">
                    <strong className="font-semibold">
                      Even if an agent can’t sell your house, we can help.
                    </strong>
                    (Sometimes selling a house through a real estate agent is
                    not for everyone.)
                  </p>
                  <p>And as a bonus…</p>

                  {/* First two list items */}
                  <ul className="space-y-2 mt-4 leading-[27px]">
                    <li className="list-disc ml-6">
                      you don’t need to clean up and repair the property
                    </li>
                    <li className="list-disc ml-6">
                      don’t waste time finding an agent who you trust and who
                      can deliver on their promise of selling your house quickly
                    </li>
                  </ul>
                </div>

                {/* Right side image card */}
                <div className="w-[40%] bg-white rounded-md shadow p-3 text-[18px]">
                  <img
                    src={sellout}
                    alt="house"
                    className="w-full h-auto object-cover rounded-md"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    We can buy your LOUISIANA house. <br />
                    Contact us today!
                  </p>
                </div>
              </div>

              {/* Remaining two list items full width */}
              <ul className="space-y-2 mt-4 text-[18px]">
                <li className="list-disc ml-6">
                  you won’t need to sign a contract that binds you to an agent
                  for a certain term
                </li>
                <li className="list-disc ml-6">
                  or deal with the paperwork and the waiting and wondering (and
                  hoping)
                </li>
              </ul>
            </div>
          </div>

          <div className="py-2">
            <Listing />

            <RecentPost />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
