# Comic Book Vault

Comic Book Vault is an application that will allow the user to index his collection of comic books in one place. Allowing them to see what they have, and giving them the option to add comic books to a to-buy or wish list so that they know what to keep an eye out for when they are shopping for more.

## What this README explains.

This README explains the use-case, functionality, and user story of our final project "Comic Book Vault".

## Table of Contents
  - [User Story](#user-story)
  - [Getting Started](#getting-started)
  - [Running the tests](#running-the-tests)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
  - [Built With](#built-with)
  - [Available Scripts](#available-scripts)
  - [Further Reading](#further-reading)
  - [Authors](#authors)
  - [License](#license)

## User Story

As a Comic Book Collector
I WANT to see my collection of comic books.
SO THAT I know which ones I have already in my collection, to avoid purchasing duplicates.

As a Comic Book Enthusiast
I WANT to have a to-buy or a wish list.
SO THAT I have an idea of which comics to look for to add them to my collection while I'm browsing stores for more comic books.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Running the tests

Currently, the application has no tests, barring lint. Travis settings preconfigured all ready.
### Prerequisites

All you'll need to interact with our app is an internet connection, and a passion comics/books/or anything else you might want to use this indexing app for. 
### Installing

A step by step series of examples that tell you how to get this app to run on your local device.

To run it on your local device you'll need to run :

```
npm install

```
To get your dependencies installed.


In it's current build, it's not deployed onto any app store. So you'll have to access it via it's deployed link on github or heroku.

GitHub: https://jarkkenstyles56.github.io/final_project/
Heroku:

## Built With

* [Express](https://expressjs.com/) - Express, our web framework
* [Morgan](https://www.npmjs.com/package/morgan) - Morgan, an improved logging library that works nicely with Express. Now, all requests to our server get logged out in the console. 
* [Mongoose](https://mongoosejs.com/) - Mongoose, our ORM
* [express-jwt](https://www.npmjs.com/package/express-jwt) - A small library that checks JWTs for us. This is what passport did for us last time!
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Small library for generating JWTs. Used instead of passport for visibility and so we don't have a magic library chilling there.

## Available Scripts

In the server:
```
        "start": Runs the server, and the server only. Expects a built frontend.
        "dev": Runs the server in watch mode, and the starts up the react dev server.
        "lint": Lints the server and then runs lint on the client
        "fix": ESlint fixes the server and then the client
        "client": Runs the client in development mode
        "install": Installs the server, and then installs the client.
        "build": Builds the client for production
        "heroku-postbuild": Hook for Heroku to build the client
```
In the client:
```
        "start": Start the react development server
        "build": Builds a production react app
        "test": Runs lint, no other test yet
        "lint": Lints the client
        "fix": ESlint fixes the client
```


## Further reading:

* [JWTs Specification](https://tools.ietf.org/html/rfc7519)
* [Easier to read JWTs](https://jwt.io/introduction/)


## Authors

  - **Alex Dospinoiu** - *Back-End Lead/Expert Dad* -
    [CodingDads](https://github.com/adospinoiu)

  - **Scott Bergman** - *Front-End Lead/Comic Book Enthusiast* -
    [CodingDads](https://github.com/sbergman98)

  - **Timothy Belmore** - *Project Lead/Morale Support Specialist* -
    [CodingDads](https://github.com/JarkkenStyles56)

## License

This project is licensed under the MIT License.

