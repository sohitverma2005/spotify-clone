// document.addEventListener("DOMContentLoaded", () => {
//     // Progress Bar
//     const progressBar = document.querySelector(".progress-bar");
//     const currTime = document.querySelector(".curr-time");
//     const totalTime = document.querySelector(".total-time");
//     const musicTitle = document.querySelector(".title-alb"); // Update music title
//     const musicImage = document.querySelector(".music-title"); // Update album art

//     let duration = 170; // Example duration in seconds (2:50)
//     totalTime.textContent = formatTime(duration);

//     progressBar.addEventListener("input", (e) => {
//         const current = Math.floor((e.target.value / 100) * duration);
//         currTime.textContent = formatTime(current);
//     });

//     function formatTime(seconds) {
//         const minutes = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${minutes}:${secs.toString().padStart(2, "0")}`;
//     }

//     // Volume Control
//     const volumeBar = document.querySelector(".volume-bar");
//     const volumeIcon = document.querySelector(".fa-volume-high");

//     volumeBar.addEventListener("input", (e) => {
//         const volumeLevel = e.target.value;
//         if (volumeLevel == 0) {
//             volumeIcon.className = "fa-solid fa-volume-xmark";
//         } else if (volumeLevel < 50) {
//             volumeIcon.className = "fa-solid fa-volume-low";
//         } else {
//             volumeIcon.className = "fa-solid fa-volume-high";
//         }
//     });

//     // Like Button
//     const likeButton = document.querySelector(".like");

//     likeButton.addEventListener("click", () => {
//         likeButton.classList.toggle("fa-solid");
//         likeButton.classList.toggle("fa-regular");
//     });

//     // Card Interactivity
//     const cards = document.querySelectorAll(".card");
//     cards.forEach((card) => {
//         card.addEventListener("click", () => {
//             const songTitle = card.querySelector(".card-title").textContent;
//             const songImage = card.querySelector(".card-img").src;
//             updatePlayingSong(songTitle, songImage);
//         });
//     });

//     function updatePlayingSong(title, imageSrc) {
//         musicTitle.textContent = title; // Update the displayed song title
//         musicImage.src = imageSrc; // Update the album art
//         // alert(`Now Playing: ${title}`);
//     }
// });











// document.addEventListener("DOMContentLoaded", () => {
//     // Progress Bar
//     const progressBar = document.querySelector(".progress-bar");
//     const currTime = document.querySelector(".curr-time");
//     const totalTime = document.querySelector(".total-time");

//     let duration = 170; // Example duration in seconds (2:50)
//     totalTime.textContent = formatTime(duration);

//     progressBar.addEventListener("input", (e) => {
//         const current = Math.floor((e.target.value / 100) * duration);
//         currTime.textContent = formatTime(current);
//     });

//     function formatTime(seconds) {
//         const minutes = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${minutes}:${secs.toString().padStart(2, "0")}`;
//     }

//     // Volume Control
//     const volumeBar = document.querySelector(".volume-bar");
//     const volumeIcon = document.querySelector(".fa-volume-high");

//     volumeBar.addEventListener("input", (e) => {
//         const volumeLevel = e.target.value;
//         if (volumeLevel == 0) {
//             volumeIcon.className = "fa-solid fa-volume-xmark";
//         } else if (volumeLevel < 50) {
//             volumeIcon.className = "fa-solid fa-volume-low";
//         } else {
//             volumeIcon.className = "fa-solid fa-volume-high";
//         }
//     });

//     // Like Button
//     const likeButton = document.querySelector(".like");

//     likeButton.addEventListener("click", () => {
//         likeButton.classList.toggle("fa-solid");
//         likeButton.classList.toggle("fa-regular");
//     });

//     // Card Interactivity
//     const cards = document.querySelectorAll(".card");
//     cards.forEach((card) => {
//         card.addEventListener("click", () => {
//             const songTitle = card.querySelector(".card-title").textContent;
//             alert(`Playing: ${songTitle}`);
//         });
//     });
// });







// document.addEventListener('DOMContentLoaded', () => {
//     // Playback bar functionality
//     const progressBar = document.querySelector('.progress-bar');
//     const currTime = document.querySelector('.curr-time');
//     const totalTime = document.querySelector('.total-time');

//     progressBar.addEventListener('input', (event) => {
//         const progressValue = event.target.value;
//         const totalDuration = 170; // Assume total duration is 2:50 (170 seconds)
//         const currentDuration = (progressValue / 100) * totalDuration;

//         const minutes = Math.floor(currentDuration / 60);
//         const seconds = Math.floor(currentDuration % 60).toString().padStart(2, '0');
//         currTime.textContent = `${minutes}:${seconds}`;
//     });

//     // Volume bar functionality
//     const volumeBar = document.querySelector('.volume-bar');
//     volumeBar.addEventListener('input', (event) => {
//         const volumeValue = event.target.value;
//         console.log(`Volume: ${volumeValue}%`); // For demonstration
//     });

