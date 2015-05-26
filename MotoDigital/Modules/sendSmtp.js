/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'sendSmtp' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(sendSmtp.sendEmail());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
var mail = require("waf-mail/mail");
var message = new mail.Mail();
message.subject = "This is a test";
message.from = "celso.monteiro@moto-digital.com";
message.to = "celso.monteiro@sapo.pt";
message.setContent("Did it work?");

sendEmail({
    address: "smtp.moto-digital.com",
    port: 25,
    isSSL: false,
    //domain: "mydomain.com",
    user: "celso.monteiro@moto-digital.com",
    password: "MotoCM15%"
}, message);
 
exports.sendEmail = sendEmail();