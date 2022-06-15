// alldocuments
const gameStartButton=document.getElementById("game-start-button")
const initialSection=document.getElementsByClassName("initial-page-section")
const gameBoardSection=document.getElementsByClassName("game-section")
const hint=document.getElementById("hint3")

const playhint1Button=document.getElementById("play-hint1")
const playhint2Button=document.getElementById("play-hint2")
const playhint3Button=document.getElementById("play-hint3")
const nextSongButton=document.getElementById("nextSong")

const outputAnswer=document.getElementById("outputAnswer")
const userInputButton=document.getElementById("userInputButton")
//const backTobeginButton=document.getElementById("backTobegin")

// all variables
let round=0

// all instances
let audio3=new Audio(musics[round].hint1)
let audio4=new Audio(musics[round].hint2)
let song=musics[round].songName

// const audio1=new Audio("./assets/musics/loveofmylife-hint1.m4a") // hint1
// const audio2=new Audio("./assets/musics/loveofmylife-hint2.m4a") // hint2

// all functions
function nextSong(index) {
  audio3=new Audio(musics[index].hint1)
  audio4=new Audio(musics[index].hint2)
  
  song=musics[index].songName
}
//console.log(musics[0].hint1)

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
  audio3.play()
}) 
playhint2Button.addEventListener('click', () => {
  audio4.play()
}) 
playhint3Button.addEventListener('click', () => {
  // console.log('testando')
  return displayHint3();
}) 

//let song1='LOVE OF MY LIFE'

let inputCounter=[];
userInputButton.addEventListener('click', () => {
  let input=document.getElementById("userInput").value;
  
  if (inputCounter.length<2 && input.toUpperCase() === song) {
    (outputAnswer.innerText=`You rock! The song is ${song}`);
    nextSongButton.addEventListener('click', () => {
      nextSong(round+=1)})
    
    //console.log(inputCounter)
    //console.log(round)
  }
  else if (inputCounter.length<2 && input.toUpperCase() !== song) { 
    (outputAnswer.innerText="Try it again!");
    //console.log(input)
  }
  else {
    userInputButton.hidden=true; //userInputButton.setAttribute("disabled", true);
    (outputAnswer.innerText=`Sorry! You guessed wrong, the song is ${song}`);
    //console.log("acabou a chance ")
    nextSongButton.addEventListener('click', () => {
      nextSong(round+=1)})
  }  
  inputCounter.push(input)
  //console.log(inputCounter)
  //return nextSong(round)  ???
});  
  
    


// function playMusic(event) {
//     for (let i = 0; i < musics.length; i++) {
//         Audio.play.hint1(musics)
//     }
 
// alert("cliquei no botao")
//   console.log("cliquei no botao") 