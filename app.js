


const form =document.getElementById("contact-form");

form.addEventListener("submit",function(e){
    e.preventDefault();

    const param={
         name:document.getElementById("full-name").value,
         email:document.getElementById("email").value,
         number:document.getElementById("number").value,
         message:document.getElementById("message").value
    };

    console.log(param.email);
    emailjs
      .send("service_dzhdo1q", "template_2k3p1id", param,"nGxErVLrHakRUDaK3")
      .then(function () {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch(function (error) {
        alert("Failed to send message");
        console.log(error);
      });

});