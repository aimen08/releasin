# Releasin Two days Technical challenge

a small service for product management (frontend and a
small supporting backend)

## Demo

## Screenshots

![Alt text](/images/1.png?raw=true "Main Screen")

![Alt text](/images/2.png?raw=true "Add Product Modal")

![Alt text](/images/3.png?raw=true "Edit Product Modal")

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
