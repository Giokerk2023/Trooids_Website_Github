function playVideo(frameId, videoSrc) {
    const frame = document.getElementById(frameId);
    const video = document.getElementById(frameId + '-video');
    
    if (videoSrc) {
        video.src = videoSrc;
        video.style.display = 'block';
        frame.style.display = 'block';
    }
}
