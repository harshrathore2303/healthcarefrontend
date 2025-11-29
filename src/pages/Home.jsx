import React from "react";
import Button from "../custom/Button";
import Card from "../custom/Card";
import BuyCard from "../custom/BuyCard";
import Brand from "../custom/Brand";
import Detail from "../custom/Detail";
import Testimonial from "../custom/Testimonial";

const data = [
  {
    title: "Weight Loss",
    description:
      "Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you",
    source: "/src/assets/weight.png",
  },
  {
    title: "Nerve Pain",
    description:
      "Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function",
    source: "/src/assets/nerve.png",
  },
  {
    title: "Skin Care",
    description:
      "Explore premium skincare products that nourish, protect, and enhance your natural glow",
    source: "/src/assets/weight.png",
  },
  {
    title: "Men’s Health",
    description:
      "Discover men’s health products designed to boost energy, strength, and overall well-being.",
    source: "/src/assets/medical.png",
  },
  {
    title: "Women’s Health",
    description:
      "Explore women’s health products that support hormonal balance, vitality, and overall wellness",
    source: "/src/assets/doc.png",
  },
];

const category = ["Results-Driven", "All-Natural", "Non-GMO", "Cruelty-Free"];
const medicine = [
  { title: "Dent Pure", source: "/src/assets/dent.png" },
  { title: "True Fem", source: "/src/assets/truefem.png" },
  { title: "Vita Renew", source: "/src/assets/vita.png" },
  { title: "ProstaZen", source: "/src/assets/pros.png" },
  { title: "Nerve Freedom", source: "/src/assets/nervemed.png" },
];

const brands = [
  {
    text: "All Natural",
    source: "/src/assets/flow.png",
  },
  {
    text: "Cruelty-Free",
    source: "/src/assets/rabbit.png",
  },
  {
    text: "Money-back Guarantee",
    source: "/src/assets/days.png",
  },
  {
    text: "Giving back",
    source: "/src/assets/hand.png",
  },
  {
    text: "Non-GMO",
    source: "/src/assets/dna.png",
  },
];

const dataForDetail = [
  {
    title: "100% Natural Components",
    subtitle: "Nature-Powered Wellness You Can Trust",
    description:
      "We harness the goodness of nature to create supplements enriched with premium, research-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring every product you choose is both effective and trustworthy.",
    source: "/src/assets/fruits.jpg",
  },
  {
    title: "100% Natural Components",
    subtitle: "Nature-Powered Wellness You Can Trust",
    description:
      "We harness the goodness of nature to create supplements enriched with premium, research-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring every product you choose is both effective and trustworthy.",
    source: "/src/assets/lab.jpg",
  },
  {
    title: "100% Natural Components",
    subtitle: "Nature-Powered Wellness You Can Trust",
    description:
      "We harness the goodness of nature to create supplements enriched with premium, research-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring every product you choose is both effective and trustworthy.",
    source: "/src/assets/manu.jpg",
  },
];

const testimonials = [
  {
    title: "TestoBites",
    description:
      "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.",
    by: "- Ryan R.",
    source: "/src/assets/testo.png",
  },
  {
    title: "Vita RenewNerve Freedom",
    description:
      "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.",
    by: "- Jamie Fields",
    source: "/src/assets/dc.png",
  },
  {
    title: "Nerve Freedom",
    description:
      "I have been an RN for 20 years and love helping people find solutions to their health issues.NF Product is the best natural product for neuropathy pain hands down.",
    by: "- Anonymous",
    source: "/src/assets/fd.png",
  },
];

