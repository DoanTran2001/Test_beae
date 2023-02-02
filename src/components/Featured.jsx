import React, { useEffect, useRef, useState } from "react";
import { tabs } from "../utils/constants";
import classNames from "classnames";
import TabContent from "./TabContent";

function Featured() {
  const [activeTab, setActiveTab] = useState(1);
  const refLabel = useRef(null)
  const handleClickTab = (id) => {
    setActiveTab(id);
  };
  useEffect(() => {
    console.log(refLabel.current.click());
    refLabel.current.click()
  }, [])
  return (
    <div className="mb-[100px]">
      <div className="tabs">
        <div className="md:flex-row flex-col flex w-full flex-wrap tabs">
          {tabs.map((tab, index) => (
            <>
            <label
              ref={index === 0 ? refLabel : null}
              htmlFor={tab.id}
              className={classNames(
                "w-full md:w-1/4 rounded-tl-[25px] rounded-tr-[25px] h-[120px] md:h-[200px] bg-white",
                {
                  "bg-[#f4f4f4]": tab.id === activeTab,
                }
              )}
              onClick={() => handleClickTab(tab.id)}
            >
              <div className={classNames("p-[10px] md:pt-8 md:pl-[34px] md:pr-[31px] md:pb-7 w-full h-full mb-[10px]", {
                'pb-[30px]': tab.id === activeTab
              })}>
                <div className="bg-white shadow-[0px_0px_27px_rgba(0,0,0,0.05)] rounded-[10px] w-full h-full flex items-center justify-center">
                  <div className="flex items-center gap-5 md:flex-col">
                    <div className="md:w-[58px] md:h-[58px] w-[50px] h-[50px] flex items-center justify-center bg-[#F4F4F4] rounded-full mb-[4px]">
                      <img src={tab.image} className="w-7 h-7" alt="" />
                    </div>
                    <p className="font-bold text-[#181818] text-[21px]">
                      {tab.name}
                    </p>
                  </div>
                </div>
              </div>
            </label>
            <TabContent id={tab.id} dataId={index}/>
            </>
          ))}
        </div>
        
      </div>
      
      {/* <div className="">dot</div> */}
    </div>
  );
}



export default Featured;
