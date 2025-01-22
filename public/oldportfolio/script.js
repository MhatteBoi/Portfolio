const card = document.getElementById('movingWindow')
card.addEventListener('mousemove', moveWindow)
function moveWindow(event) {
    const { clientX: mouseX, clientY: mouseY } = event;
    const halfWidth = window.innerWidth / 2;
    const halfHeight = window.innerHeight / 2;
    const tiltX = (halfWidth - mouseX) / 55;
    const tiltY = (halfHeight - mouseY) / 55;

        card.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
        card.style.transition = "transform 0.2s linear"
    }


const darkModeBtn = document.getElementById('drkMode-lgtMode')
darkModeBtn.addEventListener('click', changeBgImg)
function changeBgImg(){
    let bluredBgn = document.getElementById('bluredBgn');
    let logo = document.getElementById('logo')
    let signatur = document.getElementById('signatur')
    

    if (logo.getAttribute('src') === 'https://res.cloudinary.com/dm3vmtten/image/upload/v1737124858/MeAsLogo2_dcfriw.jpg'){
        logo.setAttribute('src', 'https://res.cloudinary.com/dm3vmtten/image/upload/v1737124858/MeAsLogo_qou7le.jpg')
        bluredBgn.style.backgroundImage = ' url("https://res.cloudinary.com/dm3vmtten/image/upload/v1737192448/flowers-19830_1920_msdfds.jpg")'
        signatur.style.filter = "invert(0)"
        document.documentElement.style.setProperty('--primary-color', '#894e0a');
        document.documentElement.style.setProperty('--text-color', '#faebd7');
        document.documentElement.style.setProperty('--movingWindow-color', '#1618199d');
        document.documentElement.style.setProperty('--cardText-color', '#0F0F0F');
        document.documentElement.style.setProperty('--hover-color', '#184b32d3');
    }
    else{
        logo.setAttribute('src','https://res.cloudinary.com/dm3vmtten/image/upload/v1737124858/MeAsLogo2_dcfriw.jpg')
        bluredBgn.style.backgroundImage = 'url("https://res.cloudinary.com/dm3vmtten/image/upload/v1737192448/after-the-rain-8311416_1920_ykmlfg.jpg")'
        signatur.style.filter = "invert(1)"
        document.documentElement.style.setProperty('--primary-color', '#162d26');
        document.documentElement.style.setProperty('--text-color', '#b4711fed');
        document.documentElement.style.setProperty('--movingWindow-color', '#0a0a0a94');
        document.documentElement.style.setProperty('--cardText-color', '#cac6bae6');
        document.documentElement.style.setProperty('--hover-color', '#e0b062d6');
    }
}

//parallax projects

// window.addEventListener('scroll', animateImages);
// window.addEventListener('resize', animateImages);

// function animateImages() {
//     let images = document.getElementsByClassName('imgP');
//     for(let i = 0; i < images.length; i++) {
//         let scrolled = window.scrollY || document.documentElement.scrollTop;
//         let offset = images[i].offsetTop;
//         let opacity = (1 - Math.max(Math.min((offset - scrolled) / window.innerHeight, 1), 0));
//         images[i].style.top = -(scrolled * (i * 0.05)) + 'px';
//         images[i].style.left = (Math.min(scrolled * (i * 0.15), 650)) + 'px';
//         images[i].style.opacity = (0 + scrolled);
//     }
// }

