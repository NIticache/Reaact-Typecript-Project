// import React from 'react'
// import MovieCards from "../components/movieCards";


// const MovieList = () => {
// const dummy=[

//   {
//     "id": "/title/tt0944947/",
   
//     "title": "Game of Thrones",
//     "titleType": "tvSeries",
//     "year":2000
//   },
//  {
//     "id": "/title/tt0944947/",
   
//     "title": "Game of Thrones",
//     "titleType": "tvSeries",
//     "year":2000
//   },
//   {
//     "id": "/title/tt0944947/",
   
//     "title": "Game of Thrones",
//     "titleType": "tvSeries",
//     "year":2000
//   },
//  {
//     "id": "/title/tt0944947/",
   
//     "title": "Game of Thrones",
//     "titleType": "tvSeries",
//     "year":2000
//   },
//   {
//     "id": "/title/tt0944947/",
   
//     "title": "Game of Thrones",
//     "titleType": "tvSeries",
//     "year":2000
//   },
//  {
//     "id": "/title/tt0944947/",
   
//     "title": "Game of Thrones",
//     "titleType": "tvSeries",
//     "year":2000
//   }
// ]
// const movieData =[
//   {
//     "id": "/title/tt0944947/",
//     "image": {
//       "height": 1500,
//       "id": "/title/tt0944947/images/rm4204167425",
//       "url": "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
//       "width": 1102
//     },
//     "title": "Game of Thrones",
//     "titleType": "tvSeries",
//     "year": 2011
//   },
//   {
//     "id": "/title/tt10545296/",
//     "image": {
//       "height": 5550,
//       "id": "/title/tt10545296/images/rm1229335297",
//       "url": "https://m.media-amazon.com/images/M/MV5BNjZmYTk1MTktMDZlZS00ZGY0LTliMGEtOGU4NjQ4NTMzZDVhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
//       "width": 3600
//     },
//     "title": "The Hunger Games: The Ballad of Songbirds and Snakes",
//     "titleType": "movie",
//     "year": 2023
//   },
//   {
//     "id": "/title/tt1515091/",
//     "image": {
//       "height": 2048,
//       "id": "/title/tt1515091/images/rm1096332032",
//       "url": "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_.jpg",
//       "width": 1382
//     },
//     "title": "Sherlock Holmes: A Game of Shadows",
//     "titleType": "movie",
//     "year": 2011
//   },
//   {
//     "id": "/title/tt22168778/",
//     "image": {
//       "height": 2560,
//       "id": "/title/tt22168778/images/rm1371682049",
//       "url": "https://m.media-amazon.com/images/M/MV5BOWNiNjE2OTQtODVjNS00ZDllLWE1ZWYtNmJjMjdjNmJmY2VmXkEyXkFqcGdeQXVyMTYwNjMwMDMy._V1_.jpg",
//       "width": 1920
//     },
//     "title": "Game of Deceit",
//     "titleType": "tvMovie",
//     "year": 2023
//   },
//   {
//     "id": "/title/tt15397918/",
//     "image": {
//       "height": 1500,
//       "id": "/title/tt15397918/images/rm2975924481",
//       "url": "https://m.media-amazon.com/images/M/MV5BODkwZjc2NTgtNzljZC00NzRkLTgxNjctMDUxODU3NGM2ZDkyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
//       "width": 1000
//     },
//     "title": "Game of Love",
//     "titleType": "movie",
//     "year": 2022
//   },
//   {
//     "id": "/title/tt23464604/",
//     "image": {
//       "height": 1000,
//       "id": "/title/tt23464604/images/rm2160276481",
//       "url": "https://m.media-amazon.com/images/M/MV5BYmU1NjE0YmItYTVkYS00NGJmLWEyZDgtMjI4YmQ5NzVhZDVlXkEyXkFqcGdeQXVyMTU4MzQzNDkx._V1_.jpg",
//       "width": 667
//     },
//     "title": "Game of Love",
//     "titleType": "movie",
//     "year": 2023
//   },
//   {
//     "id": "/title/tt0077594/",
//     "image": {
//       "height": 686,
//       "id": "/title/tt0077594/images/rm3562957312",
//       "url": "https://m.media-amazon.com/images/M/MV5BNDY2N2EyOTAtMGY4Zi00Mjc3LTkzNTYtNjM2YjNhYjM2MWM5XkEyXkFqcGdeQXVyMTQ2ODE0NDA@._V1_.jpg",
//       "width": 450
//     },
//     "title": "Game of Death",
//     "titleType": "movie",
//     "year": 1978
//   },
//   {
//     "disambiguation": "I",
//     "id": "/title/tt14421754/",
//     "image": {
//       "height": 1080,
//       "id": "/title/tt14421754/images/rm4008187393",
//       "url": "https://m.media-amazon.com/images/M/MV5BMjhlMTBlMWYtODljZi00YTQ3LWFlZTQtZjRmMWI3YjFjMTJjXkEyXkFqcGdeQXVyNjQ2MjQ4MzQ@._V1_.jpg",
//       "width": 1920
//     },
//     "title": "Dirty Games",
//     "titleType": "movie",
//     "year": 2022
//   },
//   {
//     "id": "/title/tt0126916/",
//     "image": {
//       "height": 864,
//       "id": "/title/tt0126916/images/rm4105449728",
//       "url": "https://m.media-amazon.com/images/M/MV5BZDgzY2NkMTgtODQwZC00MWEzLWFlZjQtZTcxOTc3NzU1MDVhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
//       "width": 580
//     },
//     "title": "For Love of the Game",
//     "titleType": "movie",
//     "year": 1999
//   },
//   {
//     "id": "/title/tt13380510/",
//     "image": {
//       "height": 1200,
//       "id": "/title/tt13380510/images/rm3337093633",
//       "url": "https://m.media-amazon.com/images/M/MV5BNTg1MjEyNWYtNzJkZi00ZTM5LThlNWMtMmNiNmE3N2QxNTllXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
//       "width": 782
//     },
//     "title": "Game of Thrones",
//     "titleType": "video",
//     "year": 2003
//   },
//   {
//     "id": "/title/tt14466362/",
//     "image": {
//       "height": 1763,
//       "id": "/title/tt14466362/images/rm791426561",
//       "url": "https://m.media-amazon.com/images/M/MV5BMTE4MTRlNDgtZmVlMS00ZWFhLWEwZmYtMzljYTlmNWRhY2E1XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_.jpg",
//       "width": 1175
//     },
//     "title": "Rules of the Game",
//     "titleType": "tvSeries",
//     "year": 2022
//   },
//   {
//     "id": "/title/tt0093223/",
//     "image": {
//       "height": 1206,
//       "id": "/title/tt0093223/images/rm2903894529",
//       "url": "https://m.media-amazon.com/images/M/MV5BMmZiYjEzNWQtZTg1Yi00NWYyLTk5YTMtZmYxNDFhMTFlMjdjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
//       "width": 800
//     },
//     "title": "House of Games",
//     "titleType": "movie",
//     "year": 1987
//   },
//   {
//     "id": "/title/tt7316998/",
//     "image": {
//       "height": 1440,
//       "id": "/title/tt7316998/images/rm718651393",
//       "url": "https://m.media-amazon.com/images/M/MV5BMmYzNzQ5ZjMtMTQyNC00YzlkLTk4MzAtZmVmOTAxY2U4ZGE0XkEyXkFqcGdeQXVyMTMxODA5ODYx._V1_.jpg",
//       "width": 960
//     },
//     "title": "Richard Osman's House of Games",
//     "titleType": "tvSeries",
//     "year": 2017
//   },
//   {
//     "id": "/title/tt0031885/",
//     "image": {
//       "height": 1827,
//       "id": "/title/tt0031885/images/rm1989954560",
//       "url": "https://m.media-amazon.com/images/M/MV5BYTE4NjYxMGEtZmQxZi00YWVmLWJjZTctYTJmNDFmZGEwNDVhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//       "width": 1319
//     },
//     "title": "The Rules of the Game",
//     "titleType": "movie",
//     "year": 1939
//   },
//   {
//     "id": "/title/tt21391206/",
//     "image": {
//       "height": 562,
//       "id": "/title/tt21391206/images/rm3078228225",
//       "url": "https://m.media-amazon.com/images/M/MV5BMGU5NjQ0MDctNjU1MS00N2Y1LWFkZjgtNmYyYzJkNzg3ZDBkXkEyXkFqcGdeQXVyMjA0NDUxNzI@._V1_.jpg",
//       "width": 1000
//     },
//     "title": "Sea of Dawn: Adventurer's Game",
//     "titleType": "video",
//     "year": 2022
//   },
//   {
//     "id": "/title/tt21073266/",
//     "proOnly": true,
//     "title": "Untitled Jon Snow/Game of Thrones Spinoff",
//     "titleType": "tvSeries"
//   },
//   {
//     "id": "/title/tt0062591/",
//     "image": {
//       "height": 1440,
//       "id": "/title/tt0062591/images/rm3295621377",
//       "url": "https://m.media-amazon.com/images/M/MV5BMGFiYjk2ZmEtMjAxNC00YWRmLWI0NzItNTQ3ZThiNDMyMDRhXkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_.jpg",
//       "width": 960
//     },
//     "title": "The Name of the Game",
//     "titleType": "tvSeries",
//     "year": 1968
//   },
//   {
//     "id": "/title/tt16255458/",
//     "image": {
//       "height": 960,
//       "id": "/title/tt16255458/images/rm4054588929",
//       "url": "https://m.media-amazon.com/images/M/MV5BMDNkMGY5ODUtZTIyNC00MTZhLWIzZTMtYmZhZTk4NjVkYzQ3XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
//       "width": 640
//     },
//     "title": "Trapped in a Dating Sim: The World of Otome Games is Tough for Mobs",
//     "titleType": "tvSeries",
//     "year": 2022
//   },
//   {
//     "id": "/title/tt6857128/",
//     "image": {
//       "height": 750,
//       "id": "/title/tt6857128/images/rm3530220545",
//       "url": "https://m.media-amazon.com/images/M/MV5BODg5NDJhMjYtMTYyYi00NzAwLTliNmYtNGZhMjQ4ZjNkMjgyXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_.jpg",
//       "width": 1334
//     },
//     "title": "Unaired Game of Thrones Prequel Pilot",
//     "titleType": "tvMovie",
//     "year": 2019
//   },
//   {
//     "id": "/title/tt10090796/",
//     "image": {
//       "height": 1200,
//       "id": "/title/tt10090796/images/rm357065984",
//       "url": "https://m.media-amazon.com/images/M/MV5BZDdlMzQzNDQtNTAxMS00NTMyLTgxYTAtYzQ0OGI1YzZhY2Y3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
//       "width": 810
//     },
//     "title": "Game of Thrones: The Last Watch",
//     "titleType": "tvMovie",
//     "year": 2019
//   }
// ]

//   return (
//     <div>
//       <MovieCards movieData={dummy} />
//     </div>
//   )
// }

// export default MovieList
