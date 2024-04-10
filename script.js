const box = document.querySelector('.container');
const button = document.querySelector('.button');
const boxWidth = box.offsetWidth;
const boxHeight = box.offsetHeight;

function randomRGB(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue}`;
}

function randomPosition(maxWidth, maxHeight) {
    const left = Math.floor(Math.random() * (maxWidth - 100));
    const top = Math.floor(Math.random() * (maxHeight - 100));
    

    return {
        left: left,
        top: top
    }
     
}


button.addEventListener('click', () => {
    const circle = document.createElement('div');
    circle.setAttribute('class', 'circle');
    circle.style['background-color'] = randomRGB();
    circle.style.left = `${randomPosition(boxWidth,boxHeight).left}px`
    circle.style.top = `${randomPosition(boxWidth,boxHeight).top}px`

    box.appendChild(circle)
})