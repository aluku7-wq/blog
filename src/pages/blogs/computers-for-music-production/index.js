import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { data } from "../../../components/data/computers-for-music-production/data";
import { Container } from "../../../components/styles/computers-for-music-production/computers";
const index = () => {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Best Desktop Computers for Music Production in 2023"
        />
        <meta name="author" content="Aluku Godrick Epale" />
        <meta
          name="keywords"
          content={`music production computers, best desktop computers for music production, powerful computers for music production, modern computers for music production, ${data.map(
            (item) => item.name
          )}`}
        />
        <link
          rel="canonical"
          href="https://alukublog.com/blogs/computers-for-music-production"
        />
        <title>Best Desktop Computers for Music Production in 2023</title>
      </Head>
      <div className="body">
        <h1>Best Desktop Computers for Music Production in 2023</h1>
        <h2>Introduction:</h2>
        <p>
          When it comes to music production, having the right tools is crucial
          for achieving the best results. Among the tools needed is a powerful
          computer that can handle the demands of music production software. In
          this guide, we will explore <span>{data.length}</span> modern desktop
          computers that are perfect for music production. We will discuss their
          specifications, pros and cons, and provide Amazon links for each
          computer
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
                        src={`/computers-for-music-production/${item.Image}`}
                        width="200"
                        height={"200"}
                        alt={item.name}
                      />
                    </div>
                    <div className="text">
                      <Link href={item.link}>get on amazon</Link>
                      <h4>description:</h4>
                      <p>{item.description}</p>
                      <h4>pros:</h4>
                      {item.pros.map((pro, index) => (
                        <p key={index}>
                          <span className="first">.</span>
                          <span>{pro}</span>
                        </p>
                      ))}
                      <h4>cons:</h4>
                      {item.cons.map((pro, index) => (
                        <p key={index}>
                          <span className="first">.</span>
                          <span>{pro}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p>
          When it comes to music production, having a powerful and reliable
          desktop computer is essential. The above list of{" "}
          <span>{data.length}</span> modern desktop computers is designed to
          provide you with a range of options to choose from, depending on your
          needs and budget.
        </p>
      </div>
    </Container>
  );
};

export default index;
