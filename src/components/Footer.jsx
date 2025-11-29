import React from "react";

const Footer = () => {
  return (
    <>
    
    <div className="w-full bg-white border-t py-10 px-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="col-span-2 space-y-4 border-r pr-10">
          <img src="../assets/hdc.png" alt="Logo" className="w-24" />

          <p className="text-[#5C5C5C] leading-relaxed">
            <span className="font-semibold">Address:</span> 7823 Red Oak Trail,
            Austin, TX, 78745, United States
          </p>

          <p className="text-[#5C5C5C]">
            <span className="font-semibold">Phone:</span> (512) 555-2376
          </p>

          <p className="text-[#5C5C5C]">
            <span className="font-semibold">Email:</span> Ereforce@outlook.com
          </p>
        </div>

        <div className="col-span-3 grid grid-cols-5 gap-6">
          <div>
            <h3 className="font-bold text-[#1A69BE] mb-3">Our Products</h3>
            <ul className="space-y-2 text-[#5C5C5C]">
              <li>Vita Renew</li>
              <li>Testobites</li>
              <li>Audizen</li>
              <li>Nerve Flow</li>
              <li>Uro flow</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-[#5C5C5C] mt-7">
              <li>Vita Renew</li>
              <li>Testobites</li>
              <li>Audizen</li>
              <li>Nerve Flow</li>
              <li>Memof</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-[#5C5C5C] mt-7">
              <li>Vita Renew</li>
              <li>Testobites</li>
              <li>Audizen</li>
              <li>Nerve Flow</li>
              <li>Derma care</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-[#5C5C5C] mt-7">
              <li>Vita Renew</li>
              <li>Testobites</li>
              <li>Audizen</li>
              <li>Nerve Flow</li>
              <li>TestoZen</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-[#5C5C5C] mt-7">
              <li>Vita Renew</li>
              <li>Testobites</li>
              <li>Audizen</li>
              <li>Nerve Flow</li>
              <li>True Fem</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full bg-[#EDEDED] py-10 px-4 text-center space-y-6">

  <p className="text-[#5C5C5C] text-sm max-w-4xl mx-auto leading-relaxed">
    These statements have not been evaluated by the Food and Drug Administration.
    These products are not intended to diagnose, treat, cure or prevent any disease.
    Individual results may vary.
  </p>

    <div className="flex justify-center">
  <img src="../assets/cards.png" className="w-60" />

    </div>

  <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto text-[#5C5C5C] pt-6 border-t border-gray-300">

    <p className="text-sm">
      © 2025, Health Desk Clinic. All Rights Reserved.
    </p>

    <div className="flex gap-6 mt-3 md:mt-0 text-sm">
      <a href="#" className="">Terms And Conditions</a>
      <span>|</span>
      <a href="#" className="">Privacy Policy</a>
      <span>|</span>
      <a href="#" className="">Contact Us</a>
    </div>
  </div>

</div>

    </>
  );
};

export default Footer;
