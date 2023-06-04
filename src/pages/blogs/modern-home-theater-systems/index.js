import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { data } from "../../../components/data/modern-home-theater-systems/data";
import { Container } from "../../../components/styles/modern-home-theater-systems/hometheater";
const index = () => {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The Best Modern Home Theater Systems for Immersive Audio and Video"
        />
        <meta name="author" content="Aluku Godrick Epale" />
        <meta
          name="keywords"
          content={`home theater,music systems, modern speakers, home speakers,${data.map(
            (item) => item.name
          )}`}
        />
        <link
          rel="canonical"
          href="https://alukublog.com/blogs/modern-home-theater-systems"
        />
        <title>
          The Best Modern Home Theater Systems for Immersive Audio and Video
        </title>
      </Head>
      <div className="body">
        <h1>
          The Best Modern Home Theater Systems for Immersive Audio and Video
        </h1>
        <h2>Introduction:</h2>
        <p>
          Are you looking for a new home theater system that offers an immersive
          audio and video experience? We&apos;ve researched and compiled a list
          of the best modern home theater systems on Amazon, detailed
          descriptions, and pros and cons.
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
                        src={`/modern-home-theater-systems/${item.image}`}
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
          Overall, each of these modern home theater systems offers unique
          features and benefits for an immersive audio experience. It&apos;s
          important to consider factors such as price, design, and ease of use
          when selecting a system that fits your needs. With the variety of
          options available on Amazon, there&apos;s sure to be a modern home
          theater system that meets your audio needs and budget.
        </p>
      </div>
    </Container>
  );
};

export default index;
