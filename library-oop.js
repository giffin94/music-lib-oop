const myName = 'Aedan';
let playlistCount = 0;

getTargetIndex = (playlistArray, playlist) => {
  let targetIndex;
  playlistArray.forEach((Playlist, i) => {
    if (Playlist.id === playlist) {
      targetIndex = i;
    }
  })
  return targetIndex;
}

function Library(name, creator = myName) {
  this.libName = name;
  this.creator = creator;
  this.playlists = [];
}

function Track(id, title, rating, duration) {
  this.id = id,
  this.title = title,
  this.rating = rating,
  this.duration = duration
}

function Playlist(id, name) {
  this.id = id;
  this.name = name;
  this.tracks = [];
}

Library.prototype.addNewTrack = function(title, rating, duration, playlist) {
  let targetIndex = getTargetIndex(this.playlists, playlist);
  let trackId = this.playlists[targetIndex].tracks.length + 1;
  trackId = trackId > 9 ? `t${trackId}` : `t0${trackId}`;
  this.playlists[targetIndex].tracks.push(new Track(trackId, title, rating, duration));
}

Library.prototype.addNewPlaylist = function(name) {
  playlistCount++;
  let playlistId = playlistCount > 9 ? `p${playlistCount}` : `p0${playlistCount}`;
  this.playlists.push(new Playlist(playlistId, name));
}

Library.prototype.getPlaylistRating = function(playlist) {
  let targetIndex = getTargetIndex(this.playlists, playlist);
  this.playlists[targetIndex].getAverageRating();
}

Library.prototype.getPlaylistDuration = function(playlist) {
  let targetIndex = getTargetIndex(this.playlists, playlist);
  this.playlists[targetIndex].getTotalDuration();
}
Playlist.prototype.getAverageRating = function() {
  let ratingSum = 0;
  this.tracks.forEach((track) => {
    ratingSum += track.rating;
  })
  console.log(`${this.name} has an average rating of ${ratingSum / this.tracks.length} from a total of ${this.tracks.length} tracks.`);
}

Playlist.prototype.getTotalDuration = function() {
  let totalDuration = 0;
  let formattedTime = '';
  this.tracks.forEach((track) => {
    totalDuration += track.duration;
  })
  formattedTime = `${Math.floor(totalDuration/60)} minutes and ${totalDuration % 60} seconds`;
  console.log(`${this.name} has a total duration of ${formattedTime} over ${this.tracks.length} tracks.`)
}

//driver code
const myLibrary = new Library('myLib');
myLibrary.addNewPlaylist('The Clash!');

myLibrary.addNewTrack('London Calling', 5, 119, 'p01');
myLibrary.addNewTrack('Brand New Cadillac', 5, 133, 'p01');
myLibrary.addNewTrack('Jimmy Jazz', 2, 200, 'p01');
myLibrary.addNewTrack('Hateful', 3, 190, 'p01');
myLibrary.addNewTrack('Rudie Can\'t Fail', 5, 177, 'p01');
myLibrary.addNewTrack('Spanish Bombs', 2, 189, 'p01');
myLibrary.addNewTrack('The Right Profile', 1, 180, 'p01');
myLibrary.addNewTrack('Lost in the Supermarket', 5, 180, 'p01');
myLibrary.addNewTrack('Clampdown', 4, 180, 'p01');
myLibrary.addNewTrack('The Guns of Brixton', 1, 180, 'p01');

myLibrary.getPlaylistRating('p01');
myLibrary.getPlaylistDuration('p01');


// console.log(myLibrary.playlists[0]);