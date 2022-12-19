document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

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

    name = "";
    email = "";
    message = "";
});
