class Album {
  constructor({ name, releasedYear, artist, genre }) {
    this.name = name;
    this.releasedYear = releasedYear;
    this.artist = artist;

    switch (genre) {
      case "Progressive Rock":
        this.genre = genre;
        break;
      case "Metal":
        this.genre = genre;
        break;
      case "Pop":
        this.genre = genre;
        break;
      case "Dangdut":
        this.genre = genre;
        break;
      default:
        this.genre = "Not Valid";
    }
    // this.genre = genre;
    this.songs = [];
  }

  set albumName(newName) {
    this.name = newName;
  }

  set albumRelease(newReleased) {
    this.releasedYear = newReleased;
  }

  set artistName(newArtistName) {
    this.artist = newArtistName;
  }

  set albumGenre(newGenre) {
    switch (newGenre) {
      case "Progressive Rock":
        this.genre = newGenre;
        break;
      case "Metal":
        this.genre = newGenre;
        break;
      case "Pop":
        this.genre = newGenre;
        break;
      case "Dangdut":
        this.genre = newGenre;
        break;
      default:
        this.genre = "Not Valid";
    }
  }

  set albumSong(newSong) {
    this.songs.push(newSong);
  }

  set albumSongs(songArray) {
    // Spread operator
    this.songs = songArray;
  }

  set removeAlbumSongs(newSong) {
    //newSong = "The Mirror"
    let songsArray = [];

    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i] !== newSong) {
        songsArray.push(this.songs[i]);
      }
      //["6.00"] => 0
      //["6.00"] => 1
      //["6.00", "Caught in a Web"] => 2
    }

    this.songs = songsArray;
  }

  get songList() {
    return this.songs;
  }

  get albumInfo() {
    return `${this.name} is an album from ${this.artist} released in ${this.releasedYear}. The genre is ${this.genre}`;
  }
}

const albumA = new Album({
  name: "Distance Over Time",
  releasedYear: 2019,
  artist: "Dream Theater",
  genre: "Dugem",
});

const albumB = new Album({
  name: "Epica",
  releasedYear: 2008,
  artist: "Kamelot",
  genre: "Metal",
});

albumA.albumName = "Awake";
albumA.albumRelease = 1995;

// albumA.albumSong = "6.00";
// albumA.albumSong = "The Mirror";
// albumA.albumSong = "Caught in a Web";

albumA.albumSongs = ["Song A", "Song B", "Song C"];

console.log(albumA.albumInfo);

albumA.albumGenre = "Metal";

console.log(albumA.albumInfo);

console.log("Song List: ");
for (let i = 0; i < albumA.songList.length; i++) {
  console.log(`${i + 1}. ${albumA.songList[i]}`);
}

albumA.removeAlbumSongs = "Song B";

console.log("Song Deleted! ");

console.log("Song List: ");
for (let i = 0; i < albumA.songList.length; i++) {
  console.log(`${i + 1}. ${albumA.songList[i]}`);
}

// console.log(albumB.albumInfo)
