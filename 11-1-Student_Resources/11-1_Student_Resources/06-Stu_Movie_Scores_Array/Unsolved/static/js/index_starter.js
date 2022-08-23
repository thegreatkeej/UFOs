// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = movieScores >6.6;
//goodMovieScores = movieScores >6.6
//goodMovieScores.push()
for (var i = 0; i < movieScores.length; i++) {
  console.log(goodMovieScores[i]);
}

var okMovieScores = [];
okMovieScores = (movieScores >=3.4 && movieScores<=6.5) is true
for (var i = 0; i < okMovieScores.length; i++) {
  console.log(okMovieScores.push[i]);
}

var badMovieScores = [];
badMovieScores = movieScores <=3.3 
for (var i = 0; i < badMovieScores.length; i++) {
  console.log(badMovieScores.push[i]);
}
