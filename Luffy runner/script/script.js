
const player = document.querySelector('.player')
const obstaculo = document.querySelector('.obstaculo')

const jump = () => {
    player.classList.add('jump')

    setTimeout(
        () => {
            player.classList.remove('jump')
        }
    , 500)
    }

const  loop = setInterval(()=> {

const obsposition = obstaculo.offsetLeft
const playerposition = +window.getComputedStyle(player).bottom.replace('px', '')

if(obsposition <= 110 && obsposition >= 0 && playerposition <= 70){
    obstaculo.style.animation = 'none'
    obstaculo.style.left = `${obsposition}px`

    player.style.animation = 'none'
    player.style.bottom = `${playerposition}px`

    clearInterval(loop)
}

}, 10)







  

document.addEventListener('keydown', jump)
document.addEventListener('touch-start', jump)
document.addEventListener('click', jump)



