function showPart2() {
    document.getElementById('part1').classList.add('hidden');
    document.getElementById('part2').classList.remove('hidden');
}

function showPart3() {
    document.getElementById('part2').classList.add('hidden');
    document.getElementById('part3').classList.remove('hidden');
}

function showLoading() {
    document.getElementById('part3').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('videoContainer').classList.remove('hidden');
        playVideo();
    }, 3000);
}

function playVideo() {
    const video = document.getElementById('birthdayVideo');
    video.play();

    video.onended = function() {
        document.getElementById('videoContainer').classList.add('hidden');
        document.getElementById('finalMessage').classList.remove('hidden');
    };
}
