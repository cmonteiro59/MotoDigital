function sendMail(request,response)
{
        // Get parts from the request object
  	var usernameFrom = "cv.motodigital@gmail.com";
    var usernameTo = request.parts[0].asText;
    var password =" MD15%VPS";
    var address = 'smtp.gmail.com'; //Define address of the server mail
    var port = 465;  //Define SSL port for gmail
 
        //Create a mail wakanda object
    var mail = require('waf-mail/mail');
    var message = new mail.Mail();
 
        //Add “From” attribute of mail client object to the body of the message
    message.from = usernameFrom;
        //Add “To” attribute of mail client object to the body of the message
    message.to = usernameTo;
    message.cc = "compraevenda@moto-digital.com";
        //Add “Subject” attribute of mail client object to the body of the message
    message.subject = request.parts[1].asText; 
        //Set the content type of the message to text/html
    message.setBodyTypeToHTML();
    message.setBody(request.parts[2].asText);
        //Send the mail using the wakanda function
    var res = message.send(address , port , true, usernameFrom, password);
        //Return a String(“true”,”false”)
    return res.isOk + "";
}
