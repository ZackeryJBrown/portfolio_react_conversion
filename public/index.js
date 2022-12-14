$(document).ready(function(){

  

//smtpjs.com api
function sendEmail(){
    Email.send({
    SecureToken : "a6ccac6b-29a4-481e-a24a-419872529d35",
    To : 'zackeryjbrown@gmail.com',
    From : $("#email").val(),
    Subject : "New Portfolio message",
    Body : "Sender: " + $("#name").val() + "Message: " + $("#message").val()
}).then(
    message => alert(message)
);
};


$(submitbutton).click(function(event) {
    event.preventDefault();
    sendEmail();
});



});
