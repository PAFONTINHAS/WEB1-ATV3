function enviarDados(event) {

    event.preventDefault();

    const formData = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        cpf: document.getElementById("cpf").value,
        cep: document.getElementById("cep").value,
        endereco: document.getElementById("endereco").value,


    }

    console.log("Dados:", formData);
    home(formData);

    // Enviar os dados como JSON usando fetch
    fetch('https://localhost:5500/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
    })


}


function home(formData){

    const login = document.getElementById("login");
    const home = document.getElementById("home");
    const header = document.getElementById("header");
    const dados = document.getElementById("dados");
    login.style.display = "none";
    home.style.display = "flex";
    header.style.display = "flex";
    dados.style.display = "flex";

    let html = '';
    html += '<h1> Olá ' + formData.nome + '! Seja bem vindo ao nosso blog</h1>'
    html += '<a href = "index.html"><button onclick="">Sair</button></a>'

    header.innerHTML = html;

    html = '';
    html += '<p>Nome: ' + formData.nome + '</p> <br>';
    html += '<p>Email: ' + formData.email + '</p> <br>';
    html += '<p>CPF: ' + formData.cpf + '</p> <br>';
    html += '<p>CEP: ' + formData.cep + '</p> <br>';
    html += '<p>Endereço: ' + formData.endereco + '</p> <br>';
    html += '<p>Senha: ' + formData.senha + '</p> <br>';
    dados.innerHTML = html;

}


