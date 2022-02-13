const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
	host: "localhost",
	port: 4321.
});

transporter.sendMail(
	{
		from: "pig@example.com",
		to: "dog@example.com",
		subject: "Hello",
		text: "Hello World!",
	}, (err, info) => {
			if (err) {console.log("Error Message: ", err.message);}
			console.log("Message sent: ", info);
	}
);

