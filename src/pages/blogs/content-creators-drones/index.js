import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { data } from "../../../components/data/content-creators-drones/data";
import { Container } from "../../../components/styles/content-creators-drones/drones";
const index = () => {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Modern Drones for Content Creators in 2023"
        />
        <meta name="author" content="Aluku Godrick Epale" />
        <meta
          name="keywords"
          content={`drones, content creators, modern drones, photography, videography,${data.map(
            (item) => item.name
          )}`}
        />
        <link
          rel="canonical"
          href="https://alukublog.com/blogs/content-creators-drones"
        />
        <title>Modern Drones for Content Creators in 2023</title>
      </Head>
      <div className="body">
        <h1>Modern Drones for Content Creators in 2023</h1>
        <h2>Introduction:</h2>
        <p>
          Drones have revolutionized the way content is created and captured,
          opening up endless possibilities for photographers, videographers, and
          content creators. With so many drones available in the market, it can
          be overwhelming to choose the right one for your needs. In this blog,
          we will discuss the top <span>{data.length}</span> modern drones for
          content creators, their pros and cons, and provide you with Amazon
          links to purchase them.
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
                        src={`/content-creators-drones/${item.image}`}
                        width="200"
                        height={"200"}
                        alt={item.name}
                      />
                    </div>
                    <div className="text">
                      <Link href={item.link}>get on amazon</Link>
                      <h4>description:</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p>
          In conclusion, there are many great drones available for content
          creators, each with its own strengths and weaknesses. It is important
          to consider factors such as camera quality, battery life, range, and
          obstacle avoidance sensors when choosing a drone. The above list
          includes some of the best drones currently available on the market for
          content creators, and each one has its own unique features that make
          it a great choice for different needs and budgets. By considering
          these options, content creators can find the perfect drone to take
          their content to the next level.
        </p>
      </div>
    </Container>
  );
};

export default index;
