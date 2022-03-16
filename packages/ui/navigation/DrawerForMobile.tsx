import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { IoReturnDownBack } from "react-icons/io5";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { ImBlog } from "react-icons/im";

import { scrollToTop } from "../../utils/scroller";
import classes from "./DrawerForMobile.module.css";

export const DrawerForMobile = ({ open, toggleDrawerHandler }) => {
  const auth = true;
  const router = useRouter();
  const pathname = router.pathname;
  const isActive = (path) => {
    if (pathname === path)
      return {
        backgroundColor: "#7E9582",
        color: "white",
        fontWeight: "bold",
        padding: "20px",
      };
    else
      return {
        backgroundColor: "transparent",
        color: "#7E9582",
        padding: "20px",
      };
  };

  const sideList = () => (
    <Box
      onClick={toggleDrawerHandler}
      onKeyDown={toggleDrawerHandler}
      style={{ height: "100vh", width: "250px" }}
    >
      <IconButton className={`${classes.listItem} pointer`}>
        <IoReturnDownBack />
      </IconButton>
      <Divider />
      <List>
        <Box className={`${classes.listItem}`}>
          <Link passHref href="/">
            <ListItem
              onClick={scrollToTop}
              className={`${classes.listItem} pointer`}
              style={isActive("/")}
            >
              <Typography>Home</Typography> &nbsp;&nbsp;
              <FaHome className={classes.reactIcons} />
            </ListItem>
          </Link>
        </Box>
        <Link passHref href="/about-us">
          <ListItem
            className={`${classes.listItem} pointer`}
            style={isActive("/about-us")}
          >
            <Typography>About Us</Typography>&nbsp;&nbsp;
            <BsInfoCircle className={classes.reactIcons} />
          </ListItem>
        </Link>
        <Link passHref href="/products">
          <ListItem
            onClick={scrollToTop}
            className={`${classes.listItem} pointer`}
            style={isActive("/products")}
          >
            <Typography>Products</Typography>&nbsp;&nbsp;
            <MdOutlineLocalGroceryStore className={classes.reactIcons} />
          </ListItem>
        </Link>
        <Link passHref href="/blogs">
          <ListItem
            onClick={scrollToTop}
            className={`${classes.listItem} pointer`}
            style={isActive("/blogs")}
          >
            <Typography>Blogs</Typography>&nbsp;&nbsp;
            <ImBlog className={classes.reactIcons} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      {auth ? (
        <List>
          <ListItem
            className={`${classes.listItem} pointer`}
            onClick={() => {
              scrollToTop();
              router.push("/");
            }}
          >
            <Typography>Sign Out</Typography>&nbsp;&nbsp;
            <AiOutlineLogout className={classes.reactIcons} />
          </ListItem>
        </List>
      ) : (
        <List>
          <Link passHref href="/signin">
            <Box
              onClick={() => {
                scrollToTop();
                router.push("/signin");
              }}
            >
              <ListItem
                onClick={scrollToTop}
                className={`${classes.listItem} pointer`}
                style={isActive("/signin")}
              >
                <Typography>Login</Typography>&nbsp;&nbsp;
                <AiOutlineLogin className={classes.reactIcons} />
              </ListItem>
            </Box>
          </Link>
        </List>
      )}
      <Divider />
    </Box>
  );
  return (
    <Drawer open={open} onClose={toggleDrawerHandler} anchor="right">
      {sideList()}
    </Drawer>
  );
};
