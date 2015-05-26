//create the email message
var mail = require("waf-mail/mail");
var message = new mail.Mail();
message.subject = "subjeeect";
message.from = "saad@saad.com";
message.to = "saadmos06@gmail.com";
message.setContent("hello world");
//message.addAttachment(rsltCSV, "changements.csv", "text/csv", "ID123", true);
 
//send the email message
sendEmail({
    address: "144.145.1.110",
    port: 25,
    isSSL: false,
    domain: "saad.com",
    user: "saad@saad.com",
    password: "saadPWD"
}, message);
 
// Send email through SMTP 
function sendEmail(config, message) {
    "use strict";
 
    var smtp = require("waf-mail/smtp"),
        client, errName, errInfo, isSent;
 
    //init error tracking
    errName = "";
    errInfo = [];
 
    //connect
    client = new smtp.SMTP();
    client.connect(config.address, config.port, config.isSSL, config.domain, function onAfterConnect(isConnected, replyArr, isESMTP) {
        if (isConnected) {
 
            //authenticate
            client.authenticate(config.user, config.password, function onAfterAuthenticate(isAuthenticated, replyArr) {
                if (isAuthenticated) {
 
                    //send
                    client.send(message.from, message.to, message, function onAfterSend(isSent, replyArr) {
                        if (isSent) {
                            exitWait();
                        }
                        else {
                            errName = "smtp_SendFailed";
                            errInfo = replyArr;
                            exitWait();
                        }
                    });
                }
                else {
                    errName = "smtp_AuthFailed";
                    errInfo = replyArr;
                    exitWait();
                }
            });
        }
        else {
            errName = "smtp_CouldNotConnect";
            errInfo = replyArr;
            exitWait();
        }
    });
    wait();
 
    //determine if sent
    if (errName === "") {
        isSent = true;
    }
    else {
        isSent = false;
    }
 
    //return if sent and any error info
    return {
        isSent: isSent,
        errName: errName,
        errInfo: errInfo
    };
}

