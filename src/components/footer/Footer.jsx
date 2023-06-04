import Link from "next/link";
import { Container } from "./Footer.styled";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="links">
          <Link href={"/"}>home</Link>
          <Link href={"/blogs/blogslist"}>blogs</Link>
          <Link href={"/"}>contacts</Link>
        </div>
        <div className="social">
          <Link href={"/"}>
            <MdFacebook />
          </Link>
          <Link href={"/"}>
            <FaTwitter />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
