import { useState } from "react";
import { Container } from "./Contacts.styled";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import validator from "validator";
import { warning } from "framer-motion";

const Contacts = () => {
  const [validation, setvalidation] = useState("");
  const [spinner, setspinner] = useState(false);
  const [check, setcheck] = useState(false);
  const [info, setInfo] = useState({
    useremail: "",
    name: "",
    message: "",
  });

  const handleMessage = async () => {
    if (info.name.trim().length < 1) {
      setvalidation("name cannot be empty");
    } else if (!validator.isEmail(info.useremail)) {
      setvalidation("email is invalid");
    } else if (info.message.trim().length < 1) {
      setvalidation("message cannot be empty");
    } else {
      setvalidation("");
      setspinner(true);
      const response = await axios.post("/api/mail", info);
      if (response.data === "success") {
        setTimeout(() => {
          setcheck(true);
          setTimeout(() => {
            setspinner(false);
            setcheck(false);
            setInfo({
              useremail: "",
              name: "",
              message: "",
            });
          }, 600);
        }, 1200);
      }
    }
  };
  return (
    <Container>
      <div className="overlay">
        <div className="wrapper">
          <h3>
            Get In <span>Touch</span>
          </h3>
          <div className="contacts">
            <div className="group">
              <BsFillTelephoneFill className="icon" />
              <p>+254769301113</p>
            </div>
            <div className="group">
              <RiWhatsappFill className="icon" />
              <p>+254769301113</p>
            </div>
            <div className="group">
              <MdMail className="icon" />
              <p>foreveraluku@gmail.com</p>
            </div>
          </div>
          <p>Have feeedback or need any help?</p>
          <div className="form">
            {spinner ? (
              <Spinner check={check} />
            ) : (
              <>
                {validation.trim().length > 0 && (
                  <p className="warning">{validation}!</p>
                )}
                <input
                  type="text"
                  placeholder="full names"
                  onChange={(e) => setInfo({ ...info, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="email"
                  onChange={(e) =>
                    setInfo({ ...info, useremail: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="message"
                  onChange={(e) =>
                    setInfo({ ...info, message: e.target.value })
                  }
                />
                <button onClick={handleMessage}>submit</button>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
