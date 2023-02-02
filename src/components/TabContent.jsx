import React, { useState } from "react";
import { tabContent } from "../utils/constants";
import CardItem from "./CardItem";

function TabContent(props) {
  const [state, setState] = useState({});

  const onChange = (e) => {
    const inputId = parseInt(e.target.dataset.id, 10);
    console.log(inputId);
    tabContent.map((item, idx) => {
      if (inputId === idx) {
        setState({
          desc: item.desc,
        });
      }
    });
  };
  return (
    <div className="tab-content">
      <input
        id={props.id}
        data-id={props.dataId}
        type="radio"
        name="tab"
        onChange={onChange}
      />
      <div data-id={props.dataId} className="tab">
        <div className="bg-[#F4F4F4] rounded-bl-[25px] rounded-br-[25px] mb-[50px]">
          <div className="md:py-10 md:px-[50px] py-[11px] px-[30px]">
            <div className="flex md:flex-row flex-col gap-[38px]">
              <div className="md:w-1/3 w-full">
                <p className="font-normal text-base leading-7 md:text-[21px] md:leading-8 text-[#000000] md:mb-5 mb-[9px]">
                  {state.desc}
                </p>
                <ul className="font-semibold flex md:flex-col md:text-lg flex-wrap gap-x-5 md:gap-0 text-[13px] leading-8 md:leading-10 mb-[35px]">
                  <li className="">MECHANICAL PENCILS</li>
                  <li>ARCHITECT'S CHOICE</li>
                  <li>EXECUTIVE PENCILS</li>
                  <li>ENGRAVABLE PENCILS</li>
                </ul>
                <button className="bg-[#F4B840] rounded-[5px] w-[120px] h-[50px] text-sm font-bold uppercase text-white">
                  Shop All
                </button>
              </div>
              <div className="md:w-8/12 w-full">
                <div className="rounded-[18px] w-full h-[90px] md:h-[80px] border-[3px] border-[#ffffff] flex mb-5">
                  <div className="w-[200px] md:bg-white h-full py-[13px] pl-6 pr-4 md:pl-10 md:pr-7">
                    <div className="font-bold text-4xl text-[#F4B840]">
                      <p className="flex items-center">
                        25% <span className="text-lg md:text-4xl">off</span>
                      </p>
                    </div>
                  </div>
                  <div className="font-light md:text-[25px] text-base text-[#000000] flex items-center ml-6">
                    Offer Applicable on All Our Pencils
                  </div>
                </div>
                <div className="flex gap-5 overflow-x-auto">
                  <CardItem
                    name="Aero Mechanical Pencil"
                    price="$99.00"
                    price_before_sale="$125.00"
                  />
                  <CardItem
                    name="Castell Mechanical Pencil"
                    price="$75.00"
                    price_before_sale="$99.00"
                  />
                  <CardItem
                    name="Architect Choice Pencil"
                    price="$45.00"
                    price_before_sale="$70.00"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default TabContent;
