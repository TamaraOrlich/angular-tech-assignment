# AngularTechAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

Requirements: Node 20.9

## Development server

Run `npm install` and then `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## The project
The has 3 different screens:
1) Screen 1 - Movie List View: The movies list based on the following API:
https://developers.themoviedb.org/3/movies/get-movie-details
    - Use Case 1: As a user, I see a paginated list of the most popular movies, so I can know the Title, Poster image, Release date and popularity of each movie.
    - Use Case 2: As a user, I am able to search any content that matches with my typing.
2) Screen 2 - Movie Details View
    - Use Case 1: As a not logged user, I see the details for a specific movie, so I can see more details than in the List view.
    - Use Case 2: As a logged user, on the movie detail view, I am able to rate a movie, giving the movie a punctuation from 1 to 10.
3) Screen 3 - Log In View
    - Use Case 1: As a not logged user, I see a page, with a login form, so I became a logged in user. Credentials to login:
        - email: info@2coders.com
        - password: password