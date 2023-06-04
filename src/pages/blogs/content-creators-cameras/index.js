import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { data } from "../../../components/data/content-creators-cameras/data";
import { Container } from "../../../components/styles/content-creators-cameras/creators";
const index = () => {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Best Cameras for Content Creation in 2023"
        />
        <meta name="author" content="Aluku Godrick Epale" />
        <meta
          name="keywords"
          content={`Cameras for YouTube, Best cameras for YouTube,YouTube content creation,Cameras for video recording,Cameras for vlogging,
           ${data.map((item) => item.name)}`}
        />
        <link
          rel="canonical"
          href="https://alukublog.com/blogs/content-creators-cameras"
        />
        <title>Best Cameras for Content Creation in 2023</title>
      </Head>
      <div className="body">
        <h1>Best Cameras for Content Creation in 2023</h1>
        <h2>Introduction:</h2>
        <p>
          When it comes to creating content, the camera you use plays a crucial
          role in producing high-quality videos that will engage your viewers.
          With so many cameras available in the market, it can be overwhelming
          to choose the right one for your channel. To help you make an informed
          decision, we have compiled a list of the
          <span>{data.length}</span> best cameras for content creation. In this
          article, we&apos;ll provide detailed reviews of each camera, including
          its pros and cons, and provide you with Amazon links for easy
          purchasing.
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
                        src={`/content-creators-cameras/${item.image}`}
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
      </div>
    </Container>
  );
};

export default index;
