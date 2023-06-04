import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { data } from "../../../components/data/modern-computer-monitors/data";
import { Container } from "../../../components/styles/modern-computer-monitors/Computermonitor";
const index = () => {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Modern computer monitors in 2023" />
        <meta name="author" content="Aluku Godrick Epale" />
        <meta
          name="keywords"
          content={`computer monitors,desktops monitors, ${data.map(
            (item) => item.name
          )}`}
        />
        <link
          rel="canonical"
          href="https://alukublog.com/blogs/modern-computer-monitors"
        />
        <title>Modern computer monitors in 2023</title>
      </Head>
      <div className="body">
        <h1>Modern computer monitors in 2023</h1>
        <h2>Introduction:</h2>
        <p>
          Computer monitors are essential for any workspace or home office, as
          they enable us to work efficiently and comfortably. Modern computer
          monitors have advanced significantly in terms of display quality,
          size, and functionality. However, choosing the right monitor can be
          overwhelming due to the wide range of options available in the market.
          In this article, we will review <span>{data.length}</span> modern
          computer monitors, their pros and cons, and provide Amazon links for
          purchasing them.
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
                        src={`/modern-computer-monitors/${item.image}`}
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
          In conclusion, there are various modern computer monitors available in
          the market that cater to different needs and preferences. Whether you
          are a gamer, a professional designer, or just looking for a monitor
          for your everyday use, there is a monitor out there for you. It is
          important to consider factors such as resolution, refresh rate, panel
          type, and features such as HDR support and G-Sync/FreeSync
          compatibility when choosing a monitor. By doing thorough research and
          reading reviews, you can make an informed decision and find the
          perfect monitor for your setup. We hope this list of
          <span>{data.length}</span> modern computer monitors with their pros
          and cons has helped you in your search for the ideal monitor.
        </p>
      </div>
    </Container>
  );
};

export default index;
