import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { data } from "../../../components/data/graphic-design-desktops/data";
import { Container } from "../../../components/styles/graphic-design-desktops/graphic";
const index = () => {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Modern Desktop Computers for 3D Graphic Design and Animation in 2023"
        />
        <meta name="author" content="Aluku Godrick Epale" />
        <meta
          name="keywords"
          content={`gaming computers, graphic design computers, ${data.map(
            (item) => item.name
          )}`}
        />
        <link
          rel="canonical"
          href="https://alukublog.com/blogs/graphic-design-desktops"
        />
        <title>
          Modern Desktop Computers for 3D Graphic Design and Animation in 2023
        </title>
      </Head>
      <div className="body">
        <h1>
          Modern Desktop Computers for 3D Graphic Design and Animation in 2023
        </h1>
        <h2>Introduction:</h2>
        <p>
          If you&apos;re a professional 3D artist or animator, you know that
          having the right computer is crucial for achieving high-quality
          results. With so many options available, it can be overwhelming to
          choose the best one for your needs. In this blog, we&apos;ll take a
          look at the top
          <span>{data.length}</span>
          modern desktop computers for 3D graphic design and animation in 2023,
          along with their pros and cons. Before we dive in, it&apos;s important
          to note that the following list is not in any particular order. Each
          computer has its own strengths and weaknesses, and the best choice for
          you will depend on your specific requirements.
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
                        src={`/graphic-design-desktops/${item.image}`}
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
