import { useState } from "react";

import { DrawerForMobile } from "./DrawerForMobile";
import { MenuForSmallScreen } from "./MenuForSmallScreen";

export const MobileMenu = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(false);
  };
  const openDrawer = () => {
    setDrawerOpen(true);
  };
  return (
    <>
      <MenuForSmallScreen openDrawerHandler={openDrawer} />
      <DrawerForMobile open={isDrawerOpen} toggleDrawerHandler={toggleDrawer} />
    </>
  );
};