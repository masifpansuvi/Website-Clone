import "./Home.css";
import { Header } from "../../components/export";
import { Listing } from "../../components/export";
import { RecentPost } from "../../components/export";
import { CashOffer } from "../../components/export";
import { Testimonials } from "../../components/export";
import arrowImg from "../../assets/home_image/arrow.png";
import { Link } from "react-router-dom";
import sellout from "../../assets/home_image/sellout.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <Header />
 
      <section className="hero w-full sm:px-2 bg-cover bg-center xl:px-[10%] py-2 xl:py-4 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center md:items-start w-full">
          <div className="w-full md:w-1/2 text-white px-4 md:p-6">
            <div className="overley w-full h-fit p-4">
              <h1 className="text-xl sm:text-2xl lg:text-[30px] font-bold my-2 leading-[28px] sm:leading-[36px]">
                Sell Your House Fast In Baton Rouge, LOUISIANA
              </h1>

              <p className="text-base sm:text-lg py-2">
                <strong>No </strong>Fees. <strong>No </strong>Commissions. Put
                More Cash In Your Pocket.
              </p>

              <p className="text-base sm:text-lg py-3">
                Flooded House? Need Repairs? Tired of tenants? Inherited house?
                <strong>
                  {" "}
                  <u>
                    <b>SELL TO US!!</b>
                  </u>
                </strong>
              </p>

              <strong className="text-lg sm:text-xl leading-7 pb-4 block">
                You’ll Get A Fair Offer – You Choose The Closing Date. We Pay
                All Costs!
              </strong>

              <div className="flex flex-wrap items-center gap-4">
                <p className="text-[18px] leading-snug  sm:w-auto">
                  Fill out the short form…
                </p>
                <img src={arrowImg} className="w-30 md:w-50" />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:p-6 px-4">
            <CashOffer
              containerClass="w-full bg-gray-100 p-2  md:p-2 font-primary text-left"
              title="What Do You Have To Lose? Get Started Now..."
              description="We buy houses in ANY CONDITION in LOUISIANA. commissions or fees and no obligation whatsoever. Start below by giving us a bit of information about your property or call (225) 772-2747..."
              titleClass="text-lg sm:text-xl font-bold"
              descriptionClass="text-gray-800 text-base sm:text-lg"
              inputClass="w-full border bg-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              buttonClass=" bg-orange-400 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300 w-full"
            />
          </div>
        </div>
      </section>

      <section className="px-6 xl:px-[12%] py-12 font-primary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 font-primary">
            <h2 className="md:text-4xl text-3xl font-bold mb-6 text-center px-1 leading-11 text-[#212529]">
              “I Need To Sell My House Fast In Baton Rouge!”
            </h2>
            <h3 className="text-[#212529]  text-3xl leading-9 tight-spacing px-1 text-center font-bold">
              We Buy Houses Anywhere In Baton Rouge And Other Parts of
              LOUISIANA, And At Any Price.
              <Link to={"./works"} className="text-blue-500">
                Check Out How Our Process Works
              </Link>
              . We’re Ready To Give You A Fair Offer For Your House.
            </h3>
            <p className="same-style font-primary">
              If you want to <strong>sell your Baton Rouge house</strong>… we’re
              ready to give you a fair all-cash offer.
            </p>
            <p className="same-style">
              Stop the frustration of your unwanted property. Let us buy your
              LOUISIANA house now, regardless of condition.
            </p>
            <p className="same-style">
              <a
                href="https://www.webuyhouses225.com/avoiding-foreclosure/"
                className="text-blue-500"
              >
                Avoiding foreclosure?
              </a>{" "}
              House in PROBATE? Facing divorce? <strong>Moving </strong>?
              <strong>Upside down</strong> in your mortgage?{" "}
              <strong>Liens</strong>? It doesn’t matter whether you live in it,
              you’re renting it out, it’s vacant, or not even habitable. We help
              owners who have inherited an unwanted property, own a vacant
              house, are behind on payments, owe liens, downsized and can’t
              sell… even if the house needs repairs that you can’t pay for… and
              yes, even if the house is fire damaged or has bad rental tenants.
            </p>
            <p className="same-style mb-2">
              Basically, if you have a property and need to sell it… we’d like
              to make you a fair cash offer and close on it when you’re ready to
              sell.
            </p>
            <div className="w-full">
  {/* Heading */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-8 leading-snug">
    Do You Need To Sell Your House in Baton Rouge, LOUISIANA?
  </h2>

  {/* Paragraph + Image Card */}
  <div className="flex flex-col md:flex-row md:items-start gap-6 text-[16px] sm:text-[17px] md:text-[18px]">
    {/* Left side paragraph */}
    <div className="flex-1 order-2 md:order-1">
      <p className="mb-4">
        <strong className="font-semibold">
          Even if an agent can’t sell your house, we can help.
        </strong>{" "}
        (Sometimes selling a house through a real estate agent is not for everyone.)
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
    <div className="w-full md:w-[40%] bg-white rounded-md shadow p-3 text-[16px] sm:text-[17px] md:text-[18px] order-1 md:order-2">
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
  <ul className="space-y-2 mt-4 text-[16px] sm:text-[17px] md:text-[18px]">
    <li className="list-disc ml-6">
      you won’t need to sign a contract that binds you to an agent
      for a certain term
    </li>
    <li className="list-disc ml-6">
      or deal with the paperwork and the waiting and wondering (and hoping)
    </li>
  </ul>
</div>

            <div className="text-gray-800 font-primary space-y-4 px-4 md:px-0">
              <p className="text-base sm:text-lg leading-relaxed">
                We’ll know very quickly if we can help you, and unlike selling
                through an agent, you don’t have to wait to see if the buyer can
                get financing… we’re ready to buy right now!
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                All that hassle can add stress, months to the process, and in
                the end after paying the agent’s expensive fees, you may or may
                not be ahead of the game.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                We work differently at{" "}
                <strong>Red Stick Property Solutions LLC</strong>. When you
                contact us and submit the short property information form
                (below), we’ll give you a fair all-cash offer on your house
                within 24 hours… and the best part is: we can close whenever{" "}
                <strong>YOU</strong> choose to close – it’s entirely up to you.
                It doesn’t matter what condition the house is in, or even if
                there are tenants in there that you can’t get rid of… don’t
                worry about it. We’ll take care of it for you. And if you need
                the cash quickly, we can close in as little as 7 days because we
                buy houses with cash and don’t have to rely on traditional bank
                financing.{" "}
                <a href="#" className="text-orange-500 hover:underline">
                  (Go here to learn about our process →)
                </a>
              </p>

              <p className="text-base sm:text-lg leading-relaxed font-semibold">
                In short…
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                No matter what condition your house is in; no matter what
                situation or timeframe you’re facing…
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Our goal is to help make your life easier and get you out from
                under the property that’s stressing you out… while still paying
                a fast, fair, and honest price for your house.
              </p>
            </div>
            <CashOffer
              title="What Do You Have To Lose? Get Started Now..."
              description="We buy houses in ANY CONDITION in LOUISIANA. There are no commissions or fees and no obligation whatsoever. Start below by giving us a bit of information about your property or call (225) 772-2747..."
              containerClass="w-full md:w-[70%] mx-auto bg-gray-100 p-6 md:p-4 border border-gray-300 shadow-md font-primary"
              titleClass="text-lg md:text-3xl font-bold mb-2"
              descriptionClass="text-black mb-4 w-full"
              inputClass="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              buttonClass="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300"
            />
            <p className="text-center text-[18px] my-10 font-bold">
              Or Give Us A Call Now At: (225) 772-2747
            </p>
            <p className="text-[18px] my-4 ">
              We help property owners just like you, in all kinds of situations.
              From divorce, foreclosure, death of a family member, burdensome
              rental property, and all kinds of other situations. We buy houses
              in LOUISIANA… including Baton Rouge and surrounding areas and pay
              a fair cash price, fast. Sometimes, those who own property simply
              have lives that are too busy to take the time to do all of things
              that typically need to be done to prepare a house to sell on the
              market… if that describes you, just let us know about the property
              you’d like to be rid of and{" "}
              <strong>sell your house fast for cash.</strong>
            </p>

            <p>
              If you simply don’t want to put up with the hassle of owning that
              house any longer, and if you don’t want to put up with the hassle
              and time-consuming expense of selling your property the
              traditional way, let us know about the property you’d like to be
              rid of and sell your house fast for cash. Talk to someone in our
              office before submitting your property information by{" "}
              <strong>calling us today at (225) 772-2747</strong>
            </p>
            <p className="text-[18px] my-6  leading-relaxed text-gray-400 font-primary">
              <i>
                <strong>We buy houses in Baton Rouge, LOUISIANA 70810</strong>{" "}
                and all surrounding areas in LOUISIANA. If you need to sell your
                house fast in LOUISIANA, connect with us… we’d love to make you
                a fair no-obligation no-hassle offer. Take it or leave it.
                You’ve got nothing to lose 🙂
              </i>
            </p>
            <div>
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
          </div>

          <div className="py-3">
            <Listing />
            <Testimonials />

            <CashOffer
              title="Get Your Fair Cash Offer: Start Below!"
              description="We buy houses in ANY CONDITION in LOUISIANA. There are no commissions or fees and no obligation whatsoever. Start below by giving us a bit of information about your property or call (225) 772-2747..."
              containerClass="w-full mx-auto bg-gray-100 my-6 p-6 md:p-4 border border-gray-300 shadow-md font-primary"
              titleClass="text-lg md:text-[21px] font-bold mb-2"
              descriptionClass="text-black mb-4 w-full"
              inputClass="w-full border border-gray-300 bg-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              buttonClass="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300"
            />
            <RecentPost />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;