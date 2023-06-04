import { Container } from "./ToggleScreen,styled";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
import { Blogcontext } from "../context/Context";

const ToggleScreen = () => {
  const globalstate = useContext(Blogcontext);
  const dispatch = globalstate.dispatch;
  if (globalstate.state.toggle == true) {
    return (
      <Container>
        <div className="wrapper">
          <div className="navigation">
            <MdClose onClick={() => dispatch({ type: "TOGLEOFF" })} />
          </div>
          <div className="body">
            <div
              className="group"
              onClick={() => dispatch({ type: "TOGLEOFF" })}
            >
              <Link href={"/"}>home</Link>
            </div>
            <div
              className="group"
              onClick={() => dispatch({ type: "TOGLEOFF" })}
            >
              <Link href={"/blogs/blogslist"}>blogs</Link>
            </div>
            <div
              className="group"
              onClick={() => dispatch({ type: "TOGLEOFF" })}
            >
              <Link href={"/"}>contact</Link>
            </div>
          </div>
        </div>
      </Container>
    );
  } else {
    return null;
  }
};

export default ToggleScreen;