//     // Like button toggle
//     const likeButton = document.querySelector('.like');
//     likeButton.addEventListener('click', () => {
//         if (likeButton.classList.contains('fa-regular')) {
//             likeButton.classList.replace('fa-regular', 'fa-solid');
//         } else {
//             likeButton.classList.replace('fa-solid', 'fa-regular');
//         }
//     });

//     // Dynamic song info
//     const songTitle = document.querySelector('.title-alb');
//     const songImage = document.querySelector('.music-title');

//     function updateSongInfo(title, imagePath) {
//         songTitle.textContent = title;
//         songImage.src = imagePath;
//     }

//     // Example of updating song info dynamically
//     setTimeout(() => {
//         updateSongInfo('New Song Title', './assest/new_image.jpg');
//     }, 5000); // Updates after 5 seconds
// });






// document.addEventListener("DOMContentLoaded", () => {
//     // Music player functionality
//     const progressBar = document.querySelector(".progress-bar");
//     const currTime = document.querySelector(".curr-time");
//     const totalTime = document.querySelector(".total-time");

//     const audio = new Audio('your-audio-file.mp3'); // Add your audio file path here
//     totalTime.textContent = formatTime(audio.duration || 170); // Default to 2:50 if duration isn't loaded

//     // Play and update progress bar
//     const updateProgress = () => {
//         const progress = (audio.currentTime / audio.duration) * 100;
//         progressBar.value = progress;
//         currTime.textContent = formatTime(audio.currentTime);
//     };

//     audio.addEventListener("timeupdate", updateProgress);

//     progressBar.addEventListener("input", (e) => {
//         const seekTime = (e.target.value / 100) * audio.duration;
//         audio.currentTime = seekTime;
//     });

//     // Volume control functionality
//     const volumeBar = document.querySelector(".volume-bar");
//     const volumeIcon = document.querySelector(".fa-volume-high");

//     volumeBar.addEventListener("input", (e) => {
//         audio.volume = e.target.value / 100;
//     });

//     volumeIcon.addEventListener("click", () => {
//         if (audio.volume > 0) {
//             audio.volume = 0;
//             volumeBar.value = 0;
//         } else {
//             audio.volume = 0.5;
//             volumeBar.value = 50;
//         }
//     });

//     // Play button functionality
//     const playButton = document.querySelector(".player-control-icon:nth-child(3)"); // Assuming the third button is play
//     playButton.addEventListener("click", () => {
//         if (audio.paused) {
//             audio.play();
//             playButton.style.opacity = "1"; // Change style or icon to indicate playing
//         } else {
//             audio.pause();
//             playButton.style.opacity = "0.7"; // Change style or icon to indicate pause
//         }
//     });

//     // Format time in MM:SS
//     function formatTime(time) {
//         const minutes = Math.floor(time / 60);
//         const seconds = Math.floor(time % 60).toString().padStart(2, "0");
//         return `${minutes}:${seconds}`;
//     }
// });


// Variables
const progressBar = document.querySelector('.progress-bar');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.curr-time');
const totalTime = document.querySelector('.total-time');
const createPlaylistButton = document.querySelector('.badge');
const libBox = document.querySelector('.lib-box');
const musicTitle = document.querySelector(".title-alb"); // Update music title
const musicImage = document.querySelector(".music-title"); // Update album art

// Audio element simulation
let audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Example audio
audio.addEventListener('loadedmetadata', () => {
    totalTime.textContent = formatTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
});

// Play audio on clicking the play button
const playButton = document.querySelector('.player-control-icon:nth-child(3)');
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.style.opacity = 1;
    } else {
        audio.pause();
        playButton.style.opacity = 0.7;
    }
});

// Update progress bar and time
audio.addEventListener('timeupdate', () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = formatTime(audio.currentTime);
});

// Seek through the audio
progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
});

// Adjust volume
volumeBar.addEventListener('input', (e) => {
    audio.volume = e.target.value / 100;
});

// Format time to MM:SS
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

 //Like Button
    const likeButton = document.querySelector(".like");

    likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("fa-solid");
        likeButton.classList.toggle("fa-regular");
    });

    // Card Interactivity
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const songTitle = card.querySelector(".card-title").textContent;
            const songImage = card.querySelector(".card-img").src;
            updatePlayingSong(songTitle, songImage);
        });
    });

    function updatePlayingSong(title, imageSrc) {
        musicTitle.textContent = title; // Update the displayed song title
        musicImage.src = imageSrc; // Update the album art
        // alert(`Now Playing: ${title}`);
    }

// Create Playlist Functionality
createPlaylistButton.addEventListener('click', () => {
    const playlistName = prompt('Enter Playlist Name:');
    if (playlistName) {
        const newPlaylist = document.createElement('div');
        newPlaylist.classList.add('box');
        newPlaylist.innerHTML = `
            <p class="box-p1">${playlistName}</p>
            <p class="box-p2">Click to edit or add songs.</p>
        `;
        libBox.appendChild(newPlaylist);


    }
});