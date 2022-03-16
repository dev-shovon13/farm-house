import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import { scrollToTop } from "../../utils/scroller";

export const MenuForSmallScreen = ({ openDrawerHandler, ...props }) => {
  const router = useRouter();
  const forBelow430 = useMediaQuery("(max-width:430px)");
  const [auth, setAuth] = useState(false);
  const pathname = router.pathname;
  return (
    <Box>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#fff", color: "#444" }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Grid
              item
              xs={3}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Box onClick={scrollToTop} sx={{ cursor: "pointer" }}>
                <Link href="/" passHref>
                  <img
                    src="https://i.ibb.co/SNdcNJ9/logo.png"
                    style={{ paddingTop: "5px ", width: "50%" }}
                  />
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "center" }}
              >
                {auth && (
                  <Box>
                    <Typography>
                      Hi, <span style={{ color: "red" }}>user</span>
                    </Typography>
                  </Box>
                )}
              </Grid>
            </Grid>
            <Grid
              item
              xs={3}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <IconButton onClick={openDrawerHandler}>
                <FiMenu
                  style={{ color: "#00756A", fontSize: "24px", width: "30px" }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
