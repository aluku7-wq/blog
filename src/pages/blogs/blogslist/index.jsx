import { Blogcontainer } from "../../../components/styles/Blogslist.styled";
import Link from "next/link";
import Head from "next/head";
import { data } from "../../../components/data/blogslist/data";

const index = () => {
  return (
    <Blogcontainer>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="alukublog blogslist" />
        <meta name="author" content="Aluku Godrick Epale" />
        <meta name="keywords" content={`${data.map((item) => item.name)}`} />
        <title>blog list</title>
      </Head>
      <div className="wrapper">
        <h1>List of blogs covered</h1>

        {data.map((blog, index) => {
          return (
            <Link href={blog.link} key={index}>
              {index + 1}. {blog.name}
            </Link>
          );
        })}
      </div>
    </Blogcontainer>
  );
};

export default index;
