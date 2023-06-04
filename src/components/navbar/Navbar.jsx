import { Container } from "./Navbar.styled";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Blogcontext } from "../context/Context";

const Navbar = () => {
  const globalstate = useContext(Blogcontext);
  const dispatch = globalstate.dispatch;
  return (
    <Container>
      <div className="wrapper">
        <div className="logo">
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              alt="alukublog"
              width="0"
              height="0"
              sizes="100vw"
            />
          </Link>
        </div>
        <div className="links">
          <div className="navlinks">
            <Link href={"/"}>home</Link>
            <Link href={"/blogs/blogslist"}>blogs</Link>
            <Link href={"/"}>contact</Link>
          </div>
          <div className="mobile_menu">
            <div
              className="icon"
              onClick={() => {
                console.log("clicked");
                dispatch({ type: "TOGLEON" });
              }}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
