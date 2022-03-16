import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import { scrollToTop } from "utils";

export const Menu = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const isActive = (path: string) => {
    if (pathname === path)
      return {
        borderBottom: "2px solid #00756A",
        borderRadius: "0px",
        color: "#444",
        paddingBottom: "1%",
        margin: "0 30px",
        fontWeight: "bold",
      };
    else
      return {
        borderBottom: "2px solid transparent",
        borderRadius: "0px",
        color: "#222",
        fontWeight: "light",
        paddingBottom: "1%",
        margin: "0 30px",
      };
  };

  // const forBelow900 = useMediaQuery("(max-width:900px)");

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: "#fff", color: "#444", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" passHref>
            <img
              onClick={scrollToTop}
              src="https://i.ibb.co/SNdcNJ9/logo.png"
              style={{
                marginRight: "10px",
                padding: "7px 0",
                // width: forBelow900 ? "55px" : "85px",
              }}
              alt=""
            />
          </Link>

          <Box>
            <Link passHref href="/">
              <Button
                className="color"
                style={isActive("/")}
                onClick={scrollToTop}
              >
                Home
              </Button>
            </Link>
            <Link passHref href="/about-us">
              <Button
                className="color"
                style={isActive("/about-us")}
                onClick={scrollToTop}
              >
                About us
              </Button>
            </Link>
            <Link passHref href="/products">
              <Button
                className="color"
                style={isActive("/products")}
                onClick={scrollToTop}
              >
                Products
              </Button>
            </Link>
            <Link passHref href="/blogs">
              <Button
                className="color"
                style={isActive("/blogs")}
                onClick={scrollToTop}
              >
                Blogs
              </Button>
            </Link>
          </Box>

          <Box>
            <Link href="/signin" passHref>
              <Button onClick={scrollToTop} variant="contained" color="primary">
                <FiLogIn style={{ marginBottom: "2px", marginRight: "5px" }} />
                Login
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
