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


#### 1.1.2.1. Tabs on the movie description page

Review. General information about the film:

* Film description.
* Grade. For example, 8.9 (always one decimal place).
* Rating description (Bad, Normal, Good, Very Good, Excellent).
* Number of votes.
* Director.
* List of actors.

Details. Extended information:

* Director.
* Cast.
* Duration (hours, minutes).
* Genre.
* Year of release.
* Reviews. List of user reviews.

#### 1.1.2.2. Film rating

The textual representation of the film rating is formed according to the following rules:

* from 0 to 3 - Bad.
* from 3 to 5 - Normal.
* from 5 to 8 - Good.
* from 8 to 10 - Very good.
* 10 - Awesome.

#### 1.1.2.3. Similar films

The “More like this” block shows similar films. The block displays up to 4 cards of similar films.

A list of similar films is downloaded from the server (see “Routes”).

The cards contain the same set of information as the cards on the main page.

Clicking on a card from the “More like this” block takes you to the “Film” page of the corresponding film.

#### 1.1.2.4. Reviews

**Each review contains:**

* Review text.
* User rating.
* Username.
* Review date in the format: Month (full name), day, year. For example: December 24, 2018.
* Adding a new review is done by clicking the “Add review” button. The button should only be visible to authorized users.

#### 1.1.3. Feedback form

When you click on the “Add review” button, you go to the Add review page (/films/:id/review).

The page is available only to authorized users. Unauthorized users are redirected to the Sign In page.

The user rates the film from 1 to 10. The rating is given by highlighting a certain number of stars. If a film does not yet have ratings from users, its rating on the server is 0.

The review text must be no less than 50 and no more than 400 characters.

Until the user has given a rating and entered the allowed amount of text, the button to send a review is not active.

When you click the "Post" button and submit the data, the "Submit" button and the entire form should be blocked. The form and button are unlocked if the submission is successful or if an error occurs.

If the form is submitted successfully, the user is redirected to the current movie card.

If an error occurs, the user should be notified. The way the error is displayed is at the discretion of the developer.

#### 1.1.4. MyList page

The page contains information about films added to the “To Watch” list.

The data for the MyList page is always loaded from the server. A separate route is provided for this (see section “Interaction with the server”).

Adding to the “To Watch” list is done by clicking on the “+ MyList” button on the “Film” page and on the main page for a promotional film. The “+ MyList” button is replaced with the “✓ MyList” button.

If a movie has already been added to the “To Watch” list, clicking on the “✓ My List” button removes the movie from the list. The “✓ MyList” button is replaced with the “+ MyList” button.

The MyList page is available only to authorized users. Unauthorized users are redirected to the "Sign In" page.

Clicking on a film card (image, title) takes you to the “Film” page with a detailed description of the film.

#### 1.1.5. Sign In page

The “Sign in” page is available at /login.

To enter the service, the user enters a login (email) and password.

Since the service does not have the ability to register, the login and password can be anything, but not empty.

The correct email must be entered in the “login” field.

A valid password must be entered in the “password” field. A valid password is a password that consists of at least one letter and number.

The page is available only to unauthorized users. Authorized users are redirected to the main page.

Error information is displayed in the error block.

#### 1.1.6. Watching films

When you click on the “Play” button, the player is drawn and the selected movie begins to be shown. An animated spinner is displayed as the movie loads. The implementation of the spinner is left to the discretion of the developer.

**Player functionality:**

* "Play/Pause". Start/stop video.
* "Fullscreen". Switch to full screen mode.
* "Time Left". Remaining video playback time. The time is displayed in the format -MM:SS - minutes, seconds or -HH:MM:SS - hours, minutes, seconds, if the video duration is more than one hour, for example:
* Less than an hour: -53:12;
* More than an hour: -01:45:35.
* "Exit". Stop viewing. The player is hiding.
* The player is implemented using <video>.

To convert video playback time to the required format, the developer can use an additional package at his discretion.

#### 1.1.7. Other
Depending on the state, some controls are given appropriate styling classes. For example, an active filter and so on. Examples are available in the markup directory.

The “My List” button (the button to add a movie to the list to watch) displays the number of movies added to the “to watch” list. Adding a film to watch, or removing a film from the “to watch” list, leads to an immediate recalculation of the number of films. Similar functionality is provided on the “My List” page.