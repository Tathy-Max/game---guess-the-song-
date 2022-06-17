// html elements
const gameStartButton=document.getElementById("game-start-button")
const initialSection=document.getElementsByClassName("initial-page-section")
const gameBoardSection=document.getElementsByClassName("game-section")
const playhint1Button=document.getElementById("play-hint1")
const playhint2Button=document.getElementById("play-hint2")
const playhint3Button=document.getElementById("play-hint3")
const hint=document.getElementById("hint3")
const userInput=document.getElementById("userInput")
const userInputButton=document.getElementById("userInputButton") //check button
const outputAnswer=document.getElementById("outputAnswer")
const nextSongButton=document.getElementById("nextSong")
const score=document.getElementById("score")
const turn=document.getElementById("turn")
const gameDiv=document.getElementById("game-div")
const inputDiv=document.getElementById("input")
const gameOverScreen=document.getElementById("gameOver")
const winScreen=document.getElementById("winScreen")

// variables
let round=0
let inputCounter=[];
let audio3=new Audio(musics[round].hint1)
let audio4=new Audio(musics[round].hint2)
let song=musics[round].songName
let pontos=100
score.innerText=pontos
turn.innerText=(round+1)

// functions
function nextSong(index) {
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
function reset () { //clean up for next round
  inputCounter=[]
  outputAnswer.innerText=""
  userInput.value=""
  userInputButton.hidden=false
}
function gameOver() {
  gameDiv.classList.add("hidden")
  inputDiv.classList.add("hidden")
  gameOverScreen.classList.remove("hidden")
  winScreen.classList.add("hidden")
}
function winGame() {
  gameDiv.classList.add("hidden")
  inputDiv.classList.add("hidden")
  gameOverScreen.classList.add("hidden")
  winScreen.classList.remove("hidden")
}
// eventListeners
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
nextSongButton.addEventListener('click', () => { //eventListner nextsong button
  audioOriginal.pause() 
  reset()     
  nextSong(round+=1)
  turn.innerText=(round+1)
  hint.innerText=""  
  playhint2Button.classList.add("hidden")
  playhint2Button.classList.remove("show")
  playhint3Button.classList.add("hidden")
  playhint3Button.classList.remove("show")
})
userInputButton.addEventListener('click', () => { //eventListener check button
  let input=document.getElementById("userInput").value;
  inputCounter.push(input)
  
  if (inputCounter.length<=3 && input.toUpperCase() === song) { //if condition for right answer
    outputAnswer.innerText=`You rock! The song is ${song}`
    userInputButton.hidden=true; 
    audioOriginal.play()
    pontos+=20
    score.innerText=pontos   
  }
    else if (inputCounter.length<=3 && input.toUpperCase() !== song) { //if condition for wrong answer but still have chance to try 
      if (inputCounter.length === 3) { //if condition for third attempt 
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
      },1300);
    }
  userInput.value=""
  if (pontos<=0) {
    gameOver()
  }
});  
  


    