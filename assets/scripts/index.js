// alldocuments
const gameStartButton=document.getElementById("game-start-button")
const initialSection=document.getElementsByClassName("initial-page-section")
const gameBoardSection=document.getElementsByClassName("game-section")
const hint=document.getElementById("hint3")
const userInput=document.getElementById("userInput")
const score=document.getElementById("score")
const turn=document.getElementById("turn")
const gameOverScreen=document.getElementById("gameOver")
const winScreen=document.getElementById("winScreen")

const playhint1Button=document.getElementById("play-hint1")
const playhint2Button=document.getElementById("play-hint2")
const playhint3Button=document.getElementById("play-hint3")
// const playhint2ButtonHidden=document.getElementsByClassName("play-hint")
// const playhint3ButtonHidden=document.getElementsByClassName("play-hint")
const nextSongButton=document.getElementById("nextSong")
const inputDiv=document.getElementById("input")

const outputAnswer=document.getElementById("outputAnswer")
const userInputButton=document.getElementById("userInputButton")
//const backTobeginButton=document.getElementById("backTobegin")

// all variables
let round=0
turn.innerText=(round+1)
let inputCounter=[];
let pontos=100
score.innerText=pontos

// all instances
let audio3=new Audio(musics[round].hint1)
let audio4=new Audio(musics[round].hint2)
let song=musics[round].songName

// const audio1=new Audio("./assets/musics/loveofmylife-hint1.m4a") // hint1
// const audio2=new Audio("./assets/musics/loveofmylife-hint2.m4a") // hint2

// all functions
function nextSong(index) {
  console.log(index)
  if (index===4) {
    winGame()
    return
  }

  audio3=new Audio(musics[index].hint1)
  audio4=new Audio(musics[index].hint2)
  audioOriginal=new Audio(musics[index].originalMusic)
  
  song=musics[index].songName
}

  

function displayHint3(){
  hint.innerText=musics[round].hint3
}

// all events
gameStartButton.addEventListener('click', () => {
  initialSection[0].classList.remove("show")
  initialSection[0].classList.add("hidden")

  gameBoardSection[0].classList.remove("hidden")
  gameBoardSection[0].classList.add("show")
  
  nextSong(round)
})  

playhint1Button.addEventListener('click', () => {
  audio3.play();
  playhint2Button.classList.remove("hidden")
  playhint2Button.classList.add("show")
  pontos-=10
  score.innerText=pontos
}) 
playhint2Button.addEventListener('click', () => {
  audio4.play()
  playhint3Button.classList.remove("hidden")
  playhint3Button.classList.add("show")
  pontos-=10
  score.innerText=pontos
}) 
playhint3Button.addEventListener('click', () => {
  pontos-=10
  score.innerText=pontos
  return displayHint3();
}) 


nextSongButton.addEventListener('click', () => { //eventlistner do botao nextsong
  console.log("clicou no botao next 1")
  audioOriginal.pause() 
  reset()     
  nextSong(round+=1)
  turn.innerText=(round+1)
  hint.innerText=""

  console.log(round)
  
})





// eventlistner do botao check
userInputButton.addEventListener('click', () => {
  





  let input=document.getElementById("userInput").value;
  inputCounter.push(input)
  
  if (inputCounter.length<=3 && input.toUpperCase() === song) { //if se a resposta esta correta
    outputAnswer.innerText=`You rock! The song is ${song}`
    userInputButton.hidden=true; 
    audioOriginal.play()
    pontos+=20
    score.innerText=pontos   
  }
    else if (inputCounter.length<=3 && input.toUpperCase() !== song) { //if se a resposta esta errada mas ainda tem vida
      
      if (inputCounter.length === 3) { //na terceira tentativa 
        userInputButton.hidden=true; 
        outputAnswer.innerText=`Sorry! You guessed wrong, the song is ${song}`
        audioOriginal.play() 
        pontos-=10
        score.innerText=pontos   
        return
      }

      outputAnswer.innerText="Try it again!"
      setTimeout(() => {
      outputAnswer.innerText=""
      },1500);
    }
  userInput.value=""

  if (pontos<=0) {
    gameOver()
  }

});  
  
function reset () { //seta tudo para a proxima rodada
  inputCounter=[]
  outputAnswer.innerText=""
  userInput.value=""
  userInputButton.hidden=false
}

function gameOver() {
  inputDiv.classList.add("hidden")
  gameOverScreen.classList.remove("hidden")
}

function winGame() {
  inputDiv.classList.add("hidden")
  winScreen.classList.remove("hidden")
}
console.log(inputDiv)
    


// function playMusic(event) {
//     for (let i = 0; i < musics.length; i++) {
//         Audio.play.hint1(musics)
//     }
 
// alert("cliquei no botao")
//   console.log("cliquei no botao") 