import mailing from "@/components/mail/mail";
const mail = async (req, res) => {
  const email = "foreveraluku@gmail.com";
  const useremail = req.body.useremail;
  const name = req.body.name;
  const message = req.body.message;
  mailing(email, name, message, useremail);
  res.send("success");
};
export default mail;
