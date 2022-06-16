// alldocuments
const gameStartButton=document.getElementById("game-start-button")
const initialSection=document.getElementsByClassName("initial-page-section")
const gameBoardSection=document.getElementsByClassName("game-section")
const hint=document.getElementById("hint3")
const userInput=document.getElementById("userInput")

const playhint1Button=document.getElementById("play-hint1")
const playhint2Button=document.getElementById("play-hint2")
const playhint3Button=document.getElementById("play-hint3")
// const playhint2ButtonHidden=document.getElementsByClassName("play-hint")
// const playhint3ButtonHidden=document.getElementsByClassName("play-hint")
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
  console.log(index)

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
}) 
playhint2Button.addEventListener('click', () => {
  audio4.play()
  playhint3Button.classList.remove("hidden")
  playhint3Button.classList.add("show")
}) 
playhint3Button.addEventListener('click', () => {
  console.log('testando')
  return displayHint3();
}) 

let inputCounter=[];

// eventlistner do botao check
userInputButton.addEventListener('click', () => {
  let input=document.getElementById("userInput").value;
  inputCounter.push(input)
  
  
  console.log(round)
  console.log(inputCounter)

  if (inputCounter.length<=3 && input.toUpperCase() === song) { //if se a resposta esta correta
    outputAnswer.innerText=`You rock! The song is ${song}`
    userInputButton.hidden=true; 
    audioOriginal.play()
    
    
    nextSongButton.addEventListener('click', () => { //eventlistner do botao nextsong
      console.log("clicou no botao next 1")
      audioOriginal.pause() 
      reset()     
      nextSong(round+=1)})
  }
  else if (inputCounter.length<=3 && input.toUpperCase() !== song) { //if se a resposta esta errada mas ainda tem vida
    if (inputCounter.length === 3) { //na terceira tentativa 
      userInputButton.hidden=true; 
      outputAnswer.innerText=`Sorry! You guessed wrong, the song is ${song}`
      audioOriginal.play()    
      
      nextSongButton.addEventListener('click', () => { //eventlistner do botao nextsong
        console.log("clicou no botao next 2")
        audioOriginal.pause()
        reset()
        nextSong(round+=1)
      })
    return
    }

    outputAnswer.innerText="Try it again!"
    setTimeout(() => {
    outputAnswer.innerText=""
    },1500);
  }
  
  userInput.value=""
});  
  
function reset () { //seta tudo para a proxima rodada
  inputCounter=[]
  outputAnswer.innerText=""
  userInput.value=""
  userInputButton.hidden=false
}
    


// function playMusic(event) {
//     for (let i = 0; i < musics.length; i++) {
//         Audio.play.hint1(musics)
//     }
 
// alert("cliquei no botao")
//   console.log("cliquei no botao") 