let TodasAsMusicas = [
    {titulo: 'Dreamer' , artista: 'Alan Walker' ,
    img: 'midias-music/alan-walker-capa.jpg', 
    src: 'midias-music/Alan Walker - Dreamer [NCS Release].mp3' , backColor: 'alan-walker'
    } ,

    {titulo: 'On & On (feat. Daniel Levi)' , artista: 'Cartoon, jéja' , 
    img: 'midias-music/ncs-capa.jpg' , src: 'midias-music/Cartoon, Jéja - On & On (feat. Daniel Levi) [NCS Release].mp3' , backColor: 'cartoon'
    } , 

    {titulo: 'Shine', artista: 'Spektrem', img: 'midias-music/ncs-capa-2.jpg' ,
    src: 'midias-music/Spektrem - Shine [NCS Release].mp3' , backColor: 'spektrem'
    }
]



let musica = document.querySelector('audio')
let botaoPlay = document.querySelector('.botao-play')
let botaoPause = document.querySelector('.botao-pause')
let barra = document.querySelector('progress')
let tempoDecorrido = document.querySelector('.inicio')
let tempoDeMusica = document.querySelector('.fim')



let indexMusica = 0
let imagem = document.querySelector('img')
let nomeMusica = document.querySelector('.nome-musica')
let nomeArtista = document.querySelector('.nome-artista')


renderizarMusica(0)



// eventos
document.querySelector('.botao-play').addEventListener('click' , tocarMusica)
document.querySelector('.botao-pause').addEventListener('click' , pararMusica)
musica.addEventListener('timeupdate' , atualizarBarra)



document.querySelector('.botao-anterior').addEventListener('click' , ()=>{
    indexMusica--

    if (indexMusica < 0) {
        indexMusica = 2
    }
   

    renderizarMusica(indexMusica)
    tocarMusica()


    

})

document.querySelector('.botao-proxima').addEventListener('click' , ()=>{
    indexMusica++
    
    if (indexMusica > 2) {
        indexMusica = 0
    }

   

    renderizarMusica(indexMusica)
    tocarMusica()

    
    
})



//funcoes

function tocarMusica() {
    musica.play()
    botaoPlay.style.display = 'none'
    botaoPause.style.display = 'block'
}

function pararMusica() {
    musica.pause()
    botaoPause.style.display = 'none'
    botaoPlay.style.display = 'block'
}

function atualizarBarra() {
    barra.style.width = Math.floor(musica.currentTime / musica.duration * 100) + '%'
   
    tempoDecorrido.textContent = converterTempo(musica.currentTime)

}

function converterTempo() {
    let campoMinutos = Math.floor(musica.currentTime / 60) 
    let campoSegundos = Math.floor(musica.currentTime % 60) 

    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos
    } 
    return campoMinutos + ':' + campoSegundos

}

function renderizarMusica(index) {
    musica.setAttribute('src' , TodasAsMusicas[index].src)
    imagem.src = TodasAsMusicas[index].img
    nomeArtista.textContent = TodasAsMusicas[index].artista
    nomeMusica.textContent = TodasAsMusicas[index].titulo
    document.body.classList = TodasAsMusicas[index].backColor
}

