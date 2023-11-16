# Movie Review Project


## Created by: Jose M, Bailey Franklin, Nolan Wells, and Stanley Jackson


## Functions
In this app you are able to select movies from past to present.


Every movie listed has its own card. If you select the details button on the card it will take you to all of the information and the reviews of the movie. On that page you will be able to rate the movie from 1-5 stars and you will also be able to leave a comment. All of the reviews of the movie will get posted in the middle of the details page and anyone is able to add or delete comments.

## Inspiration
We created this project because we wanted to see how far we have come as developers. We thought it would be interesting if we could make a movie review app that allowed anyone to leave a review on any movie.

## Technologies
We used multiple extensions such as react-bootstrap, react, express, mongoose, mongoDB, and axios. And we used The Movie Database for our API.

## Issues or Unfinished
We had a big issue with deploying to Heroku it would not allow us to connect to our database. The ideas that we had but we are not finished with were a profile page, date added for comments, and a search bar to search for movies.



![png to font end](https://github.com/NolanWells/milestone-merm-project/blob/main/read-me-template.png)


<!-- GETTING STARTED -->
## Getting Started

The frontend is setup in the root folder. Meaning that you can just use ""npm start"" after installing the packages to just view the front end.

### built with

[![My Skills](https://skillicons.dev/icons?i=js,html,css,react,express,mongodb)](https://skillicons.dev)

### Installation


#### frontend
1. Clone the repo
   ```sh
   git clone https://github.com/NolanWells/milestone-merm-project.git
   ```
2. Navigate to root folder and install NPM packages at root folder.
   ```sh
   npm install
   ```
3. start. This will only host the website but cannot hold data.
   ```sh
   npm start
   ```
#### backend

4. now time to add the back end to hold data. Navigate to the backend folder and create a file named '.env'.
   ```
   PORT=3001 # or any other port
   MONGO_URI=mongodb://127.0.0.1:27017/Movies 
   ```
5. and do an npm install to install backend dependencies at the ./backend folder
   ```sh
   cd ./backend
   ```
   then
   ```sh
   npm install
   ```
6. in mongoDB comapass you'll want to create a new connection using localhost
    ```sh
    mongodb://localhost:27017
    ```
7. run the backend. Note.. make sure the the front end is not running. and make sure that you're in the backend directory "./backend"
   ```sh
   node server.js
   ```
   or if you have nodemon installed as a dev dependency.
   ```sh
   nodemon
   ```
