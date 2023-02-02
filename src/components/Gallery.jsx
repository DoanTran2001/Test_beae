import React from "react";
import Gallery1 from "../assets/gallery1.png";
import Gallery2 from "../assets/gallery2.png";
import Gallery3 from "../assets/gallery3.png";
import Gallery4 from "../assets/gallery4.png";
import Gallery5 from "../assets/gallery5.png";
import Gallery6 from "../assets/gallery6.png";
import Gallery7 from "../assets/gallery7.png";

function Gallery() {
  return (
    <div className="">
      <h2 className="font-bold text-[45px] text-center uppercase text-[#121212] mb-10">
        Packer pen Gallery
      </h2>
      <div className="md:flex items-center gap-4 hidden">
        <div className="gap-3 flex-col flex">
          <div className="">
            <img src={Gallery1} className="w-full object-cover" alt="" />
          </div>
          <div className="">
            <img src={Gallery2} className="w-full object-cover" alt="" />
          </div>
        </div>
        <div className="gap-3 flex-col flex">
          <div className="">
            <img src={Gallery3} className="w-full object-cover" alt="" />
          </div>
          <div className="">
            <img src={Gallery4} className="w-full object-cover" alt="" />
          </div>
        </div>
        <div className="gap-3 flex-col flex">
          <div className="">
            <img src={Gallery5} className="w-full object-cover" alt="" />
          </div>
          <div className="">
            <img src={Gallery6} className="w-full object-cover" alt="" />
          </div>
          <div className="">
            <img src={Gallery7} className="w-full object-cover" alt="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-[7] gap-[9px] md:hidden">
        <div className="">
          <img src={Gallery1} className="w-full h-full object-cover rounded-xl" alt="" />
        </div>
        <div className="">
          <img src={Gallery2} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="row-start-1 row-end-3 col-start-2 col-end-3">
          <img src={Gallery3} className="w-full h-full object-cover rounded-xl" alt="" />
        </div>
        <div className="col-start-1 col-end-3 row-start-3 row-end-5">
          <img src={Gallery4} className="w-full object-cover rounded-xl" alt="" />
        </div>
        <div className="col-start-1 col-end-3 row-start-5 row-end-7">
          <img src={Gallery5} className="w-full object-cover rounded-xl" alt="" />
        </div>
        <div className="">
          <img src={Gallery6} className="w-full h-full object-cover rounded-xl" alt="" />
        </div>
        <div className="">
          <img src={Gallery7} className="w-full h-full object-cover rounded-xl" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
