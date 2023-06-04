import React from "react";
import { Container } from "../../../components/styles/Programming.styled";
import { laptops } from "@/components/data/ProgLaptops";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Programming = () => {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="the best laptops for pragramming in 2023"
        />
        <meta name="author" content="Aluku Godrick Epale" />
        <meta
          name="keywords"
          content={`laptops,computers, budget computers, ${laptops.map(
            (item) => item.name
          )}`}
        />
        <link
          rel="canonical"
          href="https://alukublog.com/blogs/best-laptops-for-programming"
        />
        <title>The best laptops for programming 2023</title>
      </Head>
      <div className="wrapper">
        <h1>The best laptops for programming 2023</h1>
        <h3>
          By <span>Aluku Godrick Epale</span>
        </h3>
        <p>
          We have created a highly researched list of the best laptops for your
          programming journey in 2023. In our list you will find brilliant
          budget laptops for programming as well as expensive ones and
          we&apos;ve highlighted those choices throughout the guide.
        </p>
        <div className="grid">
          {laptops.map((item, index) => {
            return (
              <div className="card" key={index}>
                <h3>
                  {index + 1} . {item.name}
                </h3>
                <Image
                  src={`/programming-laptops/${item.image}`}
                  width="200"
                  height={"200"}
                  alt={item.name}
                />
                <div className="specs">
                  <h4>specs</h4>
                  <div className="specs_grid">
                    {item.specifications.map((spec_item, spec_index) => {
                      return (
                        <div className="specs_card" key={spec_index}>
                          <p>
                            <span>cpu</span>: {spec_item.cpu}
                          </p>
                          <p>
                            <span>graphics</span>: {spec_item.graphics}
                          </p>
                          <p>
                            <span>ram</span>: {spec_item.ram}
                          </p>
                          <p>
                            <span>screen</span>: {spec_item.screen}
                          </p>
                          <p>
                            <span>storage</span>: {spec_item.storage}
                          </p>
                        </div>
                      );
                    })}
                    <div className="deals">
                      {item.deals.map((deal_item, deal_index) => {
                        return (
                          <div className="deal_card" key={deal_index}>
                            <Link href={deal_item.link}>get it on amazon</Link>
                          </div>
                        );
                      })}
                    </div>
                    <div className="reason">
                      <h3>why choose {item.name}?</h3>
                      <div className="text">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Programming;
