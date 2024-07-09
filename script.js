

document.addEventListener("DOMContentLoaded", (event) => {
  var videoContainer = document.getElementById('videoContainer');
  var backgroundVideo = document.getElementById('backgroundVideo');
  videoContainer.style.display = 'block';
  backgroundVideo.play();
  const playBtn = document.querySelector(".play-btn");
  const body = document.querySelector(".body");
  const lyricsContainer = document.getElementById("lyrics");
  const button = document.getElementById('play-btn');
  const audio = document.getElementById('sound');
  button.addEventListener('click', () => {
    audio.play();
  });

  const lyrics = [
    { text: "", delay: 0 },
    { text: "โอ้ฉันรอรัก ช่วยจางหายไปจากใจฉันเสียที", delay: 0.15 },
    { text: "กี่ครั้งที่อยากก้าวไปแต่ยังอยู่ตรงนี้", delay: 0.15 },
    { text: "หลับตาภาพเธอหวนคืนกลับมานะคนดี", delay: 0.14 },
    { text: "พอได้แล้วแม้คิดถึงทุกที", delay: 0.15 },
    { text: "พอกันทีหัวใจฉันอยากลืม", delay: 0.10 },

    { text: "โปรดเถอะกลับมายังคิดถึงเธออยู่อย่างนี้", delay: 0.04 },
    { text: "ทุกครั้งที่มองฟ้ายังเห็นเธอในราตรี", delay: 0.03 },
    { text: "อ้อมกอดของความรัก แม้ผ่านไปนับปี", delay: 0.07 },
    { text: "วอนเธอช่วยจางหายไปสักทีเถอะคนดี", delay: 0.06 },
    { text: "โปรดเถอะกลับมายังคิดถึงเธออยู่อย่างนี้", delay: 0.10 },
    { text: "ทุกครั้งที่มองฟ้ายังเห็นเธอในราตรี", delay: 0.06 },
    { text: "อ้อมกอดของความรัก แม้ผ่านไปนับปี", delay: 0.06 },
    { text: "วอนเธอช่วยจางหายไปสักทีเถอะคนดี", delay: 0.07 },

  ];

  const delays = [
    4,0.5, 1, 0.5, 0.2, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 
  ];

  async function displayLyrics() {
    for (let i = 0; i < lyrics.length; i++) {
      let line = lyrics[i].text;
      let charDelay = lyrics[i].delay;
      for (let char of line) {
        lyricsContainer.innerHTML += char;
        await new Promise((resolve) => setTimeout(resolve, charDelay * 1000));
      }
      await new Promise((resolve) => setTimeout(resolve, delays[i] * 1000));
      lyricsContainer.innerHTML += "\n";
      lyricsContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
  }

  playBtn.addEventListener("click", () => {
    playBtn.style.display = "none";

    const backgroundFade = document.createElement("div");
    backgroundFade.className = "background-fade";

    body.appendChild(backgroundFade);

    displayLyrics();
  });
});
