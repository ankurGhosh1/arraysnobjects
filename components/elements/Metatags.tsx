import React from "react";
import Head from "next/head";

interface IProps {
  title: string;
  description: string;
  url?: string;
  keywords?: string;
  image?: string;
}

function Metatags(props: IProps) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="robots" content="index,follow" />
      <meta property="og:site_name" content="ArraysnObjects" />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" itemProp="image" content={props.image} />
      <meta property="og:image" itemProp="image" content={props.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:image" content={props.image} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.image} />
      <meta name="twitter:site" content="@theedisonos" />
      <meta name="twitter:creator" content="@theedisonos" />
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
    </Head>
  );
}

export default Metatags;
