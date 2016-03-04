app.controller('MainController', function($scope){
   
    $scope.films = [{
            name: 'Cinderella',
            year: 1950
        }, {
            name: 'Snow White and the Seven Dwarfs',
            year: 1937
        }, {
            name: 'Fantasia',
            year: 1940
        }, {
            name: 'The Jungle Book',
            year: 1967
        }, {
            name: 'Sleeping Beauty',
            year: 1959
        }, {
            name: 'Pinocchio',
            year: 1940
        }, {
            name: 'One Hundred and One Dalmations',
            year: 1961
        }, {
            name: 'Bambi',
            year: 1942
        }, {
            name: 'Alice in Wonderland',
            year: 1951
        }, {
            name: 'Peter Pan',
            year: 1953
        }, {
            name: 'The Sword in the Stone',
            year: 1963
        }, {
            name: 'Lady and the Tramp',
            year: 1955
        }, {
            name: 'Song of the South',
            year: 1946
        }, {
            name: 'Steamboat Willie',
            year: 1928
        }];
        
    $scope.addMovie = function(){
        $scope.films.push($scope.newMovie);
        $scope.newMovie= " ";
    }
    
    $scope.removeMovie = function (index) {
        $scope.films.splice(index,1);
    } 
    
//Question 1 - Finish the function called filmCount so it will return the total number of films in the array
    function filmCount(arr) {
        return arr.length
    }

// filmCount(film)

//Question 2 - Find film by Title 
    function findTitle(title, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].name === title) {
                console.log(arr[i])
            }
        }
    }

// findTitle("Cinderella", movies)

//Question 3 - Add each of the movies in the newFilms array to the films array
var newFilms = [{
  name: 'Tangled',
  year: 2010
},{
  name: 'Aladdin',
  year: 1992
},{
  name: 'Zootopia',
  year: 2016
},{
  name: 'The Little Mermaid',
  year: 1989
},{
  name: 'Beauty and the Beast',
  year: 1991
}]

function push(arr){
    for (var i = 0; i < arr.length; i++){
      films.push(arr[i])
    }
    return films
}

// push(newFilms);

//Question 4 - Remove any duplicate titles found in the films array by name
function removeDups(arr){

    for(var i = 0; i < arr.length; i++){
        var currentFilm = arr[i];
        for(var j = i+1; j < arr.length; j++){
            var nextFilm = arr[j];
            if(currentFilm.name === nextFilm.name){
                arr.splice(j, 1);
                j--;
            }
        }
    }

return arr;
}

// removeDups(films)

//Question 5 - Find All films within a starting year and ending year
function findReleasesWithin(startYear, endYear, arr){
    filmsInYourYears = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i].year >= startYear && arr[i].year <= endYear){
            filmsInYourYears.push(arr[i])
        }
    } return filmsInYourYears
}

findReleasesWithin(1950, 2016, films)

//BONUS QUESTION - Arrange the films array from oldest to newest 
function sortByYear(arr){
   var year= []
   var newArrOfFilms = []
//    this pushes all the years of the movies into an array
   for (var i = 0; i < arr.length; i++){
     year.push(arr[i].year)
   }
   year.sort()

// now I want to iterate over the years and then match them to the movie and push the whole object back to a new ordered array
   for(var i = 0; i <year.length; i++){
     var currentYearObj = year[i];

     for(var j = 0; j < arr.length; j++){
       var currentFilmObj = arr[j]
// the problem is that if two films have the same year we will lose the second film because it will be replaced by the first
// i tried to write a work around for it but it was really ugly and would only fix the problem in this specific array
       if (currentFilmObj.year === currentYearObj){
          newArrOfFilms.push(currentFilmObj)
          break
       } 
     }     
   }   
return newArrOfFilms
}
    
})