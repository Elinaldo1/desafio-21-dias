


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", "17d94b92-754f-46eb-99a0-65be65b5d18f");
    
    
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      const url = 'https://api.thecatapi.com/v1/images/search?limit=10'
      
      let imgUrls = []
      

     
    // Recursive function 
    async function getApi(countDown){

            // "countDown >= 10" is the exit condition (equivalent to "!(countDown < 10)")
           
            if (countDown > 10) {
                return;
            };

            
            fetch(url, requestOptions)
            .then(res => { 
                res.json()
                .then(data => {
                    
                    data.map(item => {
                        imgUrls.push(item.url);
                    });
                }  
                ).then(()=> {
        
                    console.log(imgUrls, 'ir')
                    
                    renderListImages(imgUrls);

                    imgUrls = [];
                }
        
                )
            })
            .catch(err => console.log(err));

            getApi(countDown + 1).then(
                console.log(countDown),
            );
};

function renderListImages(imgUrlList) {
    imgUrlList ? imgUrlList.map((item, id) => {

        const conatiner = document.querySelector('.cats');
        const liElement = document.createElement('li');
        const linkElement = document.createElement('a');
        const imgElement = document.createElement('img');

        linkElement.href = '#';
        linkElement.setAttribute('onclick', 'openModal(event)');
        imgElement.loading = "lazy";
        imgElement.src = item;

        linkElement.appendChild(imgElement);

        liElement.appendChild(linkElement);

        conatiner.appendChild(liElement);

    }): null;
}

function openModal(event) {
    const element = document.body;
    element.classList.toggle("openModal");

    const imgModal = document.querySelector('#imgModal');
    imgModal.src = event.target.src;

};

function closeModal(){
    const element = document.body;
    element.removeAttribute('class');

    // alert('close')
};


getApi(0);