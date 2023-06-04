import React from "react";
import { Container } from "../../../components/styles/computer-workstations/workstations";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { data } from "../../../components/data/computer-workstations/data";

const index = () => {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Top Modern Computer Workstation In 2023"
        />
        <meta name="author" content="Aluku Godrick Epale" />
        <meta
          name="keywords"
          content={`Computer Workstations,gaming pc, computers,${data.map(
            (item) => item.name
          )}`}
        />
        <link
          rel="canonical"
          href="https://alukublog.com/blogs/computer-workstations"
        />
        <title>Top Modern Computer Workstation In 2023</title>
      </Head>
      <div className="body">
        <h1>Top Modern Computer Workstation In 2023</h1>
        <h3>
          By <span>Aluku Godrick Epale</span>
        </h3>
        <h3>Introduction:</h3>
        <p>
          If you are looking for a computer workstation that can handle high-end
          computing tasks, you are in the right place. In this blog, we will
          introduce you to <span>{data.length}</span> modern computer
          workstations that are popular among professionals, gamers, and
          enthusiasts. We will discuss the pros and cons of each workstation and
          provide Amazon links so that you can easily purchase them.
          <span>{data.length}</span>
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
                      src={`/computer-workstations/${blog.image}`}
                      width="200"
                      height={"200"}
                      alt={blog.name}
                    />
                  </div>
                  <div className="text">
                    <Link href={blog.link}>get on amazon</Link>
                    <h4>description:</h4>
                    <p>{blog.description}</p>
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
          Overall, the choice of the best modern computer workstation depends on
          your specific needs and budget. The above-listed workstations offer a
          wide range of performance, affordability, and form factor options to
          choose from. Make sure to consider your workload requirements and
          future upgrade needs before making a purchase decision.
        </p>
      </div>
    </Container>
  );
};

export default index;
