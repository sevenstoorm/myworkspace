// Pede o nome do Pokémon
let nome = prompt("Digite o nome de um Pokémon: ").toLowerCase();

// Monta o link da PokeAPI
let url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

// Faz a requisição
fetch(url)
  .then(resposta => {
    if (!resposta.ok) {
      throw new Error("Pokémon não encontrado!");
    }
    return resposta.json();
  })
  .then(pokemon => {
    console.log(" Nome:", pokemon.name);
    console.log(" ID:", pokemon.id);
    console.log(" Tipos:");
    pokemon.types.forEach(t => console.log(" - " + t.type.name));
    console.log(" Imagem:", pokemon.sprites.front_default);
  })
  .catch(erro => {
    console.error("Erro:", erro.message);
  });
0
