const buttonViewContact = document.querySelector("#button-view-contact");

if (localStorage.getItem("hasSubscribed")) {
  buttonViewContact.disabled = false;
}

document
  .querySelector("#contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let userName = document.querySelector("#text-user").value;
    const USER_EMAIL = document.querySelector("#email-user").value;
    const USER_MESSAGE = document.querySelector("#textarea-user").value;

    const USER_NAME =
      userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((user) => user.email === USER_EMAIL);

    if (existingUser) {
      existingUser.messages.push(USER_MESSAGE);
    } else {
      users.push({
        name: USER_NAME,
        email: USER_EMAIL,
        messages: [USER_MESSAGE],
      });
    }

    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("hasSubscribed", "true");

    buttonViewContact.disabled = false;

    document.querySelector("#contact-form").reset();
  });

buttonViewContact.addEventListener("click", function () {
  window.location.href = "./contact-list.html";
});
