const backgroundImages = ["../images/paris.jpg", "../images/londres.jpg", "../images/maurice.jpg", "../images/japon.jpg"];
  let currentImageIndex = 0;

  function changeBackgroundImages() {
    document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
    currentImageIndex++;

    if (currentImageIndex >= backgroundImages.length) {
      currentImageIndex = 0;
    }
  }

  const changeBackgroundButton = document.getElementById("changeBackgroundButton");
  changeBackgroundButton.addEventListener("click", changeBackgroundImages);
