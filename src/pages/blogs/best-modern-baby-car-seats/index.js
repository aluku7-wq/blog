import React from "react";
import { Container } from "../../../components/styles/best-baby-car-seats/Carsits.styled";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { data } from "../../../components/data/best-modern-baby-car-seats/data";

const index = () => {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="the best modern baby car seats in 2023"
        />
        <meta name="author" content="Aluku Godrick Epale" />
        <meta
          name="keywords"
          content={`baby car seats,car seats, ${data.map((item) => item.name)}`}
        />
        <link
          rel="canonical"
          href="https://alukublog.com/blogs/best-modern-baby-car-seats"
        />
        <title>The best modern baby car seats in 2023</title>
      </Head>
      <div className="body">
        <h1>The best modern baby car seats in 2023</h1>
        <h3>
          By <span>Aluku Godrick Epale</span>
        </h3>
        <h3>Introduction:</h3>
        <p>
          As a parent, ensuring your baby&apos;s safety is a top priority,
          especially when it comes to traveling. A car seat is an essential item
          for parents with newborns or young children. However, with so many
          options available in the market, it can be overwhelming to choose the
          best one for your baby. In this blog post, we have compiled a list of{" "}
          <span>{data.length}</span>
          modern baby car seats that are worth considering. We have also
          included their pros and cons to help you make an informed decision and
          Amazon links for easy purchase.
        </p>
        <div className="grid">
          {data.map((blog, index) => {
            return (
              <div className="card" key={index}>
                <h4>
                  <span className="first">{index + 1}.</span>
                  <span>{blog.name}</span>
                </h4>
                <div className="card_container">
                  <div className="image">
                    <Image
                      src={`/baby-car-seats/${blog.image}`}
                      width="200"
                      height={"200"}
                      alt={blog.name}
                    />
                  </div>
                  <div className="text">
                    <Link href={blog.link}>get on amazon</Link>
                    <h4>pros:</h4>
                    <p>{blog.pros}</p>
                    <h4>cons:</h4>
                    <p>{blog.cons}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h3>conclusion:</h3>
        <p>
          When it comes to choosing a baby car seat, there are many options
          available on the market today. Each car seat has its own set of pros
          and cons, and it is important for parents to consider their own needs
          and preferences when making a decision. This blog has provided a
          comprehensive list of <span>{data.length}</span> modern baby car
          seats, along with their pros and cons, and Amazon links for easy
          purchase.
        </p>
      </div>
    </Container>
  );
};

export default index;
