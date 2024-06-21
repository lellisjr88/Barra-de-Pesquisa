
let data = []; //Variável que armazenará os dados da API

const get = async () => {
    //Configurações do AXIOS
    const config = {
        params: {
            _limit: 20,
        },
    };

    //Requisição 
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", config);
        data = response.data; //Variável global que recebe os dados da API
        displayData(data) //Chamada da função que insere os dados no HTML
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
};

//Chamada da função que faz a requisição a API
get();

//Seleciona os ítens no HTML que receberá os dados através do método map
const cardContainer = document.querySelector('.card-container') 


//Função que insere os dados no HTML
const displayData = data => {
    cardContainer.innerHTML = "";
    data.map(e => {
        cardContainer.innerHTML += `
            <div class="card">
                <p>ID: ${e.id}</p> <br>
                <h3>Título: ${e.title} </h3><br>
                <p>Mensagem:<br> ${e.body}</p>
            </div>
        `
    })
}

//Seleciona o input no HTML
const searchInput = document.querySelector('#searchInput')

//Função que faz a busca no array de dados através do que o usuário digitou no input selecionado
searchInput.addEventListener('keyup', (e) => {
    //Cria uma variável search que recebe o array de dados (data) e passa o corpo (body) da api transformando em minúsculo 
    //e também pega os dados do usuário digitado no input e transforma em minúsculo
    const search = data.filter(i => i.body.toLowerCase().includes(e.target.value.toLowerCase()))

    //Procura dentro da função que insere os dados no html
    //Os dados digitados pelo usuário
    displayData(search)
})