const button = document.getElementById("button");

button.addEventListener('click', (event) => {
    event.preventDefault()

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");

    if(nome.value == '') {
        nome.classList.add("errorInput");
    }else {
        nome.classList.remove("errorInput");
    }

    if(email.value == '') {
        email.classList.add("errorInput");
    }else {
        email.classList.remove("errorInput");
    }

    if(email.value.indexOf("@") == -1 || email.value.indexOf (".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)){
        email.classList.add("errorInput");
    } else {
        email.classList.remove("errorInput");
    }

})
