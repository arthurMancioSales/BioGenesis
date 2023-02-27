// @author {Arthur}
export default async function submitLogin() {
    const usernameInput = document.querySelector("#login");
    const passwordInput = document.querySelector("#password");

    const login = await fetch("http://149.28.100.51:5000/session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: usernameInput.value,
            email: usernameInput.value,
            password: passwordInput.value,
        }),
    });
    return login
}
