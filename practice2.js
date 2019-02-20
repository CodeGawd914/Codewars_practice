/*
Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

*/

function songDecoder(song){
  let remove = "WUB"
  let songOrigin = ''
  let songLyrics = song.split(remove)
  for (index = 0; index < songLyrics.length; ++index) {
    if (songLyrics[index] != ''){
      songOrigin = songOrigin + ' ' + songLyrics[index];
    }
  }
  songOrigin = songOrigin.trim();
  return songOrigin;
}
