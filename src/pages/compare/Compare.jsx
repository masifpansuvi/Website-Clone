import { CashOffer } from "../../components/export";
import { Header } from "../../components/export";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Compare = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-primary text-darkGray px-4 py-8 sm:px-6 md:px-8 xl:px-[100px]">
        {/* Centered container that mimics the reference width/centered look */}
        <div className="mx-auto w-full max-w-5xl">
          {/* Title (centered like the reference) */}
          <header className="mt-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Selling To Red Stick Property Solutions LLC vs. Listing With A
              Local <span className="uppercase">LOUISIANA</span> Agent
            </h1>
            <p className="mt-5 text-sm sm:text-base">
              Even in a sellers market like L.A., it’s smart to look at your
              options and see what will actually help you best reach your goals
              with the sale of your house. While you may be able to get a higher
              "top line" sales price listing with a local Baton Rouge agent,
              that doesn't always boil down to more money in your pocket or less
              headache.{" "}
              <strong>
                Dive into the details below to compare your options.
              </strong>
            </p>
          </header>

          <section className="overflow-hidden">
            <div className="p-2 sm:p-4 lg:p-6">
              <div className="overflow-x-auto">
                {/* The table */}
                <div className="w-full overflow-x-auto my-2">
                  <table className="w-full border border-collapse text-[16px] sm:text-[17px] md:text-[18px]">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 p-3 bg-white text-left font-semibold"></th>
                        <th className="border border-gray-300 p-3 bg-white text-left font-semibold">
                          Selling w/ An Agent
                        </th>
                        <th className="border border-gray-300 p-3 bg-white text-left font-semibold">
                          SOLD To{" "}
                          <span className="font-bold">
                            Red Stick Property Solutions LLC
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">
                          Commissions / Fees:
                        </td>
                        <td className="border border-gray-300 p-3">
                          <span className="text-blue-600 underline">6%</span> on
                          average is paid by you, the seller
                        </td>
                        <td className="border border-gray-300 p-3 font-semibold">
                          NONE
                        </td>
                      </tr>

                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 font-semibold">
                          Who Pays Closing Costs?:
                        </td>
                        <td className="border border-gray-300 p-3">
                          <span className="text-blue-600 underline">2%</span> on
                          average is paid by you, the seller
                        </td>
                        <td className="border border-gray-300 p-3 font-semibold">
                          NONE – We pay all costs
                        </td>
                      </tr>

                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">
                          Inspection & Financing Contingency*:
                        </td>
                        <td className="border border-gray-300 p-3">
                          <span className="text-blue-600 underline">Yes</span>,
                          up to 15% of sales{" "}
                          <span className="text-blue-600 underline">
                            fall through
                          </span>
                        </td>
                        <td className="border border-gray-300 p-3 font-semibold">
                          NONE
                        </td>
                      </tr>

                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 font-semibold">
                          Appraisal Needed:
                        </td>
                        <td className="border border-gray-300 p-3">
                          <span className="text-blue-600 underline">Yes</span>,
                          sale is often subject to appraisal
                        </td>
                        <td className="border border-gray-300 p-3 font-semibold">
                          NONE – We make{" "}
                          <span className="italic">cash offers</span>
                        </td>
                      </tr>

                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">
                          Average Days Until Sold:
                        </td>
                        <td className="border border-gray-300 p-3">
                          +/- 91 Days
                        </td>
                        <td className="border border-gray-300 p-3 font-semibold">
                          IMMEDIATE CASH OFFER
                        </td>
                      </tr>

                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 font-semibold">
                          Number of Showings:
                        </td>
                        <td className="border border-gray-300 p-3">
                          It Depends
                        </td>
                        <td className="border border-gray-300 p-3 font-semibold">
                          1 (Just Us)
                        </td>
                      </tr>

                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">
                          Closing Date:
                        </td>
                        <td className="border border-gray-300 p-3">
                          30-60 +/- days after accepting buyers offer
                        </td>
                        <td className="border border-gray-300 p-3 font-semibold">
                          The Date Of{" "}
                          <span className="uppercase">Your Choice</span>
                        </td>
                      </tr>

                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 font-semibold">
                          Who Pays For Repairs?:
                        </td>
                        <td className="border border-gray-300 p-3">
                          Negotiated During Inspection Period
                        </td>
                        <td className="border border-gray-300 p-3 font-semibold">
                          NONE – We pay for all repairs
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10 space-y-6 max-w-4xl text-justify">
            <h2 className="text-xl md:text-4xl font-semibold">
              Work The Numbers And See Which Way Helps You Get There…
            </h2>
            <p className="text-sm sm:text-[18px]">
              When you really work the numbers you start to see the real
              benefits that each way of selling your LOUISIANA house offers.<br />
              Here at Red Stick Property Solutions LLC we won't be able to offer
              you full retail value for your house... but we also offer other
              benefits that going the traditional for-sale route can't offer.
            </p>

            <div className="space-y-4">
              <article className="">
                <h3 className="font-bold text-3xl">
                  From offer to close and cash in your hand in as little as 7
                  days
                </h3>
                <p className="mt-2 text-sm sm:text-base">
                  You can get rid of the headache of that property fast and
                  <strong>avoid paying any more utility payments, tax</strong> payments,
                  <strong>insurance</strong> payments, <strong>mortgage</strong> payments, or property taxes while
                  your house is on the market. We buy properties as-is and close
                  quickly so you can move on.
                </p>
              </article>

              <article className="">
                <h3 className="font-bold md:text-3xl">
                  Don't worry about fixing anything up or cleaning your house
                  again and again for buyer after buyer
                </h3>
                <p className="mt-2 text-lg sm:text-base">
                  We don’t care how dirty your house is (we’ve seen worse!) or how many repairs are needed (a complete fixer? great! we love projects)... <a href="https://www.webuyhouses225.com/" className="text-blue-400">we’d like to make an offer on your house.</a> This saves you time and money that you can keep in your pocket.
                </p>
              </article>

              <article>
                <h3 className="font-bold md:text-3xl">
                  Don't worry about paying those pesky closing fees (we've got
                  you covered)
                </h3>
                <p className="mt-2 text-sm sm:text-base">
                  Because we are a full-service professional home buyer we make
                  it easy for you — we pay for all closing costs and handle
                  paperwork so you can get a clean, fast sale and cash in hand. <br className="mt-2" /><br />
                  So when you add up the time you could save by working with Red Stick Property Solutions LLC, the no-hassle experience, and the money you’ll save on commissions, fees, and holding costs while you wait to sell the traditional route… for many area home owners selling to a professional house buyer is the best viable option.<br />
                    <br ></br>
                    Is it for you?
                </p>
              </article>
            </div>
          </section>

          {/* CTA centered */}
          <section className="mb-20 flex justify-center">
            <CashOffer
              title="Get Your Fair Cash Offer: Start Below!"
              description="We buy houses in ANY CONDITION in LOUISIANA. There are no commissions or fees and no obligation whatsoever. Start below by giving us a bit of information about your property or call (225) 772-2747..."
              containerClass="w-full md:max-w-[70%]  bg-gray-100 my-6 p-6 md:p-4 border border-gray-300 shadow-md font-primary"
              titleClass="text-lg md:text-[21px] font-bold mb-2"
              descriptionClass="text-black mb-4 w-full"
              inputClass="w-full border border-gray-300 bg-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              buttonClass="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300"
            />
          </section>
        </div>
        <div
          className="
        font-primary text-darkGray
       
        leading-[1.9]
        text-left
        md-text-[18px]
      "
        >
          <p>
            <span className="font-semibold">*An inspection contingency</span>{" "}
            lets the buyer have time to do an inspection and back out of the
            sale or negotiate a new price if there are repairs that need to be
            done. If you can’t come to an agreement with the buyer, the buyer
            has the right to back out of the sale. Similar, a{" "}
            <span className="font-semibold">financing contingency</span> gives
            the buyer the wiggle room to back out of the purchase if they can’t
            obtain a loan or if the home doesn’t appraise for the value that the
            bank needs to close the loan.
          </p>

          <p className="mt-6">
            Here at Red Stick Property Solutions LLC we don’t use bank financing
            so you don’t have to worry about our ability to close on a deal.
          </p>
          {/* Social buttons */}
          <div className=" flex items-center gap-2 pt-12">
            {/* Facebook button */}
            <button className="flex items-center gap-2 bg-[#3b5998] text-white px-1 py-[1px] rounded-md hover:bg-[#2d4373] transition">
              {/* Icon always visible */}
              <FaFacebookF size={14} />
              {/* Text hidden on mobile, visible on md+ */}
              <span className="hidden md:inline  md:text-[14px]  md:leading-[22px]">
                Share
              </span>
            </button>

            {/* Cross button */}
            <button className="flex items-center gap-2 bg-black text-white px-1 py-[1px] rounded-md hover:bg-darkGray transition">
              <FaXTwitter size={14} />
              <span className="hidden md:inline text-[14px] md:text-[16px] leading-[20px] md:leading-[22px]">
                Share
              </span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Compare;
