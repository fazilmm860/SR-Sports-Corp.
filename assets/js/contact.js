function SendMail(){
    var params={
      from_name : document.getElementById("fullname").value,
      email_id : document.getElementById("email_id").value,
      number : document.getElementById("number").value,
      message : document.getElementById("message").value
    }
    emailjs.send("service_9xxdm7b","template_4nkaf9d",params).then(function(res){
      alert("Successfully message sent");
      location.reload();
    })

  }