const token = localStorage.getItem("token");

const loginLink =
document.getElementById("loginLink");

const registerLink =
document.getElementById("registerLink");

const logoutLink =
document.getElementById("logoutLink");

if (token) {

    if(loginLink)
        loginLink.style.display = "none";

    if(registerLink)
        registerLink.style.display = "none";

    if(logoutLink)
        logoutLink.style.display = "inline";

}

if(logoutLink){

    logoutLink.addEventListener(
        "click",
        () => {

            localStorage.removeItem("token");

            alert("Logged Out");

            window.location.href = "/";
        }
    );
}