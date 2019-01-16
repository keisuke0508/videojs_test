var videoPlayer = videojs("videoPlayer");
videoPlayer.play();

function videoJsTest() {
  if(videoPlayer.hasClass("vjs-paused")){
    alert("start!");
    videoPlayer.play();
  }else {
    alert("stop!");
    videoPlayer.pause();
  }
}
