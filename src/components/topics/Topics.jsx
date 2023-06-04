import { Container } from "./Topics.styled";
import { MdSports, MdHealthAndSafety, MdGirl } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";
import Link from "next/link";

const Topics = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="flex_container">
          <div className="cad">
            <div className="header">
              <FaConnectdevelop />
              <h3>technology</h3>
            </div>
            <p>
              Stay ahead in the fast-paced tech world with our comprehensive
              coverage of the latest gadgets, software, AI advancements,
              cybersecurity, and more.
            </p>
          </div>
          <div className="cad">
            <div className="header">
              <MdGirl />
              <h3>Fashion</h3>
            </div>
            <p>
              Immerse yourself in the world of style, trends, and
              fashion-forward thinking. From runway recaps and wardrobe
              essentials to sustainability and emerging designers, our fashion
              section celebrates diversity, creativity, and self-expression.
            </p>
          </div>
          <div className="cad">
            <div className="header">
              <MdSports />
              <h3>sports</h3>
            </div>
            <p>
              From the thrill of competitive games to the inspiring stories of
              athletes, our sports section covers a wide range of sports
              including football, basketball, tennis, and more. Get the latest
              updates, analysis, and insights into the world of sports.
            </p>
          </div>
          <div className="cad">
            <div className="header">
              <MdHealthAndSafety />
              <h3>Electronics</h3>
            </div>
            <p>
              Whether you&apos;re an electronics hobbyist or simply interested
              in the latest devices, our articles on consumer electronics, home
              automation, DIY projects, and cutting-edge innovations will keep
              you engaged.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Topics;
