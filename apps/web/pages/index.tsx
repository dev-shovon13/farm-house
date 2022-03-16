import Head from "next/head";
import { GreenButton, ResponsiveMenu } from "ui";
import { scrollToTop } from "utils";
import HomeLayout from "../layouts/HomeLayout";

export default function Web() {
  return (
    <>
    <HomeLayout>
      <Head>
        <title>Farm House</title>
      </Head>
      <ResponsiveMenu />
    </HomeLayout>
    </>
  );
}
