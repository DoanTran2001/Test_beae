import React from "react";
import Pen111 from '../assets/pen-img111.png'

function CardItem(props) {
  const { name, price, price_before_sale} = props
  return (
    <div className="rounded-[18px] bg-white">
      <div className="md:pt-[10px] md:px-[22px] md:pb-[34px] pt-2 px-3 mb-[2px]">
        <img src={Pen111} alt="" className="mb-[14px]" />
        <p className="font-medium text-[13px] md:text-sm text-center text-black mb-[10px]">
          { name }
        </p>
        <div className="flex items-center justify-center gap-[11px]">
          <span className="font-semibold md:text-base text-sm text-black">
            {price}
          </span>
          <span className="font-normal text-sm line-through">{price_before_sale}</span>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
