//puxando a minha array de musicas
const arrMusics = musics
console.log(musics);

// todos os documents
const gameStartButton=document.getElementById("game-start-button")
const gameBoard = document.getElementById("game-div");

const playhint1Button=document.getElementById("play-hint1")
const playhint2Button=document.getElementById("play-hint2")
const playhint3Button=document.getElementById("play-hint3")

const outputAnswer=document.getElementById("outputAnswer")
const userInputButton=document.getElementById("userInputButton")

//todas as intancias
// const game=new Game(gameBoard)

const audio1=new Audio("./assets/musics/loveofmylife-hint1.m4a")
const audio2=new Audio("./assets/musics/loveofmylife-hint2.m4a")

//  todos os events
gameStartButton.addEventListener('click', () => {
  game.showGameSection()
})  

function showGameSection() {
  game.style="none";
}    

function showGameSection() {
  document.getElementById("game-div").style.display;
  
}  

playhint1Button.addEventListener('click', () => {
  audio1.play()
}) 
playhint2Button.addEventListener('click', () => {
  audio2.play()
}) 
playhint3Button.addEventListener('click', () => {
  // console.log('testando')
  return displayHint3();
}) 

function displayHint3(){
  document.getElementById("hint3").innerHTML = "One of the most desired feelings in the world + The opposite of death";
}

let song1='LOVE OF MY LIFE'

userInputButton.addEventListener('click', () => {
  let input=document.getElementById("userInput").value;
  if(input.toUpperCase()===song1) {
    outputAnswer.innerText=`You guessed right, the song is ${song1}`
  }
  else {
    (outputAnswer.innerText="Try it again!")}
}) 







// function playMusic(event) {
//     for (let i = 0; i < musics.length; i++) {
//         Audio.play.hint1(musics)
//     }
    

// }

// alert("cliquei no botao")
//   console.log("cliquei no botao") 