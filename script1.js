const video=document.querySelector('#video');
const play=document.querySelector('#play');
const stop=document.querySelector('#stop');
const timestamp=document.querySelector('#timestamp');
const progress=document.querySelector('#progress');

//playOrPause
function playOrPause(){
   // console.log('sdfcsd');
    if(video.paused){
        video.play();
    }
    else video.pause();
    
}

//changing icon
function changePlayPause(){
    if(video.paused){
        play.innerHTML="<i class='fa fa-play fa-2x'></i>";
    }
    else play.innerHTML="<i class='fa fa-pause fa-2x'></i>";
}

//stopping video
function stopVideo(){
    console.log(video.currentTime);
    video.currentTime=0;
    video.pause();
    //changePlayPause();
}

//update progress
function updateProgress(){
   
    progress.value = (video.currentTime / video.duration) * 100;
    let min=( Math.floor(video.currentTime/60));
    let sec=Math.floor(video.currentTime%60);
    if(min<10){
        min='0'+String(min);
    }
    if(sec<10){
        sec='0'+String(sec);
    }
    
    timestamp.innerHTML=`${min}:${sec}`;

}

//setting video according to change in progress
function setVideoProgress(){

    video.currentTime=(+progress.value*video.duration)/100;
}

// Add event listeners
video.addEventListener('click',playOrPause);
video.addEventListener('play',changePlayPause);
video.addEventListener('pause',changePlayPause);
video.addEventListener('timeupdate',updateProgress);


play.addEventListener('click',playOrPause);

stop.addEventListener('click',stopVideo);

progress.addEventListener('change',setVideoProgress);