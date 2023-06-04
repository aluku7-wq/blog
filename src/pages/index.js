import Hero from "@/components/hero/Hero";
import Topics from "@/components/topics/Topics";
import Contacts from "@/components/contact/Contacts";

import { useContext } from "react";
import { Blogcontext } from "@/components/context/Context";
import Head from "next/head";

export default function Home() {
  const globalstate = useContext(Blogcontext);
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="alukublog homepage" />
        <meta name="author" content="Aluku Godrick Epale" />
        <meta
          name="keywords"
          content="technology,fashion,electronics,sports"
        />{" "}
        <link rel="canonical" href="https://alukublog.com" />
        <title>alukublog homepage</title>
      </Head>
      <Hero />
      <Topics />
      <Contacts />
    </div>
  );
}
