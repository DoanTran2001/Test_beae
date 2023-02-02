import React from "react";
import Featured from "./components/Featured";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="md:pl-[98px] md:pr-[142px] md:pt-[108px] md:pb-[90px]">
        <Featured />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
