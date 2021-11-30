import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../img/favicon.ico";

const Head = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="google-site-verification"
        content="1jmmWqXLbh_oWXtPqZcsuhGpm-Kd66nIaQhi2Uk3QB8"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href={favicon} type="image/x-icon" />
      <title>Portfolio | Pranjal</title>
      <meta name="title" content="Portfolio Website" />
      <meta
        name="description"
        content="A portfolio website made on gatsby showcasing projects and my passion regarding development."
      />
      <meta
        name="keywords"
        content="pranjals pranjals.live portfolio pranjal misra"
      />
    </Helmet>
  );
};

export default Head;
