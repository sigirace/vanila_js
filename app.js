// const loginForm = document.getElementById("login-form")
// const loginInput = loginForm.querySelector("input")
// const loginButton = loginForm.querySelector("button")

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    console.log(loginInput.value);
    console.log("Click");
}

loginButton.addEventListener("click", onLoginBtnClick);