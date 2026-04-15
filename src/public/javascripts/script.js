const form = document.getElementById("contactForm");
const message = document.getElementById("message");

function showMessage(text, type) {
    message.textContent = text;
    message.className = "msg " + (type === "success" ? "success" : "error");
    message.style.display = "block";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    message.style.display = "none";

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();

    if (!name || name.length < 2) {
        showMessage(
            "Por favor, insira um nome válido (mínimo 2 caracteres).",
            "error",
        );
        form.name.focus();
        return;
    }

    const phonePattern = new RegExp(form.phone.getAttribute("pattern"), );
    if (!phonePattern.test(phone)) {
        showMessage("Por favor, insira um telefone válido.", "error");
        form.phone.focus();
        return;
    }

    console.log(name, phone)
    // Aqui você pode enviar os dados para o servidor via fetch/formdata.
    // No exemplo, apenas exibimos confirmação para o usuário.
    showMessage("Obrigado! Recebemos seu contato.", "success");
    form.reset();
});
