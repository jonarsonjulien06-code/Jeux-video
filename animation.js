const nextButton = document.querySelector(".next-btn");
const video = document.querySelector(".hero-video");

const movieList = [ 'video/pubg.mp4', 'video/Fortnite Battle Royale Chapter Seven_ Pacific Break _ Cinematic Trailer(720P_HD).mp4',];

let index = 0;
nextButton.addEventListener('click', function(){

    index += 1
    video.src = movieList[index];

    if (index === 1){
        index = -1;
    }
})

function activerSon(video, bouton){
    let currentvideo = document.getElementById(video);

    if(currentvideo.muted){
        let videos = document.querySelectorAll("video");
        videos.forEach(video => {
            video.muted = true;

        });
        currentvideo.muted = false;
        currentvideo.play();
        bouton.textContent = MUTE;

    }
    else{
        currentvideo.muted = true;
        bouton.textContent = SON;
    }
}


