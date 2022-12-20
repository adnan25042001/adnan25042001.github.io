document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    if (name == "" || name.length < 3) return alert("Please provide your name");

    if (email.length <= 11) return alert("Please provide a valid email");

    if (email.slice(email.length - 10, email.length) != "@gmail.com")
        return AudioListener("Please provide email in @gmail.com format");

    if (message == "") return alter("Please write your message");

    let eBody = `
        <b>Name : </b>${name}
        <br>
        <b>Message : </b>${message}
        <br`;

    Email.send({
        SecureToken: "bb6a23ab-ed6d-47e0-b835-11c64f39b65a",
        To: "faltu0918@gmail.com",
        From: "faltu0918@gmail.com",
        Subject: "Mail from : " + email,
        Body: eBody,
    }).then((message) => alert(message));

    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
});
