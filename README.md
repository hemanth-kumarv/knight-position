# Available Moves of Knight

A webapp rendered on ExpressJS (written in Typescript) through view engines with Pug, to show the available moves for a Knight on a chessboard based on the selected cell on a chessboard. Moves are highlighted on the board, and the positions are also displayed as a list on the right.

## Features

- Clickable cells on chessboard
- Available moves highlighted
- List of Positions as bullet points

## Demo

Here is a working live demo : https://github.com/hemanth-kumarv/knight-position

### Landing screen

![](/screenshots/unselected.png)

### Center

![](/screenshots/center.png)

### Top

![](/screenshots/topLeft.png)

### Bottom

![](/screenshots/bottom.png)

## Setup

Clone this repo to your desktop and run `npm install` to install all the dependencies.

You might want to look into `index.ts` to change the port.

## Usage

After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.

Once the dependencies are installed, you need to run `npm run dev` to create a dist folder to start the server.
Then you can run `npm start` to start the application from the auto generated dist files. You will then be able to access it at `localhost:3000`

## To-do

- Unit Testing
- Better UX
- Error handling
