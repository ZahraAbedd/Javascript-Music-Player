let coverMusic = document.querySelector("img");
let volumeShow = document.querySelector(".volume-show")
let pesentMusic = document.querySelector("#present")
let TotalMusics = document.querySelector("#total")
let nameMusic = document.querySelector("#title")
let nameSinger = document.querySelector("#artist")
let playIcon = document.querySelector("#play")
let track = document.createElement("audio");
let rangeSound = document.querySelector("#volume")
let volumeIcone = document.querySelector("#volume-icone")
let autoMusic = document.querySelector('#auto')
let slider = document.querySelector("#duration-s")
reapet_song = document.querySelector("#repeat")


repeat=0
autoplay=0
let musics = [
    {
        id : 1,
        nameSong : "SET FIRE",
        singer : "Adle",
        path :"./musics/set-fire.mp3",
        img : "imgs/set-fire.jpg"

    },
    {
        id : 2,
        nameSong : "WITHOUT YOU !!!",
        singer : "Joun",
        path :"./musics/The Kid Laroi - WITHOUT YOU.mp3",
        img : "./imgs/ea.jpg"
    },
    {
        id:3,
        nameSong : "READY FOR IT",
        singer : "Youdle",
        path : "./musics/ready-for-it.mp3",
        img : "./imgs/ready-for-it.jpg"
    },
    {
        id : 4,
        nameSong : "LOSE YOUR SELF",
        singer : "Younger",
        path : "./musics/lose-yourself.mp3",
        img : "./imgs/lose-yourself.jpg"
    },
    {
        id : 5,
        nameSong : "SYMPHONY",
        singer : "Bandle",
        path :"./musics/Clean-Bandit-Feat.-Zara-Larsson-Symphony.mp3",
        img : "./imgs/ta.jpg" 
    }
]

playingMusic = false
currentMusic = 0
timer= 0

function loadMusic (){
    clearInterval(timer)
    reset_slider()
    coverMusic.src = musics[currentMusic].img;
    nameMusic.innerText = musics[currentMusic].nameSong;
    nameSinger.innerText = musics[currentMusic].singer;
    track.src = musics[currentMusic].path
    pesentMusic.innerText = currentMusic+1
    TotalMusics.innerText = musics.length;
    timer = setInterval(range_slider,1000)
    track.load()
    
}
loadMusic()


function play(){
    if(playingMusic == false){
        playMusic()
    }else{
        pauseMusic()
    }
}

function playMusic(){
    track.play();
    playIcon.innerHTML = `<i class="fa fa-pause" aria-hidden="true">`
    coverMusic.style.animationPlayState = "running"
    playingMusic = true;
}

function pauseMusic(){
    track.pause();
    playIcon.innerHTML = `<i class="fa fa-play" aria-hidden="true">`
    coverMusic.style.animationPlayState = "paused"
    playingMusic=false
}

function next_song(){
    if(currentMusic != musics.length-1){
        currentMusic +=1
        loadMusic(currentMusic)
        playMusic()
    }else{
        currentMusic=0
        loadMusic(currentMusic)
        playMusic()
    }
}

function previous_song(){
    if(currentMusic != 0){
        currentMusic-=1;
        loadMusic(currentMusic)
        playMusic()
    }else{
        currentMusic = musics.length-1;
        loadMusic(currentMusic)
        playMusic()

    }
}

function mute_sound(){
    track.volume = 0;
    volumeShow.innerText = 0
    volumeIcone.classList.replace("fa-volume-up","fa-volume-off");
    rangeSound.value = 0

}

rangeSound.addEventListener("input",(e)=>{
    track.volume = rangeSound.value/100;
    volumeShow.innerText = rangeSound.value
    volumeIcone.classList.replace("fa-volume-off","fa-volume-up");
    if(track.volume == 0){
        volumeIcone.classList.replace("fa-volume-up","fa-volume-off");
    }
})

function autoplay(){
   
}
function reset_slider(){
    slider.value = 0
}

function range_slider(){

    let position = track.currentTime * (100/track.duration);
    slider.value = position
    if(track.ended){
        playIcon.innerHTML = `<i class="fa fa-play" aria-hidden="true">`;
        if(repeat == 1){
            loadMusic(currentMusic)
            playMusic()
        }else if(autoplay == 1){
            currentMusic+=1
            loadMusic(currentMusic)
            playMusic()
        }

    }
}



function change_duration(){
    let position = track.duration * (slider.value/100)
    track.currentTime = position;
}


function autoplay_switch(){
    if(autoplay == 1){
        autoplay=0;
        autoMusic.style.backgroundColor = "rgba(0,0,0,0.2)";
    }else{
        autoplay = 1
        autoMusic.style.backgroundColor = "#ff8a65"
    }
}




function repeatSong(){
    if(repeat == 1){
        repeat=0;
        reapet_song.style.backgroundColor = "rgba(0,0,0,0.2)";
        
    }else{
        repeat=1;
        reapet_song.style.backgroundColor = "#ff8a65";
    }
}
