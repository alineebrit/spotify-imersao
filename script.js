const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("playlist-container");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;

  fetch(url)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  results.forEach((element) => {
    console.log(element);
    artistImage.src = element.urlImg;
    const nameArtistCapitalized = element.name.charAt(0).toUpperCase() + element.name.slice(1);
    artistName.innerText = nameArtistCapitalized;
  });
  resultArtist.classList.remove("hidden");

}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
      if (playlistContainer) {
        playlistContainer.classList.remove("hidden");
      }
    return;
  }
  requestApi(searchTerm);
});

