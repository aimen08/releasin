# Releasin Two days Technical challenge

a small service for product management (frontend and a
small supporting backend)

## Overview

the project is written using typescript (backend and frontend) below i will list some of the library i used :

### Backend

- Express
- Moongose (ORM for MongoDb)
- pino (for loggin)

### Frontend

- Tailwind CSS
- axios
- easy peasy (state mangment library built on top of redux)
- React
- React Router

## Demo

Live Demo : https://releasin-s4obu.ondigitalocean.app/

the frontend and backend are both hosted on digitalocean.

## Screenshots

![Alt text](/images/1.png?raw=true "Main Screen")

![Alt text](/images/2.png?raw=true "Add Product Modal")

![Alt text](/images/3.png?raw=true "Edit Product Modal")

![Alt text](/images/4.png?raw=true "Mongodb")

## Available Scripts

you need to setup the mongodb with you own database connection string
`./server/.env` (PS: i will deliberately leave mine there just for simplicity purposes)

before you run the react app, you need to spin of the server:

`cd ./server`

then

`npm i` to install dependencies

after that you should be ready to go

`npm run dev` (PS: it will run on port 1300 you can change that on ./server/.env)

In the project directory, you can now run:

`npm i && npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

## Note

i already made some place holder queries you can run them from

`./mongodb/placeholder.mongodb`

## Todo

this project took me one day to finish there is lot of stuff i need to tackle i will list some of them below :

- Delete Selection
- Bulk Delete
- Add Validation on Input
- Migrate to PostgreSQL since it will be better with relational data.
- add caching mechanism
- enhance Security.
- better design.

## Answer for the third part of the challenge

modeling the data this way can't be big a of problem on small scale,but with time it will become nightmare to manage, one of the reasons is beacause there is lot of redundancy, which will end up on long round trips time (RTT).I would also suggest going for
horizontal modeling better than vertical modeling especially if it were designed for mobile.