const Home = () => {
  return (
    <>
      <div className="px-36 py-8">
        <div className="flex justify-center items-center  bg-[#f5f5f7]">
          <div className="h-full flex flex-col justify-center w-3xl">
            <h1 className="text-4xl font-bold">Health Desk Clinic: </h1>
            <h1 className="text-4xl font-bold">All Natural Supplements </h1>
            <p>
              Health Care Desk is the premier choice for those seeking wellness
              through wholesome, superfood-enriched formulas that actually work.
              Our all-natural, organic health supplements are designed to give
              your body what it needs to thrive and optimize your health each
              day!
            </p>
            <Button className="w-40 text-white rounded-full text-2xl font-semibold py-2 ml-4 mt-4 bg-[#1A69BE] hover:border hover:bg-white hover:text-[#1A69BE]">
              Shop Now
            </Button>
          </div>
          <img src="/src/assets/doctor.png" alt="" />
        </div>

        <div className="flex flex-col items-center overflow-hidden my-16">
          <h1 className="font-bold text-4xl text-center leading-tight my-8">
            Nutrition Solutions <br />
            for Your Complete Well-Being
          </h1>

          <div className="w-full overflow-hidden">
            <div className="flex gap-8 animate-infinite-scroll">
              {data.map((item, _) => (
                <Card key={_} {...item} />
              ))}
              {data.map((item, _) => (
                <Card key={"dup-" + _} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-4xl leading-tight my-8">
            Our Best Sellers
          </h1>
          <p className="font text-xl">
            Formulated with science-backed all-natural ingredients, our unique
            supplements support holistic health, healing & wellness.
          </p>
          <div className="flex font-bold space-x-2 text-xl my-4">
            {/* {category.map((item, _) => (<p className="">{item} | </p>))} */}
            <p className="">{category[0]} | </p>
            <p className="">{category[1]} | </p>
            <p className="">{category[2]} | </p>
            <p className="">{category[3]} </p>
          </div>
          <div className="grid grid-flow-col">
            {medicine.map((item, _) => (
              <BuyCard key={_} {...item} />
            ))}
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-center w-full bg-cover bg-center bg-no-repeat bg-amber-600 p-14 my-10"
          style={{
            backgroundImage: "url('/src/assets/bg.jpg')",
          }}
        >
          <div className="mb-7">
            <h1 className="text-4xl font-bold">A Brand That You Can Trust</h1>
            <p>
              Our results-driven supplements are made with premium & safe
              ingredients
            </p>
          </div>
          <div className="grid grid-flow-col gap-5 overflow-x-auto">
            {brands.map((item, _) => (
              <Brand key={_} {...item} />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-center">
            Health Care Desk <br />
            The Future Of Smart Health
          </h1>
          <p className="font-light text-xl text-wrap">
            At Health Care Desk, we are committed to producing supplements that
            harness the power of all-natural superfoods. Our products help
            support the body's natural processes, improving our customers'
            quality of life.
          </p>
        </div>

        {dataForDetail.map((item, _) => (
          <Detail key={_} index={_} {...item} />
        ))}
      </div>
      <div className="flex flex-col items-center w-full">
        <div
          style={{ backgroundImage: "url('/src/assets/bg2.jpg')" }}
          className="w-full bg-center bg-cover bg-no-repeat p-14"
        >
          <div className="text-white mb-20">
            <h1 className="text-4xl font-bold text-center">
              Our Charitable Initiatives <br />
              Health Care Desk Gives Back
            </h1>

            <p className="font-medium text-xl">
              At Health Care Desk, a portion of our profits are committed to
              supporting charities and global health research initiatives.
            </p>
          </div>

          <div className="grid grid-cols-5">
            <img src="/src/assets/pcf.png" alt="" />
            <img src="/src/assets/at.png" alt="" />
            <img src="/src/assets/us.png" alt="" />
            <img src="/src/assets/ad.png" alt="" />
            <img src="/src/assets/aha.png" alt="" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center my-28">
          Verified Customer Testimonials
        </h1>
        <div className="grid grid-cols-3 gap-16">
          {testimonials.map((item, _) => (
            <Testimonial {...item} key={_} />
          ))}
        </div>

        <div className="flex flex-col items-center justify-between my-7">
          <img src="/src/assets/hdc.png" className="w-60 h-48" />
          <Button className="border border-[#1A69BE] text-[#1A69BE] p-2 text-xl m-2 hover:bg-[#1A69BE] hover:text-white">
            Follow Us
          </Button>
          <img src="/src/assets/g.png" className="w-60 h-10  mx-auto" />
        </div>

        <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold">Have a Question?</h3>
            <p className="text-xl font-medium">
              Check out our FAQs where we answer the most commonly asked
              questions
            </p>
            <Button className="border border-[#1A69BE] text-[#1A69BE] p-2 text-xl m-2 hover:bg-[#1A69BE] hover:text-white">
              Read FAQs
            </Button>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Connect With Us</h3>
            <p className="text-xl font-medium">
              Enjoy free shipping for all orders.
            </p>
            <span className="text-xl font-bold">1-800-822-7777</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold">We're Social</h3>
            <p className="text-xl font-medium">Like us, love us, follow us!</p>
          </div>
        </div>

        <div className="w-full bg-[#1A69BE] py-6 px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-white text-2xl font-bold">
                Let's Grow Together
              </h2>
              <p className="text-white text-sm mt-1">
                We'll keep it simple. Only the news and updates you need.
              </p>
            </div>

            <div className="flex border-2 rounded border-white">
              <input
                type="email"
                placeholder="Please Enter Your Email"
                className="px-4 py-2 w-64 rounded-l-md outline-none border-none"
              />
              <button className="px-6 py-2 bg-white text-black font-semibold rounded-r-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
