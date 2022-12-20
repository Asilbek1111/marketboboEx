import React, { useEffect, useState } from "react";
// import  Sidebar from './sidebar'
// import  Navbar from './navbar'
import TopNav from "./topNav";
import MiddleNav from "./middleNav";
import TopNavRes from "./responsiveTopNav";

const Layout = ({ children }: any) => {
  return (
    <>
      <TopNav />
      <MiddleNav />
      
      {children}
    </>
  );
};

export default Layout;
