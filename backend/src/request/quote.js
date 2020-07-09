const nodeMailer = require("nodemailer");

let transporter = nodeMailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0a7e532c27433a",
    pass: "4012f61639b2eb",
  },
});

exports.quote = (req, res, next) => {
  console.log(req.body);

  const mailOptions = {
    from: '"Get Quote Request" 438e1da98e-7b78aa@inbox.mailtrap.io',
    to: "438e1da98e-7b78aa@inbox.mailtrap.io",
    subject: "Get Quote",
    text: `Customer Quote Request\n ${req.body.desc}\n ${req.body.designstatus || "Call user to confirm design"}\n ${req.body.address}\n ${req.body.name}\n ${req.body.email}\n ${req.body.phone}`,
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        message: "Your information was successfully submited",
      });
    }
  });
};

exports.contact = (req, res, next) => {
    console.log(req.body);
  
    const mailOptions = {
      from: '"Contact Us Message" 438e1da98e-7b78aa@inbox.mailtrap.io',
      to: "438e1da98e-7b78aa@inbox.mailtrap.io",
      subject: "Contact Us Message",
      text: `Contact Us message\n ${req.body.name}\n ${req.body.email}\n ${req.body.phone}\n ${req.body.message}`,
    };
  
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        res.status(200).json({
          message: "Your information was successfully submited",
        });
      }
    });
  };
