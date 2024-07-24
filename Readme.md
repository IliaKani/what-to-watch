## 1. Description of functionality
   
### 1.1. Application pages

The application consists of several pages: Main (/), Sign In (/login), MyList (/mylist), Film (/films/:id), Add review (/films/:id/review), Player (/player/ :id).

The MyList and Add review pages are available only to authorized users. If the user is not authorized, then when navigating to these pages, they are redirected to the Sign In page.

If the user is not authorized, then when they try to go to a private page, they are redirected to the “Sign In” page (/login).

In the right corner of the header, the user’s avatar and the “Sign Out” button (if the user is authorized) or the “Sign In” link (if the user is not authorized) are displayed.

Clicking on the “Sign Out” button ends the work session - exiting the closed part of the application.

Clicking on the user's avatar takes you to the MyList page (/mylist).

Accessing a non-existent page (for example, through the address bar) does not lead to errors in the application, but is correctly processed by routing. The user is redirected to a “404” page. Page design is at the discretion of the student. In the simplest case, this could be a page with the text 404 Not Found and a link to go to the main page of the application.

#### 1.1.1. Main page

The main page presents genres and movie previews.

A page with a detailed description of the film is available to all users.

The page header displays the poster and cover of the promotional film.

The promotional film can be watched immediately by clicking the “Play” button or added to the “My List”.

Receiving a promotional film for the main page is performed by a separate request to the server (see “Routes”).

After downloading the application, 8 movie cards of arbitrary genres are displayed. “All genres” is highlighted in the list of genres.

The list of genres is built based on information about films received from the server.

The list of genres displays no more than 9 genres + All genres (displays films of any genres in the list).

#### 1.1.1.1. Movie list

When changing the genre or receiving information about films from the server, no more than 8 films are displayed in the list of films.

Showing additional films is done by clicking on the “Show more” button.

Clicking on the “Show more” button adds the next 8 films to the list or the remaining films if there are fewer.

After all movies corresponding to the selected genre are displayed, the “Show more” button is hidden.

When you move from the main page to other pages of the application and back, the counter of the films shown is reset and the countdown begins again.

#### 1.1.1.2. Movie card in movie list

The movie card displays the following information:

* Image (movie preview).
* Movie title.
* Clicking on the image or title of a movie takes you to the “Film” page (/films/:id).

When you hover and hold the mouse cursor over a movie image, a video preview of the movie starts playing instead of the image. The video player is activated one second after hovering and holding the cursor on the card with the movie.

The movie preview plays without sound. If the user moves the cursor from the card, playback stops and the card returns to its original state - instead of a video, a static image is displayed (as it was originally). When you hover over the card again, the preview playback starts again.

#### 1.1.2. Movie description page

A page with a detailed description of the film is available at /films/:id, where id is the film identifier received from the server. For example: /films/123.

A page with a detailed description of the film is available to all users.

The page header contains the following set of information:

* Large poster.
* Film cover.
* Movie title.
* Genre.
* Year of release.
* Button to start viewing.
* Button to add to the “To watch” list.
* Button to go to the page for adding a review.

More detailed information about the film is presented on three tabs:

* Overview. General information.
* Details. Extended information.
* Reviews. Reviews.