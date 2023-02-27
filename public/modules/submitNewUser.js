export default async function newUser() {
    const usernameInput = document.querySelector("#userName");
    const emailInput = document.querySelector("#userEmail");
    const emailConfirmInput = document.querySelector("#userEmailConfirm");
    const passwordInput = document.querySelector("#userPass");
    const passwordConfirmInput = document.querySelector("#userPassConf");

    validateInput(usernameInput);
    validateInput(emailInput);
    validateInput(emailConfirmInput);
    validateInput(passwordInput);
    validateInput(passwordConfirmInput);

    if (emailInput.value != emailConfirmInput.value) {
        emailInput.classList.remove("campoInvalido");
        emailInput.classList.remove("campoInvalido");
        emailInput.classList.remove("campoValido");
        emailConfirmInput.classList.remove("campoValido");
        emailInput.classList.add("campoInvalido");
        emailConfirmInput.classList.add("campoInvalido");
        
        document.querySelector("#loginResult").innerText = "Emails divergentes"

        return
    }

    if (passwordInput.value != passwordConfirmInput.value) {
        passwordInput.classList.remove("campoInvalido");
        passwordConfirmInput.classList.remove("campoInvalido");

        passwordInput.classList.remove("campoValido");
        passwordConfirmInput.classList.remove("campoValido");

        passwordInput.classList.add("campoInvalido");
        passwordConfirmInput.classList.add("campoInvalido");

        document.querySelector("#loginResult").innerText = "Senhas divergentes"

        return
    }

    const response = await fetch("http://localhost:5000/api/createUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        }),
    });
    const result = await response.json()

    if (response.status == 200) {
        return response
    } else {
        return JSON.parse(result)
    }
}

function validateInput(field) {
    if (field.value == "") {
        field.classList.add("campoInvalido");
        field.classList.remove("campoValido");
    } else {
        field.classList.remove("campoInvalido");
        field.classList.add("campoValido");
    }
}
