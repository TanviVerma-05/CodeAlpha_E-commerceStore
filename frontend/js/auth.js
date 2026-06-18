document.getElementById("loginForm")?.addEventListener(
  "submit",
  async (e) => {
    e.preventDefault();

    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;

    const res = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    localStorage.setItem(
      "token",
      data.token
    );

    alert("Logged In");

    window.location.href = "/";
  }
);

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();
    window.location.href = "/login.html";
    alert("Registered");

    console.log(data);
  });
}
