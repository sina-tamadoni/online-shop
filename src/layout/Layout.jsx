import React from "react";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <div className="text-center py-7 border-t border-stone-300 mx-10 mt-10 flex justify-center items-center font-sans font-semibold">
      © 2024 Your Company, Inc. All rights reserved.
      </div>
    </>
  );
}

export default Layout;
