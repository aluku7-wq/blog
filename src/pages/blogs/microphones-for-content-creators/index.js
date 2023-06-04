import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { data } from "../../../components/data/microphones-for-content-creators/data";
import { Container } from "../../../components/styles/microphones-for-content-creators/microphones";
const index = () => {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Modern Microphones for Content Creators in 2023"
        />
        <meta name="author" content="Aluku Godrick Epale" />
        <meta
          name="keywords"
          content={`microphones,${data.map((item) => item.name)}`}
        />
        <link
          rel="canonical"
          href="https://alukublog.com/blogs/microphones-for-content-creators"
        />
        <title>Modern Microphones for Content Creators in 2023</title>
      </Head>
      <div className="body">
        <h1>Modern Microphones for Content Creators in 2023</h1>
        <h2>Introduction:</h2>
        <p>
          As a content creator, having a high-quality microphone is essential
          for producing professional and engaging content. With so many options
          on the market, it can be overwhelming to choose the right microphone
          for your needs. In this guide, we&apos;ll explore
          <span>{data.length}</span> modern microphones for content creators,
          their pros and cons, and provide Amazon links for easy purchasing.
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
                        src={`/microphones-for-content-creators/${item.image}`}
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
          There is no one-size-fits-all microphone for content creators, as
          everyone&apos;s needs and preferences will vary. However, we hope that
          this list of <span>{data.length}</span> modern microphones with their
          pros and cons has provided you with valuable information to help you
          make an informed decision. Remember to consider your budget, recording
          environment, and the type of content you create when choosing a
          microphone. With the right microphone, you can take your content to
          the next level and provide your audience with high-quality audio.
        </p>
      </div>
    </Container>
  );
};

export default index;
