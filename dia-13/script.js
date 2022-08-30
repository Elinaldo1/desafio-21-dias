let isOpenDrawer = false;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

document.getElementsByTagName("BODY")[0].onresize = function() {sizeOfThings()};

function sizeOfThings() {
    // Oque você quiser
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    if(isOpenDrawer){

        if(window.innerWidth < 600) {

            document.getElementById('header').style.width = '100%';
        }else {
            document.getElementById('header').style.width = '40%';

        }            
    }
}

// window.addEventListener("click", function () {
//     sizeOfThings();
// })

function openDrawer(){
    if (isOpenDrawer) {
        closeDrawer()
    } else{
        if(windowWidth < 600) {

            document.getElementById('header').style.width = '100%';
        }else {
            document.getElementById('header').style.width = '40%';

        }

        const element = document.body;
        element.classList.toggle("openDrawer");
        isOpenDrawer = true;
    }
}

function closeDrawer(){
    const element = document.body;
    element.removeAttribute('class')
    isOpenDrawer = false;

    document.getElementById('header').style.width = '0%';

    // alert('close')
}