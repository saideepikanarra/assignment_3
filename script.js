// const API_URL = 'https://itunes.apple.com/search';

// // Function to search songs
// async function searchSongs() {
//   const query = document.getElementById('search').value;
//   const url = ${API_URL}?term=${encodeURIComponent(query)}&entity=musicTrack&limit=10;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     const songs = data.results;
//     displaySongs(songs);
//   } catch (error) {
//     console.error('Error fetching songs:', error);
//   }
// }

// // Function to display songs in the song list section
// function displaySongs(songs) {
//   const songList = document.getElementById('song-list');
//   songList.innerHTML = ''; // Clear the list

//   songs.forEach(song => {
//     const songItem = document.createElement('div');
//     songItem.classList.add('song-item');

//     songItem.innerHTML = `
//       <img src="${song.artworkUrl100}" alt="${song.trackName}">
//       <h3>${song.trackName}</h3>
//       <p>${song.artistName}</p>
//       <audio controls>
//         <source src="${song.previewUrl}" type="audio/mpeg">
//         Your browser does not support the audio element.
//       </audio>
//     `;

//     songList.appendChild(songItem);
//   });
// }


const API_URL = 'https://itunes.apple.com/search';

// Login functionality
const loginForm = document.getElementById('login-form');
const loginPage = document.getElementById('login-page');
const mainContent = document.getElementById('main-content');
const homeTab = document.getElementById('home-tab');

// Handle login form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  loginPage.style.display = 'none'; // Hide login page
  mainContent.classList.remove('hidden'); // Show main content
});

// Show search section on Home tab click
homeTab.addEventListener('click', function(event) {
  event.preventDefault();
  mainContent.classList.remove('hidden'); // Ensure main content is visible
});

// Function to search songs
async function searchSongs() {
  const query = document.getElementById('search').value;
  const url = ${API_URL}?term=${encodeURIComponent(query)}&entity=musicTrack&limit=10;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const songs = data.results;
    displaySongs(songs);
  } catch (error) {
    console.error('Error fetching songs:', error);
  }
}

// Function to display songs in the song list section
function displaySongs(songs) {
  const songList = document.getElementById('song-list');
  songList.innerHTML = ''; // Clear the list

  songs.forEach(song => {
    const songItem = document.createElement('div');
    songItem.classList.add('song-item');

    songItem.innerHTML = `
      <img src="${song.artworkUrl100}" alt="${song.trackName}">
      <h3>${song.trackName}</h3>
      <p>${song.artistName}</p>
      <audio controls>
        <source src="${song.previewUrl}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    `;

    songList.appendChild(songItem);
  });
}