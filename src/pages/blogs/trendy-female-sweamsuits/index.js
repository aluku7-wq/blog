import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { data } from "../../../components/data/trendy-female-sweamsuits/data";
import { Container } from "../../../components/styles/trendy-female-sweamsuits/sweamsuits.styled";
const index = () => {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Trendy Female Swimsuits You Need for the Beach Season"
        />
        <meta name="author" content="Aluku Godrick Epale" />
        <meta
          name="keywords"
          content={`beach,bikini, sweammsuits, ${data.map(
            (item) => item.name
          )}`}
        />
        <link
          rel="canonical"
          href="https://alukublog.com/blogs/trendy-female-sweamsuits"
        />
        <title>Trendy Female Swimsuits You Need for the Beach Season</title>
      </Head>
      <div className="body">
        <h1> Trendy Female Swimsuits You Need for the Beach Season</h1>
        <h2>Introduction:</h2>
        <p>
          Summer is right around the corner, which means it&apos;s time to start
          thinking about swimsuits! Whether you prefer a one-piece or a bikini,
          there are plenty of trendy options available to suit every style and
          body type. Here are <span>{data.length}</span> of the hottest female
          swimsuits you can find on Amazon.
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
                        src={`/trendy_swimsuits/${item.image}`}
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
      </div>
    </Container>
  );
};

export default index;
