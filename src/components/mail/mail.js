import mailer from "nodemailer";
const mailing = async (email, name, message, useremail) => {
  const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: "kkxnpmtxrinmpxbk",
    },
  });
  const details = {
    from: email,
    to: email,
    subject: "MESSAGE FROM THE BLOG",
    html: `<div>MESSAGE:${message}</div><br/><div>NAME:${name}</div><br/><div>EMAIL:${useremail}</div><br/> `,
  };

  return transporter.sendMail(details, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mail sent");
    }
  });
};
export default mailing;
