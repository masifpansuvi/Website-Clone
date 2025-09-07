import Header from "../../components/Header/Header"
import Listing from "../../components/Listing/Listing";
import Testimonials from "../../components/testimonials/Testimonials";
import CashOffer from "../../components/CashOffer/CashOffer";
import RecentPost from "../../components/RecentPost/RecentPost";
import step1 from "../../assets/works_img/step1.png";
import step2 from "../../assets/works_img/step2.png";
import step3 from "../../assets/works_img/step3.png";
import step4 from "../../assets/works_img/step4.png";

export default function ProcessPage() {
  return (
    <>
    <Header />
    <section className="px-4 md:px-[12%] py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left sidebar*/}
        <div className="md:col-span-2 font-primary">
          
          <h2 className="text-[28px] md:text-[39px] tracking-tight font-bold mb-10 leading-[36px] md:leading-[45px] text-[#212529]">
            How The Process Works
          </h2>

          {/* Steps */}
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex gap-3 my-8">
              <img src={step1} alt="step1" />
              <p className="text-[#212529] text-[16px] md:text-[27px] font-bold leading-6">
                Tell us about your property –{" "}
                <span className="text-orange-600 font-semibold">
                  Quick, Easy & Free!
                </span>
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex gap-3 my-8">
              <img src={step2} alt="step2" />
              <h4 className="text-[#212529] text-[16px] md:text-[27px] leading-6">
                If it meets our buying criteria, we’ll contact you to set up a
                quick appointment.
              </h4>
            </div>

            {/* Step 3 */}
            <div className="flex gap-3 my-8">
              <img src={step3} alt="step 3" />
              <h4 className="text-[#212529] text-[16px] md:text-[27px] leading-6">
                We’ll present you with a{" "}
                <span className="text-orange-600 font-semibold">
                  fair written, no-obligation offer.
                </span>
              </h4>
            </div>

            {/* Step 4 */}
            <div className="flex gap-3 my-8">
              <img src={step4} alt="step 4" />
              <h4 className="text-[#212529] text-[16px] md:text-[27px] leading-6">
                We close at a local reputable title company, cash in your hands
                in as little as 7 days.
              </h4>
            </div>
          </div>
          <hr  className="text-gray-200 mb-6"/>
          {/* Timeline Paragraph */}
          <p className="mt-8 text-gray-700 leading-7 text-[18px]">
            <span className="font-bold">Timeframe:</span> Once we get your info,
            we’re usually able to make you a fair all-cash offer within 24 hours.
            From there, we can close as quickly as 7 days… or on your schedule
            (sometimes we can have a check in your hand the very same day!).
          </p>

          {/* Selling Section */}
          <div className="mt-10">
            <h2 className="text-[24px] md:text-[36px] font-bold mb-4 text-[#212529]">
              Selling Your House Can Be A Quick And Simple Process
            </h2>
            <p className="text-gray-700 text-[18px] leading-7 mb-4">
              Red Stick Property Solutions LLC buys houses in and around Baton
              Rouge (and other areas too!). <strong>We’re not listing your house…</strong>
              we’re actually the ones buying your house. Because <strong>we pay cash</strong>,
              we’re able to close quickly… or on your schedule. Like we’ve mentioned, when you work with us there are no fees…
              like there are when you list your house with an agent. What this
              means to you is you don’t have to worry about extra costs coming
              out of your pocket to sell your house fast, or even getting your
              house ready for a sale (we’ll buy your house as-is).
            </p>
            <p className="text-gray-700 text-[18px] leading-7 mb-6">
              Don’t worry about repairing or cleaning up your property. We’ll
              buy your house in as-is condition… no matter how ugly or pretty it
              is… no matter the location.
            </p>
            <h3 className="font-bold md:text-3xl text-center my-4" >See what we can offer you for your house…</h3>
            {/* Button */}
            <button className="w-full md:w-[80%] container md:mx-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md shadow-md transition duration-300">
              See what we can offer you for your house…
            </button>
          </div>
        </div>

        {/* ---------------- Right Components ---------------- */}
        <div className="space-y-6">
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
}
