let progress = document.getElementById("progress")
let songBtn = document.getElementById("song")
let ctrlIcon = document.getElementById("ctrlIcon")

songBtn.onloadedmetadata = function(){
    progress.max = songBtn.duration;
    progress.value = songBtn.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        songBtn.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        songBtn.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if(songBtn.play()){
   setInterval(() => {
    progress.value = songBtn.currentTime
   } ,500)
}
progress.onchange = function(){
    songBtn.play();
    songBtn.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}
