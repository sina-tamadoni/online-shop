import React from "react";
import disabledNet from "../assets/wireless-error-svgrepo-com.png";

function ErrorPage() {
  return (
    <div className="w-full h-full flex justify-center items-center mt-10">
      <img src={disabledNet} alt="" className="w-[300px] h-[300px]" />
    </div>
  );
}

export default ErrorPage;
