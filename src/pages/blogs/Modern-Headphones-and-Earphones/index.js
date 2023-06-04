import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { data } from "../../../components/data/Modern-Headphones-and-Earphones/data";
import { Container } from "../../../components/styles/Modern-Headphones-and-Earphones/headphones.styled";
const index = () => {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Modern Headphones and Earphones in 2023"
        />
        <meta name="author" content="Aluku Godrick Epale" />
        <meta
          name="keywords"
          content={`headphones,earphones,${data.map((item) => item.name)}`}
        />
        <link
          rel="canonical"
          href="https://alukublog.com/blogs/Modern-Headphones-and-Earphones"
        />
        <title>Modern Headphones and Earphones in 2023</title>
      </Head>
      <div className="body">
        <h1>Modern Headphones and Earphones in 2023</h1>
        <h2>Introduction:</h2>
        <p>
          Headphones and earphones have become an essential part of our lives,
          whether we&apos;re commuting to work, working out, or just relaxing at
          home. With the wide variety of options available online, it can be
          overwhelming to choose the right pair for your needs. That&apos;s why
          we&apos;ve compiled a list of <span>{data.length}</span> modern
          headphones and earphones that you can find online, along with their
          characteristics, pros and cons. Whether you&apos;re looking for
          noise-canceling headphones for a peaceful commute or wireless earbuds
          for a workout, we&apos;ve got you covered. So sit back, relax, and let
          us help you find the perfect pair of headphones or earphones to
          elevate your audio experience.
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
                        src={`/Modern-Headphones-and-Earphones/${item.image}`}
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
          In conclusion, there are many modern headphones and earphones
          available online with various features and price ranges. When
          selecting a pair, it is important to consider your personal
          preferences, usage scenarios, and budget. By doing so, you can find
          the best pair of headphones or earphones to fit your needs.
        </p>
      </div>
    </Container>
  );
};

export default index;
