// const botaoPesquisar = document.querySelector("#botaoPesquisar")
const resultado = document.querySelector("#resultado")
const container = document.querySelector('ul');
const cardTemplate = document.getElementById("card-template");

// botaoPesquisar.addEventListener("click", () => showImges() );

for (let i = 0; i < 50; i++) {
  container.append(cardTemplate.content.cloneNode(true));
}

function clearImages(){
    
    const containerImages = document.querySelector('ul');
    containerImages.innerHTML = '';
};   

async function getApi(){

    const optionsPesquisa = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    for (let i = 0; i < 50; i++) {
        const pesquisa = optionsPesquisa[Math.floor(Math.random()*optionsPesquisa.length)];

        const div = cardTemplate.content.cloneNode(true);
        div.getElementById("img").style.display = 'flex';
        div.getElementById("img").src = `https://source.unsplash.com/700x500/?${pesquisa}`;
        container.append(div);
      }

};

function showImges(){
    clearImages(),
    getApi(0);
};

showImges();