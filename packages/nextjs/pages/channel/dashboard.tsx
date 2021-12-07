import { storage } from "@libraries/firebase";
import { Dashboard } from "@views/dashboard/dashboard";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";

const DashboardPage = () => {
  return (
    <>
      <NextSeo canonical="https://dashboard-epitech-fdb56.web.app/" title="Dashboard - Dashboard" />
      <Dashboard />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const locale = ctx.locale || "fr";
  const text = await fetch(
    await storage.refFromURL(`gs://dashboard-epitech-fdb56.appspot.com/lang/${locale}/index.json`).getDownloadURL()
  );

  return {
    props: { text: await text.json(), locale, projectMenu: true, home: true, login: true }
  };
};

export default DashboardPage;
