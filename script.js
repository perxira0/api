// Atividade prática – Consumo de API REST com fetch()
// API: JSONPlaceholder

const URL_API = "https://jsonplaceholder.typicode.com/posts";

fetch(URL_API)
  .then((resposta) => {
    // Verifica se a requisição foi bem-sucedida (status 200-299)
    if (!resposta.ok) {
      throw new Error("Erro na requisição. Status: " + resposta.status);
    }
    // Converte a resposta para JSON
    return resposta.json();
  })
  .then((posts) => {
    console.log("===== PUBLICAÇÕES (" + posts.length + ") =====");

    // Estrutura de repetição para percorrer os registros
    for (const post of posts) {
      console.log("--------------------------------------------");
      console.log("ID: " + post.id);
      console.log("TITLE: " + post.title);
      console.log("BODY: " + post.body);
    }

    console.log("--------------------------------------------");
    console.log("Fim da listagem.");
  })
  .catch((erro) => {
    // Tratamento de erros
    console.error("Falha ao consumir a API:", erro.message);
  });
