//youtube video--------

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //재생할 유튜브 id
    playerVars : {
        autoplay : true, //자동재생여부
        loop : true, //반봇 재생여부
        playlist : 'An6LvWQuj_8' //반복재생할 영상 아이디
    },
    events: {
      'onReady': function(event){
          event.target.mute();//음소거

      }
    }
  });
}