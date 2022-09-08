
const botaoPesquisar = document.querySelector("#botaoPesquisar")
botaoPesquisar.addEventListener("click", () => showImges() );

const resultado = document.querySelector("#resultado")
const container = document.querySelector('ul');

function clearImages(){
    
    const containerImages = document.querySelector('ul');
    containerImages.innerHTML = '';
    // resultado.innerHTML= '';
}    

async function getApi(countDown){

    const optionsPesquisa = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    const pesquisa = optionsPesquisa[Math.floor(Math.random()*optionsPesquisa.length)];
    
    // "countDown >= 10" is the exit condition (equivalent to "!(countDown < 10)")
    if (countDown > 9) {
        return;
    };


    getApi(countDown + 1).then(
        renderListImages(`https://source.unsplash.com/700x500/?${pesquisa}`)
        // console.log(countDown),
    );
};


function showImges(){
    clearImages(),
    getApi(0);
}



function renderListImages(urlImg) {

        const liElement = document.createElement('li');
        const linkElement = document.createElement('a');
        const imgElement = document.createElement('img');
    
        linkElement.href = '#';
        linkElement.setAttribute('onclick', 'openModal(event)');
        imgElement.loading = "lazy";
        imgElement.src = urlImg;
    
        linkElement.appendChild(imgElement);
    
        liElement.appendChild(linkElement);
    
        container.appendChild(liElement);
    
        resultado.appendChild(container);
        
}

showImges();
// function openModal(event) {
//         const element = document.body;
//         element.classList.toggle("openModal");

//         const imgModal = document.querySelector('#imgModal');
//         imgModal.src = event.target.src;

// };

// function closeModal(){
//         const element = document.body;
//         element.removeAttribute('class');

//         // alert('close')
// };


