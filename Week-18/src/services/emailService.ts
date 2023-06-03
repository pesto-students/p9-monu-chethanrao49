import nodemailer from "nodemailer";

const {
  EMAIL_USERNAME: EMAIL_USERNAME_ENV,
  EMAIL_PASSWORD: EMAIL_PASSWORD_ENV,
} = process.env;

const sendEmail = async (
  email: string,
  subject: string,
  text: string
): Promise<void> => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USERNAME_ENV,
      pass: EMAIL_PASSWORD_ENV,
    },
  });

  let mailOptions: nodemailer.SendMailOptions = {
    from: EMAIL_USERNAME_ENV,
    to: email,
    subject: subject,
    text: text,
  };

  transporter.sendMail(
    mailOptions,
    function (error: Error | null, info: nodemailer.SentMessageInfo) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );
};

export default sendEmail;
