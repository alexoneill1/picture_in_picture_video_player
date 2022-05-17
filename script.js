const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt user to select media stream, pass to video element, play
async function selectMediaStream() {
    try {
        // get video stream data, wait until the user has selected screen to share
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // pass video to video element
        videoElement.srcObject = mediaStream;
        // then use a function to play the video
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', async () => {
    // disable the button
    button.disabled = true;
    // start picture in pucture
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});

selectMediaStream();
