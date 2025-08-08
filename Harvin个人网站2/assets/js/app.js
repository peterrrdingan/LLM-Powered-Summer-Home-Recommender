// Listen from submit button
document.querySelector(".contact-form").addEventListener("submit" , submitForm);

function submitForm(e){
    e.preventDefault();

    //Get input Values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    sendEmail(name,email,message);
    resetFunction()

}


// send Email Info password: ksqcyhzfnbkzhtpq
function sendEmail(name,email,message)
{
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "bansichangela25@gmail.com",
        Password: "2C6358303AB16E7079DE4EBBD06996B82825",
        To: "bansichangela25@gmail.com",
        From: "bansichangela25@gmail.com",
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br/> Email: ${email}<br/> Message: ${message}`
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
}

function resetFunction(){
    document.querySelector(".contact-form").reset();
   }
