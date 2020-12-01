const button = document.getElementById("button");
const videoElement = document.getElementById("video");

//  Prompt the user to select a media

async function selectMediaStream() {
  try {
    const mediaStrem = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStrem;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.error(error);
  }
}

button.addEventListener("click", async () => {
  // Disable the button
  button.disabled = true;
  // start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset the button
  button.disabled = false;
});

//On Load
selectMediaStream();
