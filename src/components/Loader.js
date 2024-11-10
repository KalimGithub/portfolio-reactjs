import React from "react";
import { ThreeDots } from "react-loader-spinner";
function Loader() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-primary ">
      {/* <div className="flex justify-center items-center">
        <div className="spin-text first text-5xl text-secondary">S</div>
        <div className="spin-text second text-5xl text-white">K</div>
        <div className="spin-text third text-5xl text-tertiary">G</div>
      </div> */}

      <ThreeDots
        visible={true}
        height="150"
        width="100"
        color="orange"
        radius="20"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
