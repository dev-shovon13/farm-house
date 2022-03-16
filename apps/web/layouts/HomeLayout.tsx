import React from "react";
import {ResponsiveMenu} from "ui";

const HomeLayout = ({ children }) => {
  return (
    <>
      <ResponsiveMenu />
      {children}
    </>
  );
};

export default HomeLayout;
