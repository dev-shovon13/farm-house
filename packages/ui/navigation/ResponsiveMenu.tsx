import { useMediaQuery } from "@mui/material";

import { Menu } from "./Menu";
import { MobileMenu } from "./MobileMenu";

export const ResponsiveMenu = () => {
  const forBelow700 = useMediaQuery("(max-width:730px)");

  return <>{forBelow700 ? <MobileMenu /> : <Menu />}</>;
};