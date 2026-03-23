document.getElementById("form-contato").addEventListener("submit", function(event) {

    event.preventDefault(); // impede envio real

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    let retorno = document.getElementById("retorno-mensagem");

    // validação simples
    if(nome === "" || email === "" || mensagem === ""){
        retorno.innerText = "Preencha todos os campos.";
        retorno.style.color = "red";
        return;
    }

    // simulação de envio
    retorno.innerText = "Mensagem enviada com sucesso! Entrarei em contato em breve.";
    retorno.style.color = "green";

    // limpa formulário
    document.getElementById("form-contato").reset();

});