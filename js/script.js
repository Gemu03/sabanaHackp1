const highlightedText = document.getElementById('highlighted-text');
const words = highlightedText.textContent.split(' ');
const videoPlayer = document.getElementsByClassName('video')[0];

let currentIndex = 0;

function highlightWord() {
  if (currentIndex >= words.length) {
    currentIndex = 0;
  }
  highlightedText.innerHTML = words.map((word, index) => {
    if (index === currentIndex) {
      return `<span class="highlight">${word}</span>`;
    } else {
      return word;
    }
  }).join(' ');
  currentIndex++;
}
setInterval(highlightWord, 300);

function clase(){
  videoPlayer.innerHTML = ``;
  videoPlayer.innerHTML = `<video id="video-player" controls>
                            <source src="assets/images/clase.mp4" type="video/mp4">
                          </video>`;
}
function pantalla(){
  videoPlayer.innerHTML = ``;
  videoPlayer.innerHTML = `<video id="video-player" controls>
                            <source src="assets/images/video.mp4" type="video/mp4">
                          </video>`;
}

function tablero(){
  videoPlayer.innerHTML = ``;
  videoPlayer.innerHTML = `<video id="video-player" controls>
                            <source src="assets/images/tablero.mp4" type="video/mp4">
                          </video>`;
}

function notas(){
  videoPlayer.innerHTML = ``;
  videoPlayer.innerHTML = `<embed src="assets/images/1vectorial.pdf" type="application/pdf" width="100%" height="600px" />`;
}

function activate(){
  window.location.href = 'https://www.spatial.io/s/Sala-de-estudio-652b3cd0effbb44efc8d042f?share=7415085208971070239';
}
