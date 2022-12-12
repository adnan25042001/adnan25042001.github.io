function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "faltu0918@gmail.com",
        Password: "password",
        To: "faltu0918@gmail.com",
        From: document.querySelector("mail"),
        Subject: "This is the subject",
        Body: "And this is the body",
    }).then((message) => alert(message));
}

data();

async function data(){
    try {
        let res = await fetch("https://localhost:8088/bookservice/books");
        let data = await res.json();
        console.log(data);
    } catch (error) {
        
    }
}