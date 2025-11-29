import React from "react";

const Testimonial = ({ source, title, description, by }) => {
  return (
    <div
      className="relative w-[420px] rounded-2xl p-6 shadow-md bg-[#E9F7FA] bg-no-repeat"
      style={{
        backgroundImage: "url('/src/assets/strap.png')"
      }}
    >
      <img
        src={source}
        className="w-20 h-20 object-contain absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3"
        alt=""
      />

    <div className="pl-14">
      <h2 className="text-xl font-bold">{title}</h2>

      <img src="../assets/stars.png" className="my-2" alt="" />

      <p className="text-gray-700 leading-relaxed mb-3">
        {description}
      </p>

    </div>

      <p className="font-semibold text-gray-900">{by}</p>
    </div>
  );
};

export default Testimonial;
