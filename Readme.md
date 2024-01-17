# Docker container

## Installation

If you do not have docker installed you can get it via [this link]("https://www.docker.com/products/docker-desktop/").

## Composing

In order to get our containers up and running we need to run the following command in the root of the project ( where this README is found.)

`docker-compose up`

After some time both server_c and client_c container should be up and running and we are ready to use the application.

You can access the client via [localhost](http://localhost:3000/)

And the API runs on localhost:1313

## Folder structure

+ Client
    - Contains all the front end code
    - Hooks
        + Has custom hook to send images to server via fetch
    - src
        + Pages
            - Home page
+ Server
    - Contains all the back end code
    - src
        - index.ts ( main entry point )
        + controllers
            - ImageResizer.ts ( this is responsible for changing the image on the fly/editing/deleting it)
    - public
        - Images that are uploaded are saved here
    - dist 
        - Since the project is done in TS here are the "compiled" files

## API Usage

For API endpoints and their usage you can visit [postman](https://documenter.getpostman.com/view/32394018/2s9YsRb8e5)

