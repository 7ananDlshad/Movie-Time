Movie Project
This is a movie database project, where it shows movies, their casts, ratings, trailers, related movies, genres, and so on.
This project uses The Movie DB API: https://api.themoviedb.org/3.

Version 1 (25/12/2020 - 2/1/2021)
Homepage

Navbar Component
Add a universal navbar (it appears on every page) to the home page that includes buttons that go to the following pages:
• Home button, takes you to the home page.
• Search box where you can type the movie or actor name and display the related results. Logic will be added later, just add a dummy search bar.

Main Component
Add an empty main section below the navbar and above the footer. It can be empty for now.

Footer Component
Add a universal footer that includes:
• Credit to you and your partner for building the website,

Styling
• you can style the components yourself, import the stylesheet from JavaScript, not in HTML
• we use react-bootstrap library
• Style the navbar and search box
• Add simple functionality to the search box.

Version 2 (5/1/2021 – 10/1/2021)
Add a Spinner component to the Navbar component and make it invisible by default also pass a function called on Search to the SearchBox and then when you type some text inside the SearchBox component, call it to make the spinner in the Navbar component appears.

Styling
style the movies list but its better making it as a grid and each movie has the poster and title under it.

Version 3 (15/1/2021 - 27/1/2021)

• add a function inside the app.js called handleQuery(query) it will handle the change of the input in the SearchBox, pass it to The Navbar component and then pass it to the SearchBox component and onSubmit of your search form, use this function to pass the search query back to the app.js you should pass the query to the Main component as a prop too, finally console.log(props.query) inside your Main component.

• have another function called handleMovies(movies) which will do the same as handleQuery(query) function but instead when user Submit the form you should search for the input using the constructUrl function passing it the search path and query, and then return the results into the main component using the handler function, read the following points when implementing
• use this function with fetch and don’t change it, the path is basically whatever you are requesting after the TMDB_BASE_URL for example search/movie
const constructUrl = (path, query) => {
return `${TMDB_BASE_URL}/${path}? api_key=${atob ( "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU=" )}&query=${query}`;
};

• checkout this for more info about the search api endpoint https://developers.themoviedb.org/3/search/search-movies
• In the Main component send the movies to another component that will render the movies and let’s call it MoviesGrid.

• In the MoviesGrid map each movie to another component called MovieItem.
• Go to the TMDB documentations and see how you can get all the genres (the categories) and how to get popular movies in this category
• add a button in the navbar, when clicked it should fetch the genres
• Render the genres as options inside the genres dropdown
• when you change categories from the dropdown it should fetch the popular movies in that category
• update the grid with the movies you got when selector changes

Version 4 (1/3/2021 – 10/3/2021)

• Load the genres when the app loads, use the useEffect hook to fetch them.
• Create a MoviePage component. The component will be mounted when the user clicks a movie item in the grid. The grid should hide.
• In the MoviePage, use the effect hook to load the movie based on the movie_id prop.
• The MoviePage component should have a back button that when clicked, will return to the grid view.
• It is preferable that you use async/await to load the movie inside the MoviePage component.

you have created a 2 pages application. The first page is the MovieGrid, the second one is the MoviePage. While this approach works, but for large applications with many pages, we require a routing library that makes things easier for us.
Let’s explore the react-router-dom library, and refactor our app to use this library and make our pages routing professional.
Version 5 (13/3/2021 – 20/3/2021)
• When the user clicks a movie item it should go to /movie/${movie.title} using the react-router and render the movie page which is basically the MoviePage component
• When the user goes back using the browser’s back button, the app should send him to the previous page.
• When the user clicks the logo or home button, it should also send them to the grid or main page
• Organize the content inside the movie info and you should at least have an
o Image
o Title
o Release date
o Overview
o rate
o Genres (you will need to fetch all the genres and do some comparison do get the name of the genres)
o Trailers of this movie (which will include another fetch)
o Actors of this movie (which will include another fetch)

Version 6 (23/3/2021 – 31/3/2021)

• build an actor info page and add it to the router (it should have its own path like /person/${actor_id}) so when the user clicks on any actor inside the movie page it should take him to that page and fetch the actor informations.
• when you launch your website fetch the popular movies first and then when you do any searching replace those popular movies with the ones you searched for.
• add your search query to the url like mydomain.com/search?query=deadpool and if the user types this url in the browser it should show the main page and search for whatever in the query in the url and show the results for that.
