import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { data } from "../../../components/data/Best-Budget-Laptops-for-Programming-in-2023/data";
import { Container } from "../../../components/styles/Best-Budget-Laptops-for-Programming-in-2023/laptops.styled";
const index = () => {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Best Budget Laptops for Programming in 2023"
        />
        <meta name="author" content="Aluku Godrick Epale" />
        <meta
          name="keywords"
          content={`laptops,computers, budget computers, ${data.map(
            (item) => item.name
          )}`}
        />
        <link
          rel="canonical"
          href="https://alukublog.com/blogs/Best-Budget-Laptops-for-Programming-in-2023"
        />
        <title>Best Budget Laptops for Programming in 2023</title>
      </Head>
      <div className="body">
        <h1>Best Budget Laptops for Programming in 2023</h1>
        <h2>Introduction:</h2>
        <p>
          Are you a programmer looking for an affordable laptop that can handle
          your coding needs? Look no further! In this article, we will review
          the <span>{data.length}</span> best budget laptops for programming in
          2023. We&apos;ll cover each laptop&apos;s key features, pros and cons
          for programming.
        </p>
        <div className="grid">
          {data.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="card_container">
                  <h3>
                    <span className="first">{index + 1}.</span>
                    <span>{item.name}</span>
                  </h3>

                  <div className="content">
                    <div className="image">
                      <Image
                        src={`/Best-Budget-Laptops-for-Programming-in-2023/${item.image}`}
                        width="200"
                        height={"200"}
                        alt={item.name}
                      />
                    </div>
                    <div className="text">
                      <Link href={item.link}>get on amazon</Link>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p>
          When looking for a budget laptop for programming, it is important to
          consider factors such as processing power, storage capacity, graphics
          capabilities, and durability. Each of the laptops on this list offers
          good value for their price point and can handle programming tasks
          well, but some may be better suited for specific use cases or
          preferences. Ultimately, the best budget laptop for programming will
          depend on your individual needs and priorities.
        </p>
      </div>
    </Container>
  );
};

export default index;
