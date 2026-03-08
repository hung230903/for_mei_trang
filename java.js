onload = () => {
  document.body.classList.add("not-loaded");

  const startSignal = () => {
    const clickMessage = document.getElementById("click-message");
    if (clickMessage) {
      clickMessage.style.opacity = "0";
      setTimeout(() => clickMessage.remove(), 500);
    }

    const backgroundMusic = document.getElementById("background-music");
    if (backgroundMusic) {
      backgroundMusic.play();
    }

    // Start blooming after 10 seconds of music as per original setting
    setTimeout(() => {
      document.body.classList.remove("not-loaded");
    }, 10000); // 10s delay

    // Remove the event listener so it only runs once
    document.removeEventListener("click", startSignal);
  };

  document.addEventListener("click", startSignal);
};
