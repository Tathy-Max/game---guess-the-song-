const musics = [
    {
      songName: 'love of my life',
      songArtist: 'queen',
      hint1: '../musics/loveofmylife-hint2.m4a',
      hint2: '../musics/loveofmylife-hint3.m4a',
      hint3: 'One of the most desired feelings in the world + The opposite of death',
    },
    {
      songName: 'candy shop',
      songArtist: '50 cent',
      hint1: '',
      hint2: '',
      hint3: 'Treat that every child likes + Action of spending money',
    }
];

const playMusicButton = document.getElementById("play-hint1")
function playMusic(event) {
    For (let i = 0; i < musics.length; i++) {
        Audio.play.hint1(musics)
    }
    

}

document.addEventListener('click', playMusic)